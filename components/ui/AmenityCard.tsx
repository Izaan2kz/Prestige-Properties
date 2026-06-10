interface AmenityCardProps {
  icon: string
  name: string
  description: string
}

export default function AmenityCard({ icon, name, description }: AmenityCardProps) {
  return (
    <div
      className="amenity-card"
      style={{
        background: 'var(--white)',
        padding: '40px 30px',
        textAlign: 'center',
        transition: 'background 0.3s',
      }}
    >
      <div
        className="amenity-icon-inner"
        style={{
          width: '56px',
          height: '56px',
          margin: '0 auto 20px',
          border: '1px solid rgba(184,183,181,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--grey-500)',
          fontSize: '22px',
          transition: 'border-color 0.3s',
        }}
      >
        {icon}
      </div>
      <div style={{ fontFamily: 'var(--serif)', fontSize: '18px', fontWeight: 400, color: 'var(--grey-900)', marginBottom: '8px' }}>
        {name}
      </div>
      <p style={{ fontSize: '12px', color: 'var(--grey-500)', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  )
}
