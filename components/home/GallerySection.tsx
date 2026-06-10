import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',  alt: 'Deira Creek Waterfront View' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', alt: 'Luxury Residential Exterior' },
  { src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80', alt: 'Premium Commercial Spaces' },
  { src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80', alt: 'Modern Interior Design' },
  { src: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80', alt: 'Dubai Skyline at Night' },
]

export default function GallerySection() {
  return (
    <section style={{ background: 'var(--white)', padding: '100px 0' }} id="gallery">
      {/* Header */}
      <div
        style={{
          padding: '0 60px',
          marginBottom: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
        }}
      >
        <div>
          <SectionTag>Visual Tour</SectionTag>
          <SectionTitle>
            Life at the<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Creek</em>
          </SectionTitle>
        </div>
        <Link
          href="/properties"
          style={{
            fontSize: '11px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            textDecoration: 'none',
          }}
        >
          Full Gallery →
        </Link>
      </div>

      {/* Asymmetric Gallery Grid — uses .gallery-grid global class */}
      <div className="gallery-grid">
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="gallery-item gallery-item-hover"
            style={{ overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes={i === 0 ? '40vw' : '30vw'}
              className="gallery-img-inner"
              style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
