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
    title: 'Harico Punawale & Sentosa Punawale | 2 & 3 BHK Luxury Flats in Punawale, Pune',
    eyebrow: 'Micro-Market Intelligence',
    subtitle: 'Explore premium 2 & 3 BHK high-rise residences in Punawale with dual balconies, 50+ lifestyle amenities, and 2-minute expressway access.',
    description: 'Harico Punawale and Sentosa Punawale represent the finest residential developments in West Pune. Backed by the 39-year legacy of Sentosa Developers, Harico Edge and Harico Pride offer unmatched proximity to Hinjewadi IT Park Phase 1, Bhumkar Chowk, and the Mumbai-Pune Expressway.',
    targetLocation: 'Punawale',
    metaKeywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Luxury Flats Punawale, Flats near Bhumkar Chowk, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, पुनावळे फ्लॅट्स',
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
    title: 'Harico Kiwale & Harico Diwaam | 24-Storey 2 & 3 BHK Towers Opposite Sentosa',
    eyebrow: 'Signature Sky Landmark',
    subtitle: 'Discover Harico Diwaam (Harico Divaam Kiwale), the tallest 24-storey high-rise development in Kiwale-Ravet directly opposite Sentosa Water Park, starting from ₹71.00 Lacs*.',
    description: 'Harico Kiwale and Harico Diwaam deliver 5 iconic sky towers with 100+ resort-grade amenities, sky observation decks, and direct 2-minute connectivity to Mukai Chowk and the Mumbai-Pune Expressway.',
    targetLocation: 'Kiwale',
    metaKeywords: 'Harico Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK in Kiwale Ravet, 3 BHK in Kiwale Pune, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, किवाळे फ्लॅट्स',
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
    metaKeywords: 'Harico Diwaam Ravet, Harico Divaam Ravet, Flats in Ravet Pune, 2 BHK near Mukai Chowk, 3 BHK flats Ravet, Sentosa Group Ravet, Sentosa Developers Kiwale Ravet, Harico Kiwale, Ravet BRTS Connectivity Flats, Harico Estates Kiwale Ravet',
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
    metaKeywords: 'Flats in Tathawade, 2 BHK in Tathawade Pune, 3 BHK in Tathawade, Flats near JSPM Tathawade, Flats near Indira College, Wakad Hinjewadi Corridor Flats, Sentosa Serene Tathawade, Harico Punawale Tathawade, Sentosa Developers Tathawade',
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
    metaKeywords: 'Flats near Hinjewadi IT Park, 2 BHK near Hinjewadi Phase 1, 3 BHK near Hinjewadi, Homes for IT Professionals Pune, Harico Edge Hinjewadi, Harico Divaam Hinjewadi, Harico Punawale Hinjewadi, Harico Kiwale Hinjewadi, Sentosa Hinjewadi Flats',
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
    title: '2 BHK Flats in Punawale | Harico Punawale & Sentosa Edge from ₹74 Lacs*',
    eyebrow: 'Best Value 2 BHK',
    subtitle: 'Zero-wastage 2 BHK Smart & Premium residences with separate living and master bedroom balconies, starting from ₹74 Lacs*.',
    description: 'Experience optimum space utilization with Harico Edge’s 2 BHK configurations in Punawale. Each residence features large vitrified tiles, branded Kohler/Grohe sanitary fittings, modular switchboards, and scenic unobstructed views.',
    targetLocation: 'Punawale',
    targetBhk: '2 BHK',
    metaKeywords: 'Harico Punawale 2 BHK, Sentosa Punawale 2 BHK, 2 BHK Flats in Punawale, 2 BHK with 2 Balconies Punawale, Affordable Luxury 2 BHK Pune, Harico Edge 2 BHK Price, Sentosa Edge 2 BHK Punawale, Best 2 BHK in PCMC, 2 BHK under 75 lakh Punawale',
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
    title: '3 BHK Flats in Punawale | Harico Punawale & Sentosa Pride Luxury Residences',
    eyebrow: 'Ultra-Luxury 3 BHK',
    subtitle: 'Expansive 3 BHK homes featuring dedicated walk-in wardrobe spaces, grand living-dining halls, and premium finishes.',
    description: 'Designed for discerning homebuyers who refuse to compromise on space, our 3 BHK layouts in Punawale offer carpet areas up to 1,180 sq.ft with panoramic views and 50+ curated lifestyle amenities.',
    targetLocation: 'Punawale',
    targetBhk: '3 BHK',
    metaKeywords: 'Harico Punawale 3 BHK, Sentosa Punawale 3 BHK, 3 BHK Flats in Punawale, Large Carpet 3 BHK Pune, 3 BHK with Walk-In Wardrobe, Harico Edge 3 BHK, Harico Pride 3 BHK, Sentosa Edge 3 BHK, Sentosa Pride 3 BHK, 3 BHK under 1 crore Punawale',
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
    title: '2 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam from ₹71.00 Lacs*',
    eyebrow: 'Divine Living',
    subtitle: 'Live high above the city in Kiwale’s tallest 24-storey residential development opposite Sentosa Water Park, starting ₹71.00 Lacs*.',
    description: 'Harico Divaam offers 2 BHK Smart, Comfort, Prime, and Grand configurations in Kiwale. Spread across 5 acres with 5 iconic towers, residents enjoy private mini-theatres, box cricket turfs, and resort-grade pools.',
    targetLocation: 'Kiwale',
    targetBhk: '2 BHK',
    metaKeywords: 'Harico Kiwale 2 BHK, Harico Diwaam 2 BHK, 2 BHK Flats in Kiwale, 2 BHK in Kiwale Ravet starts 71 Lacs, Harico Divaam 2 BHK Price, Harico Diwaam 2 BHK, Sentosa Divaam 2 BHK, Sentosa Diwaam 2 BHK, 2 BHK under 75 lakh Kiwale',
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
    title: '3 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam Sky Residences',
    eyebrow: 'Sky Living Collection',
    subtitle: 'Palatial 3 BHK residences on 24-storey sky towers with 1,108 sq.ft carpet, designer lobbies, and 12 luxury guest suites.',
    description: 'Experience ultra-luxury at Harico Divaam in Kiwale. Designed for grand family celebrations and quiet sunset moments, our 3 BHK sky residences set a new standard for luxury in PCMC.',
    targetLocation: 'Kiwale',
    targetBhk: '3 BHK',
    metaKeywords: 'Harico Kiwale 3 BHK, Harico Diwaam 3 BHK, 3 BHK in Kiwale, 3 BHK Luxury High Rise Kiwale Ravet, Harico Divaam 3 BHK Price, Harico Diwaam 3 BHK, Tallest Towers 3 BHK Pune, Sentosa Divaam 3 BHK, 3 BHK under 1 crore Kiwale',
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
    title: 'Sentosa Punawale & Sentosa Developers Pune | 39-Year Real Estate Legacy',
    eyebrow: 'Institutional Heritage',
    subtitle: 'Explore 39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group.',
    description: 'Founded in 1987, Sentosa Developers has shaped the skyline of Pune, PCMC, and Maharashtra. From iconic residential townships to the legendary Sentosa Water Park & Resorts, our projects stand as enduring testaments to structural integrity, timely delivery, and unmatched customer trust.',
    metaKeywords: 'Sentosa Punawale, Sentosa Punwale, Sentosa Developers, Sentosa Developers Pune, Sentosa Group Pune, Sentosa Real Estate, Harico Estates Sentosa, Sentosa Water Park Builder, Sentosa Projects Pune, 39 Years Legacy Builder Pune, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale',
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
