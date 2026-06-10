import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Sustainability',
  description:
    'Prestige Properties is committed to sustainable development in Dubai — green building certifications, net-zero targets, greywater recycling, and community biodiversity programmes.',
}

const pillars = [
  {
    icon: '🌱',
    title: 'Green Building Standards',
    body: 'All new developments target a minimum 3-Pearl Estidama rating and are designed to LEED Gold standards. We embed passive cooling, solar shading, and natural ventilation into every master plan from day one.',
  },
  {
    icon: '💧',
    title: 'Water Conservation',
    body: 'Greywater recycling systems in all buildings reduce potable water consumption by up to 40%. Podium gardens and communal landscaping are irrigated exclusively via treated wastewater.',
  },
  {
    icon: '⚡',
    title: 'Renewable Energy',
    body: 'Rooftop photovoltaic panels supply up to 25% of common-area electricity in our completed buildings. By 2030, all new projects will be designed for 100% renewable common-area power.',
  },
  {
    icon: '🌍',
    title: 'Carbon Reduction',
    body: 'We have committed to a net-zero operational carbon target across our entire portfolio by 2040 — a decade ahead of the UAE Net Zero 2050 national initiative.',
  },
  {
    icon: '🚌',
    title: 'Sustainable Mobility',
    body: 'Every new development includes EV charging for 100% of parking bays, dedicated cycle storage, and direct pedestrian links to public transport. Cars are an option, not a necessity.',
  },
  {
    icon: '🌿',
    title: 'Biodiversity & Green Space',
    body: 'We allocate a minimum of 30% of each site footprint to landscaped green space, native planting, and urban biodiversity corridors — contributing to Dubai\'s urban greening goals.',
  },
  {
    icon: '♻️',
    title: 'Smart Waste Management',
    body: 'Advanced waste segregation and organic composting facilities are integrated into all properties to achieve our zero-waste-to-landfill targets.',
  },
  {
    icon: '☀️',
    title: 'Sustainable Materials',
    body: 'We prioritize locally sourced, low-emission materials and recycled content in all our construction, significantly minimizing our supply chain footprint.',
  },
]

const goals = [
  { metric: '3-Pearl', label: 'Estidama Rating (minimum)' },
  { metric: 'LEED Gold', label: 'Building Certification Target' },
  { metric: '40%', label: 'Reduction in Potable Water Use' },
  { metric: 'Net-Zero', label: 'Operational Carbon by 2040' },
]

export default function SustainabilityPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '480px', background: '#111', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1800&q=85" alt="Sustainability at Prestige Properties" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Our Commitment
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.05 }}>
              Building for<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Future Generations</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Intro + Goals */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="amenity-intro-grid">
            <div>
              <SectionTag>Why It Matters</SectionTag>
              <SectionTitle>
                Luxury &amp;<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Responsibility</em>
              </SectionTitle>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '24px', fontWeight: 300 }}>
                Sustainability at Prestige Properties is not a box-ticking exercise — it is a core design philosophy.
                We believe the most desirable places to live and work are also the ones that tread lightly on the planet,
                respect their surrounding ecosystems, and give back more than they take.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '16px', fontWeight: 300 }}>
                From greywater recycling and rooftop solar to net-zero carbon commitments and biodiversity corridors,
                every decision we make is guided by a simple question: will this still be the right choice in 50 years?
              </p>
            </div>
            {/* Goals grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignSelf: 'start' }}>
              {goals.map(g => (
                <div key={g.label} style={{ background: 'var(--white)', padding: '36px 28px', textAlign: 'center', border: '1px solid var(--grey-200)' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 300, color: 'var(--grey-900)' }}>{g.metric}</div>
                  <div style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '8px' }}>{g.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Six Pillars */}
      <section style={{ padding: '80px 60px 100px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <SectionTag>Our Six Pillars</SectionTag>
          <SectionTitle>
            How We Build<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Responsibly</em>
          </SectionTitle>
          <div className="amenities-resp-grid" style={{ marginTop: '60px' }}>
            {pillars.map(p => (
              <div key={p.title} style={{ background: 'var(--white)', padding: '40px 30px' }}>
                <div style={{ fontSize: '32px', marginBottom: '20px' }}>{p.icon}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '12px' }}>{p.title}</div>
                <p style={{ fontSize: '13px', color: 'var(--grey-500)', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 60px', background: 'var(--grey-900)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bottom-cta-flex">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '30px', fontWeight: 300, color: 'var(--white)' }}>Invest in a sustainable future.</div>
            <div style={{ fontSize: '14px', color: 'var(--grey-400)', marginTop: '8px', fontWeight: 300 }}>Download our Environmental Impact Report or speak to our team.</div>
          </div>
          <Link href="/contact" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '18px 40px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
