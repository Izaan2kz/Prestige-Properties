import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'
import PropertyCard from '@/components/ui/PropertyCard'
import {
  fetchAllProperties,
  fetchFilteredProperties,
  getSection,
} from '@/lib/supabase'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Properties',
  description:
    'Browse our full portfolio of luxury residential apartments, penthouses, commercial offices at Dubai Creek — Deira and surrounding areas.',
}

const stats = [
  { val: '450+',     label: 'Total Units'    },
  { val: '12',       label: 'Active Projects' },
  { val: 'AED 450K', label: 'Starting Price'  },
  { val: 'Q4 2026',  label: 'Next Handover'   },
]

const sections = [
  { id: 'residential', label: 'Residential', tag: 'Homes & Apartments', subtitle: 'Residences', bg: 'var(--white)'     },
  { id: 'penthouse',   label: 'Penthouses',  tag: 'Sky-Level Living',   subtitle: 'Collection', bg: 'var(--off-white)' },
  { id: 'commercial',  label: 'Commercial',  tag: 'Office & Workspace',  subtitle: 'Spaces',     bg: 'var(--white)'     },
]

interface PageProps {
  searchParams: { tab?: string; location?: string; type?: string; bedroom?: string }
}

const pillStyle: React.CSSProperties = {
  display: 'inline-block', padding: '6px 14px',
  background: 'var(--gold)', color: 'var(--white)',
  fontSize: '10px', letterSpacing: '0.15em',
  textTransform: 'uppercase', fontWeight: 500,
}

export default async function PropertiesPage({ searchParams }: PageProps) {
  const { tab, location, type, bedroom } = searchParams
  const isSearchActive = Boolean(tab || location || type || bedroom)

  // Fetch data
  const allProperties    = await fetchAllProperties()
  const searchResults    = isSearchActive
    ? await fetchFilteredProperties({ tab, location, type, bedroom })
    : []

  // Group by section for browse view
  const bySection = (sectionId: string) =>
    allProperties.filter(p => getSection(p) === sectionId)

  // Human-readable filter summary
  const filterParts: string[] = []
  if (type     && type     !== 'All Types')     filterParts.push(type)
  if (bedroom  && bedroom  !== 'Any')           filterParts.push(bedroom)
  if (location && location !== 'All Locations') filterParts.push(`in ${location}`)
  const filterSummary = filterParts.length ? filterParts.join(' · ') : 'All Properties'

  return (
    <>
      {/* Page Hero */}
      <div style={{ position: 'relative', height: '420px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85"
          alt="Dubai Creek Properties" fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Our Portfolio
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.1 }}>
              Explore Our<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Properties</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{ background: 'var(--grey-900)', padding: '0 60px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {stats.map(s => (
            <div key={s.label} style={{ padding: '30px 20px', borderRight: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)' }}>{s.val}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SEARCH RESULTS VIEW ── */}
      {isSearchActive ? (
        <section style={{ padding: '80px 60px', background: 'var(--off-white)', minHeight: '50vh' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <SectionTag>Search Results</SectionTag>
                <SectionTitle>
                  {filterSummary.split(' · ').slice(0, 2).join(' ')}<br />
                  <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>
                    {searchResults.length} {searchResults.length === 1 ? 'Property' : 'Properties'} Found
                  </em>
                </SectionTitle>
              </div>
              <Link href="/properties" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap', padding: '10px 0', borderBottom: '1px solid var(--gold)' }}>
                ← Clear Search
              </Link>
            </div>

            {/* Active filter pills */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
              {tab      && <span style={pillStyle}>{tab === 'residential' ? 'Residential' : 'Commercial'}</span>}
              {location && location !== 'All Locations' && <span style={pillStyle}>{location}</span>}
              {type     && type     !== 'All Types'     && <span style={pillStyle}>{type}</span>}
              {bedroom  && bedroom  !== 'Any'           && <span style={pillStyle}>{bedroom}</span>}
            </div>

            {searchResults.length > 0 ? (
              <div className="props-resp-grid">
                {searchResults.map(p => <PropertyCard key={p.id} property={p} />)}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '100px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
                <svg viewBox="0 0 48 48" fill="none" stroke="var(--grey-300)" strokeWidth="1.5" style={{ width: '64px', height: '64px' }}>
                  <circle cx="21" cy="21" r="15" /><line x1="33" y1="33" x2="44" y2="44" />
                  <line x1="16" y1="21" x2="26" y2="21" /><line x1="21" y1="16" x2="21" y2="26" />
                </svg>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 300, color: 'var(--grey-700)' }}>No properties found</div>
                <p style={{ fontSize: '14px', color: 'var(--grey-400)', fontWeight: 300, maxWidth: '380px' }}>
                  Try adjusting your filters or{' '}
                  <Link href="/properties" style={{ color: 'var(--gold)', textDecoration: 'none' }}>browse all properties</Link>.
                </p>
              </div>
            )}
          </div>
        </section>

      ) : (
        /* ── FULL BROWSE VIEW ── */
        <>
          {/* Sticky Quick Nav */}
          <div style={{ background: 'var(--white)', borderBottom: '1px solid var(--grey-200)', padding: '0 60px', position: 'sticky', top: '80px', zIndex: 100 }}>
            <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex' }}>
              {sections.map(sec => (
                <a key={sec.id} href={`#${sec.id}`} className="prop-section-nav-link"
                  style={{ display: 'block', padding: '18px 28px', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-700)', textDecoration: 'none', borderBottom: '2px solid transparent', transition: 'all 0.25s', fontWeight: 500 }}>
                  {sec.label}
                </a>
              ))}
            </div>
          </div>

          {/* Property Sections */}
          {sections.map(sec => {
            const filtered = bySection(sec.id)
            return (
              <section key={sec.id} id={sec.id} style={{ padding: '100px 60px', background: sec.bg, scrollMarginTop: '140px' }}>
                <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
                    <div>
                      <SectionTag>{sec.tag}</SectionTag>
                      <SectionTitle>
                        {sec.label}<br />
                        <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{sec.subtitle}</em>
                      </SectionTitle>
                    </div>
                    <Link href="/register" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                      Register Interest →
                    </Link>
                  </div>

                  {filtered.length === 0 ? (
                    <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--grey-400)', fontSize: '14px' }}>
                      No {sec.label.toLowerCase()} properties available at this time.
                    </div>
                  ) : (
                    <div className="props-resp-grid">
                      {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
                    </div>
                  )}
                </div>
              </section>
            )
          })}
        </>
      )}

      {/* Bottom CTA */}
      <section style={{ padding: '80px 60px', background: 'var(--grey-900)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bottom-cta-flex">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)' }}>Ready to find your space?</div>
            <div style={{ fontSize: '14px', color: 'var(--grey-400)', marginTop: '8px', fontWeight: 300 }}>Our team is ready to guide you every step of the way.</div>
          </div>
          <Link href="/register" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '18px 40px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
            Register Interest
          </Link>
        </div>
      </section>
    </>
  )
}
