const items = [
  'Residential Apartments',
  'Retail Spaces',
  'Waterfront Living',
  'Studio to 4-Bedroom',
  'Premium Amenities',
  'Prime Location',
]

export default function MarqueeBar() {
  // Doubled for seamless loop
  const doubled = [...items, ...items]

  return (
    <div style={{ background: 'var(--grey-300)', padding: '18px 0', overflow: 'hidden' }}>
      <div className="marquee-track" style={{ display: 'flex', whiteSpace: 'nowrap' }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '30px',
              padding: '0 30px',
              fontSize: '11px',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--grey-900)',
              fontWeight: 500,
              flexShrink: 0,
            }}
          >
            {item}
            <span style={{ width: '4px', height: '4px', background: 'rgba(0,0,0,0.3)', borderRadius: '50%', flexShrink: 0, display: 'inline-block' }} />
          </span>
        ))}
      </div>
    </div>
  )
}
