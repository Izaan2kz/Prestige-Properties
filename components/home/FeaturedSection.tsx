import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export default function FeaturedSection() {
  return (
    <section style={{ padding: '100px 60px', background: 'var(--white)' }} id="featured">
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <SectionTag>Featured Development</SectionTag>
        <SectionTitle>
          The Crown<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Development</em>
        </SectionTitle>

        <div className="featured-resp-grid">
          {/* Image */}
          <div className="featured-img-wrap" style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '400px' }}>
            <Image
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80"
              alt="Jewel of the Creek — Featured Development"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="featured-img-inner"
              style={{ objectFit: 'cover', transition: 'transform 0.8s ease' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '24px',
                left: '24px',
                background: 'var(--gold)',
                color: 'var(--white)',
                fontSize: '9px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                fontWeight: 500,
              }}
            >
              Now Available
            </div>
          </div>

          {/* Info */}
          <div
            style={{
              padding: '60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--off-white)',
            }}
          >
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>
                Dubai Creek — Deira
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '42px', fontWeight: 300, lineHeight: 1.1, color: 'var(--grey-900)', marginBottom: '20px' }}>
                Jewel of the Creek Residences
              </h3>
              <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--grey-700)', fontWeight: 300, marginBottom: '40px' }}>
                A landmark mixed-use development rising from the historic waters of Deira Creek.
                Blending contemporary architecture with Dubai&apos;s rich maritime heritage, it delivers
                residences, hospitality, offices, retail and leisure in one timeless destination
                where life flows seamlessly between water and city.
              </p>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1px',
                  background: 'var(--grey-200)',
                  marginBottom: '40px',
                }}
              >
                {[
                  { val: 'Studio', key: 'to 4-Bedroom' },
                  { val: '450+', key: 'Total Units' },
                  { val: 'Q4 2026', key: 'Handover' },
                ].map(spec => (
                  <div key={spec.key} style={{ background: 'var(--white)', padding: '20px', textAlign: 'center' }}>
                    <span style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 400, color: 'var(--grey-900)', display: 'block' }}>{spec.val}</span>
                    <span style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '4px', display: 'block' }}>{spec.key}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <Link
                href="/contact"
                className="gold-btn-hover"
                style={{
                  background: 'var(--gold)',
                  color: 'var(--white)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '16px 36px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  fontFamily: 'var(--sans)',
                  display: 'inline-block',
                  transition: 'background 0.3s',
                }}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
