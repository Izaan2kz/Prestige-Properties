import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Property Management',
  description:
    'Prestige Properties offers comprehensive property management services in Dubai — from tenant placement and rent collection to maintenance coordination and financial reporting.',
}

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Tenant Management',
    desc: 'Rigorous tenant screening, placement, and ongoing relationship management to ensure your investment is in trustworthy hands.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    title: 'Rent Collection',
    desc: 'Automated, on-time rent collection with transparent financial reporting and owner disbursements — no chasing required.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: 'Maintenance & Repairs',
    desc: '24/7 maintenance coordination with a vetted network of contractors ensuring your property is always in pristine condition.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Financial Reporting',
    desc: 'Detailed monthly and annual statements with full income, expense, and yield analysis so you always know how your asset performs.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Regulatory Compliance',
    desc: 'Full RERA compliance management, Ejari registration, and Dubai Land Department documentation handled on your behalf.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Asset Protection',
    desc: 'Proactive inspections and condition reports protect your asset value and minimise risk throughout the tenancy lifecycle.',
  },
]

const plans = [
  {
    name: 'Essential',
    price: '4%',
    period: 'of annual rent',
    features: ['Tenant placement', 'Rent collection', 'Basic maintenance', 'Annual report'],
    highlight: false,
  },
  {
    name: 'Premium',
    price: '6%',
    period: 'of annual rent',
    features: ['All Essential features', 'Quarterly inspections', 'Priority maintenance', 'Monthly statements', 'RERA compliance'],
    highlight: true,
  },
  {
    name: 'Elite',
    price: '8%',
    period: 'of annual rent',
    features: ['All Premium features', 'Dedicated manager', 'Interior styling', 'Renovation oversight', 'Concierge services'],
    highlight: false,
  },
]

export default function PropertyManagementPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '480px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1800&q=85"
          alt="Property Management — Prestige Properties Dubai"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.38 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.35) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Services
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(38px, 5vw, 70px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.08, marginBottom: '24px' }}>
              Property<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Management</em>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontWeight: 300, maxWidth: '520px' }}>
              End-to-end property management that maximises your rental yield and eliminates the stress of being a landlord — all backed by Dubai&apos;s most trusted developer.
            </p>
            <div style={{ display: 'flex', gap: '16px', marginTop: '36px' }}>
              <Link href="/register" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', fontWeight: 500 }} className="gold-btn-hover">
                Get Started
              </Link>
              <Link href="/contact" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', fontWeight: 400 }}>
                Speak to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ background: 'var(--grey-900)', padding: '0 60px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { val: '1,200+', label: 'Units Managed' },
            { val: '98%', label: 'Occupancy Rate' },
            { val: '24/7', label: 'Support Available' },
            { val: '15 days', label: 'Avg. Tenant Placement' },
          ].map((s, i) => (
            <div key={s.label} style={{ padding: '30px 20px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)' }}>{s.val}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <SectionTag>What We Do</SectionTag>
            <SectionTitle>
              Comprehensive<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Property Care</em>
            </SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="svc-feature-grid">
            {features.map(f => (
              <div key={f.title} style={{ background: 'var(--white)', padding: '48px 36px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ color: 'var(--gold)' }}>{f.icon}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--grey-900)' }}>{f.title}</div>
                <p style={{ fontSize: '13px', color: 'var(--grey-500)', lineHeight: 1.75, fontWeight: 300 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ padding: '100px 60px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <SectionTag>Our Packages</SectionTag>
            <SectionTitle>
              Choose Your<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Management Plan</em>
            </SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="svc-plans-grid">
            {plans.map(plan => (
              <div
                key={plan.name}
                style={{
                  background: plan.highlight ? 'var(--grey-900)' : 'var(--white)',
                  padding: '56px 40px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                }}
              >
                <div style={{ fontSize: '10px', letterSpacing: '0.28em', textTransform: 'uppercase', color: plan.highlight ? 'var(--gold)' : 'var(--grey-400)' }}>
                  {plan.name}
                </div>
                <div>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '52px', fontWeight: 300, color: plan.highlight ? 'var(--white)' : 'var(--grey-900)' }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '13px', color: plan.highlight ? 'var(--grey-500)' : 'var(--grey-400)', marginLeft: '8px' }}>
                    {plan.period}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ fontSize: '13px', color: plan.highlight ? 'var(--grey-400)' : 'var(--grey-700)', display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--gold)', fontSize: '16px', lineHeight: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/register"
                  style={{
                    marginTop: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    padding: '16px',
                    background: plan.highlight ? 'var(--gold)' : 'transparent',
                    border: `1px solid ${plan.highlight ? 'var(--gold)' : 'var(--grey-300)'}`,
                    color: plan.highlight ? 'var(--white)' : 'var(--grey-900)',
                    fontSize: '10px',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'all 0.3s',
                  }}
                  className={plan.highlight ? 'gold-btn-hover' : ''}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 60px', background: 'var(--grey-900)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bottom-cta-flex">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)' }}>Let us manage your investment</div>
            <div style={{ fontSize: '14px', color: 'var(--grey-400)', marginTop: '8px', fontWeight: 300 }}>Speak to our team about a tailored management solution.</div>
          </div>
          <Link href="/register" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '18px 40px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
            Register Now
          </Link>
        </div>
      </section>


    </>
  )
}
