import Link from 'next/link'

interface BtnPrimaryProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  type?: 'button' | 'submit'
  className?: string
}

const baseStyle: React.CSSProperties = {
  background: 'var(--gold)',
  color: 'var(--white)',
  fontSize: '11px',
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  padding: '16px 36px',
  textDecoration: 'none',
  fontWeight: 500,
  fontFamily: 'var(--sans)',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  transition: 'background 0.3s',
}

export default function BtnPrimary({ href, onClick, children, type = 'button', className = '' }: BtnPrimaryProps) {
  if (href) {
    return (
      <Link href={href} style={baseStyle} className={`gold-btn-hover ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} style={baseStyle} className={`gold-btn-hover ${className}`}>
      {children}
    </button>
  )
}
