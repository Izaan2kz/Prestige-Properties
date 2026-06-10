import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'
import AmenityCard from '@/components/ui/AmenityCard'

export const metadata: Metadata = {
  title: 'Amenities',
  description:
    'Explore world-class amenities at Prestige Properties Dubai — from rooftop infinity pools and marina access to wellness spas, sky gardens, and curated F&B promenades.',
}

const amenities = [
  { icon: '⛵', name: 'Marina Access', description: 'Private marina berths with direct water access for residents and their guests, managed 24/7 by our concierge team.' },
  { icon: '🏊', name: 'Infinity Pool', description: 'Our rooftop infinity pool stretches across the 38th floor, offering unobstructed views of Dubai Creek and the historic Deira skyline.' },
  { icon: '🏋', name: 'Fitness Centre', description: 'A fully equipped, state-of-the-art gymnasium spanning 3,500 sqft, open 24 hours a day.' },
  { icon: '🌿', name: 'Sky Gardens', description: 'Three levels of landscaped podium gardens, featuring native Gulf plants, private seating pods, and BBQ pavilions.' },
  { icon: '🍽', name: 'F&B Promenade', description: 'A curated selection of cafés, restaurants, and juice bars lining the waterfront promenade directly below the tower.' },
  { icon: '🧖', name: 'Wellness Spa', description: 'A full-service destination spa with treatment rooms, hammam, sauna, and hydrotherapy pool.' },
  { icon: '🚗', name: 'Covered Parking', description: 'Each unit receives allocated covered basement parking. EV charging points on every level. Valet available for penthouse owners.' },
  { icon: '🎒', name: "Kids' Zone", description: "A dedicated children's play area and supervised learning centre for residents aged 2–12." },
  { icon: '🔒', name: '24/7 Security', description: 'Multi-layered security with CCTV coverage, key-fob access control, and a staffed lobby around the clock.' },
  { icon: '📦', name: 'Smart Delivery', description: 'Temperature-controlled parcel lockers and a dedicated receiving area ensure your deliveries are always secure.' },
  { icon: '🎭', name: 'Events Lounge', description: 'A private residents-only events lounge and screening room available for booking at no extra charge.' },
  { icon: '🌐', name: 'High-Speed Fibre', description: 'Gigabit fibre internet pre-installed in every unit, with dedicated bandwidth for home offices and streaming.' },
]

export default function AmenitiesPage() {
  return (
    <>
      {/* Page Hero */}
      <div style={{ position: 'relative', height: '420px', background: '#111', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1800&q=85"
          alt="World-Class Amenities at Prestige Properties"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.4 }}
        />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              World-Class Facilities
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.1 }}>
              Every Amenity<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Imagined</em>
            </h1>
          </div>
        </div>
      </div>

      {/* Intro — uses .amenity-intro-grid global class */}
      <section style={{ padding: '80px 60px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="amenity-intro-grid">
            <div>
              <SectionTag>Why Prestige Properties</SectionTag>
              <SectionTitle>
                Designed for<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Exceptional Living</em>
              </SectionTitle>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '24px', fontWeight: 300 }}>
                Every detail at Jewel of the Creek has been considered with resident wellbeing in mind.
                From the moment you arrive at the lobby to the moment you step onto your private balcony
                overlooking Deira Creek, the experience is curated to feel seamless, peaceful, and extraordinary.
              </p>
              <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--grey-700)', marginTop: '16px', fontWeight: 300 }}>
                Our amenity programme rivals Dubai&apos;s finest five-star hotels — delivered right to your doorstep.
              </p>
              <Link
                href="/contact"
                className="gold-btn-hover"
                style={{
                  display: 'inline-block',
                  marginTop: '36px',
                  background: 'var(--gold)',
                  color: 'var(--white)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '16px 36px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  transition: 'background 0.3s',
                }}
              >
                Book a Viewing
              </Link>
            </div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
                alt="Luxury living at Prestige Properties"
                fill
                sizes="50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Amenities Grid — uses .amenities-resp-grid global class */}
      <section style={{ padding: '60px 60px 100px', background: 'var(--off-white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <div className="amenities-resp-grid" style={{ marginTop: 0 }}>
            {amenities.map(a => (
              <AmenityCard key={a.name} icon={a.icon} name={a.name} description={a.description} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
