'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/properties', label: 'Properties' },
  { href: '/amenities', label: 'Amenities' },
  { href: '/floor-plans', label: 'Floor Plans' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navClass = solid ? 'nav-solid' : 'nav-transparent'

  return (
    <nav
      className={`${navClass} fixed top-0 left-0 w-full z-[1000] px-[60px] flex items-center justify-between transition-all duration-400 h-[80px]`}
      style={{ transition: 'all 0.4s ease' }}
      id="mainNav"
    >
      {/* Logo */}
      <Link href="/" className="nav-logo-text flex items-center gap-3 no-underline font-serif text-[22px] font-medium tracking-[0.08em] transition-colors duration-300">
        <div
          className="w-8 h-8 border border-gold flex items-center justify-center text-gold font-normal"
          style={{ fontSize: '14px', borderWidth: '1.5px' }}
        >
          P
        </div>
        Prestige Properties
      </Link>

      {/* Centered Nav Links */}
      <ul className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-9 list-none items-center">
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href
          return (
            <li key={href}>
              <Link
                href={href}
                className={`nav-link text-[11px] tracking-[0.18em] uppercase no-underline font-normal transition-colors duration-300 hover:text-gold-light ${
                  isActive ? 'text-gold-light border-b border-gold pb-[2px]' : ''
                }`}
              >
                {label}
              </Link>
            </li>
          )
        })}
      </ul>

      {/* CTA */}
      <div className="flex items-center gap-5">
        <Link
          href="/register"
          className="nav-cta-btn text-[10px] tracking-[0.2em] uppercase border px-[22px] py-[10px] no-underline font-normal transition-all duration-300 hover:bg-gold hover:border-gold hover:text-white"
          style={{ transition: 'all 0.3s' }}
        >
          Register
        </Link>
      </div>
    </nav>
  )
}
