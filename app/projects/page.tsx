import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    'Explore the full portfolio of Prestige Properties developments — landmark residential towers, commercial hubs, and mixed-use destinations across Deira Creek and greater Dubai.',
}

const projects = [
  {
    name: 'Jewel of the Creek Residences',
    status: 'Under Construction',
    statusColor: '#e67e22',
    location: 'Deira Creek',
    year: 'Q4 2026',
    type: 'Mixed-Use',
    units: '450+',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    desc: 'Our flagship 42-storey mixed-use tower delivering residences, hospitality, offices, retail, and a waterfront promenade on the historic Deira Creek.',
  },
  {
    name: 'Creek Tower Apartments',
    status: 'Completed',
    statusColor: '#27ae60',
    location: 'Deira Creek',
    year: '2021',
    type: 'Residential',
    units: '320',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    desc: 'A 28-storey residential tower offering panoramic creek views, premium finishes, and a full amenity floor including rooftop pool and gym.',
  },
  {
    name: 'Deira Heights',
    status: 'Completed',
    statusColor: '#27ae60',
    location: 'Al Rigga, Deira',
    year: '2019',
    type: 'Residential',
    units: '185',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    desc: 'A boutique 18-storey residential community with landscaped podium gardens, concierge services, and direct metro connectivity.',
  },
  {
    name: 'Waterfront Retail Plaza',
    status: 'Completed',
    statusColor: '#27ae60',
    location: 'Deira Waterfront',
    year: '2018',
    type: 'Commercial',
    units: '48 units',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
    desc: 'A two-storey open-air retail destination housing F&B, fashion, and lifestyle brands along a 400m pedestrian promenade on the creek.',
  },
  {
    name: 'Bur Dubai Suites',
    status: 'Completed',
    statusColor: '#27ae60',
    location: 'Bur Dubai',
    year: '2016',
    type: 'Hospitality',
    units: '120',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    desc: 'A fully serviced hotel apartment development catering to long-stay professionals and business travellers in central Dubai.',
  },
  {
    name: 'Oud Metha Residences',
    status: 'Completed',
    statusColor: '#27ae60',
    location: 'Oud Metha',
    year: '2014',
    type: 'Residential',
    units: '96',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    desc: 'Low-rise waterfront living with private gardens, direct creek promenade access, and a family-oriented community layout.',
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '480px', background: '#111', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=85" alt="Our Projects" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Portfolio
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.05 }}>
              Our<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Projects</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ background: 'var(--grey-900)', padding: '0 60px' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[{ val: '12', label: 'Projects Delivered' }, { val: '1,170+', label: 'Total Units Built' }, { val: 'AED 6B+', label: 'Portfolio Value' }, { val: '18', label: 'Years Active' }].map(s => (
            <div key={s.label} style={{ padding: '30px 20px', borderRight: '1px solid rgba(255,255,255,0.07)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '32px', fontWeight: 300, color: 'var(--white)' }}>{s.val}</div>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-500)', marginTop: '6px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <SectionTag>All Developments</SectionTag>
          <SectionTitle>
            Every Project,<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Delivered with Purpose</em>
          </SectionTitle>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '60px' }}>
            {projects.map(p => (
              <div key={p.name} className="plan-resp-row">
                {/* Image */}
                <div style={{ position: 'relative', width: '220px', minHeight: '180px', overflow: 'hidden', flexShrink: 0 }}>
                  <Image src={p.image} alt={p.name} fill sizes="220px" style={{ objectFit: 'cover' }} />
                </div>

                {/* Info */}
                <div style={{ padding: '36px 40px', borderRight: '1px solid var(--grey-200)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', background: p.statusColor, color: '#fff', padding: '4px 10px', fontWeight: 500 }}>{p.status}</span>
                    <span style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>{p.type}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '8px' }}>{p.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--grey-400)', marginBottom: '16px', letterSpacing: '0.05em' }}>{p.location} · {p.units} units · {p.year}</div>
                  <p style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300 }}>{p.desc}</p>
                </div>

                {/* CTA */}
                <div style={{ padding: '36px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '12px', minWidth: '160px' }}>
                  <Link href="/contact" className="gold-btn-hover" style={{ background: 'var(--gold)', color: 'var(--white)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '14px 24px', textDecoration: 'none', fontWeight: 500, transition: 'background 0.3s', textAlign: 'center', whiteSpace: 'nowrap' }}>
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
