export interface Article {
  slug: string
  date: string
  category: string
  title: string
  excerpt: string
  image: string
  body: string[]
}

export const categoryColors: Record<string, string> = {
  'Project Update': '#2980b9',
  'Awards': '#8e44ad',
  'Market Insight': '#16a085',
  'Sustainability': '#27ae60',
  'Company News': '#b8860b',
}

export const featured: Article = {
  slug: 'jewel-of-the-creek-structural-completion',
  date: 'May 28, 2026',
  category: 'Project Update',
  title: 'Jewel of the Creek Reaches Structural Completion — On Track for Q4 2026 Handover',
  excerpt:
    'Prestige Properties announces that the primary structural works on its flagship 42-storey Jewel of the Creek tower have been completed, keeping the project firmly on schedule for its Q4 2026 residential handover.',
  image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
  body: [
    'Prestige Properties is proud to announce a landmark milestone in the construction of Jewel of the Creek — our flagship 42-storey mixed-use tower rising from the historic Deira waterfront. As of 28 May 2026, the complete structural frame of the tower has been successfully topped out, with concrete and steelwork on all floors now finalised.',
    'This achievement represents the culmination of over 24 months of intensive construction activity overseen by our appointed main contractor and independent project management team. Throughout the structural phase, the project has maintained an exemplary safety record, with zero lost-time incidents across more than 2.4 million man-hours worked on site.',
    'With the structure complete, construction activity now transitions to the critical MEP (Mechanical, Electrical and Plumbing) fit-out and facade installation phases. The tower\'s distinctive glazed curtain wall — featuring custom fritted glass panels that evoke the rippling surface of Dubai Creek — is scheduled to be fully installed by August 2026.',
    'Interior fit-out of the residential floors, communal amenity spaces and the five-star hotel component will follow, with handover of the residential units firmly targeted for Q4 2026, as communicated to all registered buyers.',
    '"Reaching structural completion on schedule is a testament to the skill, dedication and professionalism of our entire project team," said Prestige Properties CEO Alexandra Mitchell. "We are on track, on budget and extremely excited to begin welcoming residents to their new homes later this year."',
    'All registered buyers will receive a formal construction update communication this week, including an updated programme, a site photography report and an invitation to a private on-site viewing event scheduled for June 2026.',
  ],
}

export const articles: Article[] = [
  {
    slug: 'best-luxury-developer-dubai-real-estate-awards-2026',
    date: 'April 15, 2026',
    category: 'Awards',
    title: 'Prestige Properties Wins Best Luxury Developer at Dubai Real Estate Awards 2026',
    excerpt:
      'We are honoured to have been recognised by the Dubai Real Estate Awards panel for our commitment to quality, design, and sustainable development across our Deira Creek portfolio.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=600&q=80',
    body: [
      'Prestige Properties has been named Best Luxury Developer at the prestigious Dubai Real Estate Awards 2026, held at the Grand Hyatt Dubai on 14 April 2026. The award was presented in recognition of our outstanding design quality, delivery track record and commitment to sustainable development across our growing Deira Creek portfolio.',
      'The Dubai Real Estate Awards, now in its twelfth year, is widely regarded as the most credible barometer of excellence across the UAE property sector. The judging panel — comprising independent architects, urban planners, sustainability experts and industry figures — assessed over 140 nominations across 22 categories before selecting this year\'s winners.',
      'Prestige Properties was cited specifically for the architectural ambition of the Jewel of the Creek development, the quality and authenticity of our stakeholder engagement programme, and our commitment to achieving LEED Platinum certification across our entire development pipeline.',
      '"This recognition means a great deal to us," said Alexandra Mitchell, CEO of Prestige Properties. "It validates everything our team has poured into these projects — the relentless focus on design quality, the attention to detail in every specification decision, and the genuine care we take in understanding what our buyers and the wider community need from these developments."',
      'This award follows our recognition as Sustainable Developer of the Year at the Gulf Property Awards 2025 and the MIPIM Award for Best Residential Development earlier this year, cementing Prestige Properties\' position at the very top of the Dubai luxury development landscape.',
    ],
  },
  {
    slug: 'deira-creek-address-of-choice',
    date: 'March 3, 2026',
    category: 'Market Insight',
    title: 'Deira Creek: Why Historic Dubai Is Becoming the Address of Choice for Discerning Buyers',
    excerpt:
      "As demand for authentic, characterful neighbourhoods grows among UAE and international buyers, Deira Creek is emerging as one of Dubai's most exciting residential destinations.",
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&q=80',
    body: [
      'For decades, Dubai\'s residential property market was defined by its ambition to build the new, the tallest and the most spectacular. Yet a significant shift is now underway. Buyers — both regional and international — are increasingly drawn not just to luxury finishes and architectural spectacle, but to neighbourhoods with genuine character, cultural depth and a sense of authentic place.',
      'Deira Creek, the historic heart of Dubai and the birthplace of the city\'s trading heritage, is emerging as the primary beneficiary of this trend. Inquiry volumes for Creek-adjacent residential properties have risen 34% year-on-year according to data from the Dubai Land Department, significantly outpacing the wider Dubai residential market.',
      'Several converging factors are driving this appetite. First, a decade of sustained public investment in the Creek waterfront — new promenades, cultural facilities, heritage preservation works and F&B offerings — has transformed the area\'s public realm. Second, the relative land scarcity of the historic creekside means that new residential supply remains tightly constrained, providing strong fundamentals for capital value growth.',
      'Third, and perhaps most importantly, there is a growing cohort of buyers for whom authenticity and a genuine sense of place are non-negotiable. The Creek\'s dhow yards, spice and gold souks, and centuries of mercantile heritage provide an irreplaceable cultural richness that no amount of engineered placemaking in newer districts can replicate.',
      'At Prestige Properties, we have believed in the long-term investment case for Deira Creek for many years. Our Jewel of the Creek development was conceived specifically to honour that heritage — to create architecture and a residential experience that is genuinely of its place, rather than simply transplanted luxury that could sit anywhere in the world.',
      'The market is now catching up with that conviction, and we believe the best of the Deira Creek story is still to come.',
    ],
  },
  {
    slug: 'net-zero-operations-2040',
    date: 'January 20, 2026',
    category: 'Sustainability',
    title: 'Prestige Properties Commits to Net-Zero Operations by 2040',
    excerpt:
      'Our Environmental Strategy 2040, launched today, outlines an actionable roadmap to achieve net-zero operational carbon across our entire portfolio — a decade ahead of the UAE national target.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    body: [
      'Today, Prestige Properties officially launches Environmental Strategy 2040 — our comprehensive, independently verified roadmap to achieve net-zero operational carbon across our entire property portfolio by 2040. This commitment places us a full decade ahead of the UAE\'s national net-zero target and signals the depth of our long-term commitment to responsible development.',
      'The strategy is structured around three pillars. The first is Design for Performance: from 2026, all new Prestige Properties developments will target LEED Platinum certification as a minimum standard, with enhanced requirements around passive design, building fabric performance and renewable energy integration.',
      'The second pillar is Operational Decarbonisation: across our existing portfolio, we are committing to a comprehensive programme of low-carbon retrofits, on-site renewable energy installation and electrification of all building systems by 2035. This will be supported by long-term power purchase agreements for 100% renewable electricity across all managed properties from 2027.',
      'The third pillar is Supply Chain Accountability: we will require all contractors, suppliers and professional advisors to demonstrate their own credible decarbonisation pathways as a condition of working with Prestige Properties, and will progressively phase out relationships with suppliers who cannot meet our evolving standards.',
      'Environmental Strategy 2040 has been developed in partnership with one of the world\'s leading sustainability consultancies and has been independently assessed to confirm its scientific alignment with a 1.5°C warming pathway. Our annual progress will be reported publicly each year.',
      '"Sustainability is not a marketing exercise for us — it is a fundamental business and moral commitment," said Alexandra Mitchell. "We are clear-eyed about the scale of the challenge, and equally clear that the property sector has both an obligation and an opportunity to lead."',
    ],
  },
  {
    slug: 'james-whitfield-chief-design-officer',
    date: 'December 12, 2025',
    category: 'Company News',
    title: 'James Whitfield Joins as Chief Design Officer, Bringing Zaha Hadid Pedigree to Prestige',
    excerpt:
      'We are delighted to welcome James Whitfield as our new Chief Design Officer. James brings 18 years of award-winning architectural practice to guide the design vision of our future developments.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80',
    body: [
      'Prestige Properties is delighted to announce the appointment of James Whitfield as Chief Design Officer, effective 1 January 2026. James brings 18 years of distinguished architectural practice to the role, including a decade as Associate Director at Zaha Hadid Architects where he led some of the studio\'s most celebrated built projects across the Middle East, Asia and Europe.',
      'In his new role, James will provide strategic design leadership across Prestige Properties\' entire development pipeline — from project inception through to handover. He will work in close collaboration with our appointed design teams, overseeing design quality, pushing the boundaries of architectural ambition and ensuring that every Prestige Properties development makes a genuine contribution to its context.',
      '"I have watched Prestige Properties from a distance for several years with enormous admiration," said James. "The commitment to architectural quality is genuine and rare in the developer world. I am thrilled to be joining at such a pivotal moment and deeply motivated by the opportunity to shape the next chapter of what this company builds."',
      'James holds a Master of Architecture from the Architectural Association and a Bachelor of Engineering from Imperial College London. He is a Fellow of the Royal Institute of British Architects and serves on the advisory board of the Dubai Design District.',
      'CEO Alexandra Mitchell said: "James is one of the most creatively and intellectually rigorous architects working in the luxury development space today. His appointment marks a step-change in our design ambitions and sends a very clear signal about the quality of the work we intend to produce in the years ahead."',
    ],
  },
  {
    slug: 'jewel-of-the-creek-penthouse-collection-launch',
    date: 'October 7, 2025',
    category: 'Project Update',
    title: 'Sales Launch: Jewel of the Creek Penthouse Collection Now Open for Registration',
    excerpt:
      'Following overwhelming demand for our residential floors, we are proud to open registrations for the exclusive Penthouse Collection — just 4 residences atop the Jewel of the Creek tower.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80',
    body: [
      'Following the sell-out success of our residential floor launch at Jewel of the Creek and in response to extraordinary demand from prospective buyers, Prestige Properties is today opening registrations for the crown jewel of the development — the Jewel of the Creek Penthouse Collection.',
      'Positioned on the uppermost four floors of the 42-storey tower, the Penthouse Collection comprises just four full-floor residences, each individually designed by our appointed interiors studio to a specification of exceptional depth and quality. Wraparound terraces, private plunge pools and bespoke material selections distinguish each penthouse as a singular residence.',
      'Penthouses are priced from AED 22 million and range from 5,800 to 8,200 square feet of internal living space, with terraces ranging from 1,800 to 3,000 square feet. Each residence commands unrestricted 360-degree panoramic views from the Gulf to the city skyline.',
      'In recognition of the extraordinary demand for these four residences, access to the sales process will be strictly limited to registered VIP purchasers. Prospective buyers are invited to register their interest through our Private Client team, who will coordinate individual appointments and provide full information packs.',
      '"These four residences represent the absolute pinnacle of what we have ever created," said Alexandra Mitchell. "They are not simply apartments — they are private sky homes of a calibre that simply does not exist elsewhere in this part of Dubai. We expect significant interest and encourage serious buyers to register without delay."',
    ],
  },
  {
    slug: 'dubai-real-estate-q2-2025-waterfront-assets',
    date: 'August 22, 2025',
    category: 'Market Insight',
    title: 'Dubai Real Estate Q2 2025: Waterfront Assets Outperform the Wider Market by 18%',
    excerpt:
      'New data from the Dubai Land Department confirms that creek-front and waterfront residential units have delivered an 18% premium over the wider Dubai residential market in the first half of 2025.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    body: [
      'The latest transaction data published by the Dubai Land Department for Q2 2025 confirms what many market observers have long suspected: waterfront residential assets in Dubai — and creek-front properties in particular — are now delivering materially superior capital value performance compared to the wider residential market.',
      'Analysis of all residential transactions completed in H1 2025 shows that waterfront-classified units achieved an average price premium of 18% over equivalent non-waterfront product in the same submarkets, and an overall capital value appreciation of 12.3% year-on-year — compared to 7.1% for the overall Dubai residential index.',
      'The data also reveals that waterfront properties are trading more quickly, with average days-to-sale running at 34% below the market average. This combination of higher pricing and lower time-on-market reflects the fundamental scarcity of waterfront product in a city where existing waterfront addresses are finite and opportunities for new waterfront development are increasingly constrained.',
      'Specifically within the Deira Creek submarket — which encompasses Prestige Properties\' primary development focus — transaction volumes rose 28% year-on-year, with average achieved values rising 15.8% against a backdrop of limited available supply.',
      'These figures validate the investment thesis that has underpinned our focus on Dubai Creek. The combination of genuine scarcity, infrastructure investment, cultural heritage and rapidly improving public realm is creating conditions for sustained long-term outperformance in this submarket.',
      'For buyers currently considering an investment in our Jewel of the Creek development, the Q2 data reinforces the strength of the underlying fundamentals supporting their investment decision.',
    ],
  },
]

export const allArticles: Article[] = [featured, ...articles]
