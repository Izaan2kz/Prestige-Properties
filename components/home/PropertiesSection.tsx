import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'
import PropertyCard from '@/components/ui/PropertyCard'
import { fetchFeaturedProperties } from '@/lib/supabase'

export default async function PropertiesSection() {
  const properties = (await fetchFeaturedProperties()).slice(0, 3)

  return (
    <section style={{ padding: '100px 60px', background: 'var(--white)' }} id="properties">
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
          <div>
            <SectionTag>Our Portfolio</SectionTag>
            <SectionTitle>
              Explore Our<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Properties</em>
            </SectionTitle>
          </div>
          <Link
            href="/properties"
            style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}
          >
            View All →
          </Link>
        </div>

        {properties.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--grey-400)', fontSize: '14px' }}>
            No featured properties at this time.
          </div>
        ) : (
          <div style={{ marginTop: '10px' }} className="props-resp-grid">
            {properties.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
