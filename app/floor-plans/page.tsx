import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Floor Plans',
  description:
    'Browse available floor plans at Jewel of the Creek Residences — Studio, 1, 2, 3, and 4-bedroom apartments plus penthouse and commercial layouts at Deira Creek, Dubai.',
}

const unitTypes = [
  {
    type: 'Studio',
    range: '420 – 560 sqft',
    price: 'From AED 450,000',
    description: 'Intelligently designed studio apartments with full-height glazing and integrated kitchen. Perfect for investors or young professionals.',
    features: ['Open-plan living/sleeping', 'Integrated kitchen', 'Full bathroom', 'Covered parking', 'Creek or city view'],
    available: 48,
    badge: 'High Demand',
    badgeColor: '#c0392b',
  },
  {
    type: '1 Bedroom',
    range: '750 – 950 sqft',
    price: 'From AED 780,000',
    description: 'Bright one-bedroom apartments with a separate living area, master en-suite, and private balcony overlooking the creek or podium gardens.',
    features: ['Separate living room', 'Master bedroom with en-suite', 'Fitted kitchen', 'Private balcony', '1 parking space'],
    available: 92,
    badge: 'Available Now',
    badgeColor: '#27ae60',
  },
  {
    type: '2 Bedrooms',
    range: '1,150 – 1,450 sqft',
    price: 'From AED 1,300,000',
    description: 'Spacious two-bedroom residences ideal for families, featuring an open-plan living area, two full bathrooms, and a generously proportioned terrace.',
    features: ['Open-plan living & dining', '2 bedrooms, 2 bathrooms', 'Laundry room', 'Large terrace', '2 parking spaces'],
    available: 76,
    badge: 'Available Now',
    badgeColor: '#27ae60',
  },
  {
    type: '3 Bedrooms',
    range: '1,800 – 2,300 sqft',
    price: 'From AED 2,100,000',
    description: "Premium three-bedroom family homes with a maid's room, three full bathrooms, a show kitchen, and sweeping panoramic creek views.",
    features: ['Master suite with walk-in wardrobe', '2 secondary bedrooms', "Maid's room & laundry", 'Show kitchen + prep kitchen', '3 parking spaces'],
    available: 34,
    badge: 'Limited Units',
    badgeColor: '#e67e22',
  },
  {
    type: '4 Bedrooms',
    range: '2,800 – 3,500 sqft',
    price: 'From AED 3,600,000',
    description: "Exceptional four-bedroom residences on the upper floors with private sky gardens, butler's pantry, and unparalleled creek-to-skyline vistas.",
    features: ['4 bedrooms, 4.5 bathrooms', 'Private sky garden', "Butler's pantry", 'Floor-to-ceiling glazing', '4 parking spaces'],
    available: 12,
    badge: 'Almost Sold Out',
    badgeColor: '#c0392b',
  },
  {
    type: 'Penthouse',
    range: '4,200 – 6,500 sqft',
    price: 'From AED 8,500,000',
    description: 'Crowning the tower, our penthouses are bespoke residences with private rooftop terraces, plunge pools, and a level of finishing that defines Dubai luxury.',
    features: ['Private rooftop terrace', 'Plunge pool & outdoor lounge', 'Double-height ceilings', 'Fully bespoke interior packages', 'Dedicated lift access'],
    available: 4,
    badge: 'By Appointment',
    badgeColor: '#2c3e50',
  },
  {
    type: 'Commercial — Retail',
    range: '500 – 3,000 sqft',
    price: 'Price on Application',
    description: 'Ground-floor and podium-level retail units fronting the waterfront promenade. Suitable for F&B, fashion, wellness, and lifestyle brands.',
    features: ['High-footfall promenade frontage', 'Shell & core or fitted options', 'Signage rights', 'Separate service access', 'Direct footfall from 450+ units above'],
    available: 22,
    badge: 'Available Now',
    badgeColor: '#27ae60',
  },
  {
    type: 'Commercial — Office',
    range: '1,000 – 10,000 sqft',
    price: 'Price on Application',
    description: 'Grade-A office suites on the upper commercial floors with floor-to-ceiling glazing, smart building systems, and dedicated parking.',
    features: ['Grade-A specification', 'Smart HVAC & BMS', 'Raised access floors', 'Collaborative zones available', 'Dedicated carpark floors'],
    available: 18,
    badge: 'Available Now',
    badgeColor: '#27ae60',
  },
]

export default function FloorPlansPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{ position: 'relative', height: '420px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85"
          alt="Floor Plans — Prestige Properties"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Interior Experience
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.1 }}>
              Browse Our<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Floor Plans</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Plans */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <SectionTag>Unit Types</SectionTag>
            <SectionTitle>
              Choose Your<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Perfect Layout</em>
            </SectionTitle>
            <p style={{ marginTop: '20px', fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300, maxWidth: '600px' }}>
              Every unit at Jewel of the Creek is designed to maximise natural light and creek views.
              Select a unit type to learn more, or contact our sales team for detailed plans and availability.
            </p>
          </div>

          {/* Plan rows — uses .plan-resp-row global class */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {unitTypes.map(unit => (
              <div key={unit.type} className="plan-resp-row">
                {/* Left */}
                <div style={{ padding: '40px 30px', borderRight: '1px solid var(--grey-200)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <div style={{ marginBottom: '8px' }}>
                    <span
                      style={{
                        fontSize: '9px',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        background: unit.badgeColor,
                        color: 'var(--white)',
                        padding: '4px 10px',
                        fontWeight: 500,
                      }}
                    >
                      {unit.badge}
                    </span>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '6px' }}>{unit.type}</div>
                  <div style={{ fontSize: '12px', color: 'var(--grey-500)', letterSpacing: '0.05em' }}>{unit.range}</div>
                  <div style={{ fontSize: '13px', color: 'var(--gold-dark)', fontWeight: 500, marginTop: '8px' }}>{unit.price}</div>
                  <div style={{ fontSize: '11px', color: 'var(--grey-400)', marginTop: '6px' }}>{unit.available} units available</div>
                </div>

                {/* Middle */}
                <div style={{ padding: '40px', borderRight: '1px solid var(--grey-200)' }}>
                  <p style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300, marginBottom: '20px' }}>{unit.description}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {unit.features.map(f => (
                      <li key={f} style={{ fontSize: '11px', color: 'var(--grey-700)', background: 'transparent', padding: '6px 12px', letterSpacing: '0.04em', border: '1px solid var(--grey-200)' }}>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right CTA */}
                <div style={{ padding: '40px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', minWidth: '160px' }}>
                  <Link
                    href="/contact"
                    className="gold-btn-hover"
                    style={{
                      background: 'var(--gold)',
                      color: 'var(--white)',
                      fontSize: '10px',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      padding: '14px 24px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'background 0.3s',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Enquire Now
                  </Link>
                  <Link
                    href="/contact"
                    className="gold-link-hover"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--grey-500)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                  >
                    Request Plan →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA — uses .bottom-cta-flex global class */}
          <div
            className="bottom-cta-flex"
            style={{
              marginTop: '60px',
              padding: '50px',
              background: 'var(--grey-900)',
            }}
          >
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 300, color: 'var(--white)' }}>
                Can&apos;t find the right unit?
              </div>
              <div style={{ fontSize: '14px', color: 'var(--grey-400)', marginTop: '8px', fontWeight: 300 }}>
                Our specialists will help you find the perfect match for your budget and requirements.
              </div>
            </div>
            <Link
              href="/contact"
              className="gold-btn-hover"
              style={{
                background: 'var(--gold)',
                color: 'var(--white)',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '18px 40px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'background 0.3s',
                whiteSpace: 'nowrap',
              }}
            >
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
