import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import {
  fetchPropertyById,
  fetchAllProperties,
  fetchFeaturedProperties,
  formatPrice,
  formatBedrooms,
  formatArea,
  formatStatus,
  getSection,
} from '@/lib/supabase'
import PropertyCard from '@/components/ui/PropertyCard'

export const revalidate = 3600

export async function generateStaticParams() {
  const all = await fetchAllProperties()
  return all.map(p => ({ slug: p.id }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const p = await fetchPropertyById(params.slug)
  if (!p) return {}
  return { title: p.title, description: p.description ?? undefined }
}

export default async function PropertyDetailPage({ params }: { params: { slug: string } }) {
  const [p, similar] = await Promise.all([
    fetchPropertyById(params.slug),
    fetchFeaturedProperties(),
  ])
  if (!p) notFound()

  const section      = getSection(p)
  const price        = formatPrice(p.price_min, p.price_max)
  const beds         = formatBedrooms(p.bedrooms_min, p.bedrooms_max)
  const area         = formatArea(p.area_min, p.area_max)
  const statusLabel  = formatStatus(p.status)
  const isCommercial = section === 'commercial'
  const typeLabel    = p.type ?? p.category ?? 'Property'

  // Build image array — thumbnail first, then rest, max 4
  const allImages = [
    p.thumbnail,
    ...(p.images ?? []).filter(img => img !== p.thumbnail),
  ].filter(Boolean).slice(0, 5) as string[]
  const mainImage = allImages[0] ?? 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85'

  // Key specs for the bar
  const specs = [
    { label: 'Price',      val: price },
    ...(!isCommercial && beds  ? [{ label: 'Bedrooms', val: beds }]  : []),
    ...(area                   ? [{ label: isCommercial ? 'Area Range' : 'Area', val: area }] : []),
    ...(p.handover             ? [{ label: 'Handover',  val: p.handover }]  : []),
    ...(p.bathrooms_min        ? [{ label: 'Bathrooms', val: p.bathrooms_max && p.bathrooms_max !== p.bathrooms_min ? `${p.bathrooms_min} – ${p.bathrooms_max}` : `${p.bathrooms_min}` }] : []),
    { label: 'Status', val: statusLabel },
  ]

  // Similar properties (exclude current)
  const similarProps = similar.filter(s => s.id !== p.id).slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: '78vh', minHeight: '600px', background: '#0a0a0a', overflow: 'hidden' }}>
        <Image
          src={mainImage} alt={p.title} fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.6 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(6,6,6,0.98) 0%, rgba(6,6,6,0.3) 55%, rgba(6,6,6,0.1) 100%)' }} />

        {/* Breadcrumb */}
        <div style={{ position: 'absolute', top: '110px', left: 0, right: 0, padding: '0 60px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="/properties" style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}>
              Properties
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.25)', fontSize: '14px' }}>›</span>
            <span style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-light)' }}>
              {typeLabel}
            </span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '72px 60px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', background: 'var(--gold)', color: '#fff', padding: '7px 16px', fontWeight: 600 }}>
                {typeLabel}
              </span>
              <span style={{
                fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', padding: '7px 16px', fontWeight: 500, color: '#fff',
                background: statusLabel === 'Available' ? 'rgba(39,174,96,0.75)' : statusLabel === 'Coming Soon' ? 'rgba(41,128,185,0.75)' : 'rgba(80,80,80,0.75)',
              }}>
                {statusLabel}
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(34px, 5vw, 68px)', fontWeight: 300, color: '#fff', lineHeight: 1.08, marginBottom: '16px' }}>
              {p.title}
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '14px', height: '14px', flexShrink: 0 }}>
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/>
              </svg>
              {p.address ?? p.location}
            </div>
          </div>
        </div>
      </div>

      {/* ── SPECS BAR ── */}
      <div style={{ background: 'var(--grey-900)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 60px', display: 'flex', overflowX: 'auto' }}>
          {specs.map((s, i) => (
            <div key={s.label} style={{ padding: '30px 40px', borderRight: i < specs.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-500)', marginBottom: '10px' }}>{s.label}</div>
              <div style={{ fontSize: '20px', fontFamily: 'var(--serif)', color: 'var(--white)', fontWeight: 300 }}>{s.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: '90px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 360px', gap: '90px', alignItems: 'start' }} className="property-detail-grid">

          {/* ── LEFT COLUMN ── */}
          <div>

            {/* Overview */}
            <SectionTag>Overview</SectionTag>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(28px, 3vw, 44px)', fontWeight: 300, color: 'var(--grey-900)', margin: '16px 0 28px', lineHeight: 1.15 }}>
              About This Property
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--grey-700)', lineHeight: 1.95, fontWeight: 300, marginBottom: '56px' }}>
              {p.description ?? 'Contact us for more details about this property.'}
            </p>

            {/* Detailed Specifications */}
            <div style={{ height: '1px', background: 'var(--grey-200)', marginBottom: '56px' }} />
            <SectionTag>Specifications</SectionTag>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 300, color: 'var(--grey-900)', margin: '16px 0 36px' }}>
              Property Details
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--grey-200)', marginBottom: '56px' }}>
              {[
                { label: 'Development', val: p.title },
                { label: 'Type', val: typeLabel },
                { label: 'Category', val: p.category ?? '—' },
                { label: 'Location', val: p.location ?? '—' },
                ...(!isCommercial && p.bedrooms_min !== null ? [{ label: 'Bedrooms', val: beds || '—' }] : []),
                ...(p.bathrooms_min ? [{ label: 'Bathrooms', val: p.bathrooms_max && p.bathrooms_max !== p.bathrooms_min ? `${p.bathrooms_min} – ${p.bathrooms_max}` : `${p.bathrooms_min}` }] : []),
                ...(p.area_min ? [{ label: 'Area (sqft)', val: area }] : []),
                ...(p.price_min ? [{ label: 'Starting Price', val: price }] : []),
                ...(p.handover ? [{ label: 'Handover', val: p.handover }] : []),
                ...(isCommercial ? [{ label: 'Parking', val: 'Basement Parking' }] : []),
                { label: 'Status', val: statusLabel },
              ].map(row => (
                <div key={row.label} style={{ background: 'var(--white)', padding: '22px 28px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-400)' }}>{row.label}</span>
                  <span style={{ fontSize: '15px', color: 'var(--grey-900)', fontWeight: 400 }}>{row.val}</span>
                </div>
              ))}
            </div>

            {/* Features */}
            {p.features && p.features.length > 0 && (
              <>
                <div style={{ height: '1px', background: 'var(--grey-200)', marginBottom: '56px' }} />
                <SectionTag>Amenities</SectionTag>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 300, color: 'var(--grey-900)', margin: '16px 0 36px' }}>
                  Features &amp; Amenities
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 32px', marginBottom: '56px' }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '14px', color: 'var(--grey-700)', padding: '12px 0', borderBottom: '1px solid var(--grey-100)' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 600, fontSize: '16px', flexShrink: 0 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Payment Plan */}
            <div style={{ height: '1px', background: 'var(--grey-200)', marginBottom: '56px' }} />
            <SectionTag>Investment</SectionTag>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 300, color: 'var(--grey-900)', margin: '16px 0 36px' }}>
              Payment Plan
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--grey-200)', marginBottom: '56px' }}>
              {[
                { pct: '20%', label: 'Down Payment',    sub: 'On Booking' },
                { pct: '50%', label: 'During Construction', sub: 'Milestone Payments' },
                { pct: '30%', label: 'On Handover',     sub: p.handover ?? 'Completion' },
              ].map(item => (
                <div key={item.label} style={{ background: 'var(--off-white)', padding: '32px 28px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '38px', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>{item.pct}</div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--grey-900)', marginTop: '12px' }}>{item.label}</div>
                  <div style={{ fontSize: '11px', color: 'var(--grey-400)', marginTop: '4px' }}>{item.sub}</div>
                </div>
              ))}
            </div>

            {/* Gallery */}
            {allImages.length > 1 && (
              <>
                <div style={{ height: '1px', background: 'var(--grey-200)', marginBottom: '56px' }} />
                <SectionTag>Gallery</SectionTag>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px, 2.5vw, 36px)', fontWeight: 300, color: 'var(--grey-900)', margin: '16px 0 36px' }}>
                  Property Images
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {allImages.map((img, i) => (
                    <div key={i} style={{
                      position: 'relative',
                      aspectRatio: i === 0 ? '16/9' : '4/3',
                      overflow: 'hidden',
                      gridColumn: i === 0 ? '1 / -1' : 'auto',
                    }}>
                      <Image src={img} alt={`${p.title} — image ${i + 1}`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }} className="prop-img-zoom" />
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* ── SIDEBAR ── */}
          <aside style={{ position: 'sticky', top: '110px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* Price CTA */}
            <div style={{ background: 'var(--grey-900)', padding: '40px' }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-500)', marginBottom: '10px' }}>Starting From</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)', marginBottom: '8px', lineHeight: 1 }}>{price}</div>
              {beds && !isCommercial && (
                <div style={{ fontSize: '12px', color: 'var(--grey-500)', marginBottom: '28px' }}>{beds}</div>
              )}
              {area && (
                <div style={{ fontSize: '12px', color: 'var(--grey-500)', marginBottom: '28px' }}>{area}</div>
              )}
              {p.handover && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--grey-500)', marginBottom: '32px', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <span style={{ color: 'var(--gold)' }}>●</span> Handover {p.handover}
                </div>
              )}
              <Link href="/register" className="gold-btn-hover" style={{ display: 'block', background: 'var(--gold)', color: '#fff', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', padding: '18px', textDecoration: 'none', fontWeight: 500, textAlign: 'center', transition: 'background 0.3s', marginBottom: '12px' }}>
                Register Interest
              </Link>
              <Link href="/contact" style={{ display: 'block', border: '1px solid rgba(255,255,255,0.18)', color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', padding: '16px', textDecoration: 'none', textAlign: 'center', transition: 'all 0.25s' }}>
                Schedule Viewing
              </Link>
            </div>

            {/* Location */}
            {(p.location || p.address) && (
              <div style={{ border: '1px solid var(--grey-200)', padding: '28px', background: 'var(--white)' }}>
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '14px' }}>Location</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', color: 'var(--grey-900)', marginBottom: '8px' }}>{p.location}</div>
                {p.address && <div style={{ fontSize: '12px', color: 'var(--grey-500)', lineHeight: 1.7 }}>{p.address}</div>}
              </div>
            )}

            {/* Quick Specs */}
            <div style={{ border: '1px solid var(--grey-200)', padding: '28px', background: 'var(--white)' }}>
              <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '18px' }}>Quick Facts</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { label: 'Type', val: typeLabel },
                  ...(!isCommercial && beds ? [{ label: 'Bedrooms', val: beds }] : []),
                  ...(area ? [{ label: 'Area', val: area }] : []),
                  ...(p.handover ? [{ label: 'Handover', val: p.handover }] : []),
                  { label: 'Status', val: statusLabel },
                ].map((row, i, arr) => (
                  <div key={row.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderBottom: i < arr.length - 1 ? '1px solid var(--grey-100)' : 'none' }}>
                    <span style={{ fontSize: '11px', color: 'var(--grey-400)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{row.label}</span>
                    <span style={{ fontSize: '13px', color: 'var(--grey-800)', fontWeight: 500 }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/properties" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--grey-400)', textDecoration: 'none', padding: '8px 0' }}>
              ← All Properties
            </Link>
          </aside>
        </div>
      </section>

      {/* ── SIMILAR PROPERTIES ── */}
      {similarProps.length > 0 && (
        <section style={{ padding: '80px 60px', background: 'var(--off-white)', borderTop: '1px solid var(--grey-200)' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
            <SectionTag>More Properties</SectionTag>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 300, color: 'var(--grey-900)', margin: '12px 0 50px' }}>
              You May Also <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Like</em>
            </div>
            <div className="props-resp-grid">
              {similarProps.map(s => <PropertyCard key={s.id} property={s} />)}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
