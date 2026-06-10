'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState, useCallback } from 'react'
import SearchBar from './SearchBar'
import 'leaflet/dist/leaflet.css'

const HeroMap = dynamic(() => import('./HeroMap'), {
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: '#1a2a3a' }} />,
})

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85',
    alt: 'Residential Living',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85',
    alt: 'Commercial Spaces',
  },
]

const headlines = [
  <>Start your journey<br />towards <em>perfect living.</em></>,
  <>Start your journey<br />towards <em>perfect business.</em></>,
]

export default function HeroSection() {
  const [current,         setCurrent]         = useState(0)
  const [visibleHeadline, setVisibleHeadline] = useState(0)

  // propertyType is ONLY changed by the user clicking a button — never by auto-rotate
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential')

  // Auto-rotate: changes the background image + headline only
  useEffect(() => {
    setVisibleHeadline(0)
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % slides.length
        setVisibleHeadline(-1)
        setTimeout(() => setVisibleHeadline(next), 80)
        return next
        // NOTE: setPropertyType is intentionally NOT called here
      })
    }, 5500)
    return () => clearInterval(timer)
  }, [])

  // Manual click: changes image + headline + search bar tab
  const switchType = useCallback((idx: number) => {
    setVisibleHeadline(-1)
    setTimeout(() => {
      setCurrent(idx)
      setVisibleHeadline(idx)
      setPropertyType(idx === 1 ? 'commercial' : 'residential')
    }, 80)
  }, [])

  return (
    <>
      <section
        style={{
          position: 'relative',
          height: '82vh',
          minHeight: '580px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          overflow: 'hidden',
          background: '#111',
        }}
      >
        {/* Left Pane */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '80px 60px',
            zIndex: 3,
            height: '100%',
          }}
        >
          {/* Background slides */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            {slides.map((slide, i) => (
              <div key={i} className={`hero-slide${i === current ? ' active' : ''}`}>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="50vw"
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 3, maxWidth: '100%' }}>
            {/* Eyebrow */}
            <div
              className="hero-eyebrow"
              style={{
                fontSize: '10px',
                letterSpacing: '0.4em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              Dubai&apos;s Premier Address
            </div>

            {/* Headlines */}
            <div style={{ position: 'relative', minHeight: '120px', marginBottom: '16px' }}>
              {headlines.map((h, i) => (
                <h1
                  key={i}
                  className={`hero-headline${visibleHeadline === i ? ' visible' : ''}`}
                >
                  {h}
                </h1>
              ))}
            </div>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '13px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.7,
                fontWeight: 300,
                marginBottom: '28px',
                maxWidth: '480px',
              }}
            >
              Discover exceptional residences and commercial spaces at the heart of historic Deira Creek — where Dubai&apos;s legacy meets its future.
            </p>

            {/* Residential / Commercial buttons — these are the ONLY controls that change the search bar */}
            <div style={{ display: 'inline-flex' }}>
              {['Residential', 'Commercial'].map((label, i) => (
                <button
                  key={i}
                  id={`hero-tab-${label.toLowerCase()}`}
                  onClick={() => switchType(i)}
                  style={{
                    fontFamily: 'var(--sans)',
                    fontSize: '10px',
                    letterSpacing: '0.28em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    padding: '11px 32px',
                    cursor: 'pointer',
                    border: 'none',
                    background: propertyType === (i === 0 ? 'residential' : 'commercial')
                      ? 'rgba(255,255,255,0.2)'
                      : 'rgba(255,255,255,0.08)',
                    color: propertyType === (i === 0 ? 'residential' : 'commercial')
                      ? 'var(--white)'
                      : 'rgba(255,255,255,0.5)',
                    backdropFilter: 'blur(8px)',
                    transition: 'all 0.3s',
                    borderBottom: propertyType === (i === 0 ? 'residential' : 'commercial')
                      ? '2px solid var(--gold)'
                      : '2px solid transparent',
                    borderRight: i === 0 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Pane — Map */}
        <div
          style={{
            position: 'relative',
            background: '#1a2a3a',
            zIndex: 2,
            height: '100%',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div style={{ position: 'absolute', inset: 0 }}>
            <HeroMap />
          </div>
        </div>
      </section>

      {/* Search Bar — updates only when user clicks the buttons above */}
      <SearchBar propertyType={propertyType} />
    </>
  )
}
