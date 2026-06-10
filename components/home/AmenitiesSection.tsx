import SectionTag from '@/components/ui/SectionTag'
import SectionTitle from '@/components/ui/SectionTitle'
import AmenityCard from '@/components/ui/AmenityCard'

const amenities = [
  { icon: '⛵', name: 'Marina Access',    description: 'Private marina berths with direct water access for residents' },
  { icon: '🏊', name: 'Infinity Pool',    description: 'Rooftop infinity pool overlooking the iconic Dubai Creek skyline' },
  { icon: '🏋', name: 'Fitness Centre',  description: 'State-of-the-art gym with personal training and wellness studios' },
  { icon: '🌿', name: 'Sky Gardens',     description: 'Landscaped podium gardens with private seating and barbecue areas' },
  { icon: '🍽', name: 'F&B Promenade',  description: 'Curated dining and café options along the waterfront promenade' },
  { icon: '🧖', name: 'Wellness Spa',   description: 'Full-service spa, sauna and steam rooms for holistic rejuvenation' },
  { icon: '🚗', name: 'Covered Parking', description: 'Allocated basement parking with EV charging points included' },
  { icon: '🎒', name: "Kids' Zone",      description: 'Dedicated play area and learning centre for young residents' },
]

export default function AmenitiesSection() {
  return (
    <section style={{ padding: '100px 60px', background: 'var(--off-white)' }} id="amenities">
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <SectionTag>World-Class Facilities</SectionTag>
        <SectionTitle>
          Every Amenity<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Imagined</em>
        </SectionTitle>

        {/* uses global .amenities-resp-grid class */}
        <div className="amenities-resp-grid">
          {amenities.map(a => (
            <AmenityCard key={a.name} {...a} />
          ))}
        </div>
      </div>
    </section>
  )
}
