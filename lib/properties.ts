/**
 * @deprecated — All property data and types now live in `lib/supabase.ts`.
 * This file re-exports everything from there for backwards compatibility.
 */
export type { Property } from '@/lib/supabase'
export {
  fetchAllProperties as getAllProperties,
  fetchFeaturedProperties,
  fetchPropertyById,
  fetchFilteredProperties,
  formatPrice,
  formatBedrooms,
  formatArea,
  formatStatus,
  getSection,
} from '@/lib/supabase'

// Kept so any old import of `allProperties` gives a clear build error instead of a silent runtime bug
export const allProperties: never[] = []
