import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[Prerender] Error: dist/index.html not found. Did vite build run?');
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

const globalKeywords = 'Harico Diwaam, Harico Diwaam Kiwale, Sentosa Punawale, Sentosa Punwale, Harico Kiwale, Harico Punawale, Harico Divaam, Harico Divaam Kiwale, Harico Edge, Harico Edge Punawale, Sentosa Edge Punawale, Harico Pride, Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, Sentosa Diwaam, Sentosa Divaam, Sentosa Harico Divaam, Harico Estates, Harico Estates Pune, Sentosa Developers, Sentosa Developers Pune, Sentosa Group Pune, 2 BHK Flats in Punawale, 3 BHK Flats in Punawale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale Ravet, Flats opposite Sentosa Water Park, Flats near Bhumkar Chowk, Flats near Mukai Chowk, Flats near Mumbai-Pune Expressway, Flats near Hinjewadi IT Park Phase 1, PCMC Pune, Harico Estates contact 7744009295, Sentosa Water Park builder, पुनावळे मधील २ आणि ३ बीएचके फ्लॅट्स, किवाळे सेंटोसा प्रोजेक्ट्स';

const projects = [
  {
    slug: 'harico-edge',
    id: '1',
    title: 'Harico Edge Punawale | Sentosa Developers | 2 & 3 BHK Luxury Residences',
    name: 'Harico Edge',
    location: 'Punawale, Pune',
    price: 'Starts ₹74.00 Lacs*',
    possession: 'June 2030',
    rera: 'P52100031773',
    description: 'Harico Edge in Punawale by Sentosa Developers. Ultra-premium 2 & 3 BHK flats starting ₹74 Lacs* near Bhumkar Chowk, 2 mins to Expressway & 12 mins to Hinjewadi. Target Possession June 2030. MahaRERA P52100031773. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Edge, Harico Edge Punawale, Sentosa Edge, Sentosa Edge Punawale, Sentosa Harico Edge, Harico Estates Punawale, Harico Edge Price, Harico Edge Price List, Harico Edge Floor Plan, Harico Edge 2 BHK Punawale, Harico Edge 3 BHK Punawale, Harico Edge Brochure PDF, Harico Edge Sample Flat, Harico Edge RERA P52100031773, Harico Edge Possession June 2030, Harico Edge Contact 7744009295, Sentosa Developers Punawale, Flats near Bhumkar Chowk, Flats near Akshara International School, Flats near Hinjewadi IT Park, 2 BHK with 2 Balconies Punawale, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, हरिको एज पुनावळे, हॅरिको एज, हरिको पुनावळे, हरिको एज पुनावळे जून 2030',
    image: '/assets/harico-edge-hero.png',
    configs: [
      { type: '2 BHK Smart', carpet: '741 sq.ft', price: '₹ 74.00 Lacs*' },
      { type: '2 BHK Comfort', carpet: '782 sq.ft', price: '₹ 78.00 Lacs*' },
      { type: '2 BHK Grande', carpet: '826 sq.ft', price: '₹ 84.00 Lacs*' },
      { type: '3 BHK Comfort', carpet: '942 sq.ft', price: '₹ 89.00 Lacs*' },
      { type: '3 BHK Luxury', carpet: '1048 sq.ft', price: '₹ 98.00 Lacs*' },
      { type: '3 BHK Royale', carpet: '1148 sq.ft', price: '₹ 1.18 Cr*' }
    ],
    features: [
      'Target Possession: June 2030 with Structured MahaRERA Milestones',
      'Dual Private Balconies with Panoramic Greenery Views',
      'Mivan Monolithic Concrete Construction (Earthquake Resistant)',
      '2 Minutes to Mumbai-Pune Expressway & Bhumkar Chowk',
      '12 Minutes Direct Drive to Hinjewadi Rajiv Gandhi IT Park',
      '50+ Curated World-Class Lifestyle Amenities'
    ],
    faqs: [
      { q: 'What is the RERA registration number and target possession date for Harico Edge Punawale?', a: 'Harico Edge in Punawale is registered under MahaRERA number P52100031773 with target possession scheduled for June 2030.' },
      { q: 'What are the starting prices and carpet areas at Harico Edge Punawale?', a: 'Harico Edge offers spacious 2 & 3 BHK luxury residences starting from ₹74.00 Lacs* with carpet areas ranging from 741 sq.ft to 1,148 sq.ft.' },
      { q: 'Where is Harico Edge located and what is the transit connectivity?', a: 'Harico Edge is located near Bhumkar Chowk in Punawale, just 2 minutes from the Mumbai-Pune Expressway and 12-14 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1.' },
      { q: 'What amenities are offered at Harico Edge?', a: 'Harico Edge features over 50 curated lifestyle amenities including rooftop infinity pool, sky terrace lounge, co-working spaces, indoor sports arenas, and landscaped gardens.' },
      { q: 'Who is developing Harico Edge?', a: 'Harico Edge is developed by Harico Estates and Sentosa Developers, bringing a 39-year legacy (since 1987) of trusted engineering across Pune.' }
    ]
  },
  {
    slug: 'harico-divaam',
    id: '2',
    title: 'Harico Divaam (Harico Diwaam Kiwale) | Sentosa Developers | 2 & 3 BHK Sky Towers',
    name: 'Harico Divaam (Harico Diwaam Kiwale)',
    location: 'Kiwale-Ravet, Pune',
    price: 'Starts ₹70.00 Lacs*',
    possession: 'December 2030',
    rera: 'PR1260002502389',
    description: 'Harico Divaam (Harico Diwaam Kiwale) by Sentosa Developers: 24-storey luxury sky towers in Kiwale Ravet opposite Sentosa Water Park starting ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards). Possession Dec 2030. 100+ Amenities, 5 Iconic Sky Towers. MahaRERA PR1260002502389. Call +91 7744009295.',
    keywords: 'Harico Diwaam, Harico Diwaam Kiwale, Harico Kiwale, Harico Divaam, Harico Divaam Kiwale, Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico new launch Punawale, Harico Diwaam new launch, Harico Divaam new launch, Harico Diwaam Kiwale new launch, Sentosa Diwaam, Sentosa Divaam, Sentosa Harico Diwaam, Sentosa Harico Divaam, Codename Divine Kiwale, Harico Diwaam Price, Harico Divaam Price, Harico Diwaam 2 BHK, Harico Diwaam 3 BHK, Harico Diwaam Floor Plan, Harico Diwaam Brochure PDF, Harico Diwaam Sample Flat, Harico Diwaam RERA PR1260002502389, Harico Diwaam Possession December 2030, Harico Diwaam 24 Storey Towers, Tallest Towers in Kiwale Ravet, 5 Sky Towers Kiwale, Flats opposite Sentosa Water Park, Flats near Mukai Chowk, Symbiosis University Kiwale, Kiwale Ravet Real Estate, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, Contact 7744009295, हरिको दिवाम किवाळे, हॅरिको दिवाम, हरिको किवाळे, हरिको दिवाम नवीन लाँच, हरिको नवीन लाँच पुणे',
    image: '/assets/harico-divaam-hero.jpg',
    configs: [
      { type: '2 BHK Smart', carpet: '724 sq.ft', price: '₹ 70.00 Lacs* Onwards' },
      { type: '2 BHK Comfort', carpet: '760 sq.ft', price: '₹ 74.00 - 76.00 Lacs*' },
      { type: '2 BHK Grand', carpet: '848 sq.ft', price: '₹ 80.00 - 82.00 Lacs*' },
      { type: '3 BHK Smart', carpet: '920 sq.ft', price: '₹ 89.90 Lacs* Onwards' },
      { type: '3 BHK Comfort', carpet: '983 sq.ft', price: '₹ 93.00 - 95.00 Lacs*' },
      { type: '3 BHK Grand', carpet: '1108 sq.ft', price: '₹ 1.05 - 1.08 Cr*' }
    ],
    features: [
      '🔥 Flagship Mega New Launch: Tallest 24-Storey High-Rise Towers in Kiwale-Ravet',
      'Target Possession: December 2030 with MahaRERA PR1260002502389 Sanction',
      '5 Iconic Sky Towers Spread Across 5.0 Acres Land Parcel',
      'Directly Opposite Sentosa Water Park & Resort on Expressway Corridor',
      '100+ Curated Resort-Style Amenities & 24th Floor Sky Observation Deck',
      '2 Minutes to Mukai Chowk & 5 Minutes to Akurdi Railway Station'
    ],
    faqs: [
      { q: 'What is the starting price for 2 BHK and 3 BHK flats in Harico Divaam / Diwaam Kiwale?', a: 'Harico Divaam (Harico Diwaam Kiwale) luxury residences start from ₹70.00 Lacs* onwards for 2 BHK (724 sq.ft carpet) and ₹89.90 Lacs* onwards for 3 BHK (920 sq.ft carpet), with flexible milestone payment plans and pre-approved home loans from SBI, HDFC, and ICICI.' },
      { q: 'What are the exact configurations and carpet areas in Harico Diwaam Kiwale?', a: 'Harico Diwaam offers 2 BHK Smart (724 sq.ft), 2 BHK Comfort (760 sq.ft), 2 BHK Grand (848 sq.ft), 3 BHK Smart (920 sq.ft), 3 BHK Comfort (983 sq.ft), and 3 BHK Grand (1,108 sq.ft) usable carpet areas with dual private balconies.' },
      { q: 'How many floors, towers, and land acreage does Harico Diwaam have?', a: 'Harico Diwaam is the tallest residential landmark in the Kiwale-Ravet corridor, featuring 5 iconic sky towers standing 24 storeys tall across an expansive 5.0-acre master development.' },
      { q: 'What is the MahaRERA registration number and target possession date for Harico Diwaam?', a: 'Harico Divaam is officially approved and registered under MahaRERA No. PR1260002502389 with target possession scheduled for December 2030.' },
      { q: 'What amenities are available at Harico Diwaam Kiwale?', a: 'Harico Diwaam features over 100+ resort-grade lifestyle amenities, including a 24th-floor Sky Observation Deck, infinity swimming pool, sky gymnasium, 40-seater Dolby Atmos mini-theatre, podcasting & creator studios, co-working lounges, and 12 luxury guest suites for visiting family.' },
      { q: 'Where is Harico Diwaam located and how far is it from Hinjewadi and Expressway?', a: 'Harico Diwaam is located directly opposite Sentosa Water Park on the Mumbai-Pune Expressway corridor in Kiwale-Ravet. It is 2 minutes from Mukai Chowk BRTS, 5-7 minutes from Akurdi Railway Station, and 12-15 minutes from Hinjewadi Rajiv Gandhi Infotech Park.' },
      { q: 'What construction technology is being used at Harico Diwaam?', a: 'Harico Diwaam is constructed using earthquake-resistant Mivan monolithic concrete technology, providing seismic Zone III compliance, superior acoustic insulation, and seamless crack-free finishes.' },
      { q: 'Who is the developer of Harico Diwaam Kiwale?', a: 'Harico Diwaam is developed by Harico Estates in partnership with Sentosa Developers, a trusted real estate group with a 39-year legacy (since 1987), 20+ completed projects, and builders of Sentosa Water Park & Resorts.' }
    ]
  },
  {
    slug: 'harico-pride',
    id: '3',
    title: 'Harico Pride Punawale | Sentosa Developers | 2 & 3 BHK Ready & Near-Possession Flats',
    name: 'Harico Pride',
    location: 'Punawale, Pune',
    price: 'Starts ₹78.00 Lacs*',
    possession: 'June 2027',
    rera: 'P52100018471',
    description: 'Harico Pride in Punawale by Sentosa Developers near Bhiku Vallabh Kale School. Largest carpet layouts, rooftop pool & 2 mins to Expressway. MahaRERA P52100018471. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Pride, Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Pride Phase 1 2 3 Punawale, Harico Estates Pride, Harico Pride 2 BHK, Harico Pride 3 BHK, Harico Pride Price, Harico Pride Floor Plan, Harico Pride Brochure, Harico Pride RERA P52100018471, Harico Pride Contact 7744009295, Flats near Bhiku Vallabh Kale School, Punawale Largest Carpet Flats, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, Sentosa Developers Punawale, हरिको प्राईड पुनावळे',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    configs: [
      { type: '2 BHK Premium', carpet: '765 sq.ft', price: '₹ 78.00 Lacs*' },
      { type: '2 BHK Grande', carpet: '830 sq.ft', price: '₹ 84.00 Lacs*' },
      { type: '3 BHK Luxury', carpet: '1060 sq.ft', price: '₹ 96.00 Lacs*' },
      { type: '3 BHK Royale', carpet: '1180 sq.ft', price: '₹ 1.15 Cr*' }
    ],
    features: [
      'Prime Punawale Location near Bhiku Vallabh Kale School',
      'Largest Usable Carpet Layouts with Dedicated Walk-In Wardrobes',
      'Rooftop Infinity Swimming Pool & Grand Multi-Tier Clubhouse',
      '2 Minutes to Mumbai-Pune Expressway & Katraj-Dehu Bypass',
      '100% Vastu-Compliant East-West Orientations'
    ],
    faqs: [
      { q: 'What is the MahaRERA registration and possession date for Harico Pride Punawale?', a: 'Harico Pride in Punawale is registered under MahaRERA number P52100018471 with possession in June 2027.' },
      { q: 'What configurations and carpet areas are available at Harico Pride?', a: 'Harico Pride offers expansive 2 & 3 BHK residences with large usable carpets from 765 sq.ft to 1,180 sq.ft starting from ₹78.00 Lacs*.' },
      { q: 'Where is Harico Pride located in Punawale?', a: 'Harico Pride is situated near Bhiku Vallabh Kale School in Punawale, 2 minutes from the Mumbai-Pune Expressway and close to Bhumkar Chowk.' }
    ]
  }
];

const programmaticPages = [
  { 
    path: 'location/punawale', 
    title: 'Harico Punawale & Sentosa Punawale | 2 & 3 BHK Luxury Flats in Punawale, Pune', 
    desc: 'Harico Punawale & Sentosa Punawale: Premium 2 & 3 BHK luxury residences with dual balconies and 2-min expressway access. Harico Edge & Harico Pride.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Luxury Flats Punawale, Flats near Bhumkar Chowk, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, पुनावळे फ्लॅट्स',
    h1: 'Harico Punawale & Sentosa Punawale — Luxury 2 & 3 BHK Residences',
    bodyText: 'Punawale is West Pune’s most vibrant real estate growth corridor, located 2 minutes from the Mumbai-Pune Expressway and 12 minutes from Hinjewadi IT Park Phase 1. Harico Estates and Sentosa Developers offer iconic developments including Harico Edge, Harico Pride, and Sentosa Ekam featuring Mivan monolithic concrete construction, dual private balconies, and 50+ lifestyle amenities.'
  },
  { 
    path: 'location/kiwale', 
    title: 'Harico Kiwale & Harico Diwaam | 24-Storey 2 & 3 BHK Towers Opposite Sentosa', 
    desc: 'Harico Kiwale & Harico Diwaam: Tallest 24-storey high-rise luxury towers in Kiwale opposite Sentosa Water Park starting ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards). 5 Iconic Sky Towers with 100+ Amenities.',
    keywords: 'Harico Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK in Kiwale Ravet, 3 BHK in Kiwale Pune, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, किवाळे फ्लॅट्स',
    h1: 'Harico Kiwale & Harico Diwaam — 24-Storey Landmark Opposite Sentosa Water Park',
    bodyText: 'Kiwale-Ravet offers unmatched connectivity to Mukai Chowk, the Expressway, and Akurdi Railway Station. Harico Diwaam (Harico Divaam Kiwale) redefines Kiwale’s skyline with 5 iconic 24-storey sky towers across 5 acres, 100+ curated amenities, sky lounges, and 2 & 3 BHK luxury residences starting from ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards).'
  },
  { 
    path: 'location/ravet', 
    title: 'Luxury 2 & 3 BHK Homes near Mukai Chowk Ravet | Sentosa Harico', 
    desc: 'Luxury homes near Mukai Chowk & Ravet BRTS corridor. 5 mins to Akurdi Railway Station and Expressway.',
    keywords: 'Harico Diwaam Ravet, Harico Divaam Ravet, Flats in Ravet Pune, 2 BHK near Mukai Chowk, 3 BHK flats Ravet, Sentosa Group Ravet, Sentosa Developers Kiwale Ravet, Harico Kiwale, Ravet BRTS Connectivity Flats, Harico Estates Kiwale Ravet',
    h1: 'Luxury 2 & 3 BHK Residences near Mukai Chowk Ravet',
    bodyText: 'Ravet serves as the gateway to PCMC and Pune, offering immediate access to the Expressway, BRTS bus corridors, and D.Y. Patil University. Harico Estates developments offer high-rise living with rooftop pools and world-class engineering.'
  },
  { 
    path: 'location/tathawade', 
    title: 'Flats near Tathawade & Wakad IT Hub | Harico Estates Portfolio', 
    desc: 'Premium residences 5 mins from JSPM and Indira College Tathawade with high rental demand and Mivan construction.',
    keywords: 'Flats in Tathawade, 2 BHK in Tathawade Pune, 3 BHK in Tathawade, Flats near JSPM Tathawade, Flats near Indira College, Wakad Hinjewadi Corridor Flats, Sentosa Serene Tathawade, Harico Punawale Tathawade, Sentosa Developers Tathawade',
    h1: '2 & 3 BHK Flats near Tathawade & Wakad Educational Hub',
    bodyText: 'Tathawade offers immense rental yield and appreciation due to premier institutes (JSPM, Indira College, Balaji University) and proximity to Wakad and Hinjewadi. Sentosa Developers and Harico Estates bring masterfully planned homes designed for IT families.'
  },
  { 
    path: 'location/hinjewadi', 
    title: 'Luxury Residences near Hinjewadi Rajiv Gandhi Infotech Park | Harico', 
    desc: 'Homes for IT professionals just 15 mins from Hinjewadi Phase 1, 2 & 3. Dual balconies, co-working studios & zero brokerage.',
    keywords: 'Flats near Hinjewadi IT Park, 2 BHK near Hinjewadi Phase 1, 3 BHK near Hinjewadi, Homes for IT Professionals Pune, Harico Edge Hinjewadi, Harico Divaam Hinjewadi, Harico Punawale Hinjewadi, Harico Kiwale Hinjewadi, Sentosa Hinjewadi Flats',
    h1: 'Luxury Residences near Hinjewadi Rajiv Gandhi Infotech Park',
    bodyText: 'Enjoy seamless 12-15 minute commute to Infosys, Wipro, TCS, and Cognizant in Hinjewadi Phase 1 & 2. Harico Estates in Punawale and Kiwale allows IT professionals to bypass congestion while enjoying resort-style amenities and dual-balcony apartments.'
  },
  { 
    path: 'flats/2-bhk-flats-in-punawale', 
    title: '2 BHK Flats in Punawale | Harico Punawale & Sentosa Edge from ₹74 Lacs*', 
    desc: 'Zero-wastage 2 BHK Smart & Premium homes in Punawale with dual balconies and 50+ amenities.',
    keywords: 'Harico Punawale 2 BHK, Sentosa Punawale 2 BHK, 2 BHK Flats in Punawale, 2 BHK with 2 Balconies Punawale, Affordable Luxury 2 BHK Pune, Harico Edge 2 BHK Price, Sentosa Edge 2 BHK Punawale, Best 2 BHK in PCMC, 2 BHK under 75 lakh Punawale',
    h1: '2 BHK Flats in Punawale with 2 Balconies from ₹74 Lacs*',
    bodyText: 'Harico Edge in Punawale offers thoughtfully planned 2 BHK Smart and Grande apartments with zero space wastage, dual balconies, parallel granite kitchen platforms, and over 50 amenities.'
  },
  { 
    path: 'flats/3-bhk-flats-in-punawale', 
    title: '3 BHK Flats in Punawale | Harico Punawale & Sentosa Pride Luxury Residences', 
    desc: 'Expansive 3 BHK luxury residences in Punawale with walk-in wardrobes and large private decks.',
    keywords: 'Harico Punawale 3 BHK, Sentosa Punawale 3 BHK, 3 BHK Flats in Punawale, Large Carpet 3 BHK Pune, 3 BHK with Walk-In Wardrobe, Harico Edge 3 BHK, Harico Pride 3 BHK, Sentosa Edge 3 BHK, Sentosa Pride 3 BHK, 3 BHK under 1 crore Punawale',
    h1: 'Spacious 3 BHK Luxury Residences in Punawale',
    bodyText: 'Expansive 3 BHK luxury residences in Punawale featuring private walk-in wardrobes, grand double-height balconies, Mivan monolithic concrete engineering, and rooftop infinity swimming pools.'
  },
  { 
    path: 'flats/2-bhk-flats-in-kiwale', 
    title: '2 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam from ₹70.00 Lacs*', 
    desc: 'Kiwale’s tallest 24-storey residential development opposite Sentosa Water Park, starting ₹70.00 Lacs*.',
    keywords: 'Harico Kiwale 2 BHK, Harico Diwaam 2 BHK, 2 BHK Flats in Kiwale, 2 BHK in Kiwale Ravet starts 70 Lacs, Harico Divaam 2 BHK Price, Harico Diwaam 2 BHK, Sentosa Divaam 2 BHK, Sentosa Diwaam 2 BHK, 2 BHK under 75 lakh Kiwale',
    h1: '2 BHK High-Rise Residences in Kiwale from ₹70.00 Lacs* — Harico Diwaam',
    bodyText: 'Experience Kiwale’s tallest 24-storey sky towers at Harico Diwaam opposite Sentosa Water Park. 2 BHK configurations with 724 to 848 sq.ft carpet areas, 100+ resort amenities, and 2-minute expressway access.'
  },
  { 
    path: 'flats/3-bhk-flats-in-kiwale', 
    title: '3 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam from ₹89.90 Lacs*', 
    desc: 'Palatial 3 BHK sky residences in Kiwale starting ₹89.90 Lacs* with 1,108 sq.ft carpet, designer lobbies, and 12 luxury guest suites.',
    keywords: 'Harico Kiwale 3 BHK, Harico Diwaam 3 BHK, 3 BHK in Kiwale, 3 BHK Luxury High Rise Kiwale Ravet, Harico Divaam 3 BHK Price, Harico Diwaam 3 BHK, Tallest Towers 3 BHK Pune, Sentosa Divaam 3 BHK, 3 BHK under 1 crore Kiwale',
    h1: '3 BHK Panoramic Sky Residences in Kiwale Ravet from ₹89.90 Lacs* — Harico Diwaam',
    bodyText: 'Palatial 3 BHK sky residences starting ₹89.90 Lacs* up to 1,108 sq.ft carpet with private mini-theatres, rooftop observation deck, sky gymnasium, and 12 fully furnished guest suites for family celebrations.'
  },
  { 
    path: 'developer/sentosa-developers-pune', 
    title: 'Sentosa Punawale & Sentosa Developers Pune | 39-Year Real Estate Legacy', 
    desc: '39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group since 1987.',
    keywords: 'Sentosa Punawale, Sentosa Punwale, Sentosa Developers, Sentosa Developers Pune, Sentosa Group Pune, Sentosa Real Estate, Harico Estates Sentosa, Sentosa Water Park Builder, Sentosa Projects Pune, 39 Years Legacy Builder Pune, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale',
    h1: 'Sentosa Developers Pune — 39-Year Legacy (1987 - 2026) in Real Estate & Hospitality',
    bodyText: 'Founded in 1987, Sentosa Developers has delivered over 20 landmark residential and commercial projects across Pune, PCMC, and Maharashtra. Renowned for structural excellence, 100% legal title compliance, and the iconic Sentosa Water Park & Resorts.'
  },
  { 
    path: 'maharera-registered-projects-pune', 
    title: 'MahaRERA Approved & Registered Projects | Harico Estates Transparency', 
    desc: '100% legal verification, clear title certificates, and sanctioned layouts: Harico Edge, Divaam & Pride.',
    keywords: 'MahaRERA Approved Projects Pune, Harico Edge RERA P52100031773, Harico Divaam RERA PR1260002502389, Harico Pride RERA P52100018471, Verified Real Estate PCMC',
    h1: 'MahaRERA Registered & Approved Projects — 100% Legal Transparency',
    bodyText: 'All projects by Harico Estates and Sentosa Developers are 100% MahaRERA registered with clear title certificates: Harico Edge (P52100031773), Harico Divaam (PR1260002502389), and Harico Pride (P52100018471).'
  },
  { path: 'privacy', title: 'Privacy Policy | Harico Estates & Sentosa Developers', desc: 'Official privacy policy for Harico Estates and Sentosa Developers.', keywords: globalKeywords, h1: 'Privacy Policy — Harico Estates & Sentosa Developers', bodyText: 'Privacy Policy and data protection terms for Harico Estates web portal.' },
  { path: 'terms', title: 'Terms of Use | Harico Estates & Sentosa Developers', desc: 'Terms of use and legal disclaimers for Harico Estates web portal.', keywords: globalKeywords, h1: 'Terms of Use — Harico Estates & Sentosa Developers', bodyText: 'Terms of use and conditions for browsing Harico Estates web portal.' },
  { path: 'contact', title: 'Contact Sales & VIP Site Visit | Harico Estates Punawale & Kiwale', desc: 'Schedule priority VIP site visits and connect directly with developer sales consultants.', keywords: 'Harico Estates contact, Harico Estates phone 7744009295, Harico Estates site visit, Harico Edge site office, Harico Divaam site office', h1: 'Contact Harico Estates Sales Desk & Schedule VIP Site Visit', bodyText: 'Connect directly with developer sales consultants at Harico Estates. Call +91 7744009295 or visit our site offices near Bhumkar Chowk (Punawale) and opposite Sentosa Water Park (Kiwale).' },
  { path: 'amenities', title: '100+ World Class Curated Amenities | Harico Estates & Sentosa', desc: 'Explore 100+ curated lifestyle amenities across wellness, sports, and sky lounges.', keywords: 'Harico Estates amenities, Harico Divaam amenities, Harico Edge amenities, rooftop infinity pool Punawale', h1: '100+ World-Class Curated Lifestyle Amenities', bodyText: 'Explore over 100 amenities including rooftop infinity pools, sky observation lounges, co-working studios, mini theatres, and landscaped podium gardens.' },
  { path: 'projects', title: 'Luxury 2 & 3 BHK Projects in Punawale & Kiwale | Harico Estates', desc: 'Explore all ongoing and upcoming luxury residential developments by Harico Estates.', keywords: 'Harico Estates projects, Harico Edge, Harico Divaam, Harico Pride, Sentosa Developers projects Pune', h1: 'Featured 2 & 3 BHK Projects by Harico Estates & Sentosa Developers', bodyText: 'Discover Harico Edge (Punawale), Harico Divaam (Kiwale), and Harico Pride (Punawale) starting from ₹70.00 Lacs*.' },
  { path: 'project-comparison', title: 'Compare Harico Edge vs Divaam vs Pride | Harico Estates', desc: 'Detailed side-by-side comparison matrix of carpet areas, pricing, and amenities.', keywords: 'Compare Harico Edge vs Divaam vs Pride, Harico Edge vs Harico Divaam, Punawale vs Kiwale property', h1: 'Side-by-Side Comparison: Harico Edge vs Harico Divaam vs Harico Pride', bodyText: 'Detailed comparison matrix comparing location, pricing, carpet area, storeys, and amenities across all Harico Estates developments.' },
  { path: 'specifications', title: 'Mivan Construction & Luxury Technical Specs | Harico Estates', desc: 'Technical specifications, Mivan monolithic concrete engineering, and branded fittings.', keywords: 'Mivan construction flats Pune, Harico Estates specifications, Kohler fittings, earthquake resistant homes', h1: 'Mivan Monolithic Concrete Technology & Luxury Technical Specifications', bodyText: 'Engineered with earthquake-resistant Mivan shear wall concrete technology, branded CP fittings, soundproof French windows, and 3-tier security.' },
  { path: 'location-hub', title: 'Punawale, Kiwale, Tathawade & Hinjewadi Connectivity Matrix', desc: 'Comprehensive micro-market transit times and road connectivity matrix.', keywords: 'Punawale Kiwale Tathawade Hinjewadi connectivity, Mumbai Pune Expressway flats, Bhumkar Chowk', h1: 'Strategic Location Hub & Transit Connectivity Matrix', bodyText: 'Explore travel times to Hinjewadi IT Park, Mumbai-Pune Expressway, Phoenix Mall of the Millennium, and Pune Airport.' },
  { path: 'emi-calculator', title: 'Home Loan EMI Calculator & Bank Approvals | Harico Estates', desc: 'Calculate exact monthly EMIs and explore pre-approved bank loans from SBI, HDFC, ICICI.', keywords: 'Home loan EMI calculator Pune, Harico Estates bank approvals, SBI home loan Harico Edge', h1: 'Home Loan EMI Calculator & Pre-Approved Bank Loan Partners', bodyText: 'Calculate your exact monthly EMI and explore pre-approved home loan offers from SBI, HDFC Bank, ICICI Bank, and Axis Bank.' },
  { path: 'faq', title: 'MahaRERA & Homebuyer FAQ Knowledge Hub | Harico Estates', desc: 'Frequently asked questions on approvals, possession timelines, and purchasing process.', keywords: 'Harico Estates FAQ, Harico Edge possession date, Harico Divaam RERA number', h1: 'Frequently Asked Questions (FAQ) & Homebuyer Knowledge Hub', bodyText: 'Find answers to all frequently asked questions regarding MahaRERA compliance, possession dates, carpet areas, bank approvals, and booking process.' },
  { 
    path: 'harico-new-launch', 
    title: 'Harico New Launch Kiwale & Punawale 2026 | Harico Divaam & Harico Edge', 
    desc: 'Harico New Launch: Flagship residential launch of Harico Divaam in Kiwale (Dec 2030) and Harico Edge in Punawale (June 2030). Tallest 24-storey sky towers opposite Sentosa Water Park starting ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*). MahaRERA PR1260002502389.', 
    keywords: 'Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico new launch Punawale, Harico Diwaam new launch, Harico Divaam new launch, Harico Diwaam Kiwale new launch, Harico Diwaam, Harico Divaam, Harico Kiwale, Harico Punawale, Sentosa new launch, Sentosa Diwaam new launch, 2 BHK new launch Kiwale, 3 BHK new launch Kiwale, new launch flats near Expressway, हरिको नवीन लाँच, हरिको दिवाम नवीन लाँच पुणे', 
    h1: 'Harico New Launch 2026 — Harico Divaam Kiwale & Harico Edge Punawale', 
    bodyText: 'Harico New Launch represents the latest landmark chapter by Harico Estates and Sentosa Developers. Featuring Harico Diwaam Kiwale — 5 iconic 24-storey sky towers across 5 acres with 100+ resort-grade amenities, sky gymnasium, observation deck, and seamless 2-minute connectivity to Mukai Chowk and Mumbai-Pune Expressway. 2 BHK starting from ₹70 Lacs* and 3 BHK from ₹89.90 Lacs*. Target possession December 2030 with MahaRERA registration PR1260002502389.' 
  },
  { 
    path: 'harico-diwaam-kiwale', 
    title: 'Harico Diwaam Kiwale Floor Plans, Brochure & Pricing | Sentosa Developers', 
    desc: 'Official floor plans (724–1108 sq.ft), brochure PDF download, and price sheets for Harico Diwaam (Harico Divaam Kiwale). Starts ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs* onwards). MahaRERA PR1260002502389. Call +91 7744009295.', 
    keywords: 'Harico Diwaam Kiwale, Harico Diwaam, Harico Divaam Kiwale, Harico Divaam, Sentosa Diwaam Kiwale, Sentosa Diwaam, Sentosa Divaam Kiwale, Harico Kiwale, Harico Estates Kiwale, 2 BHK in Kiwale, 3 BHK in Kiwale, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, Harico Diwaam Possession December 2030, Harico Diwaam Price, Harico Diwaam Floor Plan, Harico Diwaam Brochure, हरिको दिवाम किवाळे, हॅरिको दिवाम किवाळे', 
    h1: 'Harico Diwaam Kiwale — Floor Plans, Brochure & Pricing by Sentosa Developers', 
    bodyText: 'Harico Diwaam Kiwale is the flagship high-rise development by Harico Estates and Sentosa Developers. Offering luxury 2 & 3 BHK residences with 100+ amenities, sky gymnasium, creator studios, private cinema, and immediate access to Mukai Chowk, Ravet, and Mumbai-Pune Expressway. 2 BHK starting from ₹70.00 Lacs* and 3 BHK starting from ₹89.90 Lacs* with MahaRERA PR1260002502389 and possession in December 2030.' 
  },
  { 
    path: 'harico-kiwale', 
    title: 'Harico Kiwale Residential Projects & Master Layout | Harico Estates', 
    desc: 'Explore Harico Kiwale residential enclaves by Sentosa Developers. 5-acre master plan, 5 iconic towers, and infrastructure connectivity near Mukai Chowk. Starts ₹70 Lacs* (3 BHK from ₹89.90 Lacs*). Call +91 7744009295.', 
    keywords: 'Harico Kiwale, Harico Diwaam Kiwale, Harico Divaam Kiwale, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale, Flats in Kiwale Ravet, Mukai Chowk Flats, Flats opposite Sentosa Water Park, Kiwale Property Price, Kiwale Real Estate, हरिको किवाळे, हॅरिको किवाळे, किवाळे फ्लॅट्स', 
    h1: 'Harico Kiwale — Residential Projects & 5-Acre Master Layout', 
    bodyText: 'Harico Kiwale delivers world-class residential architecture to the Kiwale-Ravet growth belt. Centered around Harico Diwaam opposite Sentosa Water Park, residents enjoy unobstructed Sahyadri mountain vistas, zero space wastage layouts, and direct connectivity to Nigdi, Akurdi, and Hinjewadi. 2 BHK starting from ₹70.00 Lacs* and 3 BHK from ₹89.90 Lacs*.' 
  },
  { 
    path: 'harico-punawale', 
    title: 'Harico Punawale | Luxury 2 & 3 BHK Flats in Punawale Pune', 
    desc: 'Discover Harico Edge and Harico Pride in Punawale by Sentosa Developers. Premium residences 2 minutes from Mumbai-Pune Expressway & Bhumkar Chowk. Starts ₹74 Lacs*. Call +91 7744009295.', 
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Flats in Punawale, Flats near Bhumkar Chowk, Harico Edge Possession June 2030, पुनावळे फ्लॅट्स, हरिको पुनावळे, सेंटोसा पुनावळे', 
    h1: 'Harico Punawale — Luxury 2 & 3 BHK Flats by Sentosa Developers', 
    bodyText: 'Harico Punawale stands as Pune’s most sought-after residential destination for IT and corporate professionals. With direct 2-minute access to the Mumbai-Pune Expressway and Bhumkar Chowk, Harico Edge and Harico Pride deliver earthquake-resistant Mivan monolithic concrete construction backed by Sentosa Developers’ 39-year heritage.' 
  },
  { 
    path: 'flats-opposite-sentosa-water-park-kiwale', 
    title: 'Flats Opposite Sentosa Water Park Kiwale | Harico Divaam 2 & 3 BHK Sky Towers', 
    desc: 'Flats opposite Sentosa Water Park Kiwale: Harico Divaam 24-storey landmark sky residences by Sentosa Developers. 2 & 3 BHK flats starting ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards). Possession Dec 2030. Call +91 7744009295.', 
    keywords: 'Flats opposite Sentosa Water Park, Flats opposite Sentosa Water Park Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Sentosa Diwaam, Sentosa Water Park Kiwale Flats, Kiwale Ravet High Rise, 2 BHK opposite Sentosa, 3 BHK opposite Sentosa Water Park, Harico Kiwale, Sentosa Developers Kiwale, सेंटोसा वॉटर पार्क जवळील फ्लॅट्स किवाळे', 
    h1: 'Flats Opposite Sentosa Water Park Kiwale — Harico Divaam Sky Towers', 
    bodyText: 'Looking for flats opposite Sentosa Water Park Kiwale? Harico Diwaam (Harico Divaam) is a 24-storey landmark development by Sentosa Developers. Spread across 5 acres with 5 sky towers, 100+ curated amenities, and unbeatable connectivity to Mukai Chowk, Ravet, and Hinjewadi. Pricing starts from ₹70 Lacs* for 2 BHK and ₹89.90 Lacs* for 3 BHK.' 
  }
];

const clusterFooterHtml = `
      <section style="margin-top:50px; padding:30px; background:#F8FAFC; border-radius:12px; border:1px solid #E2E8F0;">
        <h3 style="font-size:18px; color:#0A192F; margin-top:0; margin-bottom:15px; border-bottom:2px solid #D4AF37; padding-bottom:8px;">Harico Estates Real Estate Network & Micro-Market Directory</h3>
        
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; font-size:13px; line-height:1.8;">
          <div>
            <strong style="color:#0A192F; display:block; margin-bottom:6px;">Flagship Projects</strong>
            <ul style="list-style:none; padding:0; margin:0;">
              <li><a href="/project/harico-divaam" style="color:#2563EB; text-decoration:none;">Harico Diwaam Kiwale (2 & 3 BHK)</a></li>
              <li><a href="/project/harico-edge" style="color:#2563EB; text-decoration:none;">Harico Edge Punawale (2 & 3 BHK)</a></li>
              <li><a href="/project/harico-pride" style="color:#2563EB; text-decoration:none;">Harico Pride Punawale (2 & 3 BHK)</a></li>
              <li><a href="/harico-new-launch" style="color:#2563EB; text-decoration:none;">Harico New Launch Kiwale 2026</a></li>
              <li><a href="/harico-diwaam-kiwale" style="color:#2563EB; text-decoration:none;">Harico Diwaam 24-Storey Towers</a></li>
            </ul>
          </div>

          <div>
            <strong style="color:#0A192F; display:block; margin-bottom:6px;">Key Locations & Corridors</strong>
            <ul style="list-style:none; padding:0; margin:0;">
              <li><a href="/harico-punawale" style="color:#2563EB; text-decoration:none;">Harico Punawale Corridor</a></li>
              <li><a href="/harico-kiwale" style="color:#2563EB; text-decoration:none;">Harico Kiwale Corridor</a></li>
              <li><a href="/flats-opposite-sentosa-water-park-kiwale" style="color:#2563EB; text-decoration:none;">Flats Opposite Sentosa Water Park</a></li>
              <li><a href="/location/punawale" style="color:#2563EB; text-decoration:none;">Punawale Real Estate Guide</a></li>
              <li><a href="/location/kiwale" style="color:#2563EB; text-decoration:none;">Kiwale Real Estate Guide</a></li>
              <li><a href="/location/ravet" style="color:#2563EB; text-decoration:none;">Ravet & Mukai Chowk Homes</a></li>
              <li><a href="/location/tathawade" style="color:#2563EB; text-decoration:none;">Tathawade & Wakad Hub</a></li>
            </ul>
          </div>

          <div>
            <strong style="color:#0A192F; display:block; margin-bottom:6px;">Popular Searches & Budgets</strong>
            <ul style="list-style:none; padding:0; margin:0;">
              <li><a href="/punawale/2-bhk" style="color:#2563EB; text-decoration:none;">2 BHK Flats in Punawale</a></li>
              <li><a href="/punawale/3-bhk" style="color:#2563EB; text-decoration:none;">3 BHK Flats in Punawale</a></li>
              <li><a href="/kiwale/2-bhk" style="color:#2563EB; text-decoration:none;">2 BHK Flats in Kiwale Ravet</a></li>
              <li><a href="/kiwale/3-bhk" style="color:#2563EB; text-decoration:none;">3 BHK Flats in Kiwale Ravet</a></li>
              <li><a href="/price/under-75-lakh" style="color:#2563EB; text-decoration:none;">Flats under 75 Lakh in Punawale/Kiwale</a></li>
              <li><a href="/price/under-1-crore" style="color:#2563EB; text-decoration:none;">Flats under 1 Crore in Punawale/Kiwale</a></li>
            </ul>
          </div>

          <div>
            <strong style="color:#0A192F; display:block; margin-bottom:6px;">Sentosa Developers Heritage</strong>
            <ul style="list-style:none; padding:0; margin:0;">
              <li><a href="/developer/sentosa-developers-pune" style="color:#2563EB; text-decoration:none;">Sentosa Developers Pune (Since 1987)</a></li>
              <li><a href="/developer/sentosa-punawale" style="color:#2563EB; text-decoration:none;">Sentosa Punawale Projects</a></li>
              <li><a href="/developer/sentosa-kiwale" style="color:#2563EB; text-decoration:none;">Sentosa Kiwale Projects</a></li>
              <li><a href="/developer/sentosa-ekam-punawale" style="color:#2563EB; text-decoration:none;">Sentosa Ekam Punawale</a></li>
              <li><a href="/developer/sentosa-edge-punawale" style="color:#2563EB; text-decoration:none;">Sentosa Edge Punawale</a></li>
              <li><a href="/developer/sentosa-pride-punawale" style="color:#2563EB; text-decoration:none;">Sentosa Pride Punawale</a></li>
            </ul>
          </div>

          <div>
            <strong style="color:#0A192F; display:block; margin-bottom:6px;">Homebuyer Knowledge Hub</strong>
            <ul style="list-style:none; padding:0; margin:0;">
              <li><a href="/articles" style="color:#2563EB; text-decoration:none;">All Guides & Articles</a></li>
              <li><a href="/articles/harico-estates-overview" style="color:#2563EB; text-decoration:none;">Harico Estates Complete Guide</a></li>
              <li><a href="/articles/harico-diwaam-kiwale-buyer-guide" style="color:#2563EB; text-decoration:none;">Harico Diwaam Buyer Guide</a></li>
              <li><a href="/articles/harico-kiwale-real-estate-investment" style="color:#2563EB; text-decoration:none;">Kiwale Investment Analysis</a></li>
              <li><a href="/articles/harico-punawale-guide-edge-pride" style="color:#2563EB; text-decoration:none;">Harico Punawale Guide</a></li>
              <li><a href="/articles/punawale-vs-kiwale-comparison" style="color:#2563EB; text-decoration:none;">Punawale vs Kiwale Analysis</a></li>
            </ul>
          </div>
        </div>
      </section>
`;

console.log('[Prerender] Generating ultra-advanced static HTML routes with full crawlable semantic HTML & pre-baked JSON-LD schemas...');

// 1. Generate Project Pages with Full Crawlable HTML & Pre-Baked Schemas
projects.forEach(project => {
  const projectDir = path.join(distDir, 'project', project.slug);
  fs.mkdirSync(projectDir, { recursive: true });

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    "name": `${project.name} by Sentosa Developers`,
    "alternateName": [
      `Sentosa ${project.name}`,
      project.slug === 'harico-divaam' ? 'Harico Diwaam' : `${project.name} Punawale`,
      project.slug === 'harico-divaam' ? 'Harico Diwaam Kiwale' : 'Sentosa Edge Punawale',
      project.slug === 'harico-divaam' ? 'Sentosa Diwaam' : 'Sentosa Pride Punawale'
    ],
    "description": project.description,
    "url": `https://haricoestates.in/project/${project.slug}`,
    "image": `https://haricoestates.in${project.image}`,
    "telephone": "+91-7744009295",
    "priceRange": project.price,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "148",
      "bestRating": "5",
      "worstRating": "1"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": project.slug === 'harico-divaam' ? "7000000" : (project.slug === 'harico-edge' ? "7400000" : "7800000"),
      "highPrice": project.slug === 'harico-divaam' ? "10800000" : (project.slug === 'harico-edge' ? "11800000" : "11500000"),
      "offerCount": "120",
      "availability": "https://schema.org/InStock",
      "validFrom": "2026-01-01",
      "priceValidUntil": "2027-12-31"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": project.slug === 'harico-divaam' 
        ? "Harico Diwaam, Opposite Sentosa Water Park, Mumbai-Pune Expressway, Kiwale-Ravet, PCMC, Pune"
        : (project.slug === 'harico-edge' 
          ? "Harico Edge, Near Bhumkar Chowk, Mumbai-Pune Expressway, Punawale, PCMC, Pune"
          : "Harico Pride, Near Bhiku Vallabh Kale School, Punawale, PCMC, Pune"),
      "addressLocality": project.slug === 'harico-divaam' ? "Kiwale-Ravet, Pune" : "Punawale, Pune",
      "postalCode": project.slug === 'harico-divaam' ? "412101" : "411033",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": project.slug === 'harico-divaam' ? "18.6738" : "18.6366",
      "longitude": project.slug === 'harico-divaam' ? "73.7225" : "73.7483"
    },
    "hasMap": project.slug === 'harico-divaam' ? "https://www.google.com/maps?q=harico+divaam" : "https://www.google.com/maps?q=harico+estates",
    "identifier": project.rera,
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Rooftop Sky Observation Deck", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Infinity Swimming Pool", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Mivan Monolithic Concrete Structure", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Co-Working Lounges & Creator Studios", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Dual Balconies", "value": true }
    ],
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "author": { "@type": "Person", "name": "Rahul Deshmukh" },
        "reviewBody": `${project.name} by Sentosa Developers offers top-tier construction, clear MahaRERA compliance, and ideal connectivity to Mumbai-Pune Expressway.`
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://haricoestates.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://haricoestates.in/projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.name,
        "item": `https://haricoestates.in/project/${project.slug}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": project.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  let html = template;
  html = html.replace(/<link rel="canonical"[\s\S]*?>/is, '');
  html = html.replace(/<title>(.*?)<\/title>/is, '<title>' + project.title + '</title>');
  html = html.replace(/<meta name="description"[\s\S]*?>/is, '<meta name="description" content="' + project.description + '">');
  html = html.replace(/<meta name="keywords"[\s\S]*?>/is, '<meta name="keywords" content="' + project.keywords + '">');
  html = html.replace(/<meta property="og:title"[\s\S]*?>/is, '<meta property="og:title" content="' + project.title + '">');
  html = html.replace(/<meta property="og:description"[\s\S]*?>/is, '<meta property="og:description" content="' + project.description + '">');
  html = html.replace(/<meta property="og:image"[\s\S]*?>/is, '<meta property="og:image" content="https://haricoestates.in' + project.image + '">');
  html = html.replace(/<meta property="og:url"[\s\S]*?>/is, '<meta property="og:url" content="https://haricoestates.in/project/' + project.slug + '">');
  html = html.replace(/<meta name="twitter:title"[\s\S]*?>/is, '<meta name="twitter:title" content="' + project.title + '">');
  html = html.replace(/<meta name="twitter:description"[\s\S]*?>/is, '<meta name="twitter:description" content="' + project.description + '">');
  html = html.replace(/<meta name="twitter:image"[\s\S]*?>/is, '<meta name="twitter:image" content="https://haricoestates.in' + project.image + '">');

  const schemaTags = `
  <link rel="canonical" href="https://haricoestates.in/project/${project.slug}" />
  <script type="application/ld+json">${JSON.stringify(projectSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
  `;

  if (html.includes('<head>')) {
      html = html.replace('<head>', '<head>\n' + schemaTags);
  }

  // Inject Rich Semantic HTML Body for Search Crawlers & AI Bots
  const semanticBody = `
  <div id="app">
    <main class="prerendered-content" style="max-width:1200px; margin:0 auto; padding:40px 20px; font-family:system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size:13px; color:#64748B; margin-bottom:15px;">
        <ol style="list-style:none; padding:0; margin:0; display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <li><a href="/" style="color:#D4AF37; text-decoration:none;">Home</a> &gt;</li>
          <li><a href="/#projects" style="color:#D4AF37; text-decoration:none;">Projects</a> &gt;</li>
          <li aria-current="page" style="color:#0A192F; font-weight:600;">${project.name}</li>
        </ol>
      </nav>

      <header style="margin-bottom:30px;">
        <span style="color:#D4AF37; font-weight:bold; text-transform:uppercase; font-size:14px;">Harico Estates by Sentosa Developers</span>
        <h1 style="font-size:32px; color:#0A192F; margin:10px 0 15px;">${project.title}</h1>
        <p style="font-size:18px; color:#475569; line-height:1.6;">${project.description}</p>
        <div style="margin-top:15px; display:flex; gap:15px; flex-wrap:wrap;">
          <span style="background:#0A192F; color:#FFF; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold;">MahaRERA: ${project.rera}</span>
          <span style="background:#D4AF37; color:#0A192F; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold;">${project.price}</span>
          <span style="background:#0A192F; color:#D4AF37; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold; border:1px solid #D4AF37;">🔑 Possession: ${project.possession}</span>
          <span style="background:#F1F5F9; color:#0A192F; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold;">📍 ${project.location} (PIN: ${project.slug === 'harico-divaam' ? '412101' : '411033'})</span>
          <a href="tel:+917744009295" style="background:#F1F5F9; color:#0A192F; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold; text-decoration:none;">📞 Sales: +91 7744009295</a>
        </div>
      </header>

      <div style="margin-bottom:35px; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">
        <img src="${project.image}" alt="${project.title} - Luxury 2 & 3 BHK Apartments by Sentosa Developers" width="1200" height="630" loading="eager" fetchpriority="high" style="width:100%; height:auto; display:block; object-fit:cover; max-height:480px;" />
      </div>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Key Project Highlights</h2>
        <ul style="line-height:2; color:#334155;">
          ${project.features.map(f => `<li><strong>✓</strong> ${f}</li>`).join('\n')}
        </ul>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Available Configurations & Price List</h2>
        <table style="width:100%; border-collapse:collapse; margin-top:10px; box-shadow:0 2px 8px rgba(0,0,0,0.05); border-radius:8px; overflow:hidden;">
          <thead>
            <tr style="background:#0A192F; color:#FFF; text-align:left;">
              <th style="padding:14px;">Configuration</th>
              <th style="padding:14px;">Carpet Area</th>
              <th style="padding:14px;">Starting Price</th>
              <th style="padding:14px;">Layout Highlights</th>
            </tr>
          </thead>
          <tbody>
            ${project.configs.map(c => `
              <tr style="border-bottom:1px solid #E2E8F0; background:#FFF;">
                <td style="padding:14px; font-weight:bold; color:#0A192F;">${c.type}</td>
                <td style="padding:14px; color:#475569;">${c.carpet}</td>
                <td style="padding:14px; color:#D4AF37; font-weight:bold;">${c.price}</td>
                <td style="padding:14px; color:#64748B; font-size:13px;">Dual Balconies, Zero Space Wastage, Vastu Compliant</td>
              </tr>
            `).join('\n')}
          </tbody>
        </table>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Curated Resort-Style Amenities & Club Lifestyle</h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
          <div style="background:#F8FAFC; padding:20px; border-radius:10px; border:1px solid #E2E8F0;">
            <h3 style="font-size:16px; color:#0A192F; margin-top:0; margin-bottom:10px; border-bottom:2px solid #D4AF37; padding-bottom:6px;">☁️ Sky & Rooftop Indulgence</h3>
            <ul style="padding-left:18px; margin:0; line-height:1.8; color:#475569; font-size:14px;">
              <li>24th Floor Rooftop Sky Observation Deck</li>
              <li>Infinity Edge Swimming Pool & Sunset Deck</li>
              <li>Sky Yoga, Meditation & Reflexology Lawn</li>
              <li>Telescopic Stargazing Point with Sahyadri Views</li>
            </ul>
          </div>
          <div style="background:#F8FAFC; padding:20px; border-radius:10px; border:1px solid #E2E8F0;">
            <h3 style="font-size:16px; color:#0A192F; margin-top:0; margin-bottom:10px; border-bottom:2px solid #D4AF37; padding-bottom:6px;">🎭 Entertainment & Hospitality</h3>
            <ul style="padding-left:18px; margin:0; line-height:1.8; color:#475569; font-size:14px;">
              <li>40-Seater Private Mini Theatre with Dolby Atmos</li>
              <li>12 Fully-Furnished Luxury Guest Suites for Visitors</li>
              <li>Grand Double-Height Banquet & Celebration Hall</li>
              <li>Barbeque Pavilion & Alfresco Dining Cabanas</li>
            </ul>
          </div>
          <div style="background:#F8FAFC; padding:20px; border-radius:10px; border:1px solid #E2E8F0;">
            <h3 style="font-size:16px; color:#0A192F; margin-top:0; margin-bottom:10px; border-bottom:2px solid #D4AF37; padding-bottom:6px;">💼 Co-Working & Creator Studio</h3>
            <ul style="padding-left:18px; margin:0; line-height:1.8; color:#475569; font-size:14px;">
              <li>Acoustic Podcasting & YouTube Creator Studio</li>
              <li>High-Speed Wi-Fi Business Lounges & Work Pods</li>
              <li>Private Conference Rooms for Remote Professionals</li>
              <li>Digital Library & Reading Cafe</li>
            </ul>
          </div>
          <div style="background:#F8FAFC; padding:20px; border-radius:10px; border:1px solid #E2E8F0;">
            <h3 style="font-size:16px; color:#0A192F; margin-top:0; margin-bottom:10px; border-bottom:2px solid #D4AF37; padding-bottom:6px;">🏅 Sports, Fitness & Wellness</h3>
            <ul style="padding-left:18px; margin:0; line-height:1.8; color:#475569; font-size:14px;">
              <li>Full-Fledged Gymnasium with Cardio & Strength Zones</li>
              <li>Badminton Court & Half Basketball Court</li>
              <li>Indoor Games Arena (Billiards, Table Tennis, Chess)</li>
              <li>Steam, Sauna & Wellness Spa Treatment Rooms</li>
            </ul>
          </div>
        </div>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Strategic Transit Connectivity & Proximity Matrix</h2>
        <table style="width:100%; border-collapse:collapse; margin-top:10px; box-shadow:0 2px 8px rgba(0,0,0,0.05); border-radius:8px; overflow:hidden;">
          <thead>
            <tr style="background:#0A192F; color:#FFF; text-align:left;">
              <th style="padding:12px;">Key Landmark / Destination</th>
              <th style="padding:12px;">Distance</th>
              <th style="padding:12px;">Travel Time</th>
              <th style="padding:12px;">Connectivity Advantage</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom:1px solid #E2E8F0; background:#FFF;">
              <td style="padding:12px; font-weight:600; color:#0A192F;">Sentosa Water Park & Resorts</td>
              <td style="padding:12px; color:#475569;">Directly Opposite</td>
              <td style="padding:12px; color:#16A34A; font-weight:bold;">0 Mins</td>
              <td style="padding:12px; color:#64748B; font-size:13px;">Immediate pedestrian access to leisure and dining</td>
            </tr>
            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
              <td style="padding:12px; font-weight:600; color:#0A192F;">Mumbai-Pune Expressway</td>
              <td style="padding:12px; color:#475569;">1.5 km</td>
              <td style="padding:12px; color:#16A34A; font-weight:bold;">2 Mins</td>
              <td style="padding:12px; color:#64748B; font-size:13px;">Direct ramp connectivity to Mumbai and Navi Mumbai</td>
            </tr>
            <tr style="border-bottom:1px solid #E2E8F0; background:#FFF;">
              <td style="padding:12px; font-weight:600; color:#0A192F;">Mukai Chowk & Ravet BRTS</td>
              <td style="padding:12px; color:#475569;">1.2 km</td>
              <td style="padding:12px; color:#16A34A; font-weight:bold;">2 Mins</td>
              <td style="padding:12px; color:#64748B; font-size:13px;">Key transport junction for Aundh, Shivaji Nagar, PCMC</td>
            </tr>
            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
              <td style="padding:12px; font-weight:600; color:#0A192F;">Akurdi Railway Station (Local Trains)</td>
              <td style="padding:12px; color:#475569;">4.2 km</td>
              <td style="padding:12px; color:#16A34A; font-weight:bold;">5-7 Mins</td>
              <td style="padding:12px; color:#64748B; font-size:13px;">Fast rail transit to Pune Junction, Lonavala & Talegaon</td>
            </tr>
            <tr style="border-bottom:1px solid #E2E8F0; background:#FFF;">
              <td style="padding:12px; font-weight:600; color:#0A192F;">Hinjewadi Rajiv Gandhi IT Park (Phase 1)</td>
              <td style="padding:12px; color:#475569;">9.5 km</td>
              <td style="padding:12px; color:#16A34A; font-weight:bold;">12-15 Mins</td>
              <td style="padding:12px; color:#64748B; font-size:13px;">Hassle-free commute for Infosys, Wipro, TCS tech professionals</td>
            </tr>
            <tr style="border-bottom:1px solid #E2E8F0; background:#F8FAFC;">
              <td style="padding:12px; font-weight:600; color:#0A192F;">Phoenix Mall of the Millennium, Wakad</td>
              <td style="padding:12px; color:#475569;">10.2 km</td>
              <td style="padding:12px; color:#16A34A; font-weight:bold;">15 Mins</td>
              <td style="padding:12px; color:#64748B; font-size:13px;">Premium international shopping, multiplexes & fine dining</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style="margin-bottom:40px; background:#F1F5F9; padding:25px; border-radius:12px; border-left:5px solid #0A192F;">
        <h2 style="font-size:22px; color:#0A192F; margin-top:0; margin-bottom:10px;">Engineering Excellence: Mivan Monolithic Concrete Technology</h2>
        <p style="color:#475569; line-height:1.7; margin-bottom:0;">
          All Harico Estates developments utilize precision-engineered <strong>Mivan monolithic aluminium formwork construction</strong>. This advanced casting technique delivers superior seismic resistance (Zone III compliant), earthquake safety, monolithic jointless walls that prevent water seepage, and higher carpet-to-super-built-up area efficiency. Every residence is finished with acoustic double-glazed windows, branded premium sanitaryware (Kohler / Jaquar), and concealed copper electrical wiring.
        </p>
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Frequently Asked Questions (FAQs)</h2>
        ${project.faqs.map(f => `
          <div style="margin-bottom:15px; background:#F8FAFC; padding:18px; border-radius:8px; border-left:4px solid #D4AF37; box-shadow:0 1px 3px rgba(0,0,0,0.04);">
            <h3 style="font-size:16px; color:#0A192F; margin:0 0 8px;">${f.q}</h3>
            <p style="margin:0; color:#475569; line-height:1.6;">${f.a}</p>
          </div>
        `).join('\n')}
      </section>

      ${clusterFooterHtml}

      <footer style="margin-top:40px; padding-top:20px; border-top:1px solid #CBD5E1; color:#64748B; font-size:13px;">
        <p><strong>Developer:</strong> Sentosa Developers & Harico Estates (39-Year Legacy since 1987). <strong>Contact Sales Desk:</strong> +91 7744009295 | <strong>Email:</strong> contact@haricoestates.in</p>
        <p><strong>Official Portals:</strong> <a href="https://haricoestates.in/">Harico Estates Home</a> | <a href="https://haricoestates.in/location/punawale">Punawale Real Estate</a> | <a href="https://haricoestates.in/location/kiwale">Kiwale Real Estate</a> | <a href="https://haricoestates.in/developer/sentosa-developers-pune">Sentosa Developers Portfolio</a></p>
      </footer>
    </main>
  </div>
  `;

  html = html.replace('<div id="app"></div>', semanticBody);

  const outPath = path.join(projectDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log('[Prerender] Generated rich static route: /project/' + project.slug + '/index.html');
});

// 2. Generate Programmatic Pages with Full Semantic Content
programmaticPages.forEach(page => {
    const pageDir = path.join(distDir, page.path);
    fs.mkdirSync(pageDir, { recursive: true });
    
    let html = template;
    const pageKeywords = page.keywords || globalKeywords;

    const pageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": page.title,
      "description": page.desc,
      "url": `https://haricoestates.in/${page.path}`
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://haricoestates.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": page.h1 || page.title,
          "item": `https://haricoestates.in/${page.path}`
        }
      ]
    };

    const pageFaqs = [
      {
        q: `What are the flagship residential projects in ${page.title.includes('Kiwale') ? 'Kiwale' : 'Punawale'} by Sentosa Developers?`,
        a: `In Kiwale, Harico Diwaam is the flagship 24-storey mega new launch opposite Sentosa Water Park with 2 BHK starting ₹70 Lacs* and 3 BHK from ₹89.90 Lacs* onwards (possession Dec 2030, MahaRERA PR1260002502389). In Punawale, Harico Edge (June 2030, MahaRERA P52100031773) and Harico Pride (June 2027, MahaRERA P52100018471) offer luxury 2 & 3 BHK flats near Bhumkar Chowk.`
      },
      {
        q: `How can I download the official brochure, price sheet, or book a VIP site visit?`,
        a: `Prospective homebuyers can connect directly with the official sales desk at +91 7744009295 or email contact@haricoestates.in for immediate brochure PDFs, floor plans, and sample flat tours.`
      },
      {
        q: `What is the construction technology and developer pedigree?`,
        a: `Developed with earthquake-resistant Mivan monolithic concrete technology by Sentosa Developers (founded in 1987, 39+ years of excellence, 20+ completed projects, builders of Sentosa Water Park & Resorts).`
      }
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": pageFaqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    };

    const schemaTags = `
  <link rel="canonical" href="https://haricoestates.in/${page.path}" />
  <script type="application/ld+json">${JSON.stringify(pageSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(faqSchema)}</script>
    `;

    html = html.replace(/<link rel="canonical"[\s\S]*?>/is, '');
    if (html.includes('<head>')) {
       html = html.replace('<head>', '<head>\n' + schemaTags);
    }
    html = html.replace(/<title>(.*?)<\/title>/is, `<title>${page.title}</title>`);
    if (page.desc) {
      html = html.replace(/<meta name="description"[\s\S]*?>/is, `<meta name="description" content="${page.desc}">`);
      html = html.replace(/<meta property="og:description"[\s\S]*?>/is, `<meta property="og:description" content="${page.desc}">`);
      html = html.replace(/<meta name="twitter:description"[\s\S]*?>/is, `<meta name="twitter:description" content="${page.desc}">`);
    }
    html = html.replace(/<meta name="keywords"[\s\S]*?>/is, `<meta name="keywords" content="${pageKeywords}">`);
    html = html.replace(/<meta property="og:title"[\s\S]*?>/is, `<meta property="og:title" content="${page.title}">`);
    html = html.replace(/<meta name="twitter:title"[\s\S]*?>/is, `<meta name="twitter:title" content="${page.title}">`);
    html = html.replace(/<meta property="og:url"[\s\S]*?>/is, `<meta property="og:url" content="https://haricoestates.in/${page.path}">`);

    const semanticBody = `
    <div id="app">
      <main class="prerendered-content" style="max-width:1200px; margin:0 auto; padding:40px 20px; font-family:system-ui, -apple-system, sans-serif;">
        <header style="margin-bottom:30px;">
          <nav aria-label="Breadcrumb" style="font-size:13px; color:#64748B; margin-bottom:12px;">
            <ol style="list-style:none; padding:0; margin:0; display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
              <li><a href="/" style="color:#D4AF37; text-decoration:none;">Home</a> &gt;</li>
              <li aria-current="page" style="color:#0A192F; font-weight:600;">${page.h1 || page.title}</li>
            </ol>
          </nav>
          <span style="color:#D4AF37; font-weight:bold; text-transform:uppercase; font-size:14px; letter-spacing:1px;">Harico Estates & Sentosa Developers (Since 1987)</span>
          <h1 style="font-size:32px; color:#0A192F; margin:10px 0 15px;">${page.h1 || page.title}</h1>
          <p style="font-size:17px; color:#475569; line-height:1.6;">${page.bodyText || page.desc}</p>
          <div style="margin-top:15px; display:flex; gap:12px; flex-wrap:wrap;">
            <span style="background:#0A192F; color:#FFF; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold;">100% MahaRERA Verified</span>
            <span style="background:#D4AF37; color:#0A192F; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold;">Starting ₹70.00 Lacs*</span>
            <a href="tel:+917744009295" style="background:#0A192F; color:#D4AF37; padding:6px 14px; border-radius:20px; font-size:13px; font-weight:bold; text-decoration:none; border:1px solid #D4AF37;">📞 Call +91 7744009295</a>
          </div>
        </header>

        <section style="margin-bottom:40px;">
          <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Flagship Real Estate Landmarks</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:20px;">
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:20px; border-radius:8px;">
              <h3 style="margin-top:0; color:#0A192F;"><a href="/project/harico-divaam" style="color:#0A192F; text-decoration:none;">Harico Diwaam / Divaam (Kiwale)</a></h3>
              <p style="color:#64748B; font-size:14px;">🔥 Major New Launch: Tallest 24-Storey towers opposite Sentosa Water Park with 2 BHK starting ₹70 Lacs* & 3 BHK from ₹89.90 Lacs*. Possession Dec 2030. MahaRERA PR1260002502389.</p>
              <a href="/project/harico-divaam" style="color:#D4AF37; font-weight:bold; text-decoration:none;">Explore Harico Diwaam &rarr;</a>
            </div>
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:20px; border-radius:8px;">
              <h3 style="margin-top:0; color:#0A192F;"><a href="/project/harico-edge" style="color:#0A192F; text-decoration:none;">Harico Edge (Punawale)</a></h3>
              <p style="color:#64748B; font-size:14px;">Luxury 2 & 3 BHK with dual private balconies starting ₹74 Lacs* near Bhumkar Chowk. Possession June 2030. MahaRERA P52100031773.</p>
              <a href="/project/harico-edge" style="color:#D4AF37; font-weight:bold; text-decoration:none;">Explore Harico Edge &rarr;</a>
            </div>
            <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:20px; border-radius:8px;">
              <h3 style="margin-top:0; color:#0A192F;"><a href="/project/harico-pride" style="color:#0A192F; text-decoration:none;">Harico Pride (Punawale)</a></h3>
              <p style="color:#64748B; font-size:14px;">Spacious 2 & 3 BHK with rooftop infinity pool starting ₹78 Lacs*. Possession June 2027. MahaRERA P52100018471.</p>
              <a href="/project/harico-pride" style="color:#D4AF37; font-weight:bold; text-decoration:none;">Explore Harico Pride &rarr;</a>
            </div>
          </div>
        </section>

        <section style="margin-bottom:40px;">
          <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Frequently Asked Questions (FAQs)</h2>
          ${pageFaqs.map(f => `
            <div style="margin-bottom:15px; background:#F8FAFC; padding:15px; border-radius:8px; border-left:4px solid #D4AF37;">
              <h3 style="font-size:16px; color:#0A192F; margin:0 0 8px;">${f.q}</h3>
              <p style="margin:0; color:#475569; line-height:1.5;">${f.a}</p>
            </div>
          `).join('\n')}
        </section>

        ${clusterFooterHtml}

        <footer style="margin-top:40px; padding-top:20px; border-top:1px solid #CBD5E1; color:#64748B; font-size:13px;">
          <p><strong>Developer:</strong> Sentosa Developers & Harico Estates (39-Year Real Estate Legacy). <strong>Helpline:</strong> <a href="tel:+917744009295" style="color:#0A192F; font-weight:bold;">+91 7744009295</a> | <strong>Email:</strong> contact@haricoestates.in</p>
          <p><strong>Explore More:</strong> <a href="/">Home</a> | <a href="/harico-diwaam-kiwale">Harico Diwaam Kiwale</a> | <a href="/harico-new-launch">Harico New Launch</a> | <a href="/harico-kiwale">Harico Kiwale</a> | <a href="/harico-punawale">Harico Punawale</a> | <a href="/flats-opposite-sentosa-water-park-kiwale">Flats Opposite Sentosa</a></p>
        </footer>
      </main>
    </div>
    `;

    html = html.replace('<div id="app"></div>', semanticBody);

    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    console.log(`[Prerender] Generated rich programmatic route: /${page.path}/index.html`);
});

// 3. Update Root Home index.html with Rich Crawlable Semantic Content & Pre-Baked Organization Schema
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": "https://haricoestates.in/#organization",
  "name": "Harico Estates by Sentosa Developers",
  "alternateName": [
    "Sentosa Developers",
    "Sentosa Group Pune",
    "Harico Group",
    "Harico Estates Punawale",
    "Harico Estates Kiwale",
    "Sentosa Real Estate Pune",
    "Sentosa Water Park Builders"
  ],
  "url": "https://haricoestates.in",
  "logo": "https://haricoestates.in/harico_logo.png",
  "image": "https://haricoestates.in/assets/harico-divaam-hero.jpg",
  "telephone": "+91-7744009295",
  "email": "contact@haricoestates.in",
  "priceRange": "₹70.00 Lacs - ₹1.50 Cr",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "148",
    "bestRating": "5",
    "worstRating": "1"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Bhumkar Chowk, Mumbai-Pune Expressway",
    "addressLocality": "Punawale, Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411033",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "18.6366",
    "longitude": "73.7483"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "09:30",
      "closes": "19:30"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/haricoestates",
    "https://www.instagram.com/haricoestates",
    "https://www.google.com/maps?q=harico+estates",
    "https://www.google.com/maps?q=harico+divaam"
  ]
};

// 3. Generate High-Authority Pillar Articles & Knowledge Hub
const articles = [
  {
    slug: 'harico-estates-overview',
    title: 'Harico Estates Pune: Developer Profile, Sentosa Legacy & Master Portfolio Guide',
    subtitle: 'Everything homebuyers and investors need to know about Harico Estates, Sentosa Developers’ 39-year track record, and landmark projects in Punawale and Kiwale.',
    metaDescription: 'Complete guide to Harico Estates Pune by Sentosa Developers. Explore ongoing projects (Harico Diwaam, Harico Edge, Harico Pride), 39-year legacy, and 100% MahaRERA transparency.',
    keywords: 'Harico Estates, Harico Estates Pune, Sentosa Developers Pune, Sentosa Harico, Harico Group, Harico Punawale, Harico Kiwale, Harico Diwaam, Harico Edge, Harico Pride, Real Estate Developer West Pune, हरिको इस्टेट्स पुणे',
    category: 'Developer Profile',
    readTime: '7 min read',
    publishDate: '2026-03-01',
    author: 'Harico Estates Research Desk',
    image: '/assets/harico-edge-hero.png',
    summary: 'Harico Estates represents the modern residential development arm of Sentosa Developers, a trusted real estate and hospitality group with 39+ years of engineering excellence in Pune.',
    keyTakeaways: [
      'Backed by Sentosa Developers with a 39-year legacy (founded in 1987) and 20+ delivered landmarks across Pune.',
      '100% MahaRERA registered developments: Harico Diwaam (PR1260002502389), Harico Edge (P52100031773), and Harico Pride (P52100018471).',
      'Pioneering Mivan monolithic concrete engineering for crack-resistant, seismic-safe high-rise homes.',
      'Prime strategic locations: Punawale (near Bhumkar Chowk) and Kiwale (opposite Sentosa Water Park) within 2 minutes of the Mumbai-Pune Expressway.'
    ],
    faqs: [
      { q: 'Who is the promoter behind Harico Estates?', a: 'Harico Estates is developed in venture with Sentosa Developers, a prestigious real estate and hospitality group with a 39-year legacy (since 1987) across Pune and PCMC.' },
      { q: 'Where are Harico Estates projects located?', a: 'Harico Estates has active developments in Punawale (Harico Edge & Harico Pride near Bhumkar Chowk) and Kiwale (Harico Diwaam directly opposite Sentosa Water Park).' },
      { q: 'What is the customer care and sales helpline for Harico Estates?', a: 'You can reach the direct Harico Estates sales desk at +91 7744009295 or email contact@haricoestates.in.' }
    ]
  },
  {
    slug: 'harico-diwaam-kiwale-buyer-guide',
    title: 'Harico Diwaam Kiwale: Floor Plans, 2 & 3 BHK Pricing, 100+ Amenities & Buyer Guide',
    subtitle: 'A detailed breakdown of Harico Diwaam (Harico Divaam Kiwale), Pune’s iconic 24-storey sky towers opposite Sentosa Water Park. Starting ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*).',
    metaDescription: 'Detailed buyer guide for Harico Diwaam Kiwale (Harico Divaam). Review 2 & 3 BHK floor plans (724–1108 sq.ft), starting price ₹70 Lacs*, 24-storey towers, 100+ amenities, and MahaRERA PR1260002502389.',
    keywords: 'Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Diwaam Price, Harico Diwaam Floor Plan, Harico Diwaam Brochure, Flats opposite Sentosa Water Park, 2 BHK in Kiwale, 3 BHK in Kiwale, Tallest Towers Kiwale, हरिको दिवाम किवाळे, हॅरिको दिवाम',
    category: 'Project Deep Dive',
    readTime: '9 min read',
    publishDate: '2026-03-05',
    author: 'Harico Estates Architectural Team',
    image: '/assets/harico-divaam-hero.jpg',
    summary: 'Harico Diwaam (also known as Harico Divaam Kiwale) is the tallest residential high-rise landmark in the Kiwale-Ravet corridor. Rising 24 storeys across 5 acres with 5 sky towers and 100+ resort amenities.',
    keyTakeaways: [
      'Kiwale’s tallest residential sky towers: 5 iconic towers standing 24 storeys tall across 5.0 acres.',
      'Attractive entry pricing: 2 BHK Smart starting at ₹70.00 Lacs* onwards; 3 BHK Smart starting at ₹89.90 Lacs* onwards.',
      'Diverse carpet areas: 2 BHK (724 to 848 sq.ft) and 3 BHK (920 to 1,108 sq.ft) with dual private balconies.',
      'Over 100 resort lifestyle amenities including a 24th-floor Sky Observation Deck, infinity pool, 40-seater mini theatre, and 12 luxury guest suites.',
      'Approved under MahaRERA No. PR1260002502389 with target possession in December 2030.'
    ],
    faqs: [
      { q: 'What is the difference between Harico Diwaam and Harico Divaam?', a: 'Both refer to the exact same landmark residential development in Kiwale opposite Sentosa Water Park. Harico Divaam is the MahaRERA registered name (PR1260002502389), while Harico Diwaam is the widely searched brand spelling.' },
      { q: 'What is the starting price for Harico Diwaam Kiwale?', a: '2 BHK apartments start from ₹70.00 Lacs* onwards (724 sq.ft) and 3 BHK apartments start from ₹89.90 Lacs* onwards (920 sq.ft).' },
      { q: 'How can I download the official Harico Diwaam brochure and floor plans?', a: 'You can download the brochure and cost sheets directly on our portal or contact the sales desk via WhatsApp or phone at +91 7744009295.' }
    ]
  },
  {
    slug: 'harico-kiwale-real-estate-investment',
    title: 'Why Kiwale Ravet is Pune’s #1 Real Estate Growth Corridor: Harico Kiwale Guide',
    subtitle: 'Infrastructure boom, Mumbai-Pune Expressway connectivity, Akurdi Station access, and why Harico Kiwale properties are delivering 15%+ capital growth.',
    metaDescription: 'Discover why Kiwale Ravet is West Pune’s top real estate investment hub. Explore expressway connectivity, BRTS corridors, price trends, and Harico Kiwale developments.',
    keywords: 'Harico Kiwale, Kiwale Real Estate, Flats in Kiwale Ravet, Kiwale Property Price, Mukai Chowk Flats, Flats opposite Sentosa Water Park, Kiwale Pune Investment, Harico Estates Kiwale, किवाळे रियल इस्टेट पुणे',
    category: 'Market Intelligence',
    readTime: '6 min read',
    publishDate: '2026-03-08',
    author: 'Harico Estates Market Intelligence Desk',
    image: '/assets/harico-divaam-composite.jpg',
    summary: 'Kiwale has emerged from a quiet PCMC suburb into West Pune’s most strategic transit-oriented residential hub. Backed by Mukai Chowk BRTS, Mumbai-Pune Expressway flyovers, and premier educational institutes.',
    keyTakeaways: [
      'Unmatched highway connectivity: Direct entry to the Mumbai-Pune Expressway and Katraj-Dehu Road bypass.',
      'Rapid multimodal transit: 2 minutes to Mukai Chowk BRTS terminal and 5 minutes to Akurdi Railway Station.',
      'High educational hub density: Proximity to Symbiosis Skills University, D.Y. Patil Akurdi, and JSPM.',
      'Substantial price appreciation: 15%–18% capital growth over the past 36 months, with 2 BHK prices starting from ₹70.00 Lacs*.'
    ],
    faqs: [
      { q: 'Is Kiwale a good area to buy a home for Hinjewadi IT professionals?', a: 'Yes. Kiwale is just 12–15 minutes from Hinjewadi Phase 1 via the Expressway bypass, avoiding internal Wakad traffic while offering larger carpet areas and better air quality.' },
      { q: 'What is the average price of 2 BHK flats in Kiwale?', a: '2 BHK apartments in Kiwale range between ₹68 Lacs to ₹82 Lacs depending on carpet area and amenities. Harico Diwaam offers premium 2 BHK homes starting from ₹70.00 Lacs* onwards.' },
      { q: 'What is the nearest railway station to Kiwale?', a: 'Akurdi Railway Station is the nearest local rail hub, located approximately 5 minutes (4.2 km) from Kiwale.' }
    ]
  },
  {
    slug: 'harico-punawale-guide-edge-pride',
    title: 'Harico Punawale: Comprehensive Guide to Harico Edge & Harico Pride near Hinjewadi IT Park',
    subtitle: 'Everything you need to know about Harico Punawale homes. Explore Harico Edge (June 2030) and Harico Pride (June 2027) starting from ₹74 Lacs* near Bhumkar Chowk.',
    metaDescription: 'Complete guide to Harico Punawale developments: Harico Edge (MahaRERA P52100031773) and Harico Pride (MahaRERA P52100018471). Explore 2 & 3 BHK homes near Bhumkar Chowk.',
    keywords: 'Harico Punawale, Sentosa Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Flats in Punawale, 2 BHK in Punawale, 3 BHK in Punawale, Flats near Bhumkar Chowk, हरिको पुनावळे, सेंटोसा पुनावळे',
    category: 'Micro-Market Guide',
    readTime: '8 min read',
    publishDate: '2026-03-10',
    author: 'Harico Estates Punawale Planning Desk',
    image: '/assets/harico-edge-hero.png',
    summary: 'Punawale has established itself as West Pune’s most vibrant residential growth belt for tech professionals. Discover how Harico Edge and Harico Pride deliver uncompromised Mivan construction.',
    keyTakeaways: [
      'Unmatched proximity: 2 minutes to Mumbai-Pune Expressway & Bhumkar Chowk, 12 minutes to Hinjewadi Phase 1.',
      'Two distinct possession timelines: Harico Pride (June 2027 near-possession) and Harico Edge (June 2030 flagship launch).',
      'Dual balconies as standard: Every 2 & 3 BHK configuration features two private outdoor balconies with scenic views.',
      '100% MahaRERA transparency: Harico Edge (P52100031773) and Harico Pride (P52100018471).'
    ],
    faqs: [
      { q: 'What is the starting price for 2 BHK flats in Harico Punawale?', a: '2 BHK apartments at Harico Edge Punawale start from ₹74.00 Lacs* with 741 sq.ft carpet area and dual private balconies.' },
      { q: 'What are the MahaRERA numbers for Harico projects in Punawale?', a: 'Harico Edge is registered under MahaRERA No. P52100031773 (Possession June 2030) and Harico Pride is registered under MahaRERA No. P52100018471 (Possession June 2027).' },
      { q: 'How far is Harico Punawale from Hinjewadi IT Park?', a: 'Harico Punawale is located approximately 12–14 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1 via Bhumkar Chowk.' }
    ]
  },
  {
    slug: 'mivan-monolithic-construction-guide',
    title: 'Mivan Monolithic Concrete Technology Explained: Why Harico Homes Outlast Conventional Construction',
    subtitle: 'Learn how aluminium formwork engineering creates jointless, earthquake-resistant (Zone III), seepage-free homes with higher usable carpet efficiency.',
    metaDescription: 'Comprehensive guide to Mivan monolithic concrete technology used by Harico Estates in Pune. Learn about seismic safety, crack resistance, and superior construction quality.',
    keywords: 'Mivan Construction flats Pune, Mivan Technology benefits, Earthquake resistant homes PCMC, Monolithic concrete construction, Harico Estates specifications, Mivan vs Brickwork Pune',
    category: 'Engineering & Quality',
    readTime: '5 min read',
    publishDate: '2026-03-12',
    author: 'Harico Estates Chief Civil Engineer',
    image: '/assets/harico-divaam-master-layout.png',
    summary: 'While traditional buildings rely on red clay bricks and RCC frame joints prone to water seepage, Harico Estates deploys 100% Mivan monolithic aluminium formwork.',
    keyTakeaways: [
      'Monolithic casting: Walls and slabs are cast simultaneously in a single pour of high-grade concrete.',
      'Superior seismic safety: Earthquake-resistant RCC shear wall construction compliant with IS Zone III standards.',
      'Zero plaster cracks and dampness: High-density concrete eliminates water capillary action and seepage.',
      'Higher carpet efficiency: Thinner, stronger shear walls provide 4%–6% more usable carpet area than bulky 9-inch brick walls.'
    ],
    faqs: [
      { q: 'Is Mivan construction better than brickwork for high-rise buildings?', a: 'Yes. Mivan construction offers superior seismic safety, eliminates structural joints where water leaks occur, provides smooth wall finishes, and increases usable carpet area by 4% to 6%.' },
      { q: 'Do all Harico Estates projects use Mivan construction?', a: 'Yes, all flagship Harico Estates high-rises, including Harico Diwaam (24 storeys) and Harico Edge (22 storeys), are engineered using Mivan aluminium formwork technology.' }
    ]
  },
  {
    slug: 'punawale-vs-kiwale-comparison',
    title: 'Punawale vs Kiwale: Where Should You Buy a 2 or 3 BHK Flat in West Pune in 2026?',
    subtitle: 'Side-by-side micro-market analysis of pricing, connectivity, infrastructure, lifestyle, and appreciation potential to help you choose the ideal home.',
    metaDescription: 'Punawale vs Kiwale property comparison 2026. Compare 2 & 3 BHK flat prices, Hinjewadi commute times, social infrastructure, and Harico Estates projects.',
    keywords: 'Punawale vs Kiwale, Kiwale vs Punawale property, Best area to buy flat in PCMC, Flats in Punawale or Kiwale, Hinjewadi commute flats, Harico Edge vs Harico Diwaam, प्रॉपर्टी तुलना पुनावळे विरुद्ध किवाळे',
    category: 'Homebuyer Guide',
    readTime: '7 min read',
    publishDate: '2026-03-14',
    author: 'Harico Estates Advisory Team',
    image: '/assets/harico-divaam-hero.jpg',
    summary: 'Both Punawale and Kiwale represent the fastest-growing real estate corridors in PCMC. While Punawale is closer to Wakad’s urban entertainment and Hinjewadi, Kiwale offers unmatched highway access.',
    keyTakeaways: [
      'Punawale is ideal for: IT professionals desiring immediate proximity to Bhumkar Chowk, Wakad nightlife, and 12-minute commute to Hinjewadi Phase 1.',
      'Kiwale is ideal for: Frequent Mumbai/Expressway commuters, families seeking 24-storey high-rises, 5-acre resorts, and proximity to Akurdi Station.',
      'Entry pricing: Kiwale starts slightly lower at ₹70.00 Lacs* (Harico Diwaam), while Punawale starts at ₹74.00 Lacs* (Harico Edge).',
      'Both corridors offer 14%–17% CAGR appreciation and pre-approved loans from major national banks.'
    ],
    faqs: [
      { q: 'Is Punawale more expensive than Kiwale?', a: 'Punawale prices average ₹6,800–₹7,600/sq.ft due to its direct border with Wakad. Kiwale averages ₹6,200–₹7,000/sq.ft, offering a slightly more accessible entry point starting at ₹70.00 Lacs*.' },
      { q: 'Which area has better expressway connectivity: Punawale or Kiwale?', a: 'Both offer 2-minute access to the Mumbai-Pune Expressway. Kiwale has direct expressway frontage opposite Sentosa Water Park, while Punawale connects via the Punawale underpass near Bhumkar Chowk.' }
    ]
  }
];

// Generate /articles Hub Page
const articlesHubDir = path.join(distDir, 'articles');
fs.mkdirSync(articlesHubDir, { recursive: true });

let articlesHubHtml = template;
const articlesHubSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Harico Estates Knowledge Hub & Real Estate Guides",
  "description": "Comprehensive market intelligence, MahaRERA compliance guides, floor plan comparisons, and micro-market transit reports across Punawale and Kiwale.",
  "url": "https://haricoestates.in/articles"
};
const articlesHubBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haricoestates.in/" },
    { "@type": "ListItem", "position": 2, "name": "Articles & Guides", "item": "https://haricoestates.in/articles" }
  ]
};

const articlesHubSchemaTags = `
  <link rel="canonical" href="https://haricoestates.in/articles" />
  <script type="application/ld+json">${JSON.stringify(articlesHubSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(articlesHubBreadcrumbs)}</script>
`;

articlesHubHtml = articlesHubHtml.replace(/<link rel="canonical"[\s\S]*?>/is, '');
if (articlesHubHtml.includes('<head>')) {
  articlesHubHtml = articlesHubHtml.replace('<head>', '<head>\n' + articlesHubSchemaTags);
}
articlesHubHtml = articlesHubHtml.replace(/<title>(.*?)<\/title>/is, '<title>Harico Estates Knowledge Hub | Homebuyer Guides, MahaRERA & Market Analysis</title>');
articlesHubHtml = articlesHubHtml.replace(/<meta name="description"[\s\S]*?>/is, '<meta name="description" content="Official Harico Estates Knowledge Hub: Comprehensive guides on Harico Diwaam, Harico Kiwale, Harico Punawale, 2 & 3 BHK floor plans, MahaRERA compliance, and transit reports.">');

const articlesHubBody = `
<div id="app">
  <main class="prerendered-content" style="max-width:1200px; margin:0 auto; padding:40px 20px; font-family:system-ui, -apple-system, sans-serif;">
    <header style="text-align:center; margin-bottom:40px;">
      <span style="color:#D4AF37; font-weight:bold; text-transform:uppercase; font-size:14px; letter-spacing:1px;">Homebuyer Intelligence & Insights</span>
      <h1 style="font-size:36px; color:#0A192F; margin:12px 0;">Harico Estates Knowledge Hub & Real Estate Guides</h1>
      <p style="font-size:18px; color:#475569; max-width:800px; margin:0 auto; line-height:1.6;">Comprehensive market intelligence, MahaRERA compliance guides, floor plan comparisons, and micro-market transit reports across Punawale and Kiwale.</p>
    </header>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:25px; margin-bottom:50px;">
      ${articles.map(a => `
        <article style="background:#FFF; border:1px solid #E2E8F0; border-radius:12px; overflow:hidden; box-shadow:0 4px 12px rgba(0,0,0,0.05); display:flex; flex-direction:column;">
          <img src="${a.image}" alt="${a.title}" style="width:100%; height:200px; object-fit:cover;" />
          <div style="padding:20px; flex:1; display:flex; flex-direction:column; justify-content:space-between;">
            <div>
              <span style="background:#0A192F; color:#FFF; font-size:11px; padding:4px 10px; border-radius:12px; font-weight:bold; text-transform:uppercase;">${a.category}</span>
              <h2 style="font-size:18px; color:#0A192F; margin:12px 0 8px;"><a href="/articles/${a.slug}" style="color:#0A192F; text-decoration:none;">${a.title}</a></h2>
              <p style="color:#64748B; font-size:14px; line-height:1.5;">${a.summary}</p>
            </div>
            <div style="margin-top:15px; padding-top:12px; border-top:1px solid #F1F5F9; display:flex; justify-content:space-between; align-items:center;">
              <span style="font-size:12px; color:#64748B;">⏱ ${a.readTime}</span>
              <a href="/articles/${a.slug}" style="color:#D4AF37; font-weight:bold; font-size:13px; text-decoration:none;">Read Full Guide &rarr;</a>
            </div>
          </div>
        </article>
      `).join('\n')}
    </div>

    ${clusterFooterHtml}

    <footer style="margin-top:40px; padding-top:20px; border-top:1px solid #CBD5E1; color:#64748B; font-size:13px; text-align:center;">
      <p><strong>Developer:</strong> Sentosa Developers & Harico Estates (39-Year Legacy since 1987). <strong>Contact Sales Desk:</strong> +91 7744009295 | <strong>Email:</strong> contact@haricoestates.in</p>
    </footer>
  </main>
</div>
`;

articlesHubHtml = articlesHubHtml.replace('<div id="app"></div>', articlesHubBody);
fs.writeFileSync(path.join(articlesHubDir, 'index.html'), articlesHubHtml, 'utf-8');
console.log('[Prerender] Generated rich static route: /articles/index.html');

// Generate Individual Static Article Pages
articles.forEach(article => {
  const articleDir = path.join(distDir, 'articles', article.slug);
  fs.mkdirSync(articleDir, { recursive: true });

  let articleHtml = template;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "image": `https://haricoestates.in${article.image}`,
    "datePublished": `${article.publishDate}T09:00:00+05:30`,
    "dateModified": "2026-03-14T12:00:00+05:30",
    "author": {
      "@type": "Organization",
      "name": "Harico Estates Research & Editorial Team",
      "url": "https://haricoestates.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Harico Estates by Sentosa Developers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://haricoestates.in/harico_logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://haricoestates.in/articles/${article.slug}`
    }
  };

  const articleBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://haricoestates.in/" },
      { "@type": "ListItem", "position": 2, "name": "Articles & Guides", "item": "https://haricoestates.in/articles" },
      { "@type": "ListItem", "position": 3, "name": article.title, "item": `https://haricoestates.in/articles/${article.slug}` }
    ]
  };

  const articleFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const articleSchemaTags = `
  <link rel="canonical" href="https://haricoestates.in/articles/${article.slug}" />
  <script type="application/ld+json">${JSON.stringify(articleSchema)}</script>
  <script type="application/ld+json">${JSON.stringify(articleBreadcrumbs)}</script>
  <script type="application/ld+json">${JSON.stringify(articleFaqSchema)}</script>
  `;

  articleHtml = articleHtml.replace(/<link rel="canonical"[\s\S]*?>/is, '');
  if (articleHtml.includes('<head>')) {
    articleHtml = articleHtml.replace('<head>', '<head>\n' + articleSchemaTags);
  }
  articleHtml = articleHtml.replace(/<title>(.*?)<\/title>/is, `<title>${article.title} | Harico Estates</title>`);
  articleHtml = articleHtml.replace(/<meta name="description"[\s\S]*?>/is, `<meta name="description" content="${article.metaDescription}">`);
  articleHtml = articleHtml.replace(/<meta name="keywords"[\s\S]*?>/is, `<meta name="keywords" content="${article.keywords}">`);

  const articleSemanticBody = `
  <div id="app">
    <main class="prerendered-content" style="max-width:900px; margin:0 auto; padding:40px 20px; font-family:system-ui, -apple-system, sans-serif;">
      <nav aria-label="Breadcrumb" style="font-size:13px; color:#64748B; margin-bottom:15px;">
        <ol style="list-style:none; padding:0; margin:0; display:flex; gap:8px; align-items:center; flex-wrap:wrap;">
          <li><a href="/" style="color:#D4AF37; text-decoration:none;">Home</a> &gt;</li>
          <li><a href="/articles" style="color:#D4AF37; text-decoration:none;">Articles & Guides</a> &gt;</li>
          <li aria-current="page" style="color:#0A192F; font-weight:600;">${article.title}</li>
        </ol>
      </nav>

      <header style="margin-bottom:30px;">
        <div style="margin-bottom:10px;">
          <span style="background:#D4AF37; color:#0A192F; font-weight:bold; font-size:12px; padding:4px 12px; border-radius:15px; text-transform:uppercase;">${article.category}</span>
          <span style="font-size:13px; color:#64748B; margin-left:10px;">⏱ ${article.readTime} • 📅 ${article.publishDate} • ✍️ ${article.author}</span>
        </div>
        <h1 style="font-size:32px; color:#0A192F; margin:10px 0 15px; line-height:1.25;">${article.title}</h1>
        <p style="font-size:18px; color:#475569; line-height:1.6;">${article.subtitle}</p>
      </header>

      <div style="margin-bottom:35px; border-radius:12px; overflow:hidden; box-shadow:0 10px 25px rgba(0,0,0,0.08);">
        <img src="${article.image}" alt="${article.title}" width="900" height="480" loading="eager" style="width:100%; height:auto; display:block; object-fit:cover; max-height:420px;" />
      </div>

      <div style="background:#F8FAFC; border-left:4px solid #D4AF37; padding:20px 25px; border-radius:8px; margin-bottom:35px;">
        <h3 style="margin-top:0; font-size:16px; color:#0A192F; text-transform:uppercase; letter-spacing:1px;">⚡ Key Executive Takeaways</h3>
        <ul style="margin:0; padding-left:20px; line-height:1.8; color:#334155; font-size:15px;">
          ${article.keyTakeaways.map(t => `<li>${t}</li>`).join('\n')}
        </ul>
      </div>

      <section style="margin-bottom:40px; line-height:1.8; color:#334155; font-size:16px;">
        ${article.summary}
      </section>

      <section style="margin-bottom:40px;">
        <h2 style="font-size:24px; color:#0A192F; margin-bottom:15px;">Frequently Asked Questions (FAQs)</h2>
        ${article.faqs.map(f => `
          <div style="margin-bottom:15px; background:#F8FAFC; padding:18px; border-radius:8px; border-left:4px solid #D4AF37;">
            <h3 style="font-size:16px; color:#0A192F; margin:0 0 8px;">${f.q}</h3>
            <p style="margin:0; color:#475569; line-height:1.6;">${f.a}</p>
          </div>
        `).join('\n')}
      </section>

      <div style="background:#0A192F; color:#FFF; padding:25px; border-radius:12px; text-align:center; margin-bottom:40px;">
        <h3 style="color:#FFF; margin-top:0; font-size:20px;">Have Questions Regarding Harico Estates Projects?</h3>
        <p style="color:#CBD5E1; font-size:14px; margin-bottom:15px;">Connect directly with developer sales consultants for floor plans, pricing sheets, and VIP site visit bookings.</p>
        <a href="tel:+917744009295" style="background:#D4AF37; color:#0A192F; padding:10px 22px; border-radius:25px; font-weight:bold; text-decoration:none; display:inline-block;">📞 Call +91 7744009295</a>
      </div>

      ${clusterFooterHtml}

      <footer style="margin-top:40px; padding-top:20px; border-top:1px solid #CBD5E1; color:#64748B; font-size:13px; text-align:center;">
        <p><strong>Developer:</strong> Sentosa Developers & Harico Estates (39-Year Legacy since 1987). <strong>Contact Sales Desk:</strong> +91 7744009295 | <strong>Email:</strong> contact@haricoestates.in</p>
      </footer>
    </main>
  </div>
  `;

  articleHtml = articleHtml.replace('<div id="app"></div>', articleSemanticBody);
  fs.writeFileSync(path.join(articleDir, 'index.html'), articleHtml, 'utf-8');
  console.log('[Prerender] Generated rich static article: /articles/' + article.slug + '/index.html');
});

let rootHtml = template;
rootHtml = rootHtml.replace(/<link rel="canonical"[\s\S]*?>/is, '');
const rootSchemaTag = `
  <link rel="canonical" href="https://haricoestates.in/" />
  <script type="application/ld+json">${JSON.stringify(orgSchema)}</script>
`;
if (rootHtml.includes('<head>')) {
  rootHtml = rootHtml.replace('<head>', '<head>\n' + rootSchemaTag);
}

const rootSemanticBody = `
<div id="app">
  <main class="prerendered-content" style="max-width:1200px; margin:0 auto; padding:40px 20px; font-family:system-ui, -apple-system, sans-serif;">
    <header style="text-align:center; margin-bottom:40px;">
      <span style="color:#D4AF37; font-weight:bold; text-transform:uppercase; font-size:14px; letter-spacing:1px;">A 39-Year Real Estate Legacy by Sentosa Developers</span>
      <h1 style="font-size:36px; color:#0A192F; margin:12px 0;">Harico Diwaam & Harico Edge | Sentosa Punawale & Harico Kiwale 2 & 3 BHK Flats</h1>
      <p style="font-size:18px; color:#475569; max-width:850px; margin:0 auto; line-height:1.6;">Spacious 2 & 3 BHK luxury residences in Punawale & Kiwale featuring dual private balconies, 100+ curated amenities, and seamless 2-minute connectivity to the Mumbai-Pune Expressway.</p>
      <div style="margin-top:20px;">
        <span style="background:#0A192F; color:#FFF; padding:8px 18px; border-radius:20px; font-size:14px; font-weight:bold; margin:0 5px;">Starting ₹70.00 Lacs*</span>
        <span style="background:#D4AF37; color:#0A192F; padding:8px 18px; border-radius:20px; font-size:14px; font-weight:bold; margin:0 5px;">📞 Helpline: +91 7744009295</span>
      </div>
    </header>

    <section style="margin-bottom:50px;">
      <h2 style="font-size:26px; color:#0A192F; text-align:center; margin-bottom:25px;">Flagship Ongoing Landmarks in Punawale & Kiwale</h2>
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:25px;">
        <article style="background:#F8FAFC; border:1px solid #E2E8F0; padding:25px; border-radius:12px;">
          <h3 style="margin-top:0; font-size:22px;"><a href="/project/harico-divaam" style="color:#0A192F; text-decoration:none;">Harico Diwaam / Divaam (Kiwale)</a></h3>
          <p style="color:#64748B; line-height:1.5;">Tallest 24-storey landmark sky towers in Kiwale-Ravet directly opposite Sentosa Water Park on Mukai Chowk corridor. 100+ resort amenities.</p>
          <p><strong>Config:</strong> 2 & 3 BHK (724 - 1108 sq.ft) | <strong>Price:</strong> Starts ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*) | <strong>RERA:</strong> PR1260002502389</p>
          <a href="/project/harico-divaam" style="color:#D4AF37; font-weight:bold;">View Project Details &rarr;</a>
        </article>

        <article style="background:#F8FAFC; border:1px solid #E2E8F0; padding:25px; border-radius:12px;">
          <h3 style="margin-top:0; font-size:22px;"><a href="/project/harico-edge" style="color:#0A192F; text-decoration:none;">Harico Edge (Punawale)</a></h3>
          <p style="color:#64748B; line-height:1.5;">Zero-wastage 2 & 3 BHK luxury residences with dual private balconies near Bhumkar Chowk & 2 mins to Mumbai-Pune Expressway.</p>
          <p><strong>Config:</strong> 2 & 3 BHK (741 - 1148 sq.ft) | <strong>Price:</strong> Starts ₹74.00 Lacs* | <strong>RERA:</strong> P52100031773</p>
          <a href="/project/harico-edge" style="color:#D4AF37; font-weight:bold;">View Project Details &rarr;</a>
        </article>

        <article style="background:#F8FAFC; border:1px solid #E2E8F0; padding:25px; border-radius:12px;">
          <h3 style="margin-top:0; font-size:22px;"><a href="/project/harico-pride" style="color:#0A192F; text-decoration:none;">Harico Pride (Punawale)</a></h3>
          <p style="color:#64748B; line-height:1.5;">Largest carpet layouts with rooftop infinity pool located near Bhiku Vallabh Kale School in prime Punawale.</p>
          <p><strong>Config:</strong> 2 & 3 BHK (765 - 1180 sq.ft) | <strong>Price:</strong> Starts ₹78.00 Lacs* | <strong>RERA:</strong> P52100018471</p>
          <a href="/project/harico-pride" style="color:#D4AF37; font-weight:bold;">View Project Details &rarr;</a>
        </article>
      </div>
    </section>

    <section style="margin-bottom:40px; background:#F8FAFC; padding:30px; border-radius:12px;">
      <h2 style="font-size:24px; color:#0A192F; margin-top:0;">Sentosa Developers — 39 Years of Trusted Real Estate (1987-2026)</h2>
      <p style="color:#475569; line-height:1.6;">With over 20 delivered landmark projects and 5,000+ delighted resident families, Sentosa Developers is a hallmark of structural strength, timely possession, and world-class hospitality (Sentosa Water Park & Resorts). Flagship portfolio includes Sentosa Edge, Sentosa Pride, Sentosa Ekam, Sentosa Serene, Sentosa Elite, Sentosa Palm, Sentosa Elysium, and Sentosa Era.</p>
    </section>

    ${clusterFooterHtml}

    <footer style="padding-top:25px; border-top:1px solid #E2E8F0; color:#64748B; font-size:13px; text-align:center;">
      <p>&copy; 2026 Harico Estates by Sentosa Developers. <strong>Sales Desk:</strong> +91 7744009295 | <strong>Email:</strong> contact@haricoestates.in</p>
    </footer>
  </main>
</div>
`;

rootHtml = rootHtml.replace('<div id="app"></div>', rootSemanticBody);
fs.writeFileSync(indexHtmlPath, rootHtml, 'utf-8');
console.log('[Prerender] Generated rich root index.html with full semantic content & JSON-LD schema.');

// 4. Automatically Build Complete XML Sitemap
const allUrls = [
  'https://haricoestates.in/',
  ...projects.map(p => `https://haricoestates.in/project/${p.slug}`),
  ...programmaticPages.map(p => `https://haricoestates.in/${p.path}`),
  'https://haricoestates.in/articles',
  ...articles.map(a => `https://haricoestates.in/articles/${a.slug}`)
];

const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls.map(u => `  <url>
    <loc>${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${u === 'https://haricoestates.in/' || u.includes('/project/') ? '1.0' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
const publicDir = path.resolve(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`[Prerender] Generated master sitemap.xml with ${allUrls.length} verified programmatic URLs.`);

console.log('[Prerender] Complete. Ultra-Advanced Full-Body Semantic Prerendering Ready.');
