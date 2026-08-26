export interface SpecificationCategory {
    category: string;
    icon: string;
    items: string[];
}

export interface Project {
    id: string;
    slug: string;
    title: string;
    location: string;
    status: 'Ongoing' | 'Completed' | 'Upcoming';
    type: string;
    price?: string;
    startingPriceNumeric?: number; // in Lacs
    image: string;
    tagline: string;
    description: string;
    landParcel?: string;
    towers?: string;
    floors?: string;
    unitsTotal?: string;
    possession?: string;
    masterLayout?: string;
    floorPlans?: { title: string; image: string; carpet?: string; balcony?: string }[];
    amenities: string[] | { category: string; items: string[] }[];
    connectivity: { title: string; time: string; distance?: string; category?: string }[];
    configurations: { type: string; carpet: string; price: string; bedrooms?: number }[];
    highlights?: string[];
    bankPartners?: string[];
    specifications?: SpecificationCategory[];
    reraId?: string;
    reraNumber?: string;
    reraQRCodeUrl?: string;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}

import { generateKeywords } from './seo_strategy';

export const projectsData: Record<string, Project> = {
    '1': {
        id: '1',
        slug: 'harico-edge',
        title: 'HARICO EDGE',
        location: 'Punawale, Pune',
        status: 'Ongoing',
        type: '2 & 3 BHK Ultra-Premium Homes',
        price: '₹74 Lacs Onwards',
        startingPriceNumeric: 74,
        possession: 'December 2028',
        landParcel: '2.5 Acres Luxury Enclave',
        towers: '3 Grand High-Rise Towers',
        floors: '22 Storeys of Iconic Architecture',
        unitsTotal: '280+ Exclusive Residences',
        image: '/assets/harico-edge-hero.png',
        tagline: 'A Glimpse Into Excellence | The Edge Of Timeless Modern Sophistication',
        description: 'Harico Edge (formerly Sentosa Edge) represents the pinnacle of modern architectural luxury in Punawale, West Pune’s fastest-growing residential corridor. Set across a 2.5-acre lush land parcel, each residence offers 2 expansive balconies, zero-wastage smart layouts, dedicated walk-in wardrobe provisions, and panoramic views of the Western Ghats. Crafted with Mivan monolithic concrete technology, Harico Edge delivers unmatched structural longevity, acoustic privacy, and 50+ handpicked lifestyle amenities.',
        highlights: [
            '2.5-Acre Gated Community with 70% Open & Green Spaces',
            'Zero Space Wastage Floor Layouts with Dual Private Balconies',
            'Walk-in Wardrobe Spaces in all 3 BHK Master Bedrooms',
            'Vastu-Compliant East-West Facing Living Entrances',
            'Advanced Multi-Tier Security with RFID Vehicle Access & CCTV',
            'EV Charging Infrastructure for Every Parking Tier',
            'Solar Net-Metering for Common Area Energy Optimization'
        ],
        bankPartners: ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 'Bank of Baroda', 'Kotak Mahindra Bank'],
        amenities: [
            'Swimming Pool with Infinity Edge', 'Kids Splash Pool', 'Grand Clubhouse (10,000 sq.ft)', 'Party Lawn with Banquet Deck',
            'Temple & Flag Hoisting Plaza', 'Cabana & Gazebo Sitouts', 'Sun Bathing & Pool Deck', 'Rooftop Stargazing Observatory',
            'Yoga & Zumba Studio', 'Equipped Gymnasium & Crossfit Zone', 'Jogging & Acupressure Track', 'Grand Designer Entrance Gate',
            'Intercom & Video Door Phone', 'EV Charging Stations', '100% DG Power Backup for Common Areas', 'Multipurpose Community Hall',
            'Private Mini Theatre (30-Seater)', 'Barbeque Counter & Pergola', 'Day Care & Creche Center', 'Library & Co-working Lounge', 'Snooker & Indoor Games Arena'
        ],
        specifications: [
            {
                category: 'Structure & Masonry',
                icon: 'fa-building',
                items: [
                    'Earthquake Resistant RCC Framed Structure designed for Zone III seismic compliance',
                    'Alu-form / Mivan monolithic concrete construction ensuring crack-free smooth surfaces',
                    'Eco-friendly AAC block masonry with gypsum finish on internal walls'
                ]
            },
            {
                category: 'Flooring & Finishes',
                icon: 'fa-layer-group',
                items: [
                    '800mm x 1600mm Double Charged Glazed Vitrified Tiles in Living, Dining & Bedrooms',
                    'Anti-skid premium matte ceramic tiles in Balconies, Dry Balcony & Bathrooms',
                    'Laminated wooden flooring provision in Master Bedroom suite (3 BHK units)',
                    'Premium weather-shield exterior acrylic paint and low-VOC royal luster interior paint'
                ]
            },
            {
                category: 'Kitchen & Utility',
                icon: 'fa-kitchen-set',
                items: [
                    'Premium Granite / Quartz platform with heavy-gauge stainless steel sink (Franke/Nirali)',
                    'Full-height designer ceramic dado tiles above kitchen platform',
                    'Dedicated dry balcony with washing machine inlet/outlet points and power socket',
                    'Provision for water purifier (RO) and exhaust chimney ducting'
                ]
            },
            {
                category: 'Bathrooms & Sanitary',
                icon: 'fa-bath',
                items: [
                    'CP and Sanitary fittings from luxury brands: Kohler / Jaquar / Grohe',
                    'Concealed plumbing with premium CPVC / UPVC anti-corrosion pipelines',
                    'Wall-hung EWC with concealed dual-flush cisterns',
                    'Solar water heating connection in Master Bathroom & geyser provision in all bathrooms'
                ]
            },
            {
                category: 'Electrical & Smart Home',
                icon: 'fa-bolt',
                items: [
                    'Concealed copper wiring with Polycab / Havells fire-retardant cables',
                    'Modular electrical switches by Schneider Electric / Legrand',
                    'AC electrical points in Living Room and all Bedrooms',
                    'Smart video door phone (VDP) with mobile app integration and digital main door lock'
                ]
            },
            {
                category: 'Doors, Windows & Elevators',
                icon: 'fa-door-open',
                items: [
                    'Grand 8-ft decorative laminated main door with biometric digital lock (Yale/Godrej)',
                    'Heavy-gauge powder-coated aluminum sliding windows with mosquito mesh and granite sills',
                    'High-speed automatic elevators (Schindler / Otis / Mitsubishi) with ARD emergency backup'
                ]
            }
        ],
        reraNumber: 'P52100031773',
        reraQRCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100031773',
        connectivity: [
            { title: 'Mumbai-Pune Expressway / NH-48', time: '02 Min', distance: '1.2 km', category: 'Highways & Transit' },
            { title: 'Bhumkar Chowk & Wakad Flyover', time: '07 Min', distance: '3.5 km', category: 'Highways & Transit' },
            { title: 'Hinjewadi IT Park (Phase 1)', time: '12 Min', distance: '6.8 km', category: 'IT & Employment' },
            { title: 'Phoenix Mall of the Millennium (Wakad)', time: '10 Min', distance: '4.8 km', category: 'Retail & Shopping' },
            { title: 'Akshara International School', time: '04 Min', distance: '1.8 km', category: 'Education' },
            { title: 'JSPM & Indira Institute of Management', time: '05 Min', distance: '2.4 km', category: 'Education' },
            { title: 'Lifepoint Multispecialty Hospital', time: '09 Min', distance: '4.2 km', category: 'Healthcare' },
            { title: 'Aditya Birla Memorial Hospital', time: '12 Min', distance: '5.9 km', category: 'Healthcare' },
            { title: 'Decathlon Sports & Balaji Temple', time: '05 Min', distance: '2.1 km', category: 'Lifestyle & Recreation' }
        ],
        configurations: [
            { type: '2 BHK Smart', carpet: '741 sq.ft', price: '₹ 74.00 Lacs*', bedrooms: 2 },
            { type: '2 BHK Premium', carpet: '781 sq.ft', price: '₹ 80.00 Lacs*', bedrooms: 2 },
            { type: '2 BHK Grande', carpet: '826 sq.ft', price: '₹ 84.00 Lacs*', bedrooms: 2 },
            { type: '3 BHK Comfort', carpet: '942 sq.ft', price: '₹ 89.00 Lacs*', bedrooms: 3 },
            { type: '3 BHK Luxury', carpet: '1048 sq.ft', price: '₹ 98.00 Lacs*', bedrooms: 3 },
            { type: '3 BHK Grande', carpet: '1114 sq.ft', price: '₹ 1.12 Cr*', bedrooms: 3 },
            { type: '3 BHK Royale', carpet: '1148 sq.ft', price: '₹ 1.18 Cr*', bedrooms: 3 }
        ],
        seo: {
            title: 'Harico Edge 2 & 3 BHK Flats in Punawale | Near Wakad & Highway | Sentosa Group',
            description: 'Harico Edge by Sentosa: Premium 2 & 3 BHK flats in Punawale starting ₹74 Lacs*. Just 2 mins from Mumbai-Pune Highway. RERA Registered P52100031773. Enquire for Floor Plans.',
            keywords: generateKeywords('edge')
        }
    },
    '2': {
        id: '2',
        slug: 'harico-divaam',
        title: 'HARICO DIVAAM',
        location: 'Kiwale, Pune',
        status: 'Upcoming',
        type: '2 & 3 BHK Ultra-Luxury High-Rise Residences',
        price: 'Starts ₹64.50 Lacs*',
        startingPriceNumeric: 64.5,
        possession: 'March 2028',
        landParcel: '5.0 Acres Megastructure',
        towers: '5 Iconic Sky Towers',
        floors: '24 Storeys (Tallest Towers in Kiwale-Ravet)',
        unitsTotal: '500+ Luxury Residences',
        image: '/assets/harico-divaam-hero.jpg',
        tagline: 'Divine Living Experience | Tallest 24-Storey Landmark | A Sentosa Group Venture',
        description: 'Harico Divaam (Sentosa Harico Codename Divine) is the crowning jewel of Kiwale-Ravet, standing tall as the highest 24-storey residential landmark in the micro-market. Spanning an expansive 5-acre master development directly opposite Sentosa Water Park, Divaam offers over 100+ resort-grade lifestyle amenities organized into dedicated wellness, recreational, and lifestyle zones. Featuring expansive carpet layouts, designer sky lounges, co-working studios, and unmatched expressway connectivity.',
        highlights: [
            'Tallest 24-Storey High-Rise Towers in Kiwale-Ravet Corridor',
            '5-Acre Integrated Master Community with 100+ Lifestyle Amenities',
            'Direct Access: 2 Minutes from Mumbai-Pune Expressway & Mukai Chowk',
            '12 Fully Serviced Guest Suites for Resident Visitors',
            'Podcasting & Content Creator Studio + Executive Co-working Lounges',
            'Exclusive Sky Observation Deck & Sky Gymnasium at 24th Floor',
            'Private 40-Seater Mini Theatre & Party Hall with DJ Setup'
        ],
        bankPartners: ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Punjab National Bank', 'Axis Bank'],
        amenities: [
            {
                category: 'Water & Wellness',
                items: [
                    'Resort-inspired Grand Swimming Pool', 'Children\'s Splash Fun Pool', 'Poolside Sunken Cabana Deck',
                    'Cabana-style Private Pergolas', 'BBQ & Poolside Celebration Deck', 'Sacred Temple Pavilion & Bell Tower',
                    'Meditation, Pranayama & Yoga Lawns', 'Zen Tranquillity Rock Garden', 'Acupressure Reflexology Walkway',
                    'Sensory & Aromatherapy Floral Garden', 'Sky-Level Panoramic Gymnasium', 'Indoor Aerobics & Yoga Studio'
                ]
            },
            {
                category: 'Sports & Entertainment',
                items: [
                    'Children\'s Adventure Play Zone with Rubberized Flooring', 'Creative Sandcastle Pit', 'Multi-Purpose Badminton & Basketball Sports Court',
                    'Professional Box Cricket Turf with Floodlights', 'Jogging & Nordic Walking Track', 'Dedicated Pet Exercise Park & Agility Zone',
                    'Open-Air Roman Amphitheatre', 'Acoustic Party Banquet Hall with Sound System', 'Private 40-Seater Dolby Atmos Mini Theatre',
                    'Indoor Games Arcade (Table Tennis, Foosball, Carrom)', 'Music, Dance & Creative Hobby Studio'
                ]
            },
            {
                category: 'Premium Lifestyle & Business',
                items: [
                    '12 Luxury Furnished Guest Suites for Visitors', 'Salon & Wellness Spa Corner', 'Exclusive Residents\' Rooftop Sky Lounge',
                    'Air-Conditioned Co-Working Hub with High-Speed WiFi', 'Podcast & Digital Content Creator Studio', '24th Floor Sky Observation Deck',
                    'Fast EV Charging Stations for Cars & Two-Wheelers', 'Grand Double-Height Entrance Lobbies with Concierge Desk'
                ]
            }
        ],
        specifications: [
            {
                category: 'Structure & Architecture',
                icon: 'fa-building',
                items: [
                    'Seismic Zone III Compliant Earthquake Resistant RCC Shear Wall System (Mivan Technology)',
                    'High-grade M35/M40 concrete designed for maximum thermal and structural durability',
                    'Aerated autoclaved blockwork with double-coat sand faced external plaster'
                ]
            },
            {
                category: 'Flooring & Surfaces',
                icon: 'fa-layer-group',
                items: [
                    'Large format 1200mm x 1800mm High Gloss Nano Vitrified Tiles in Living, Dining & Kitchen',
                    'Wooden texture anti-skid vitrified tiles in all attached Balconies and Sitouts',
                    'Designer full-height vitrified wall tiles in Bathrooms with anti-fungal epoxy grouting',
                    'Luster finish Asian Paints Royale internally & Weatherproof Ultima Protek externally'
                ]
            },
            {
                category: 'Kitchen & Gourmet Area',
                icon: 'fa-kitchen-set',
                items: [
                    'Parallel / L-shaped Quartz Countertop with Franke Stainless Steel Sink & Swivel Faucet',
                    'Provision for piped gas connection (MNGL network ready)',
                    'Designer glazed wall tiles up to lintel height',
                    'Separate Utility Balcony with water, drainage and 15A electrical points'
                ]
            },
            {
                category: 'Luxury Sanitary & Plumbing',
                icon: 'fa-bath',
                items: [
                    'Luxury series CP & Sanitary ware by Kohler / Toto / Grohe',
                    'Thermostatic diverters with overhead rain shower in master bathroom',
                    'Solar water heating provision in all master bathrooms',
                    'False ceiling with moisture-resistant gypsum in all bathrooms'
                ]
            },
            {
                category: 'Smart Home & Electrical',
                icon: 'fa-bolt',
                items: [
                    'Smart Touch Switches with Alexa / Google Home automation compatibility',
                    'Fire-resistant low-smoke (FRLS) concealed wiring by Finolex / Polycab',
                    'Legrand / Schneider Arteor designer modular switchboards',
                    'Biometric digital door lock (Fingerprint, Passcode, RFID Card, Mechanical Key)'
                ]
            },
            {
                category: 'Doors, Windows & Security',
                icon: 'fa-shield-halved',
                items: [
                    '8.5-ft Grand Veneer-finished main door with Italian-styled designer hardware',
                    'Soundproof DGU (Double Glazed) UPVC sliding French windows in living room',
                    '3-Tier Security: 24x7 Security Guards, RFID Boom Barriers, and 360-degree HD CCTV Surveillance'
                ]
            }
        ],
        connectivity: [
            { title: 'Mumbai-Pune Expressway & Mukai Chowk', time: '02 Min', distance: '0.8 km', category: 'Highways & Transit' },
            { title: 'Sentosa Water Park & Resort', time: '01 Min', distance: 'Opposite', category: 'Lifestyle & Recreation' },
            { title: 'MCA International Cricket Stadium (Gahunje)', time: '06 Min', distance: '3.5 km', category: 'Lifestyle & Recreation' },
            { title: 'Ravet & Akurdi Railway Station', time: '07 Min', distance: '4.0 km', category: 'Highways & Transit' },
            { title: 'Symbiosis Skills & Professional University', time: '04 Min', distance: '1.9 km', category: 'Education' },
            { title: 'D.Y. Patil University Campus (Akurdi)', time: '10 Min', distance: '5.2 km', category: 'Education' },
            { title: 'Hinjewadi Rajiv Gandhi IT Park', time: '18 Min', distance: '10.5 km', category: 'IT & Employment' },
            { title: 'Phoenix Mall of the Millennium', time: '12 Min', distance: '6.5 km', category: 'Retail & Shopping' },
            { title: 'Ojas Multispecialty Hospital Ravet', time: '06 Min', distance: '3.1 km', category: 'Healthcare' }
        ],
        configurations: [
            { type: '2 BHK Smart', carpet: '724 sq.ft', price: '₹ 64.50 - 66.50 Lacs*', bedrooms: 2 },
            { type: '2 BHK Comfort', carpet: '760 sq.ft', price: '₹ 67.50 - 69.50 Lacs*', bedrooms: 2 },
            { type: '2 BHK Prime', carpet: '791 sq.ft', price: '₹ 69.90 - 71.90 Lacs*', bedrooms: 2 },
            { type: '2 BHK Grand', carpet: '848 sq.ft', price: '₹ 72.00 - 74.00 Lacs*', bedrooms: 2 },
            { type: '3 BHK Smart', carpet: '920 sq.ft', price: '₹ 80.50 - 82.50 Lacs*', bedrooms: 3 },
            { type: '3 BHK Comfort', carpet: '983 sq.ft', price: '₹ 86.00 - 88.00 Lacs*', bedrooms: 3 },
            { type: '3 BHK Prime', carpet: '1051 sq.ft', price: '₹ 93.00 - 95.00 Lacs*', bedrooms: 3 },
            { type: '3 BHK Grand', carpet: '1108 sq.ft', price: '₹ 95.00 - 97.00 Lacs*', bedrooms: 3 }
        ],
        masterLayout: '/assets/harico-divaam-master-layout.png',
        reraNumber: 'PR1260002502389',
        reraQRCodeUrl: '/assets/harico-divaam-rera-qr.png',
        floorPlans: [
            { title: '2 BHK Smart', image: '/assets/harico-divaam-2bhk-smart.png', carpet: '724 sq.ft' },
            { title: '2 BHK Comfort', image: '/assets/harico-divaam-2bhk-comfort-v3.png', carpet: '760 sq.ft' },
            { title: '2 BHK Prime', image: '/assets/harico-divaam-2bhk-prime-v3.png', carpet: '791 sq.ft' },
            { title: '2 BHK Grand', image: '/assets/harico-divaam-2bhk-grand.png', carpet: '848 sq.ft' },
            { title: '3 BHK Smart', image: '/assets/harico-divaam-3bhk-smart-v3.png', carpet: '920 sq.ft' },
            { title: '3 BHK Comfort', image: '/assets/harico-divaam-3bhk-comfort.png', carpet: '983 sq.ft' },
            { title: '3 BHK Grand', image: '/assets/harico-divaam-3bhk-grand-v3.png', carpet: '1108 sq.ft' }
        ],
        seo: {
            title: 'Harico Divaam 2 & 3 BHK in Kiwale | Tallest Towers near Ravet Expressway',
            description: 'Harico Divaam (Divine): The tallest towers in Kiwale/Ravet. Luxury 2 & 3 BHK homes from ₹64.5 Lacs*. Next to Mumbai-Pune Expressway & Mukai Chowk. 100+ Amenities. RERA PR1260002502389.',
            keywords: generateKeywords('divaam')
        }
    },
    '3': {
        id: '3',
        slug: 'harico-pride',
        title: 'HARICO PRIDE',
        location: 'Punawale, Pune',
        status: 'Ongoing',
        type: 'Spacious 2 & 3 BHK Luxury Residences',
        price: 'Price on Request',
        startingPriceNumeric: 78,
        possession: 'June 2027',
        landParcel: '3.0 Acres Master Development',
        towers: '4 Grand Elevation Towers',
        floors: '18 Storeys',
        unitsTotal: '320+ Families',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
        tagline: 'Premium in Every Inch and Intention | Uncompromised Space & Elegance',
        description: 'Harico Pride in Punawale is curated for families who demand generous space, pristine natural light, and unmatched urban connectivity. Located adjacent to Bhiku Vallabh Kale School, Harico Pride features the largest carpet areas in its segment, featuring panoramic 3-side open residences, lush landscaped podiums, rooftop wellness decks, and dedicated senior citizen recreational havens.',
        highlights: [
            'Biggest Usable Carpet Areas in the Punawale Micro-Market',
            '3-Side Open Living Orientations for Maximum Cross-Ventilation',
            'Adjacent to Top Educational Institutions and Highway Feeder Roads',
            'Grand Multi-Tier Clubhouse with Rooftop Infinity Pool and Sky Deck',
            'Dedicated Children’s Activity Zone & Senior Citizen Serenity Park',
            '100% Vastu-Aligned Layouts with Private Entry Vestibules'
        ],
        bankPartners: ['State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Bank of Maharashtra', 'Axis Bank'],
        amenities: [
            'Rooftop Infinity Swimming Pool', 'Grand Clubhouse & Gymnasium', 'Children\'s Play Lawn with Climbing Walls',
            'Party Lawn with BBQ Pavilion', 'Landscape Meditation Gardens', 'Yoga & Aerobics Deck',
            'Senior Citizen Sitout & Gazebo', 'High-Speed Elevators with Power Backup', 'Reflexology Pathways',
            'Solar Street Lighting & Rainwater Harvesting System', '24x7 Multi-Tier Security with CCTV Surveillance'
        ],
        specifications: [
            {
                category: 'Structure & Walls',
                icon: 'fa-building',
                items: [
                    'Robust Earthquake Resistant RCC Frame Structure designed per IS codes',
                    'External 6-inch solid block walls with waterproof protective coating',
                    'Internal 4-inch AAC light-weight blocks with smooth gypsum wall plaster'
                ]
            },
            {
                category: 'Flooring & Paint',
                icon: 'fa-layer-group',
                items: [
                    'Premium 800mm x 800mm Vitrified Tiles in entire apartment',
                    'Anti-skid ceramic tiles in Terrace and Bathrooms',
                    'Oil Bound Distemper internally & Premium weather-proof exterior paint'
                ]
            },
            {
                category: 'Kitchen & Fixtures',
                icon: 'fa-kitchen-set',
                items: [
                    'Granite Kitchen Platform with SS Sink and branded CP fitting',
                    'Glazed ceramic tile dado up to 2-ft above platform',
                    'Provision for water purifier, exhaust fan, and refrigerator power outlet'
                ]
            },
            {
                category: 'Sanitary & Electrical',
                icon: 'fa-bath',
                items: [
                    'Concealed plumbing with Jaquar / Cera equivalent sanitary fittings',
                    'Concealed copper wiring with Anchor / Roma modular switches',
                    'TV and Telephone points in Living Room and Master Bedroom',
                    'Provision for Inverter backup wiring in all rooms'
                ]
            }
        ],
        connectivity: [
            { title: 'Mumbai-Pune Expressway / NH-48', time: '04 Min', distance: '2.0 km', category: 'Highways & Transit' },
            { title: 'Bhiku Vallabh Kale School', time: '01 Min', distance: '0.2 km', category: 'Education' },
            { title: 'Aditya Birla Memorial Hospital', time: '09 Min', distance: '4.5 km', category: 'Healthcare' },
            { title: 'Phoenix Mall of the Millennium', time: '10 Min', distance: '4.9 km', category: 'Retail & Shopping' },
            { title: 'Hinjewadi Phase 1 IT Park', time: '14 Min', distance: '7.5 km', category: 'IT & Employment' }
        ],
        configurations: [
            { type: '2 BHK Premium', carpet: '765 sq.ft', price: 'Price on Request', bedrooms: 2 },
            { type: '2 BHK Grande', carpet: '830 sq.ft', price: 'Price on Request', bedrooms: 2 },
            { type: '3 BHK Luxury', carpet: '1060 sq.ft', price: 'Price on Request', bedrooms: 3 },
            { type: '3 BHK Royale', carpet: '1180 sq.ft', price: 'Price on Request', bedrooms: 3 }
        ],
        reraId: 'P52100018471',
        reraNumber: 'P52100018471',
        reraQRCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://maharerait.mahaonline.gov.in/?rera=P52100018471',
        seo: {
            title: 'Harico Pride Punawale | New Launch Spacious 2 & 3 BHK | Pre-Launch Offers',
            description: 'Harico Pride: New Launch in Punawale offering spacious 2 & 3 BHK homes. Located near Bhiku Vallabh Kale School. Avail Pre-Launch Price Benefits. RERA P52100018471.',
            keywords: generateKeywords('pride')
        }
    }
};
