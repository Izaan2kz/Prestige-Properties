import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Property Valuation',
  description:
    'Get an accurate, professional property valuation from Prestige Properties Dubai. RERA-accredited valuers, comprehensive market analysis, and certified reports.',
}

const valuationTypes = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Residential Valuation',
    desc: 'Apartments, penthouses, and villas — certified RERA valuations for purchase, sale, mortgage, and probate purposes.',
    time: '3 – 5 Business Days',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
    title: 'Commercial Valuation',
    desc: 'Office suites, retail units, and mixed-use properties valued for acquisition, disposal, insurance, and portfolio reviews.',
    time: '5 – 7 Business Days',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Portfolio Valuation',
    desc: 'Multi-asset portfolio valuations for institutional investors, funds, and high-net-worth individuals with AED-denominated reporting.',
    time: '7 – 14 Business Days',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    title: 'Market Appraisal',
    desc: 'Fast, indicative desktop appraisals using DLD transaction data and comparable market analysis — ideal for initial planning.',
    time: '1 – 2 Business Days',
  },
]

const whyUs = [
  { stat: 'RERA Accredited', label: 'Fully licensed by Dubai Real Estate Regulatory Agency' },
  { stat: 'DLD Data', label: 'Access to live Dubai Land Department transaction records' },
  { stat: 'AED 4B+', label: 'Total value of properties assessed in 2025' },
  { stat: '500+', label: 'Certified valuation reports issued per year' },
]

const process = [
  {
    num: '01',
    title: 'Request a Valuation',
    desc: 'Submit your property details via our online form or call our valuation desk. No obligation required.',
  },
  {
    num: '02',
    title: 'Property Inspection',
    desc: 'A RERA-accredited valuer conducts a comprehensive on-site inspection at a time that suits you.',
  },
  {
    num: '03',
    title: 'Market Analysis',
    desc: 'We benchmark your property against live DLD comparable sales data and rental yield metrics.',
  },
  {
    num: '04',
    title: 'Certified Report',
    desc: 'Receive a detailed, bank-grade valuation report accepted by all UAE lenders and government entities.',
  },
]

export default function ValuationPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '500px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=85"
          alt="Property Valuation — Prestige Properties Dubai"
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
              Property<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Valuation</em>
            </h1>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, fontWeight: 300, maxWidth: '520px', marginBottom: '36px' }}>
              Certified, RERA-accredited property valuations across Dubai — trusted by banks, investors, and government entities for residential, commercial, and portfolio assets.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/register" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', fontWeight: 500 }} className="gold-btn-hover">
                Request Valuation
              </Link>
              <Link href="/contact" style={{ border: '1px solid rgba(255,255,255,0.4)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '16px 36px', textDecoration: 'none', fontWeight: 400 }}>
                Speak to a Valuer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Us */}
      <div style={{ background: 'var(--grey-900)', padding: '0 60px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }} className="val-stats-grid">
          {whyUs.map((item, i) => (
            <div key={item.stat} style={{ padding: '36px 24px', borderRight: i < whyUs.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, color: 'var(--gold)' }}>{item.stat}</div>
              <div style={{ fontSize: '12px', color: 'var(--grey-500)', lineHeight: 1.6, fontWeight: 300 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Valuation Types */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ marginBottom: '70px' }}>
            <SectionTag>Our Services</SectionTag>
            <SectionTitle>
              Valuation<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Services We Offer</em>
            </SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }} className="val-types-grid">
            {valuationTypes.map(vt => (
              <div key={vt.title} style={{ background: 'var(--white)', padding: '56px 48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ color: 'var(--gold)' }}>{vt.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '26px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '12px', lineHeight: 1.2 }}>
                    {vt.title}
                  </div>
                  <p style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300 }}>{vt.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--grey-200)' }}>
                  <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-400)' }}>Turnaround:</span>
                  <span style={{ fontSize: '13px', color: 'var(--gold-dark)', fontWeight: 500 }}>{vt.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '100px 60px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '70px' }}>
            <SectionTag>How It Works</SectionTag>
            <SectionTitle>
              The Valuation<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Process</em>
            </SectionTitle>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0' }} className="val-process-grid">
            {process.map((step, i) => (
              <div
                key={step.num}
                style={{
                  padding: '48px 36px',
                  borderRight: i < process.length - 1 ? '1px solid var(--grey-200)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                  position: 'relative',
                }}
              >
                <div style={{ fontFamily: 'var(--serif)', fontSize: '52px', fontWeight: 300, color: 'var(--gold)', opacity: 0.4, lineHeight: 1 }}>
                  {step.num}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 400, color: 'var(--grey-900)', lineHeight: 1.25 }}>
                  {step.title}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--grey-600)', lineHeight: 1.75, fontWeight: 300 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form CTA */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', textAlign: 'center' }}>
          <SectionTag>Get Your Valuation</SectionTag>
          <SectionTitle>
            Know Your<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Property&apos;s True Value</em>
          </SectionTitle>
          <p style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300, marginTop: '24px', marginBottom: '40px' }}>
            Request a certified RERA valuation today. Our team will contact you within 24 hours to confirm the appointment and provide a no-obligation quote.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/register"
              className="gold-btn-hover"
              style={{
                background: 'var(--gold)',
                color: 'var(--white)',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '18px 48px',
                textDecoration: 'none',
                fontWeight: 500,
                transition: 'background 0.3s',
              }}
            >
              Request Valuation
            </Link>
            <Link
              href="/contact"
              style={{
                border: '1px solid var(--grey-300)',
                color: 'var(--grey-900)',
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                padding: '18px 48px',
                textDecoration: 'none',
                fontWeight: 400,
                transition: 'all 0.3s',
              }}
            >
              Contact a Valuer
            </Link>
          </div>
        </div>
      </section>


    </>
  )
}
