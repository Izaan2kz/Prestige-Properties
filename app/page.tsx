import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import MarqueeBar from '@/components/home/MarqueeBar'
import FeaturedSection from '@/components/home/FeaturedSection'
import PropertiesSection from '@/components/home/PropertiesSection'
import AmenitiesSection from '@/components/home/AmenitiesSection'
import RoomsSection from '@/components/home/RoomsSection'
import GallerySection from '@/components/home/GallerySection'
import RegisterSection from '@/components/home/RegisterSection'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Prestige Properties — Dubai Real Estate',
  description:
    'Discover exceptional residences and commercial spaces at the heart of historic Deira Creek — where Dubai\'s legacy meets its future. Studio to 4-bedroom units now available.',
  openGraph: {
    title: 'Prestige Properties — Dubai Real Estate',
    description: 'Luxury residences and commercial spaces at Deira Creek, Dubai.',
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarqueeBar />
      <FeaturedSection />
      <AmenitiesSection />
      <PropertiesSection />
      <RoomsSection />
      <GallerySection />
      <RegisterSection />
    </>
  )
}
