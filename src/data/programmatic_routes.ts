export interface ProgrammaticRouteConfig {
  path: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  description: string;
  targetLocation?: string;
  targetBhk?: string;
  metaKeywords: string;
  highlights: string[];
}

export const programmaticRoutes: ProgrammaticRouteConfig[] = [
  // 1. Micro-Market Landing Pages
  {
    path: 'location/punawale',
    title: '2 & 3 BHK Luxury Flats in Punawale, Pune | Harico Estates & Sentosa',
    eyebrow: 'Micro-Market Intelligence',
    subtitle: 'Explore premium 2 & 3 BHK high-rise residences in Punawale with dual balconies, 50+ lifestyle amenities, and 2-minute expressway access.',
    description: 'Punawale has emerged as West Pune’s most sought-after residential destination, offering seamless proximity to Hinjewadi IT Park Phase 1, Wakad, and the Mumbai-Pune Expressway. Harico Edge and Harico Pride represent the pinnacle of architectural excellence in Punawale, backed by the 39-year legacy of Sentosa Developers.',
    targetLocation: 'Punawale',
    metaKeywords: '2 BHK Flats in Punawale, 3 BHK Luxury Flats Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge, Flats near Bhumkar Chowk, Flats near Akshara International School, Punawale Real Estate, MahaRERA Approved Flats Punawale',
    highlights: [
      '2 Minutes to Mumbai-Pune Expressway & Katraj-Dehu Bypass',
      '10 Minutes to Phoenix Mall of the Millennium, Wakad',
      '15 Minutes to Rajiv Gandhi Infotech Park, Hinjewadi',
      'Proximity to Akshara International & JSPM Imperial College',
      '100% MahaRERA Sanctioned & Bank Approved by SBI & HDFC'
    ]
  },
  {
    path: 'location/kiwale',
    title: 'Tallest 24-Storey 2 & 3 BHK Towers in Kiwale Ravet | Harico Divaam',
    eyebrow: 'Signature Sky Landmark',
    subtitle: 'Discover Harico Divaam, the tallest 24-storey high-rise development in Kiwale-Ravet directly opposite Sentosa Water Park, starting from ₹71.00 Lacs*.',
    description: 'Kiwale-Ravet offers pristine surroundings with direct 2-minute connectivity to Mukai Chowk and the expressway. Featuring 5 iconic sky towers, 100+ resort-grade amenities, sky observation decks, and luxury guest suites, Harico Divaam redefines lifestyle living in North-West Pune.',
    targetLocation: 'Kiwale',
    metaKeywords: 'Flats in Kiwale, 2 BHK in Kiwale Ravet, 3 BHK in Kiwale Pune, Harico Divaam Kiwale, Tallest Towers Kiwale, Sentosa Water Park Flats, Flats near Mukai Chowk, Symbiosis University Kiwale, Kiwale Ravet Real Estate',
    highlights: [
      'Tallest 24-Storey Towers in Kiwale-Ravet Corridor',
      'Directly Opposite Sentosa Water Park & Resort',
      '5 Iconic Sky Towers with 100+ Curated Lifestyle Amenities',
      'Air-Conditioned Co-Working Lounges & Creator Studios',
      'Prices starting at ₹71.00 Lacs* with Zero Space Wastage'
    ]
  },
  {
    path: 'location/ravet',
    title: 'Luxury 2 & 3 BHK Homes near Mukai Chowk Ravet | Sentosa Harico',
    eyebrow: 'Ravet-Kiwale Corridor',
    subtitle: 'High-connectivity luxury residences near Mukai Chowk, BRTS terminal, and Akurdi Railway Station with fast commute to Pune and PCMC.',
    description: 'Ravet is known as the Gateway to Pune, connecting the Expressway, PCMC industrial belt, and Hinjewadi IT hub. Harico Estates brings world-class Mivan monolithic concrete residences with state-of-the-art clubhouses, swimming pools, and rooftop sky lounges.',
    targetLocation: 'Kiwale',
    metaKeywords: 'Flats in Ravet Pune, 2 BHK near Mukai Chowk, 3 BHK flats Ravet, Harico Divaam Ravet, New Projects in Ravet, Sentosa Group Ravet, Ravet BRTS Connectivity Flats',
    highlights: [
      '5 Minutes from Mukai Chowk & Ravet BRTS Hub',
      '7 Minutes to Akurdi Railway Station',
      'Near D.Y. Patil University & Ojas Multispecialty Hospital',
      'Seamless Commute to Talegaon & Chakan Industrial Corridors',
      '100% Legal Title Clearance & MahaRERA Compliance'
    ]
  },
  {
    path: 'location/tathawade',
    title: 'Flats near Tathawade & Wakad IT Hub | Harico Estates Portfolio',
    eyebrow: 'Education & IT Belt',
    subtitle: 'Premium residential developments within 5 minutes of Tathawade educational institutes and Wakad shopping destinations.',
    description: 'Tathawade and Wakad are booming urban micro-markets favored by IT professionals and young families. Sentosa Developers and Harico Estates offer strategically situated homes that minimize daily commute while maximizing property capital appreciation.',
    targetLocation: 'Punawale',
    metaKeywords: 'Flats in Tathawade, 2 BHK in Tathawade Pune, Flats near JSPM Tathawade, Flats near Indira College, Wakad Hinjewadi Corridor Flats, Harico Edge Tathawade',
    highlights: [
      '5 Minutes to JSPM, Indira Institute & Balaji University',
      'Quick Access to Bhumkar Chowk & Dange Chowk',
      'High Rental Demand from IT Professionals & Students',
      'Mivan Monolithic Concrete Structural Strength',
      'Exclusive Lifestyle Amenities with Swimming Pool & Gym'
    ]
  },
  {
    path: 'location/hinjewadi',
    title: 'Luxury Residences near Hinjewadi Rajiv Gandhi Infotech Park | Harico',
    eyebrow: 'IT Commuter Haven',
    subtitle: 'Say goodbye to traffic with spacious 2 & 3 BHK homes located just 15 minutes from Hinjewadi Phase 1, Phase 2, and Phase 3.',
    description: 'For professionals working in TCS, Infosys, Wipro, Cognizant, and Tech Mahindra, Harico Estates in Punawale and Kiwale provides the ideal sanctuary. Enjoy peaceful residential living with fast expressway and arterial road connectivity to all tech hubs.',
    targetLocation: 'Punawale',
    metaKeywords: 'Flats near Hinjewadi IT Park, 2 BHK near Hinjewadi Phase 1, 3 BHK near Hinjewadi, Homes for IT Professionals Pune, Harico Edge Hinjewadi, Sentosa Hinjewadi Flats',
    highlights: [
      '15-18 Minutes Direct Drive to Hinjewadi Phase 1 & 2',
      'Avoiding Core Hinjewadi Traffic Chokepoints',
      'Dual Balcony Layouts Ideal for Hybrid & Remote Work',
      'High-Speed WiFi Co-Working Hubs Inside Community',
      'Attractive Rental Yields of 4.5% - 5.2% Annually'
    ]
  },

  // 2. Typology & High-Intent Search Landing Pages
  {
    path: 'flats/2-bhk-flats-in-punawale',
    title: '2 BHK Flats in Punawale with 2 Balconies from ₹74 Lacs* | Harico Edge',
    eyebrow: 'Best Value 2 BHK',
    subtitle: 'Zero-wastage 2 BHK Smart & Premium residences with separate living and master bedroom balconies, starting from ₹74 Lacs*.',
    description: 'Experience optimum space utilization with Harico Edge’s 2 BHK configurations in Punawale. Each residence features large vitrified tiles, branded Kohler/Grohe sanitary fittings, modular switchboards, and scenic unobstructed views.',
    targetLocation: 'Punawale',
    targetBhk: '2 BHK',
    metaKeywords: '2 BHK Flats in Punawale, 2 BHK with 2 Balconies Punawale, Affordable Luxury 2 BHK Pune, Harico Edge 2 BHK Price, Sentosa 2 BHK Punawale, Best 2 BHK in PCMC',
    highlights: [
      'Usable Carpet Areas: 741 sq.ft to 826 sq.ft',
      'Dual Private Balconies with Anti-Skid Wooden Vitrified Tiles',
      'Parallel Quartz Kitchen Countertop with Gas Pipeline Provision',
      'Starting from ₹74 Lacs* with Flexible Payment Milestones',
      'Ready for Site Visit & Model Apartment Tour'
    ]
  },
  {
    path: 'flats/3-bhk-flats-in-punawale',
    title: 'Spacious 3 BHK Luxury Residences in Punawale | Harico Edge & Pride',
    eyebrow: 'Ultra-Luxury 3 BHK',
    subtitle: 'Expansive 3 BHK homes featuring dedicated walk-in wardrobe spaces, grand living-dining halls, and premium finishes.',
    description: 'Designed for discerning homebuyers who refuse to compromise on space, our 3 BHK layouts in Punawale offer carpet areas up to 1,180 sq.ft with panoramic views and 50+ curated lifestyle amenities.',
    targetLocation: 'Punawale',
    targetBhk: '3 BHK',
    metaKeywords: '3 BHK Flats in Punawale, Large Carpet 3 BHK Pune, 3 BHK with Walk-In Wardrobe, Harico Edge 3 BHK, Harico Pride 3 BHK, Luxury Apartments Punawale',
    highlights: [
      'Carpet Areas up to 1,180 sq.ft with Walk-in Wardrobe Spaces',
      'Grand Double-Height Living Room Balconies',
      '3-Tier Security with Biometric Digital Door Locks',
      'Rooftop Clubhouse, Infinity Swimming Pool & Gym Access',
      'Prices starting from ₹89 Lacs* Onwards'
    ]
  },
  {
    path: 'flats/2-bhk-flats-in-kiwale',
    title: '2 BHK High-Rise Residences in Kiwale from ₹71.00 Lacs* | Harico Divaam',
    eyebrow: 'Divine Living',
    subtitle: 'Live high above the city in Kiwale’s tallest 24-storey residential development opposite Sentosa Water Park, starting ₹71.00 Lacs*.',
    description: 'Harico Divaam offers 2 BHK Smart, Comfort, Prime, and Grand configurations in Kiwale. Spread across 5 acres with 5 iconic towers, residents enjoy private mini-theatres, box cricket turfs, and resort-grade pools.',
    targetLocation: 'Kiwale',
    targetBhk: '2 BHK',
    metaKeywords: '2 BHK Flats in Kiwale, 2 BHK in Kiwale Ravet starts 71 Lacs, Harico Divaam 2 BHK Price, Sentosa Divine Kiwale 2 BHK, New Launch 2 BHK Kiwale',
    highlights: [
      'Starting Price: ₹71.00 Lacs* for 724 sq.ft Carpet',
      '24-Storey Elevation with Panoramic Mountain & Greenery Views',
      '100+ Amenities including Heated Pool & Pet Exercise Park',
      'Opposite Sentosa Water Park & 2 Mins to Expressway',
      'MahaRERA Registered PR1260002502389'
    ]
  },
  {
    path: 'flats/3-bhk-flats-in-kiwale',
    title: '3 BHK Panoramic Sky Residences in Kiwale Ravet | Harico Divaam',
    eyebrow: 'Sky Living Collection',
    subtitle: 'Palatial 3 BHK residences on 24-storey sky towers with 1,108 sq.ft carpet, designer lobbies, and 12 luxury guest suites.',
    description: 'Experience ultra-luxury at Harico Divaam in Kiwale. Designed for grand family celebrations and quiet sunset moments, our 3 BHK sky residences set a new standard for luxury in PCMC.',
    targetLocation: 'Kiwale',
    targetBhk: '3 BHK',
    metaKeywords: '3 BHK in Kiwale, 3 BHK Luxury High Rise Kiwale Ravet, Harico Divaam 3 BHK Price, Tallest Towers 3 BHK Pune, Sentosa Divine 3 BHK',
    highlights: [
      'Expansive 3 BHK Carpets from 920 sq.ft to 1,108 sq.ft',
      '24th Floor Sky Observation Lounge & Sky Gymnasium',
      '12 Fully Furnished Guest Suites for Visiting Relatives',
      'Private 40-Seater Mini Theatre with Dolby Atmos Sound',
      'Prices starting from ₹87.00 Lacs* Onwards'
    ]
  },

  // 3. Developer & Institutional Landing Pages
  {
    path: 'developer/sentosa-developers-pune',
    title: 'Sentosa Developers Pune | 39-Year Legacy (1987-2026) in Real Estate & Hospitality',
    eyebrow: 'Institutional Heritage',
    subtitle: 'Explore 39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group.',
    description: 'Founded in 1987, Sentosa Developers has shaped the skyline of Pune, PCMC, and Maharashtra. From iconic residential townships to the legendary Sentosa Water Park & Resorts, our projects stand as enduring testaments to structural integrity, timely delivery, and unmatched customer trust.',
    metaKeywords: 'Sentosa Developers, Sentosa Group Pune, Sentosa Real Estate, Harico Estates Sentosa, Sentosa Water Park Builder, Sentosa Projects Pune, 39 Years Legacy Builder Pune',
    highlights: [
      'Established in 1987 with over 39 Years of Proven Track Record',
      '20+ Completed Landmark Projects spanning 18+ Lakh Sq. Ft.',
      'Over 5,000+ Delighted Families Calling Sentosa Home',
      'Pioneers in Real Estate, Resorts, and Commercial Developments',
      '100% Zero-Litigation Track Record with Complete MahaRERA Compliance'
    ]
  },
  {
    path: 'maharera-registered-projects-pune',
    title: 'MahaRERA Approved & Registered Projects | Harico Estates Transparency',
    eyebrow: 'Regulatory Compliance',
    subtitle: '100% legal verification, clear title certificates, and sanctioned building layouts approved by Maharashtra Real Estate Regulatory Authority.',
    description: 'At Harico Estates, regulatory compliance and customer security are non-negotiable. Every phase of Harico Edge (P52100031773), Harico Divaam (PR1260002502389), and Harico Pride (P52100018471) is fully vetted and approved on the official MahaRERA portal.',
    metaKeywords: 'MahaRERA Approved Projects Pune, Harico Edge RERA P52100031773, Harico Divaam RERA PR1260002502389, Harico Pride RERA P52100018471, Verified Real Estate PCMC',
    highlights: [
      'Harico Edge Punawale: MahaRERA Reg No. P52100031773',
      'Harico Divaam Kiwale: MahaRERA Reg No. PR1260002502389',
      'Harico Pride Punawale: MahaRERA Reg No. P52100018471',
      'Direct QR Code Verification on All Sales Portals',
      'Approved by Leading PSU and Private Financial Institutions'
    ]
  }
];
