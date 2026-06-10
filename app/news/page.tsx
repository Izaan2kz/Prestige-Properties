import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'
import { featured, articles, categoryColors } from '@/lib/news'

export const metadata: Metadata = {
  title: 'News & Insights',
  description:
    'The latest news, project updates, market insights, and press releases from Prestige Properties Dubai.',
}

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ position: 'relative', height: '420px', background: '#111', overflow: 'hidden' }}>
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=85" alt="News and Insights" fill priority sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.35 }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', padding: '0 60px', paddingTop: '80px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', width: '100%' }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ display: 'inline-block', width: '30px', height: '1px', background: 'var(--gold)' }} />
              Latest Updates
            </div>
            <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(40px, 5vw, 72px)', fontWeight: 300, color: 'var(--white)', lineHeight: 1.05 }}>
              News &amp;<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>Insights</em>
            </h1>
          </div>
        </div>
      </div>

      <section style={{ padding: '100px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>

          {/* Featured Article */}
          <div style={{ marginBottom: '80px' }}>
            <SectionTag>Latest Story</SectionTag>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', marginTop: '40px', alignItems: 'center' }} className="two-col-grid">
              <Link href={`/news/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }} className="prop-card-outer">
                <Image src={featured.image} alt={featured.title} fill sizes="50vw" style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} className="prop-img-zoom" />
              </Link>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <span style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', background: categoryColors[featured.category] ?? 'var(--gold)', color: '#fff', padding: '5px 12px', fontWeight: 600 }}>{featured.category}</span>
                  <span style={{ fontSize: '11px', color: 'var(--grey-400)' }}>{featured.date}</span>
                </div>
                <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.5vw, 34px)', fontWeight: 300, color: 'var(--grey-900)', lineHeight: 1.2, marginBottom: '20px' }}>
                  {featured.title}
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--grey-700)', lineHeight: 1.8, fontWeight: 300 }}>{featured.excerpt}</p>
                <Link href={`/news/${featured.slug}`} className="gold-link-hover" style={{ display: 'inline-block', marginTop: '24px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none', fontWeight: 500, transition: 'color 0.2s' }}>
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* All Articles Grid */}
          <SectionTag>All Stories</SectionTag>
          <SectionTitle>
            More From<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Prestige</em>
          </SectionTitle>
          <div style={{ marginTop: '50px' }} className="props-resp-grid">
            {articles.map(a => (
              <Link
                key={a.slug}
                href={`/news/${a.slug}`}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'var(--white)' }}
                className="gallery-item-hover prop-card-outer"
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <Image src={a.image} alt={a.title} fill sizes="33vw" className="gallery-img-inner prop-img-zoom" style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                  <div style={{
                    position: 'absolute', top: '14px', left: '14px',
                    background: categoryColors[a.category] ?? 'var(--gold)',
                    color: '#fff', fontSize: '9px', letterSpacing: '0.15em',
                    textTransform: 'uppercase', padding: '4px 9px', fontWeight: 600,
                  }}>
                    {a.category}
                  </div>
                </div>
                <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                    <span style={{ fontSize: '10px', color: 'var(--grey-400)' }}>{a.date}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '20px', fontWeight: 400, color: 'var(--grey-900)', lineHeight: 1.25, marginBottom: '12px', flex: 1 }}>{a.title}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--grey-500)', lineHeight: 1.7, marginBottom: '20px' }}>{a.excerpt}</p>
                  <span className="gold-link-hover" style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, transition: 'color 0.2s' }}>
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
