import type { Metadata } from 'next'
import Image from 'next/image'
import RegisterSection from '@/components/home/RegisterSection'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Prestige Properties Dubai. Register your interest, book a private viewing, or speak to our specialists about residential and commercial units at Deira Creek.',
}

const offices = [
  {
    city: 'Dubai — Deira Creek',
    address: 'Jewel of the Creek Tower, Level 5, Deira, Dubai, UAE',
    phone: '+971 4 000 0000',
    email: 'sales@prestigeproperties.ae',
    hours: 'Sat – Thu: 9:00 AM – 6:00 PM',
  },
  {
    city: 'Dubai — Downtown',
    address: 'Business Bay, Bay Square, Building 7, Dubai, UAE',
    phone: '+971 4 000 0001',
    email: 'downtown@prestigeproperties.ae',
    hours: 'Sat – Thu: 9:00 AM – 6:00 PM',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{ position: 'relative', height: '420px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1800&q=85"
          alt="Contact Prestige Properties Dubai"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.38 }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Get in Touch
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.1 }}>
              We&apos;d Love to<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Hear from You</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Office Locations — uses .offices-resp-grid global class */}
      <section style={{ padding: '80px 60px 0', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="offices-resp-grid">
            {offices.map(office => (
              <div key={office.city} style={{ background: 'var(--white)', padding: '50px' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'var(--gold)' }} />
                  Sales Office
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '28px', fontWeight: 300, color: 'var(--grey-900)', marginBottom: '24px' }}>
                  {office.city}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Address', val: office.address },
                    { label: 'Phone', val: office.phone },
                    { label: 'Email', val: office.email },
                    { label: 'Hours', val: office.hours },
                  ].map(row => (
                    <div key={row.label}>
                      <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '4px' }}>{row.label}</div>
                      <div style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.6 }}>{row.val}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reuse RegisterSection in fullPage mode */}
      <RegisterSection fullPage source="contact" />
    </>
  )
}
