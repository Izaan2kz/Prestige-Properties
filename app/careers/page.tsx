import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Prestige Properties Dubai — explore open positions in real estate development, sales, design, sustainability, and more. Build your career with us.',
}

const openRoles = [
  { title: 'Senior Sales Executive', dept: 'Sales', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Drive residential and commercial sales across our Jewel of the Creek portfolio. 3+ years experience in UAE real estate required.' },
  { title: 'Project Manager', dept: 'Development', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Oversee on-site delivery of our flagship Deira Creek development. Experience with mixed-use construction projects essential.' },
  { title: 'Interior Design Consultant', dept: 'Design', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Collaborate with our CDO and client teams to craft bespoke fit-out packages for penthouse and premium unit owners.' },
  { title: 'Sustainability Analyst', dept: 'Sustainability', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Support our ESG reporting, LEED certification processes, and carbon reduction roadmap across the full portfolio.' },
  { title: 'Marketing Manager — Digital', dept: 'Marketing', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Lead digital marketing campaigns across social, search, and email for residential launches and brand awareness.' },
  { title: 'Property Management Associate', dept: 'Operations', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Support the day-to-day management of completed buildings including tenant relations, maintenance, and service provider coordination.' },
  { title: 'Legal Counsel — Real Estate', dept: 'Legal', type: 'Full-Time', location: 'Dubai, UAE', desc: 'Draft and review SPA agreements, RERA registrations, and commercial leases. DIFC or UAE Bar qualified preferred.' },
  { title: 'Graphic Design Intern', dept: 'Marketing', type: 'Internship', location: 'Dubai, UAE (Hybrid)', desc: 'Support our creative team on branding, brochure design, and digital assets. Final-year design students welcome.' },
]

const perks = [
  { icon: '🏥', label: 'Premium Health Cover', sub: 'Full family medical insurance' },
  { icon: '✈️', label: 'Annual Flight Allowance', sub: 'Return ticket to home country' },
  { icon: '📈', label: 'Commission + Bonus', sub: 'Performance-linked incentives' },
  { icon: '🎓', label: 'Learning Stipend', sub: 'AED 5,000 / year for courses' },
  { icon: '🏠', label: 'Housing Allowance', sub: 'For senior and expat roles' },
  { icon: '🌴', label: 'Flexible Holidays', sub: '25 days + all UAE public holidays' },
]

export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '480px', background: '#111', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85" alt="Careers at Prestige Properties" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.38 }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Join Our Team
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.05 }}>
              Build Your Career<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>With Prestige</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Why work with us */}
      <section style={{ padding: '100px 60px 80px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="amenity-intro-grid">
            <div>
              <SectionTag>Why Prestige Properties</SectionTag>
              <SectionTitle>
                Where Ambition<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Meets Opportunity</em>
              </SectionTitle>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '24px', fontWeight: 300 }}>
                We are a company of builders, dreamers, and doers — people who believe that extraordinary
                places demand extraordinary people. At Prestige Properties, you will work alongside some
                of the most talented professionals in Gulf real estate and be given real responsibility from day one.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '16px', fontWeight: 300 }}>
                We invest in our people as seriously as we invest in our buildings. Whether you are a recent
                graduate or a seasoned executive, there is a role here where you can make a lasting mark.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', alignSelf: 'start' }}>
              {perks.map(p => (
                <div key={p.label} style={{ background: 'var(--white)', padding: '28px 24px', border: '1px solid var(--grey-200)' }}>
                  <div style={{ fontSize: '24px', marginBottom: '10px' }}>{p.icon}</div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--grey-900)', marginBottom: '4px' }}>{p.label}</div>
                  <div style={{ fontSize: '11px', color: 'var(--grey-500)' }}>{p.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section style={{ padding: '20px 60px 100px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <SectionTag>Open Positions</SectionTag>
          <SectionTitle>
            Current<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Vacancies</em>
          </SectionTitle>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '50px' }}>
            {openRoles.map(role => (
              <div key={role.title} style={{ background: 'var(--white)', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center' }} className="careers-row">
                <div style={{ padding: '32px 40px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', background: role.type === 'Internship' ? '#6c757d' : 'var(--gold)', color: '#fff', padding: '4px 10px', fontWeight: 500 }}>{role.type}</span>
                    <span style={{ fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--grey-400)' }}>{role.dept}</span>
                    <span style={{ fontSize: '10px', color: 'var(--grey-400)' }}>· {role.location}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '8px' }}>{role.title}</div>
                  <p style={{ fontSize: '13px', color: 'var(--grey-600)', lineHeight: 1.7 }}>{role.desc}</p>
                </div>
                <div style={{ padding: '32px 40px' }}>
                  <Link href="/contact" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap', display: 'block', textAlign: 'center' }}>
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px', padding: '40px', background: 'var(--white)', border: '1px solid var(--grey-200)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bottom-cta-flex">
            <div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, color: 'var(--grey-900)' }}>Don&apos;t see a matching role?</div>
              <div style={{ fontSize: '13px', color: 'var(--grey-500)', marginTop: '6px' }}>Send us your CV and we&apos;ll keep you in mind for future openings.</div>
            </div>
            <Link href="/contact" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 28px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
              Send CV
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
