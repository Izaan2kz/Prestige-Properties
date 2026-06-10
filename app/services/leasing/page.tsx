import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Leasing',
  description:
    'Explore leasing opportunities at Prestige Properties Dubai. Residential and commercial leasing at Deira Creek with flexible terms, dedicated advisors, and no hidden fees.',
}

const leasingTypes = [
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    category: 'Residential Leasing',
    headline: 'Find Your Perfect Home',
    desc: 'Studio to 4-bedroom apartments available for annual lease at Dubai Creek and surrounding areas. Flexible terms, no commission, all RERA compliant.',
    features: ['Studio – 4 Bedrooms', 'Fully-fitted options', 'Annual & short-term', 'No agent fee'],
    id: 'residential',
  },
  {
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    category: 'Penthouse Leasing',
    headline: 'Sky-High Living, Leased',
    desc: 'Exclusive full-floor penthouses available for lease at the apex of Dubai Creek\'s most prestigious towers. Wraparound terraces, private pools and bespoke interiors — offered on annual and bespoke terms.',
    features: ['3 – 5 Bedrooms', 'Full-floor residences', 'Private terrace & pool', 'Butler service included'],
    id: 'penthouse',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    category: 'Commercial Leasing',
    headline: 'Premium Business Addresses',
    desc: 'Grade-A offices and mixed-use commercial suites available for lease. Scalable configurations from serviced desks to full-floor tenancies in prime Dubai Creek locations.',
    features: ['500 – 10,000 sqft', 'Shell & Core / Fitted', 'Fit-out support available', 'Flexible lease terms'],
    id: 'commercial',
  },
]

const steps = [
  { num: '01', title: 'Browse & Shortlist', desc: 'Explore our available inventory online or speak to a leasing advisor who will curate a personalised shortlist.' },
  { num: '02', title: 'Private Viewing', desc: 'Schedule a private viewing at your convenience — in-person or virtual 360° tours available.' },
  { num: '03', title: 'Lease Agreement', desc: 'Our team handles all paperwork including Ejari registration, DEWA connection, and move-in coordination.' },
  { num: '04', title: 'Move In', desc: 'Collect your keys and settle into your new space. Our team remains available for any post-move support.' },
]

export default function LeasingPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '500px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85"
          alt="Leasing — Prestige Properties Dubai"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Services
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.08, marginBottom: '24px' }}>
              Leasing at<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Prestige Properties</em>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontWeight: 300, maxWidth: '520px', marginBottom: '36px' }}>
              Residential, penthouse, and commercial leasing across Dubai Creek&apos;s most prestigious addresses — simple process, transparent terms, no agent fees.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/register" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', fontWeight: 500 }} className="gold-btn-hover">
                Enquire Now
              </Link>
              <Link href="/contact" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', fontWeight: 400 }}>
                Call Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Leasing Types */}
      {leasingTypes.map((item, i) => (
        <section
          key={item.id}
          id={item.id}
          style={{ padding: '0', background: 'var(--white)' }}
        >
          <div
            className="leasing-split-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
              minHeight: '460px',
            }}
          >
            {/* Image */}
            <div
              style={{
                position: 'relative',
                overflow: 'hidden',
                order: i % 2 === 0 ? 0 : 1,
                minHeight: '400px',
              }}
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                sizes="50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '24px',
                  left: '24px',
                  background: 'var(--gold)',
                  color: 'var(--white)',
                  fontSize: '9px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  padding: '6px 14px',
                  fontWeight: 500,
                }}
              >
                {item.category}
              </div>
            </div>
            {/* Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '80px 60px',
                order: i % 2 === 0 ? 1 : 0,
              }}
            >
              <SectionTag>{item.category}</SectionTag>
              <h2
                style={{
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 300,
                  color: 'var(--grey-900)',
                  lineHeight: 1.15,
                  margin: '16px 0 20px',
                }}
              >
                {item.headline}
              </h2>
              <p style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300, marginBottom: '32px' }}>
                {item.desc}
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '40px' }}>
                {item.features.map(f => (
                  <li key={f} style={{ fontSize: '13px', color: 'var(--grey-700)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ color: 'var(--gold)', fontSize: '16px' }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className="gold-btn-hover"
                style={{
                  display: 'inline-block',
                  background: 'var(--gold)',
                  color: 'var(--white)',
                  fontSize: '10px',
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  padding: '16px 32px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'background 0.3s',
                  alignSelf: 'flex-start',
                }}
              >
                Enquire About {item.category.split(' ')[0]}
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section style={{ padding: '100px 60px', background: 'var(--grey-900)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <SectionTag>Simple Process</SectionTag>
            <SectionTitle>
              From Enquiry to<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Move-In in 4 Steps</em>
            </SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'rgba(255,255,255,0.07)' }} className="leasing-steps-grid">
            {steps.map(step => (
              <div key={step.num} style={{ background: 'var(--grey-900)', padding: '48px 36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '48px', fontWeight: 300, color: 'var(--gold)', lineHeight: 1 }}>
                  {step.num}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, color: 'var(--white)' }}>
                  {step.title}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--grey-500)', lineHeight: 1.75, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 60px', background: 'var(--off-white)', borderTop: '1px solid var(--grey-200)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bottom-cta-flex">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--grey-900)' }}>Ready to lease your space?</div>
            <div style={{ fontSize: '14px', color: 'var(--grey-500)', marginTop: '8px', fontWeight: 300 }}>Our leasing advisors are ready — no agent fees, no hidden costs.</div>
          </div>
          <Link href="/register" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '18px 40px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
            Start Leasing
          </Link>
        </div>
      </section>


    </>
  )
}
