import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Prestige Properties — Dubai\'s premier real estate developer delivering landmark residences and commercial spaces at Deira Creek since 2008.',
}

const milestones = [
  { year: '2008', event: 'Founded in Deira, Dubai with a vision to redefine waterfront living.' },
  { year: '2012', event: 'Delivered our first landmark project — Creek Towers — 320 residential units.' },
  { year: '2016', event: 'Expanded into commercial real estate with premium Grade-A office developments.' },
  { year: '2019', event: 'Launched the Jewel of the Creek masterplan, our most ambitious project to date.' },
  { year: '2022', event: 'Awarded Best Luxury Developer — Dubai Real Estate Awards.' },
  { year: '2026', event: 'Q4 handover of Jewel of the Creek Residences — 450+ units across Deira Creek.' },
]

const team = [
  { name: 'Khalid Al Mansoori', role: 'Chief Executive Officer', bio: '20+ years in Gulf real estate. Former VP at Emaar Properties.' },
  { name: 'Priya Nair', role: 'Chief Operating Officer', bio: 'MBA from INSEAD. Led operations across 14 mixed-use developments.' },
  { name: 'James Whitfield', role: 'Chief Design Officer', bio: 'Award-winning architect. Previously Principal at Zaha Hadid Architects.' },
  { name: 'Sara Al Hashimi', role: 'Head of Sales', bio: 'AED 2B+ in residential and commercial sales across the UAE and GCC.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '480px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&q=85"
          alt="About Prestige Properties Dubai"
          fill priority sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Who We Are
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.05 }}>
              Building Dubai&apos;s<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Legacy, One Landmark at a Time.</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Mission */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="amenity-intro-grid">
            <div>
              <SectionTag>Our Mission</SectionTag>
              <SectionTitle>
                More Than<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Real Estate</em>
              </SectionTitle>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '24px', fontWeight: 300 }}>
                At Prestige Properties, we believe a home is not just four walls — it is a statement of identity, an
                investment in wellbeing, and a connection to the city&apos;s living fabric. Since 2008, we have been
                crafting spaces that people are proud to call home and businesses are proud to call headquarters.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '16px', fontWeight: 300 }}>
                Rooted in Deira Creek — the beating heart of historic Dubai — our developments honour the maritime
                heritage of the city while delivering the contemporary luxury standards that discerning buyers expect.
              </p>
              <div style={{ display: 'flex', gap: '40px', marginTop: '48px' }}>
                {[{ val: '18+', label: 'Years of Excellence' }, { val: 'AED 6B+', label: 'Total Portfolio Value' }, { val: '2,400+', label: 'Families Housed' }].map(s => (
                  <div key={s.label}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: 300, color: 'var(--grey-900)' }}>{s.val}</div>
                    <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '6px' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80" alt="Prestige Properties office" fill sizes="50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 60px 100px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <SectionTag>Our Journey</SectionTag>
          <SectionTitle>
            18 Years of<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Milestones</em>
          </SectionTitle>
          <div style={{ marginTop: '60px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {milestones.map(m => (
              <div key={m.year} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', background: 'var(--white)', alignItems: 'center' }}>
                <div style={{ padding: '28px 30px', borderRight: '1px solid var(--grey-200)' }}>
                  <span style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 300, color: 'var(--gold-dark)' }}>{m.year}</span>
                </div>
                <div style={{ padding: '28px 40px', fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.7, fontWeight: 300 }}>{m.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <SectionTag>Leadership</SectionTag>
          <SectionTitle>
            The Team Behind<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Prestige</em>
          </SectionTitle>
          <div className="amenities-resp-grid" style={{ marginTop: '60px' }}>
            {team.map(t => (
              <div key={t.name} style={{ background: 'var(--white)', padding: '40px 30px' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--light-bg)', border: '1px solid var(--grey-200)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontFamily: 'var(--serif)', fontSize: '22px', color: 'var(--gold-dark)' }}>
                  {t.name.charAt(0)}
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '6px' }}>{t.name}</div>
                <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>{t.role}</div>
                <p style={{ fontSize: '13px', color: 'var(--grey-500)', lineHeight: 1.7 }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 60px', background: 'var(--grey-900)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className="bottom-cta-flex">
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)' }}>Ready to find your space?</div>
            <div style={{ fontSize: '14px', color: 'var(--grey-400)', marginTop: '8px', fontWeight: 300 }}>Our team is ready to guide you every step of the way.</div>
          </div>
          <Link href="/contact" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '18px 40px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', whiteSpace: 'nowrap' }}>
            Get in Touch
          </Link>
        </div>
      </section>

    </>
  )
}
