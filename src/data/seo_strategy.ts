// Master SEO Strategy - Ultra-Advanced Search Engine & AI-Conversational (SGE) Entity Mesh
// Covers: Sentosa Group (All 20+ Pune Projects), Harico Estates (All Pune Projects),
// and entire West Pune & PCMC micro-markets (Punawale, Kiwale, Ravet, Tathawade, Hinjewadi, Wakad, Moshi, PCMC).

// 1. All Projects Across Sentosa Group & Harico Estates Legacy (39 Years)
export const allSentosaAndHaricoProjects = [
    // Harico Estates Flagship Projects
    'Harico Edge Punawale',
    'Harico Divaam Kiwale',
    'Harico Divaam Ravet',
    'Harico Divaam Sentosa',
    'Harico Pride Punawale',
    'Harico Estates Punawale',
    'Harico Estates Kiwale',
    'Harico Estates Pune',
    
    // Sentosa Developers Pune Landmarks (1987 - 2026)
    'Sentosa Edge Punawale',
    'Sentosa Divaam Kiwale',
    'Sentosa Divine Kiwale',
    'Sentosa Ekam Punawale',
    'Sentosa Pride Phase 1 Punawale',
    'Sentosa Pride Phase 2 Punawale',
    'Sentosa Pride Phase 3 Punawale',
    'Sentosa Serene Tathawade',
    'Sentosa Paradise Wakad',
    'Sentosa Elysium Wakad',
    'Sentosa Pearl Wakad',
    'Sentosa Palm Wakad',
    'Sentosa Elite Biz Hub Wakad',
    'Sentosa Era Moshi Pradhikaran',
    'Sentosa Residency Hadapsar',
    'Gulraj Residency Kondhwa Pune',
    'Satyam Complex',
    'Shivdham Complex',
    'Samarpam Complex',
    'Royal Palms',
    'Regency Plaza',
    'Ami Infra Pink City'
];

// 2. Micro-Markets Across PCMC & West Pune
export const microMarketLocations = [
    'Punawale',
    'Kiwale',
    'Ravet',
    'Tathawade',
    'Hinjewadi',
    'Hinjewadi Phase 1',
    'Hinjewadi Phase 2',
    'Hinjewadi Phase 3',
    'Wakad',
    'Wakad Annexe',
    'Bhumkar Chowk',
    'Mukai Chowk',
    'Dange Chowk',
    'Kaspate Vasti',
    'Pradhikaran',
    'Moshi',
    'Akurdi',
    'Nigdi',
    'Chinchwad',
    'Pimpri',
    'PCMC',
    'Pimpri Chinchwad',
    'West Pune',
    'Near Mumbai-Pune Expressway',
    'Near Sentosa Water Park',
    'Near MCA International Cricket Stadium Gahunje',
    'Near Symbiosis University Kiwale',
    'Near JSPM Tathawade',
    'Near D.Y. Patil Akurdi Tathawade',
    'Near Phoenix Mall of the Millennium Wakad',
    'Near Aditya Birla Memorial Hospital'
];

// 3. Developer & Entity Query Clusters
export const developerEntities = [
    'Sentosa Developers',
    'Sentosa Group',
    'Harico Estates',
    'Harico Developers',
    'Sentosa Real Estate Pune',
    'Sentosa Harico Venture',
    'Sentos Punawale',
    'Sentosa Kiwale',
    'Harico Group Pune',
    'Sentosa Group 39 Years Legacy'
];

// 4. Property Typologies & Configurations
export const propertyTypologies = [
    '2 BHK Flats',
    '2 BHK Luxury Apartments',
    '2 BHK Premium Homes',
    '2 BHK Smart Homes',
    '2 BHK with 2 Balconies',
    '3 BHK Ultra-Luxury Flats',
    '3 BHK Grand Residences',
    '3 BHK with Walk-in Wardrobe',
    '3 BHK Royale Apartments',
    'Spacious 2 & 3 BHK Homes',
    'Tallest Towers in Kiwale Ravet',
    'Gated Community Apartments',
    'High-Rise 24 Storey Towers',
    '22 Storey Towers in Punawale',
    'Mivan Construction Flats',
    '100+ Amenities Residential Project'
];

// 5. Commercial & Buyer Intent Modifiers
export const buyerIntents = [
    'Price',
    'Price List 2026',
    'Starting ₹71 Lacs',
    'Starting ₹74 Lacs',
    'Floor Plan PDF',
    'Brochure Download',
    'Sample Flat Video Walkthrough',
    'Site Visit Booking',
    'Contact Number',
    'Sales Office Address',
    'MahaRERA Number P52100031773',
    'MahaRERA Number PR1260002502389',
    'MahaRERA Number P52100018471',
    'Possession Date 2027 2028 2029',
    'Cost Sheet & Payment Plan',
    'Pre-Launch Offers',
    'New Launch Discount',
    'Zero Brokerage Direct Builder',
    'Home Loan Approval SBI HDFC ICICI',
    'Rental Yield Hinjewadi IT Crowd',
    'Capital Appreciation Trends PCMC'
];

// 6. Regional Multilingual Entity Bank (Marathi & Hindi)
export const regionalEntities = [
    'पुनावळे मधील नवीन 2 आणि 3 BHK फ्लॅट्स',
    'किवाळे सेंटोसा प्रोजेक्ट्स',
    'तथावडे फ्लॅट विक्रीसाठी',
    'हिंजवडी जवळ 2 BHK घरे',
    'पिंपरी चिंचवड मधील सर्वोत्कृष्ट बिल्डर्स',
    'हरिको इस्टेट्स पुनावळे किंमत',
    'हरिको दिवाम किवाळे ब्रोशर',
    'सेंटोसा डेव्हलपर्स पुणे नवीन प्रोजेक्ट्स',
    'पुनावळे मध्ये घर खरेदी',
    'वाकड जवळ फ्लॅट्स'
];

// Helper combination generator
const combineArrays = (arr1: string[], arr2: string[]) => {
    const res: string[] = [];
    arr1.forEach(a => {
        arr2.forEach(b => {
            res.push(`${a} ${b}`);
        });
    });
    return res;
};

// Combinatorial Synthesis
const devWithLocations = combineArrays(developerEntities, microMarketLocations);
const typologiesWithLocations = combineArrays(propertyTypologies, microMarketLocations);
const intentWithTypologies = combineArrays(typologiesWithLocations.slice(0, 100), buyerIntents.slice(0, 10));
const projectWithIntents = combineArrays(allSentosaAndHaricoProjects, buyerIntents.slice(0, 12));

// Master Export Collection
export const masterSeoStrategy = {
    allProjects: allSentosaAndHaricoProjects,
    locations: microMarketLocations,
    developers: developerEntities,
    coreKeywords: [
        ...devWithLocations,
        ...typologiesWithLocations,
        ...intentWithTypologies,
        ...projectWithIntents
    ],
    regional: regionalEntities,
    
    // Project-Specific Target Keywords
    edge: [
        'Harico Edge Punawale',
        'Sentosa Edge Punawale',
        'Harico Edge Price',
        'Harico Edge Floor Plan',
        'Harico Edge 2 BHK Punawale',
        'Harico Edge 3 BHK Punawale',
        'MahaRERA P52100031773',
        'Flats near Akshara International School Punawale',
        'Flats near Mumbai Pune Highway Punawale',
        '2 BHK in Punawale with 2 Balconies',
        'Harico Edge Sentosa Developers',
        ...combineArrays(['Harico Edge', 'Sentosa Edge'], buyerIntents.slice(0, 8))
    ],

    divaam: [
        'Harico Divaam Kiwale',
        'Harico Diwaam Kiwale Ravet',
        'Sentosa Divine Kiwale',
        'Harico Divaam Brochure',
        'Harico Divaam Price',
        'Harico Divaam 24 Storey Towers',
        'Tallest Towers in Kiwale Ravet',
        'MahaRERA PR1260002502389',
        'Flats opposite Sentosa Water Park Kiwale',
        'Flats near Mukai Chowk Kiwale Ravet',
        '2 BHK in Kiwale Ravet starts 71 Lacs',
        '3 BHK luxury high rise in Kiwale Ravet',
        'Harico Divaam Sentosa Group',
        ...combineArrays(['Harico Divaam', 'Harico Diwaam', 'Sentosa Divine'], buyerIntents.slice(0, 8))
    ],

    pride: [
        'Harico Pride Punawale',
        'Sentosa Pride Punawale',
        'Sentosa Pride Phase 1 2 3 Punawale',
        'Harico Pride Pre-Launch Price',
        'MahaRERA P52100018471',
        'Flats near Bhiku Vallabh Kale School Punawale',
        'Spacious 2 BHK Punawale Biggest Carpet',
        '3 BHK Luxury Apartments Punawale Harico Pride',
        ...combineArrays(['Harico Pride', 'Sentosa Pride'], buyerIntents.slice(0, 8))
    ]
};

/**
 * Generate deep, deduplicated keyword manifest
 */
export const generateKeywords = (type: 'edge' | 'divaam' | 'pride' | 'global', maxLimit: number = 400): string => {
    let result: string[] = [];

    // Core entity anchors (Mandatory on all pages)
    const entityAnchors = [
        'Sentosa Developers', 'Harico Estates', 'Sentosa Group Pune', 'Harico Estates Punawale',
        'Harico Divaam Kiwale', 'Harico Edge Punawale', 'Harico Pride Punawale',
        '2 BHK Flats in Punawale', '3 BHK Flats in Kiwale Ravet', 'Flats near Hinjewadi IT Park',
        'Real Estate PCMC Pune', 'MahaRERA Registered Projects Pune'
    ];

    if (type === 'global') {
        result = [
            ...entityAnchors,
            ...allSentosaAndHaricoProjects,
            ...masterSeoStrategy.coreKeywords.slice(0, 150),
            ...regionalEntities,
            ...masterSeoStrategy.edge.slice(0, 20),
            ...masterSeoStrategy.divaam.slice(0, 20),
            ...masterSeoStrategy.pride.slice(0, 20)
        ];
    } else {
        const projectSpecific = masterSeoStrategy[type] || [];
        const locationTag = (type === 'edge' || type === 'pride') ? 'Punawale' : 'Kiwale';
        const matchedKeywords = masterSeoStrategy.coreKeywords.filter(k => k.includes(locationTag)).slice(0, 150);

        result = [
            ...entityAnchors,
            ...projectSpecific,
            ...matchedKeywords,
            ...allSentosaAndHaricoProjects.slice(0, 15),
            ...regionalEntities.slice(0, 6)
        ];
    }

    return Array.from(new Set(result)).slice(0, maxLimit).join(', ');
};
