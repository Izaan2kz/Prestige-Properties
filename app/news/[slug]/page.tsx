import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { allArticles, categoryColors } from '@/lib/news'
import SectionTag from '@/components/ui/SectionTag'

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = allArticles.find((a) => a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = allArticles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  const related = allArticles.filter((a) => a.slug !== article.slug).slice(0, 3)
  const color = categoryColors[article.category] ?? 'var(--gold)'

  return (
    <>
      {/* ── Hero ── */}
      <div style={{ position: 'relative', height: '70vh', minHeight: '560px', background: '#111', overflow: 'hidden' }}>
        <Image
          src={article.image}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.45 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.3) 55%, rgba(10,10,10,0.1) 100%)' }} />

        {/* Breadcrumb */}
        <div style={{ position: 'absolute', top: '120px', left: 0, right: 0, padding: '0 60px' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Link href="/news" style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>
              News &amp; Insights
            </Link>
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px' }}>›</span>
            <span style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {article.category}
            </span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: '80px 60px' }}>
          <div style={{ maxWidth: '860px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '22px' }}>
              <span style={{
                fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                background: color, color: '#fff', padding: '6px 14px', fontWeight: 600,
              }}>
                {article.category}
              </span>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.05em' }}>
                {article.date}
              </span>
            </div>
            <h1 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(28px, 4.5vw, 58px)',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.12,
            }}>
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <section style={{ padding: '90px 60px', background: 'var(--white)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '100px', alignItems: 'start' }} className="article-detail-grid">

          {/* Left — body */}
          <div>
            {/* Lead paragraph */}
            <p style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(17px, 1.6vw, 21px)',
              color: 'var(--grey-800)',
              lineHeight: 1.75,
              fontWeight: 300,
              marginBottom: '40px',
              paddingBottom: '40px',
              borderBottom: '1px solid var(--grey-200)',
            }}>
              {article.excerpt}
            </p>

            {/* Body paragraphs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {article.body.map((para, i) => (
                <p key={i} style={{
                  fontSize: '16px',
                  color: 'var(--grey-700)',
                  lineHeight: 1.85,
                  fontWeight: 300,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Divider */}
            <div style={{ margin: '60px 0', display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ flex: 1, height: '1px', background: 'var(--grey-200)' }} />
              <div style={{ width: '6px', height: '6px', background: 'var(--gold)', borderRadius: '50%' }} />
              <div style={{ flex: 1, height: '1px', background: 'var(--grey-200)' }} />
            </div>

            {/* Back link */}
            <Link
              href="/news"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '11px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                textDecoration: 'none',
                fontWeight: 500,
              }}
              className="gold-link-hover"
            >
              ← Back to News &amp; Insights
            </Link>
          </div>

          {/* Right — sidebar */}
          <aside style={{ position: 'sticky', top: '120px' }}>

            {/* Article meta card */}
            <div style={{
              background: 'var(--off-white)',
              border: '1px solid var(--grey-200)',
              padding: '36px',
              marginBottom: '40px',
            }}>
              <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--grey-400)', marginBottom: '20px' }}>
                Article Details
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--grey-200)', paddingBottom: '14px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Category</span>
                  <span style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', background: color, color: '#fff', padding: '4px 10px', fontWeight: 600 }}>
                    {article.category}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--grey-200)', paddingBottom: '14px' }}>
                  <span style={{ fontSize: '11px', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Published</span>
                  <span style={{ fontSize: '13px', color: 'var(--grey-800)', fontWeight: 400 }}>{article.date}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '11px', color: 'var(--grey-500)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Author</span>
                  <span style={{ fontSize: '13px', color: 'var(--grey-800)', fontWeight: 400 }}>Prestige Properties</span>
                </div>
              </div>
            </div>

            {/* Register Interest CTA */}
            <div style={{
              background: 'var(--grey-900)',
              padding: '36px',
              marginBottom: '40px',
            }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: '22px', fontWeight: 300, color: 'var(--white)', lineHeight: 1.3, marginBottom: '14px' }}>
                Interested in our properties?
              </div>
              <p style={{ fontSize: '13px', color: 'var(--grey-500)', lineHeight: 1.7, fontWeight: 300, marginBottom: '24px' }}>
                Register your interest and a member of our Private Client team will be in touch.
              </p>
              <Link
                href="/register"
                className="gold-btn-hover"
                style={{
                  display: 'block',
                  background: 'var(--gold)',
                  color: 'var(--white)',
                  fontSize: '10px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '16px 20px',
                  textDecoration: 'none',
                  fontWeight: 500,
                  textAlign: 'center',
                  transition: 'background 0.3s',
                }}
              >
                Register Interest
              </Link>
            </div>

          </aside>
        </div>
      </section>

      {/* ── Related Articles ── */}
      <section style={{ padding: '80px 60px', background: 'var(--off-white)', borderTop: '1px solid var(--grey-200)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
          <SectionTag>More Stories</SectionTag>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 300, color: 'var(--grey-900)', marginBottom: '50px', marginTop: '12px' }}>
            More from <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Prestige</em>
          </div>
          <div className="props-resp-grid">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/news/${r.slug}`}
                style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: 'var(--white)', overflow: 'hidden' }}
                className="prop-card-outer"
              >
                <div style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}>
                  <Image src={r.image} alt={r.title} fill sizes="33vw" className="prop-img-zoom" style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                  <div style={{
                    position: 'absolute', top: '14px', left: '14px',
                    background: categoryColors[r.category] ?? 'var(--gold)',
                    color: '#fff', fontSize: '9px', letterSpacing: '0.15em',
                    textTransform: 'uppercase', padding: '4px 10px', fontWeight: 600,
                  }}>
                    {r.category}
                  </div>
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ fontSize: '10px', color: 'var(--grey-400)', marginBottom: '10px' }}>{r.date}</div>
                  <h3 style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 400, color: 'var(--grey-900)', lineHeight: 1.3, marginBottom: '12px', flex: 1 }}>
                    {r.title}
                  </h3>
                  <span style={{ fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>
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
