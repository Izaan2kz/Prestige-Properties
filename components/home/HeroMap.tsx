'use client'

import { useEffect, useRef, useState } from 'react'
import type L from 'leaflet'
import type { Property } from '@/lib/supabase'
import { supabase } from '@/lib/supabase'

// Location name → approximate [lat, lng] for Dubai areas
// Location name → approximate [lat, lng] for Dubai areas
const LOCATION_COORDS: Record<string, [number, number]> = {
  'dubai creek':              [25.2600, 55.3100],
  'deira creek':              [25.2600, 55.3200],
  'deira heights':            [25.2820, 55.3340],
  'deira':                    [25.2650, 55.3200],
  'downtown dubai':           [25.1972, 55.2744],
  'downtown':                 [25.1972, 55.2744],
  'dubai marina':             [25.0880, 55.1420],
  'marina':                   [25.0880, 55.1420],
  'business bay':             [25.1880, 55.2680],
  'jumeirah beach':           [25.2060, 55.2350],
  'jumeirah lake towers':     [25.0770, 55.1480],
  'jlt':                      [25.0770, 55.1480],
  'jumeirah village circle':  [25.0600, 55.2100],
  'jvc':                      [25.0600, 55.2100],
  'jumeirah':                 [25.2060, 55.2380],
  'palm jumeirah':            [25.1124, 55.1390],
  'creek towers':             [25.2680, 55.3080],
  'creek harbour':            [25.2030, 55.3520],
  'dubai creek harbour':      [25.2030, 55.3520],
  'oud metha':                [25.2390, 55.3080],
  'dubai hills':              [25.1010, 55.2600],
  'al barsha':                [25.1180, 55.2000],
  'meydan':                   [25.1580, 55.3120],
  'sobha hartland':           [25.1760, 55.3240],
  'la mer':                   [25.2340, 55.2500],
  'port de la mer':           [25.2340, 55.2500],
  'sheikh zayed road':        [25.2180, 55.2780],
  'szr':                      [25.2180, 55.2780],
}

function getCoords(location: string | null): [number, number] {
  const defaultCenter: [number, number] = [25.2048, 55.2708] // Center of Dubai (Downtown area)
  if (!location) return defaultCenter
  const key = location.toLowerCase().trim()
  if (LOCATION_COORDS[key]) return LOCATION_COORDS[key]

  // Sort keys by length descending to ensure longer, more specific keys (like 'deira heights')
  // are evaluated before shorter, partial matches (like 'deira')
  const sortedKeys = Object.keys(LOCATION_COORDS).sort((a, b) => b.length - a.length)
  const partial = sortedKeys.find(k => key.includes(k) || k.includes(key))
  
  return partial ? LOCATION_COORDS[partial] : defaultCenter
}

export default function HeroMap() {
  const mapRef    = useRef<HTMLDivElement>(null)
  const leafletRef = useRef<L.Map | null>(null)
  const [properties, setProperties] = useState<Property[]>([])

  // Fetch properties from Supabase client-side
  useEffect(() => {
    Promise.all([
      supabase.from('residential_properties').select('*'),
      supabase.from('penthouse_properties').select('*'),
      supabase.from('commercial_properties').select('*')
    ]).then(([res, pen, com]) => {
      const all: Property[] = []
      if (res.data) all.push(...res.data)
      if (pen.data) all.push(...pen.data)
      if (com.data) all.push(...com.data)
      setProperties(all)
    })
  }, [])

  // Init map
  useEffect(() => {
    let active = true

    const initMap = async () => {
      const L = (await import('leaflet')).default
      if (!active || !mapRef.current) return
      if ((mapRef.current as unknown as { _leaflet_id?: unknown })._leaflet_id) return

      const map = L.map(mapRef.current, {
        center: [25.26, 55.31],
        zoom: 13,
        zoomControl: false,
        scrollWheelZoom: false,
        attributionControl: false,
      })
      leafletRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        subdomains: 'abcd',
        maxZoom: 19,
        className: 'map-tiles-dark',
      }).addTo(map)
    }

    initMap()
    return () => {
      active = false
      if (leafletRef.current) {
        leafletRef.current.remove()
        leafletRef.current = null
      }
    }
  }, [])

  // Add markers whenever properties load (after map is ready)
  useEffect(() => {
    if (!properties.length || !leafletRef.current) return

    const addMarkers = async () => {
      const L = (await import('leaflet')).default
      const map = leafletRef.current
      if (!map) return

      function makePin(icon: string) {
        return L.divIcon({
          html: `<div style="
            background:#888787;border-radius:50% 50% 50% 0;transform:rotate(-45deg);
            width:36px;height:36px;display:flex;align-items:center;justify-content:center;
            box-shadow:0 3px 10px rgba(0,0,0,0.35);border:2px solid rgba(255,255,255,0.5);
          "><span style="transform:rotate(45deg);font-size:15px;line-height:1;">${icon}</span></div>`,
          className: '',
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -38],
        })
      }

      const markerCoords: L.LatLngExpression[] = []

      properties.forEach(p => {
        const coords = p.latitude && p.longitude
          ? [Number(p.latitude), Number(p.longitude)] as [number, number]
          : getCoords(p.location)
        if (!coords) return

        markerCoords.push(coords)

        let icon = '🏠'
        if (p.type === 'Penthouse') icon = '🏙️'
        if (p.category === 'Commercial') icon = '🏢'

        const thumbnail = p.thumbnail ?? p.images?.[0] ?? ''
        const beds = p.category === 'Commercial'
          ? (p.area_min ? `${p.area_min.toLocaleString()} – ${p.area_max?.toLocaleString() ?? ''} sqft` : '')
          : (p.bedrooms_min !== null ? `${p.bedrooms_min === 0 ? 'Studio' : p.bedrooms_min} – ${p.bedrooms_max} Bedrooms` : '')

        L.marker(coords, { icon: makePin(icon) })
          .addTo(map)
          .bindPopup(
            `<div style="font-family:var(--font-jost,Jost,sans-serif);min-width:240px;overflow:hidden;">
              ${thumbnail ? `<div style="width:100%;height:140px;position:relative;">
                <img src="${thumbnail}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover;" />
                <div style="position:absolute;top:12px;left:12px;background:#888787;color:#fff;font-size:9px;letter-spacing:0.15em;text-transform:uppercase;padding:4px 8px;font-weight:500;">${p.type ?? p.category}</div>
              </div>` : ''}
              <div style="padding:20px;">
                <div style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:#8e8e8e;margin-bottom:8px;">${p.location ?? ''}</div>
                <div style="font-size:16px;font-weight:400;color:#2a2a2a;margin-bottom:8px;line-height:1.2;">${p.title}</div>
                <div style="font-size:12px;color:#666;margin-bottom:20px;">${beds}</div>
                <a href="/properties/${p.id}" style="display:inline-block;background:#111;color:#fff;font-size:10px;letter-spacing:0.15em;text-transform:uppercase;padding:12px 20px;text-decoration:none;">View Details →</a>
              </div>
            </div>`,
            { maxWidth: 280 }
          )
      })

      if (markerCoords.length > 0) {
        const bounds = L.latLngBounds(markerCoords)
        map.fitBounds(bounds, { padding: [50, 50] })
      }
    }

    addMarkers()
  }, [properties])

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
}
