import { createClient } from '@supabase/supabase-js'

// Public client — used for reads (properties listing, detail pages)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: { persistSession: false },
    global: {
      fetch: (url, options) => fetch(url, { ...options, cache: 'no-store' }),
    },
  }
)

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Property {
  id: string
  created_at: string
  title: string
  category: string | null        // 'Residential' | 'Commercial'
  type: string | null            // 'Apartment' | 'Villa' | 'Penthouse' | 'Townhouse' | 'Office' | ...
  description: string | null
  location: string | null
  address: string | null
  price_min: number | null
  price_max: number | null
  bedrooms_min: number | null
  bedrooms_max: number | null
  bathrooms_min: number | null
  bathrooms_max: number | null
  area_min: number | null
  area_max: number | null
  status: string | null          // 'available' | 'sold' | 'coming_soon'
  handover: string | null
  images: string[] | null
  thumbnail: string | null
  features: string[] | null
  featured: boolean | null
  latitude: number | null
  longitude: number | null
}

// ─── Formatting helpers ───────────────────────────────────────────────────────

export function formatPrice(min: number | null, max: number | null): string {
  if (!min) return 'Price on Request'
  const fmt = (n: number): string => {
    if (n >= 1_000_000) return `AED ${parseFloat((n / 1_000_000).toFixed(1)).toString()}M`
    if (n >= 1_000)     return `AED ${Math.round(n / 1_000)}K`
    return `AED ${n.toLocaleString()}`
  }
  return max ? `${fmt(min)} – ${fmt(max)}` : `From ${fmt(min)}`
}

export function formatBedrooms(min: number | null, max: number | null): string {
  if (min === null && max === null) return ''
  const label = (n: number) => (n === 0 ? 'Studio' : `${n}`)
  if (min === null) return `${label(max!)} Bedroom${max === 1 ? '' : 's'}`
  if (max === null || min === max) {
    return min === 0 ? 'Studio' : `${min} Bedroom${min === 1 ? '' : 's'}`
  }
  return `${label(min)} – ${max} Bedrooms`
}

export function formatArea(min: number | null, max: number | null): string {
  if (!min) return ''
  const fmt = (n: number) => n.toLocaleString()
  return max && max !== min ? `${fmt(min)} – ${fmt(max)} sqft` : `From ${fmt(min)} sqft`
}

export function formatStatus(status: string | null): 'Available' | 'Coming Soon' | 'Sold Out' {
  switch (status) {
    case 'sold':        return 'Sold Out'
    case 'coming_soon': return 'Coming Soon'
    default:            return 'Available'
  }
}

// Returns the section key used by the UI: 'residential' | 'penthouse' | 'commercial'
export function getSection(p: Property): string {
  if (p.type === 'Penthouse') return 'penthouse'
  if (p.category === 'Commercial') return 'commercial'
  return 'residential'
}

// ─── Fetch functions (server-side) ───────────────────────────────────────────

export async function fetchAllProperties(): Promise<Property[]> {
  const [res, pen, com] = await Promise.all([
    supabase.from('residential_properties').select('*'),
    supabase.from('penthouse_properties').select('*'),
    supabase.from('commercial_properties').select('*'),
  ])

  if (res.error) console.error('fetchAllProperties residential error:', res.error)
  if (pen.error) console.error('fetchAllProperties penthouse error:', pen.error)
  if (com.error) console.error('fetchAllProperties commercial error:', com.error)

  const all: Property[] = []
  if (res.data) all.push(...res.data)
  if (pen.data) all.push(...pen.data)
  if (com.data) all.push(...com.data)

  return all.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export async function fetchFeaturedProperties(): Promise<Property[]> {
  const [res, pen, com] = await Promise.all([
    supabase.from('residential_properties').select('*').eq('featured', true),
    supabase.from('penthouse_properties').select('*').eq('featured', true),
    supabase.from('commercial_properties').select('*').eq('featured', true),
  ])

  if (res.error) console.error('fetchFeaturedProperties residential error:', res.error)
  if (pen.error) console.error('fetchFeaturedProperties penthouse error:', pen.error)
  if (com.error) console.error('fetchFeaturedProperties commercial error:', com.error)

  const all: Property[] = []
  if (res.data) all.push(...res.data)
  if (pen.data) all.push(...pen.data)
  if (com.data) all.push(...com.data)

  return all.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export async function fetchPropertyById(id: string): Promise<Property | null> {
  const [res, pen, com] = await Promise.all([
    supabase.from('residential_properties').select('*').eq('id', id).maybeSingle(),
    supabase.from('penthouse_properties').select('*').eq('id', id).maybeSingle(),
    supabase.from('commercial_properties').select('*').eq('id', id).maybeSingle(),
  ])

  return res.data || pen.data || com.data || null
}

export interface PropertyFilters {
  tab?: string       // 'residential' | 'commercial'
  location?: string
  type?: string
  bedroom?: string   // e.g. '1' | '2' | 'Studio'
}

export async function fetchFilteredProperties(filters: PropertyFilters): Promise<Property[]> {
  const buildQuery = (tableName: string) => {
    let query = supabase.from(tableName).select('*')

    if (filters.location && filters.location !== 'All Locations') {
      query = query.ilike('location', `%${filters.location}%`)
    }
    if (filters.type && filters.type !== 'All Types') {
      query = query.eq('type', filters.type)
    }
    if (filters.bedroom && filters.bedroom !== 'Any') {
      if (filters.bedroom === 'Studio') {
        query = query.eq('bedrooms_min', 0)
      } else {
        const n = parseInt(filters.bedroom, 10)
        if (!isNaN(n)) query = query.lte('bedrooms_min', n).gte('bedrooms_max', n)
      }
    }
    return query
  }

  const queryResidential = !filters.tab || filters.tab === 'residential'
  const queryCommercial = !filters.tab || filters.tab === 'commercial'

  const promises: Promise<{ data: Property[] | null; error: unknown }>[] = []
  
  if (queryResidential) {
    promises.push(buildQuery('residential_properties') as unknown as Promise<{ data: Property[] | null; error: unknown }>)
    promises.push(buildQuery('penthouse_properties') as unknown as Promise<{ data: Property[] | null; error: unknown }>)
  }
  if (queryCommercial) {
    promises.push(buildQuery('commercial_properties') as unknown as Promise<{ data: Property[] | null; error: unknown }>)
  }

  const results = await Promise.all(promises)
  const all: Property[] = []
  
  for (const r of results) {
    if (r.error) {
      console.error('fetchFilteredProperties error querying table:', r.error)
    }
    if (r.data) {
      all.push(...r.data)
    }
  }

  return all.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}
