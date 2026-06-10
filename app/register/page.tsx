import type { Metadata } from 'next'
import Image from 'next/image'
import RegisterSection from '@/components/home/RegisterSection'
import SectionTag from '@/components/ui/SectionTag'

export const metadata: Metadata = {
  title: 'Register Your Interest',
  description:
    'Register your interest in Prestige Properties Dubai. Connect with our specialist team to discover luxury residential and commercial units at Deira Creek.',
}

const benefits = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Priority Access',
    desc: 'Be the first to receive new listings, exclusive pre-launch pricing, and early handover opportunities.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Dedicated Specialist',
    desc: 'A personal property consultant assigned exclusively to your requirements — no queues, no wait times.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Private Viewings',
    desc: 'Schedule exclusive in-person or virtual tours of our show units at Deira Creek at your convenience.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Flexible Payment Plans',
    desc: 'Access bespoke financing options and flexible post-handover payment structures tailored to your budget.',
  },
]

const steps = [
  { num: '01', label: 'Submit your details below' },
  { num: '02', label: 'A specialist calls within 24 hours' },
  { num: '03', label: 'Receive curated property matches' },
  { num: '04', label: 'Book your private viewing' },
]

export default function RegisterPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{ position: 'relative', height: '520px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=85"
          alt="Register your interest — Prestige Properties Dubai"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.38 }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.4) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 60px',
            paddingTop: '80px',
          }}
        >
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div
              style={{
                fontSize: '10px',
                letterSpacing: '0.35em',
                textTransform: 'uppercase',
                color: 'var(--gold-light)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Your Journey Begins Here
            </div>
            <h1
              style={{
                fontFamily: 'var(--serif)',
                fontSize: 'clamp(40px, 5.5vw, 76px)',
                fontWeight: 300,
                color: 'var(--white)',
                lineHeight: 1.05,
                marginBottom: '24px',
              }}
            >
              Register Your<br />
              <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Interest Today</em>
            </h1>
            <p
              style={{
                fontSize: '15px',
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.8,
                fontWeight: 300,
                maxWidth: '520px',
              }}
            >
              Join thousands of discerning buyers and investors who have made Prestige Properties their home and investment of choice in Dubai.
            </p>

            {/* Step indicators */}
            <div
              style={{
                display: 'flex',
                gap: '0',
                marginTop: '48px',
                flexWrap: 'wrap',
              }}
            >
              {steps.map((s, i) => (
                <div
                  key={s.num}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    paddingRight: i < steps.length - 1 ? '32px' : '0',
                    marginRight: i < steps.length - 1 ? '32px' : '0',
                    borderRight: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: '28px',
                      fontWeight: 300,
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      letterSpacing: '0.05em',
                      color: 'rgba(255,255,255,0.6)',
                      fontWeight: 300,
                      maxWidth: '110px',
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Strip */}
      <section style={{ background: 'var(--grey-900)', padding: '0 60px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="register-benefits-grid">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              style={{
                padding: '40px 30px',
                borderRight: i < benefits.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              <div style={{ color: 'var(--gold)', opacity: 0.85 }}>{b.icon}</div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 300, color: 'var(--white)', lineHeight: 1.2 }}>
                {b.title}
              </div>
              <p style={{ fontSize: '13px', color: 'var(--grey-500)', lineHeight: 1.7, fontWeight: 300 }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration Form Section */}
      <RegisterSection fullPage source="register" />

      {/* Trust / Social Proof Strip */}
      <section style={{ padding: '80px 60px', background: 'var(--grey-900)' }}>
        <div
          style={{
            maxWidth: '1320px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '16px',
          }}
        >
          <SectionTag>Trusted By Thousands</SectionTag>
          <div
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 3.5vw, 48px)',
              fontWeight: 300,
              color: 'var(--white)',
              lineHeight: 1.2,
            }}
          >
            Join <em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>2,400+ Families</em><br />
            Who Call Prestige Home
          </div>
          <p
            style={{
              fontSize: '14px',
              color: 'var(--grey-500)',
              lineHeight: 1.8,
              fontWeight: 300,
              maxWidth: '560px',
              marginTop: '8px',
            }}
          >
            From first-time buyers to seasoned investors, our portfolio of luxury waterfront residences and commercial spaces has redefined standards in Deira Creek.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '60px',
              marginTop: '48px',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {[
              { val: '2,400+', label: 'Families Housed' },
              { val: 'AED 6B+', label: 'Portfolio Value' },
              { val: '18+', label: 'Years Excellence' },
              { val: '12', label: 'Active Projects' },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '40px', fontWeight: 300, color: 'var(--white)' }}>{s.val}</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '8px' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </>
  )
}
