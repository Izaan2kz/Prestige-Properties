'use client'

import { useState, useEffect } from 'react'

const residentialTypes = ['All Types', 'Apartment', 'Villa', 'Penthouse', 'Townhouse']
const commercialTypes  = ['All Types', 'Office']

import { supabase } from '@/lib/supabase'

const FRIENDLY_NAMES: Record<string, string> = {
  'Deira Creek': 'Dubai Creek — Deira',
  'Deira Heights': 'Deira Heights',
  'Business Bay': 'Business Bay',
  'Downtown': 'Downtown Dubai',
  'Dubai Marina': 'Dubai Marina',
  'Jumeirah': 'Jumeirah'
}

const bedrooms  = ['Any', 'Studio', '1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4+ Bedrooms']

interface SearchBarProps {
  propertyType: 'residential' | 'commercial'
}

export default function SearchBar({ propertyType }: SearchBarProps) {

  const [location, setLocation] = useState('All Locations')
  const [type,     setType]     = useState('All Types')
  const [bedroom,  setBedroom]  = useState('Any')
  const [locations, setLocations] = useState<{ label: string; value: string }[]>([
    { label: 'All Locations', value: 'All Locations' }
  ])

  // Fetch unique locations dynamically from database
  useEffect(() => {
    Promise.all([
      supabase.from('residential_properties').select('location'),
      supabase.from('penthouse_properties').select('location'),
      supabase.from('commercial_properties').select('location')
    ]).then(([res, pen, com]) => {
      const allLocs = new Set<string>()
      
      const processLoc = (loc: string | null) => {
        if (!loc) return
        // Extract the main district name (e.g. 'Business Bay' from 'Business Bay, Dubai')
        const district = loc.split(',')[0].trim()
        if (district) allLocs.add(district)
      }

      res.data?.forEach(p => processLoc(p.location))
      pen.data?.forEach(p => processLoc(p.location))
      com.data?.forEach(p => processLoc(p.location))

      const list = Array.from(allLocs).map(loc => ({
        label: FRIENDLY_NAMES[loc] || loc,
        value: loc
      }))

      setLocations([
        { label: 'All Locations', value: 'All Locations' },
        ...list.sort((a, b) => a.label.localeCompare(b.label))
      ])
    })
  }, [])

  const types = propertyType === 'commercial' ? commercialTypes : residentialTypes

  // Reset dropdowns whenever the parent switches residential ↔ commercial
  useEffect(() => {
    setType('All Types')
    setBedroom('Any')
  }, [propertyType])

  const doSearch = () => {
    const params = new URLSearchParams()
    params.set('tab', propertyType)
    if (location !== 'All Locations') params.set('location', location)
    if (type     !== 'All Types')     params.set('type',     type)
    if (propertyType === 'residential' && bedroom !== 'Any') params.set('bedroom', bedroom)
    window.location.href = `/properties?${params.toString()}`
  }

  return (
    <div style={{ position: 'relative', zIndex: 4 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: propertyType === 'residential' ? '1fr 1fr 1fr auto' : '1fr 1fr 1fr',
          background: 'var(--white)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.05)',
          width: '100%',
        }}
      >
        {/* Location */}
        <div className="search-field-item" style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', borderRight: '1px solid var(--grey-200)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '4px', fontWeight: 500 }}>Location</span>
          <select
            className="search-field-select"
            value={location}
            onChange={e => setLocation(e.target.value)}
            aria-label="Search by location"
          >
            {locations.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>
          <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', color: 'var(--grey-400)', pointerEvents: 'none', marginTop: '4px' }}>▾</span>
        </div>

        {/* Property Type */}
        <div className="search-field-item" style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', borderRight: '1px solid var(--grey-200)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
          <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '4px', fontWeight: 500 }}>Property Type</span>
          <select
            className="search-field-select"
            value={type}
            onChange={e => setType(e.target.value)}
            aria-label="Search by property type"
          >
            {types.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
          <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', color: 'var(--grey-400)', pointerEvents: 'none', marginTop: '4px' }}>▾</span>
        </div>

        {/* Bedrooms — residential only */}
        {propertyType === 'residential' && (
          <div className="search-field-item" style={{ display: 'flex', flexDirection: 'column', padding: '16px 24px', borderRight: '1px solid var(--grey-200)', position: 'relative', cursor: 'pointer', transition: 'background 0.2s' }}>
            <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '4px', fontWeight: 500 }}>Bedrooms</span>
            <select
              className="search-field-select"
              value={bedroom}
              onChange={e => setBedroom(e.target.value)}
              aria-label="Search by bedrooms"
            >
              {bedrooms.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
            <span style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', fontSize: '10px', color: 'var(--grey-400)', pointerEvents: 'none', marginTop: '4px' }}>▾</span>
          </div>
        )}

        {/* Search Button */}
        <button
          id="hero-search-btn"
          onClick={doSearch}
          className="search-btn-item"
          style={{
            background: 'var(--gold)',
            border: 'none',
            color: 'var(--white)',
            fontFamily: 'var(--sans)',
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            fontWeight: 500,
            padding: '0 44px',
            cursor: 'pointer',
            transition: 'background 0.3s',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            whiteSpace: 'nowrap',
            minHeight: '72px',
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '15px', height: '15px' }}>
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          Search
        </button>
      </div>

      <style jsx>{`
        .search-field-item:hover { background: var(--off-white); }
        .search-btn-item:hover   { background: var(--gold-dark) !important; }
      `}</style>
    </div>
  )
}
