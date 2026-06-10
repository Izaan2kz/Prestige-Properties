'use client'

import PropertyCard from '@/components/ui/PropertyCard'

import type { Property } from '@/lib/supabase'

interface PropertiesGridProps {
  properties: Property[]
}

export default function PropertiesGrid({ properties }: PropertiesGridProps) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '1px',
        background: 'var(--grey-200)',
      }}
      className="page-props-grid"
    >
      {properties.map(p => (
        <PropertyCard key={p.id} property={p} />
      ))}
      <style jsx>{`
        @media (max-width: 1024px) {
          .page-props-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .page-props-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
