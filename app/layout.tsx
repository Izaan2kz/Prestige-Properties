import type { Metadata } from 'next'
import './globals.css'
import { cormorant, jost } from '@/lib/fonts'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Prestige Properties — Dubai Real Estate',
    template: '%s | Prestige Properties Dubai',
  },
  description:
    'A premier real estate developer delivering luxury residences and commercial spaces in Dubai\'s most prestigious waterfront locations at Deira Creek.',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: 'Prestige Properties Dubai',
    title: 'Prestige Properties — Dubai Real Estate',
    description:
      'Discover exceptional residences and commercial spaces at the heart of historic Deira Creek — where Dubai\'s legacy meets its future.',
  },
  metadataBase: new URL('https://prestigeproperties.ae'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
