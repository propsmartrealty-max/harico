export interface Project {
    id: string;
    slug: string;
    title: string;
    location: string;
    status: 'Ongoing' | 'Completed' | 'Upcoming';
    type: string;
    price?: string;
    image: string;
    tagline: string;
    description: string;
    amenities: string[] | { category: string; items: string[] }[];
    connectivity: { title: string; time: string }[];
    configurations: { type: string; carpet: string; price: string }[];
    possession?: string;
    masterLayout?: string;
    floorPlans?: { title: string; image: string }[];
    reraId?: string;
    seo?: {
        title: string;
        description: string;
        keywords: string;
    };
}

export const projectsData: Record<string, Project> = {
    '1': {
        id: '1',
        slug: 'harico-edge',
        title: 'HARICO EDGE',
        location: 'Punawale, Pune',
        status: 'Ongoing',
        type: '2 & 3 BHK Premium Homes',
        price: '74 Lacs Onwards',
        possession: '2029',
        image: '/assets/harico-edge-hero.png',
        tagline: 'A Glimpse Into Excellence | The Edge Of Timeless Modern Sophistication',
        description: 'Harico Edge (formerly Sentosa Edge) offers a peaceful and modern lifestyle in one of Pune’s most convenient and growing neighbourhoods, Punawale. Spread across a 2.5-acre land parcel, the project features well-designed 2 and 3 BHK Ultra-Premium homes that are spacious, bright, and thoughtfully planned. With soothing green views, practical layouts, 2 balconies in 2 BHKs, and a walk-in wardrobe in 3 BHKs, every home is designed for comfortable, easy family living. The community brings together 50+ lifestyle amenities for relaxation, fitness, and leisure. RERA ID: PM1260002501839.',
        amenities: [
            'Swimming Pool', 'Kids Play Area', 'Party Lawn', 'Temple & Flag Hoisting',
            'Gazebo', 'Sun Bathing Area', 'Pool Deck Area', 'Rooftop Amenities',
            'Yoga & Zumba Room', 'Gym & Jogging Track', 'Sunset Point', 'Decorated Entrance Gate',
            'Intercom System & CCTV', 'EV Charging Point', 'Solar Power Backup', 'Multipurpose Hall',
            'Mini Theater', 'Barbeque Counter', 'Day Care Room', 'Library', 'Snooker Lounge'
        ],
        connectivity: [
            { title: 'Mumbai-Pune Highway', time: '02 min' },
            { title: 'Preschool & Schools', time: '01 min' },
            { title: 'Decathlon Sports - Wakad', time: '08 Min' },
            { title: 'Balaji Temple Punawale', time: '04 Min' },
            { title: 'Akshara International School', time: '10 Min' },
            { title: 'JSPM College', time: '03 Min' },
            { title: 'Phoenix Mall of the Millennium', time: '10 Min' },
            { title: 'Lifepoint Multispecialty Hospital', time: '11 Min' }
        ],
        configurations: [
            { type: '2 BHK Smart', carpet: '741 sq.ft', price: '₹ 74 Lacs*' },
            { type: '2 BHK Premium', carpet: '781 sq.ft', price: '₹ 80 Lacs*' },
            { type: '2 BHK Grande', carpet: '826 sq.ft', price: '₹ 84 Lacs*' },
            { type: '3 BHK Comfort', carpet: '942 sq.ft', price: '₹ 89 Lacs*' },
            { type: '3 BHK Luxury', carpet: '1048 sq.ft', price: '₹ 98 Lacs*' },
            { type: '3 BHK Grande', carpet: '1114 sq.ft', price: '₹ 1.12 Cr*' },
            { type: '3 BHK Royale', carpet: '1148 sq.ft', price: '₹ 1.18 Cr*' }
        ],
        seo: {
            title: 'Harico Edge Punawale | Luxury 2 & 3 BHK Flats near Wakad | By Sentosa',
            description: 'Harico Edge: Premium 2 & 3 BHK flats in Punawale, Pune. 2.5 acres, 50+ amenities, spacious balconies. 2 mins from Mumbai-Pune Highway. Enquire Now!',
            keywords: 'Harico Edge, 2 BHK Punawale, 3 BHK Punawale, Flats near Wakad, Sentosa Edge, Luxury Apartments Punawale'
        }
    },
    '2': {
        id: '2',
        slug: 'harico-divaam',
        title: 'HARICO DIVAAM',
        location: 'Kiwale, Pune',
        status: 'Upcoming',
        type: '2 & 3 BHK Premium Homes',
        price: 'Starts ₹64.50 Lacs*',
        image: '/assets/harico-divaam-hero.jpg',
        tagline: 'Divine Living Experience | Premium 2 & 3 BHK Homes | A Sentosa Group Venture',
        description: 'Harico Divaam (Sentosa Harico Codename Divine) offers a perfect blend of modern architecture and divine living in Kiwale. Backed by a 39-year legacy of the Sentosa Group, this project is spread across 5 acres with 5 towers of 24 storeys each. It offers a lifestyle of luxury and convenience with over 100+ world-class lifestyle amenities categorized into Water & Wellness, Sports & Entertainment, and Premium Lifestyle.',
        amenities: [
            {
                category: 'Water & Wellness',
                items: [
                    'Resort-inspired Swimming Pool', 'Children\'s Splash Pool', 'Poolside Leisure Deck',
                    'Cabana-style Pergolas', 'BBQ & Poolside Party Deck', 'Sacred Temple Pavilion',
                    'Meditation & Yoga Lawns', 'Zen Tranquillity Garden', 'Reflexology Walkway',
                    'Sensory & Aromatherapy Garden', 'Sky-level Gym', 'Indoor Yoga Studio'
                ]
            },
            {
                category: 'Sports & Entertainment',
                items: [
                    'Children\'s Play Zone', 'Creative Sand Play', 'Multi-purpose Sports Court',
                    'Professional Mini Cricket Turf', 'Jogging & Walking Track', 'Dedicated Pet Park',
                    'Open-air Amphitheatre', 'Party Hall with DJ System', 'Private Mini Theatre',
                    'Indoor Games Lounge', 'Music/Dance/Hobby Studio'
                ]
            },
            {
                category: 'Premium Lifestyle',
                items: [
                    '12 Premium Guest Suites', 'Luxury Salon & Beauty Parlour', 'Exclusive Residents\' Sky Lounge',
                    'Co-working Spaces', 'Podcast & Content Creator Studio', 'Sky Observation Deck',
                    'EV Charging Points'
                ]
            }
        ],
        connectivity: [
            { title: 'Mumbai-Pune Expressway', time: '02 Min' },
            { title: 'Mukai Chowk / Ravet', time: '05 Min' },
            { title: 'Sentosa Water Park', time: 'Opposite' },
            { title: 'MCA Stadium (Gahunje)', time: 'Near' },
            { title: 'Symbiosis College', time: 'Near' },
            { title: 'Hinjewadi IT Park', time: '20 Min' },
            { title: 'Phoenix Mall of the Millennium', time: '10 Min' },
            { title: 'Aditya Birla Hospital', time: '15 Min' },
            { title: 'D.Y. Patil University', time: '10 Min' }
        ],
        configurations: [
            { type: '2 BHK Smart', carpet: '724 sq.ft', price: '₹ 64.50 - 66.50 Lacs*' },
            { type: '2 BHK Comfort', carpet: '760 sq.ft', price: '₹ 67.50 - 69.50 Lacs*' },
            { type: '2 BHK Prime', carpet: '791 sq.ft', price: '₹ 69.90 - 71.90 Lacs*' },
            { type: '2 BHK Grand', carpet: '848 sq.ft', price: '₹ 72.00 - 74.00 Lacs*' },
            { type: '3 BHK Smart', carpet: '920 sq.ft', price: '₹ 80.50 - 82.50 Lacs*' },
            { type: '3 BHK Comfort', carpet: '983 sq.ft', price: '₹ 86.00 - 88.00 Lacs*' },
            { type: '3 BHK Prime', carpet: '1051 sq.ft', price: '₹ 93.00 - 95.00 Lacs*' },
            { type: '3 BHK Grand', carpet: '1108 sq.ft', price: '₹ 95.00 - 97.00 Lacs*' }
        ],
        possession: '2028',
        masterLayout: '/assets/harico-divaam-master-layout.png',
        floorPlans: [
            { title: '2 BHK Smart', image: '/assets/harico-divaam-2bhk-smart.png' },
            { title: '2 BHK Comfort', image: '/assets/harico-divaam-2bhk-comfort-v3.png' },
            { title: '2 BHK Prime', image: '/assets/harico-divaam-2bhk-prime-v3.png' },
            { title: '2 BHK Grand', image: '/assets/harico-divaam-2bhk-grand.png' },
            { title: '3 BHK Smart', image: '/assets/harico-divaam-3bhk-smart-v3.png' },
            { title: '3 BHK Comfort', image: '/assets/harico-divaam-3bhk-comfort.png' },
            { title: '3 BHK Grand', image: '/assets/harico-divaam-3bhk-grand-v3.png' }
        ],
        seo: {
            title: 'Harico Divaam Kiwale | 2 & 3 BHK Homes near Expressway | Sentosa Legacy',
            description: 'Harico Divaam (Divine): Tallest towers in Kiwale offering 2 & 3 BHK homes with sky lounge & 100+ amenities. Located next to Mumbai-Pune Expressway.',
            keywords: 'Harico Divaam, Flats in Kiwale, 2 BHK Kiwale, 3 BHK Kiwale, Flats near Mukai Chowk, Sentosa Divine, Luxury Homes Kiwale'
        }
    },
    '3': {
        id: '3',
        slug: 'harico-pride',
        title: 'HARICO PRIDE',
        location: 'Punawale, Pune',
        status: 'Ongoing',
        type: 'Premium 2 & 3 BHK Homes',
        price: 'Coming Soon',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', // Keeping placeholder for now, or should I use a generic one?
        tagline: 'Premium in Every Inch and Intention',
        description: 'Discover the biggest carpet and beautifully designed 2 & 3 BHK residences at Harico Pride in Punawale. These homes are enhanced by natural light, cross ventilation, and green surroundings. Smartly designed, Harico Pride offers a lifestyle that blends comfort, safety, and daily convenience.',
        amenities: [
            'Swimming Pool', 'Clubhouse', 'Gym', 'Rooftop Amenities',
            'Children Play Area', 'Party Lawn', 'Landscape Garden',
            'Yoga Deck', 'Senior Citizen Sitout'
        ],
        connectivity: [
            { title: 'Mumbai-Pune Expressway', time: '05 Min' },
            { title: 'Aditya Birla Hospital', time: '10 Min' },
            { title: 'Phoenix Mall', time: '10 Min' },
            { title: 'Bhiku Vallabh Kale School', time: '02 Min' }
        ],
        configurations: [],
        reraId: 'P52100050231',
        seo: {
            title: 'Harico Pride Punawale | Spacious 2 & 3 BHK Apartments | New Launch',
            description: 'Harico Pride: New launch in Punawale offering spacious 2 & 3 BHK homes. Premium gated community near Bhiku Vallabh Kale School.',
            keywords: 'Harico Pride, New Projects Punawale, Spacious 2 BHK Punawale, Harico Sentosa Pride, Pre-launch offers'
        }
    }
};
