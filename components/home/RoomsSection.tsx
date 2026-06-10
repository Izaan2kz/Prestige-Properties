import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

const rooms = [
  {
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
    alt: 'Luxury Living Room',
    label: 'Living Room Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    alt: 'Master Bedroom Space',
    label: 'Master Bedroom',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    alt: 'Premium Modern Kitchen',
    label: 'Premium Kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    alt: 'Balcony View',
    label: 'Sunset View Balcony',
  },
]

export default function RoomsSection() {
  return (
    <section style={{ padding: '100px 60px', background: 'var(--off-white)' }} id="units">
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <div style={{ marginBottom: '30px' }}>
          <SectionTag>Interior Experience</SectionTag>
          <SectionTitle>
            Explore the<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Rooms</em>
          </SectionTitle>
        </div>

        {/* 2×2 Gallery Grid — uses .rooms-resp-grid global class */}
        <div className="rooms-resp-grid">
          {rooms.map(room => (
            <div
              key={room.label}
              className="room-item"
              style={{
                position: 'relative',
                overflow: 'hidden',
                aspectRatio: '16/10',
                background: 'var(--grey-200)',
              }}
            >
              <Image
                src={room.src}
                alt={room.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="room-img-inner"
                style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '16px 20px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  color: 'var(--white)',
                  fontFamily: 'var(--serif)',
                  fontSize: '20px',
                  fontWeight: 300,
                }}
              >
                {room.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner — uses .rooms-cta-flex global class */}
        <div
          className="rooms-cta-flex"
          style={{
            marginTop: '40px',
            padding: '30px 40px',
            background: 'var(--white)',
            border: '1px solid var(--grey-200)',
          }}
        >
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '24px', fontWeight: 300, color: 'var(--grey-900)' }}>
              Experience it in person
            </div>
            <div style={{ fontSize: '13px', color: 'var(--grey-500)', marginTop: '6px', fontWeight: 300 }}>
              Schedule a private viewing and walk through your future home.
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
              padding: '16px 36px',
              textDecoration: 'none',
              fontWeight: 500,
              fontFamily: 'var(--sans)',
              display: 'inline-block',
              transition: 'background 0.3s',
              whiteSpace: 'nowrap',
            }}
          >
            Book a Viewing
          </Link>
        </div>
      </div>
    </section>
  )
}
