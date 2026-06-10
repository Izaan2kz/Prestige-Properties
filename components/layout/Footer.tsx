import Link from 'next/link'

const propertyLinks = [
  { href: '/properties#residential', label: 'Residential' },
  { href: '/properties#commercial', label: 'Commercial' },
  { href: '/properties#retail', label: 'Retail Spaces' },
  { href: '/properties#penthouse', label: 'Penthouse' },
  { href: '/floor-plans', label: 'Floor Plans' },
]

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/projects', label: 'Our Projects' },
  { href: '/sustainability', label: 'Sustainability' },
  { href: '/careers', label: 'Careers' },
  { href: '/news', label: 'News' },
]

const serviceLinks = [
  { href: '/services/property-management', label: 'Property Management' },
  { href: '/services/leasing', label: 'Leasing' },
  { href: '/properties', label: 'Sales' },
  { href: '/services/valuation', label: 'Valuation' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452H16.89v-5.569c0-1.327-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.98 1.98 0 0 1-2.002-1.99c0-1.102.896-1.99 2.002-1.99s2.002.888 2.002 1.99a1.98 1.98 0 0 1-2.002 1.99zm1.843 13.019H3.49V9h3.69v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    href: 'https://www.linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    href: 'https://www.facebook.com',
    label: 'Facebook',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: 'https://www.x.com',
    label: 'X (Twitter)',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    href: 'https://www.youtube.com',
    label: 'YouTube',
  },
]

const colTitleStyle: React.CSSProperties = {
  fontSize: '10px',
  letterSpacing: '0.25em',
  textTransform: 'uppercase',
  color: '#aaa',
  marginBottom: '20px',
  fontWeight: 500,
}

const linkStyle: React.CSSProperties = {
  fontSize: '13px',
  color: '#777',
  textDecoration: 'none',
  transition: 'color 0.2s',
}

export default function Footer() {
  return (
    <footer style={{ background: '#2c2c2e', padding: '80px 60px 40px', borderTop: '1px solid #3a3a3c' }}>
      {/* 4-col grid */}
      <div className="footer-resp-grid">
        {/* Brand */}
        <div>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              fontFamily: 'var(--serif)',
              fontSize: '22px',
              fontWeight: 500,
              letterSpacing: '0.08em',
              color: '#e0e0e0',
              textDecoration: 'none',
              marginBottom: '16px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                border: '1.5px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: 'var(--gold)',
                fontWeight: 400,
              }}
            >
              P
            </div>
            Prestige Properties
          </Link>
          <p style={{ fontSize: '13px', color: '#888', lineHeight: 1.7, fontWeight: 300, marginTop: '16px' }}>
            A premier real estate developer delivering luxury residences and commercial spaces in Dubai&apos;s most prestigious waterfront locations.
          </p>
        </div>

        {/* Properties */}
        <div>
          <div style={colTitleStyle}>Properties</div>
          <ul style={{ listStyle: 'none' }}>
            {propertyLinks.map((l, i) => (
              <li key={i} style={{ marginBottom: '12px' }}>
                <Link href={l.href} className="footer-link-hover" style={linkStyle}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <div style={colTitleStyle}>Company</div>
          <ul style={{ listStyle: 'none' }}>
            {companyLinks.map((l, i) => (
              <li key={i} style={{ marginBottom: '12px' }}>
                <Link href={l.href} className="footer-link-hover" style={linkStyle}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div style={colTitleStyle}>Services</div>
          <ul style={{ listStyle: 'none' }}>
            {serviceLinks.map((l, i) => (
              <li key={i} style={{ marginBottom: '12px' }}>
                <Link href={l.href} className="footer-link-hover" style={linkStyle}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid #3a3a3c', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '12px', color: '#666' }}>
          © 2026 Prestige Properties LLC. All rights reserved. RERA Licence No: 00000
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="social-icon-hover"
              style={{
                width: '34px',
                height: '34px',
                border: '1px solid #444',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#777',
                textDecoration: 'none',
                transition: 'all 0.2s',
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
