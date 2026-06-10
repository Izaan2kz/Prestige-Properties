import Image from 'next/image'
import Link from 'next/link'
import type { Property } from '@/lib/supabase'
import { formatBedrooms, formatArea, getSection } from '@/lib/supabase'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property: p }: PropertyCardProps) {
  const section      = getSection(p)
  const isCommercial = section === 'commercial'
  const thumbnail    = p.thumbnail ?? p.images?.[0] ?? 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80'
  const typeLabel    = p.type ?? p.category ?? 'Property'
  const beds         = isCommercial
    ? formatArea(p.area_min, p.area_max)
    : formatBedrooms(p.bedrooms_min, p.bedrooms_max)

  return (
    <Link href={`/properties/${p.id}`} className="prop-card" style={{ textDecoration: 'none', display: 'block' }}>
      {/* Image — 16/10 ratio, zoom on hover via .prop-card:hover .prop-img-zoom */}
      <div className="prop-img" style={{ position: 'relative', overflow: 'hidden', aspectRatio: '16/10' }}>
        <Image
          src={thumbnail}
          alt={p.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="prop-img-zoom"
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
        />
        {/* Type badge — white bg for residential, dark bg for commercial */}
        <div style={{
          position: 'absolute', top: '16px', left: '16px',
          background: isCommercial ? 'var(--grey-900)' : 'var(--white)',
          color: isCommercial ? 'var(--white)' : 'var(--grey-900)',
          fontSize: '9px', letterSpacing: '0.15em',
          textTransform: 'uppercase', padding: '6px 12px', fontWeight: 500,
        }}>
          {typeLabel}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '28px' }}>
        {/* Location */}
        <div style={{
          fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--gold)', marginBottom: '8px',
        }}>
          {p.location}
        </div>

        {/* Title */}
        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '22px', fontWeight: 400,
          color: 'var(--grey-900)',
          marginBottom: '10px', lineHeight: 1.2,
        }}>
          {p.title}
        </h3>

        {/* Description */}
        {p.description && (
          <p style={{
            fontSize: '13px', color: 'var(--grey-500)',
            lineHeight: 1.7, marginBottom: '20px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {p.description}
          </p>
        )}

        {/* Footer */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingTop: '20px', borderTop: '1px solid var(--grey-200)',
        }}>
          <span style={{ fontSize: '11px', color: 'var(--grey-700)', letterSpacing: '0.05em' }}>
            {beds}
          </span>
          <span style={{
            fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--gold)', fontWeight: 500,
          }}>
            Enquire →
          </span>
        </div>
      </div>
    </Link>
  )
}
