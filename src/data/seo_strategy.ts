// Master SEO Strategy - Deep Market Data & 1000+ Keyword Implementation

// Base Clusters for Combinatorics
const locations = [
    'Punawale', 'Kiwale', 'Ravet', 'Wakad Annexe', 'PCMC', 'Pune West',
    'Near Mumbai-Pune Expressway', 'Near Bhumkar Chowk', 'Near Mukai Chowk',
    'Near Hinjewadi IT Park', 'Near Sentosa Resort', 'Pradhikaran'
];

const developers = [
    'Sentosa Developers', 'Sentosa Group', 'Harico Estates', 'Harico Group', 
    'Sentos', 'Sentosa Ventures', 'Sentosa Real Estate', 'Harico Developers'
];

const projectQueries = [
    'Projects', 'Upcoming Projects', 'New Launch', 'Properties', 'Flats', 'Apartments', 'Real Estate'
];

const propertyTypes = [
    '2 BHK', '3 BHK', '4 BHK', '2.5 BHK', 'Spacious Homes', 'Luxury Flats',
    'Affordable Apartments', 'Premium Residences', 'Jodi Flats', 'Duplex',
    'Penthouse', 'Row Houses', 'Smart Homes'
];

const attributes = [
    'with Balcony', 'with Terrace', 'with Servant Room', 'Vastu Compliant',
    'Garden Facing', 'High Rise', 'Gated Community', 'Ready Possession',
    'Under Construction', 'New Launch', 'Pre-Launch', 'Premium Look'
];

const intents = [
    'Price', 'Cost', 'Rates', 'For Sale', 'Booking', 'Review', 'Floor Plan',
    'Brochure', 'Sample Flat', 'Site Visit', 'Contact Number', 'Location Map',
    'Possession Date', 'Payment Plan', 'Offers', 'No Brokerage', 'Direct from Builder'
];

const investmentTerms = [
    'Rental Yield', 'ROI', 'Investment', 'Price Appreciation', 'Future Development',
    'Best Area to Invest', 'Property Trends 2026', 'Real Estate Market'
];

const nearbyLandmarks = [
    'Near JSPM College', 'Near Indira College', 'Near D Y Patil University',
    'Near Aditya Birla Hospital', 'Near Phoenix Mall of the Millennium',
    'Near MCA Stadium', 'Near Symbiosis Skills University', 'Near Akshara International School'
];

const competitors = [
    'Near Life Republic', 'Near Lodha Belmondo', 'Near Godrej Woodsville',
    'Near Rohan Viti', 'Near Pharande Spaces', 'Near 41 Estera', 'Near Sentosa Ekam'
];

// Marathi Clusters
const marathiLocations = ['पुनावळे', 'किवाळे', 'रावेत', 'वाकड', 'पिंपरी चिंचवड'];
const marathiTypes = ['2 BHK फ्लॅट', '3 BHK घरे', 'लक्झरी अपार्टमेंट्स', 'स्वस्त घरे', 'नवीन प्रोजेक्ट्स'];
const marathiIntents = ['किंमत', 'विक्रीसाठी', 'बुकिंग', 'ताबा', 'संपर्क', 'माहिती'];

// Specific Project Clusters
const haricoEdgeUnique = [
    'Flats near Wakad Highway', 'Punawale Bhumkar Chowk Projects', 'Harico Edge Launch Price',
    'Sentosa Group Punawale', 'Properties near Decathlon Wakad', 'Sentosa Developers Edge'
];

const haricoDivaamUnique = [
    'Tallest Towers in Kiwale', 'Flats near Mukai Chowk', 'Harico Divaam Brochure',
    'Luxury Homes near Expressway', 'Sentosa Divine Kiwale', 'Harico Estates Divaam'
];

const haricoPrideUnique = [
    'New Launch in Punawale 2025', 'Harico Pride Pre-launch', 'Spacious 2 BHK Punawale',
    'Flats near Bhiku Vallabh School', 'Harico projects punawale', 'sentos punawale projects'
];

// Helper to generate combinations
const combine = (arr1: string[], arr2: string[]) => {
    const result: string[] = [];
    arr1.forEach(i1 => {
        arr2.forEach(i2 => {
            result.push(`${i1} ${i2}`);
        });
    });
    return result;
};

// Generate Massive Lists (1000+ Permutations Synthesized)
const builderLocations = combine(developers, locations); // e.g. "Sentosa Developers Punawale"
const builderProjects = combine(builderLocations, projectQueries); // e.g. "Sentosa Developers Punawale Projects"
const mainKeywords = combine(propertyTypes, locations); // e.g., "2 BHK Punawale"
const intentKeywords = combine(mainKeywords, intents); // e.g., "2 BHK Punawale Price"
const builderIntentKeywords = combine(builderProjects, intents.slice(0, 5)); // e.g., "Sentosa Developers Punawale Projects Price"

const attributeKeywords = combine(attributes.slice(0, 5), locations.slice(0, 5));
const investmentKeywords = combine(locations.slice(0, 5), investmentTerms);
const marathiKeywords = [...combine(marathiLocations, marathiTypes), ...combine(marathiLocations, marathiIntents)];

// Master Export
export const masterSeoStrategy = {
    // 1. Core permutations (High Volume)
    core: [...mainKeywords, ...intentKeywords],

    // 2. High Value Builder Keywords (Massive Authority Injection)
    builder: [...builderLocations, ...builderProjects, ...builderIntentKeywords],

    // 3. Niche / Long Tail (High Intent)
    longTail: [
        ...attributeKeywords,
        ...investmentKeywords,
        ...combine(['Flats'], nearbyLandmarks),
        ...competitors
    ],

    // 4. Regional
    regional: marathiKeywords,

    // 5. Project Specific
    edge: [...haricoEdgeUnique, ...combine(['2 BHK', '3 BHK'], ['Punawale', 'Wakad'])],
    divaam: [...haricoDivaamUnique, ...combine(['2 BHK', '3 BHK'], ['Kiwale', 'Ravet'])],
    pride: [...haricoPrideUnique, 'New Projects Punawale']
};

export const generateKeywords = (type: 'edge' | 'divaam' | 'pride' | 'global', maxLimit: number = 300) => {
    let base: string[] = [];

    // Prioritize critical entity keywords
    const entityKeywords = [
        'Sentosa developers', 'Harico Estates Punawale', 'harico projects punawale', 'sentos punawale'
    ];

    if (type === 'global') {
        base = [
            ...entityKeywords,
            ...masterSeoStrategy.builder.slice(0, 50),
            ...masterSeoStrategy.core.slice(0, 50), 
            ...masterSeoStrategy.regional.slice(0, 20)
        ];
    } else {
        // Project specific mix
        const projectSpecific = masterSeoStrategy[type];
        
        // Find relevant geo keywords in builder list
        const locationFilter = type === 'edge' || type === 'pride' ? 'Punawale' : 'Kiwale';
        const relevantBuilder = masterSeoStrategy.builder.filter(k => k.includes(locationFilter)).slice(0, 50);
        const relevantCore = masterSeoStrategy.core.filter(k => k.includes(locationFilter)).slice(0, 50);
        const relevantLongTail = masterSeoStrategy.longTail.slice(0, 30);

        base = [...entityKeywords, ...projectSpecific, ...relevantBuilder, ...relevantCore, ...relevantLongTail];
    }

    // Dedupe and join, enforcing max limit to prevent payload bloat while satisfying 1000+ injection across the site
    return Array.from(new Set(base)).slice(0, maxLimit).join(', ');
};

