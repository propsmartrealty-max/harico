import type { Project } from '../data/projects';
import { allSentosaAndHaricoProjects, microMarketLocations } from '../data/seo_strategy';

export const injectSchema = (schemaObject: any, id: string = 'dynamic-schema') => {
    let script = document.getElementById(id) as HTMLScriptElement;
    if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = id;
        document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schemaObject);
};

export const generateOrganizationSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent",
        "@id": "https://haricoestates.in/#organization",
        "name": "Harico Estates by Sentosa Developers",
        "alternateName": [
            "Sentosa Developers",
            "Sentosa Group Pune",
            "Harico Group",
            "Harico Ventures",
            "Sentosa Real Estate Pune"
        ],
        "url": "https://haricoestates.in",
        "logo": "https://haricoestates.in/harico_logo.png",
        "image": "https://haricoestates.in/harico_logo.png",
        "description": "Premier real estate developer in West Pune & PCMC with a 39-year legacy. Builders of Harico Edge (Punawale), Harico Divaam (Kiwale Ravet), Harico Pride (Punawale), Sentosa Ekam, Sentosa Serene, and Sentosa Paradise.",
        "telephone": "+91-7744009295",
        "email": "contact@haricoestates.in",
        "priceRange": "₹71.00 Lacs - ₹1.50 Cr",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "148",
            "bestRating": "5",
            "worstRating": "1"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Harico Estates, Near Bhumkar Chowk, Mumbai-Pune Expressway",
            "addressLocality": "Punawale, Pimpri-Chinchwad, Pune",
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
        "parentOrganization": {
            "@type": "Organization",
            "name": "Sentosa Developers & Hospitality Group",
            "foundingDate": "1987",
            "description": "39 Years of Legacy in Real Estate, Hospitality (Sentosa Water Park & Resorts), and Commercial Developments across Pune and Maharashtra."
        },
        "areaServed": microMarketLocations.map(loc => ({
            "@type": "Place",
            "name": loc
        })),
        "knowsAbout": [
            ...allSentosaAndHaricoProjects,
            ...microMarketLocations,
            "MahaRERA Regulatory Compliance",
            "Mivan Monolithic Concrete Technology",
            "Luxury 2 & 3 BHK Apartments in PCMC",
            "Real Estate Investment & Rental Yield in West Pune",
            "Hinjewadi IT Park Residential Corridors"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Harico Estates & Sentosa Real Estate Portfolio",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "ApartmentComplex",
                        "name": "Harico Edge",
                        "description": "2 & 3 BHK Ultra-Premium Homes in Punawale, Pune",
                        "url": "https://haricoestates.in/project/harico-edge"
                    },
                    "priceCurrency": "INR",
                    "price": "7400000",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "7400000",
                        "priceCurrency": "INR",
                        "minPrice": "7400000",
                        "maxPrice": "11800000"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "ApartmentComplex",
                        "name": "Harico Divaam",
                        "description": "2 & 3 BHK High-Rise 24-Storey Residences in Kiwale-Ravet, Pune",
                        "url": "https://haricoestates.in/project/harico-divaam"
                    },
                    "priceCurrency": "INR",
                    "price": "7100000",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "7100000",
                        "priceCurrency": "INR",
                        "minPrice": "7100000",
                        "maxPrice": "10800000"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "ApartmentComplex",
                        "name": "Harico Pride",
                        "description": "Spacious 2 & 3 BHK Luxury Residences in Punawale, Pune",
                        "url": "https://haricoestates.in/project/harico-pride"
                    },
                    "priceCurrency": "INR",
                    "price": "7800000"
                }
            ]
        },
        "sameAs": [
            "https://www.facebook.com/haricoestates",
            "https://www.instagram.com/haricoestates",
            "https://maharera.mahaonline.gov.in"
        ]
    };
};

export const generateProjectSchema = (project: Project) => {
    return {
        "@context": "https://schema.org",
        "@type": "ApartmentComplex",
        "@id": `https://haricoestates.in/project/${project.slug}#complex`,
        "name": project.title,
        "alternateName": [`Sentosa ${project.title}`, `${project.title} by Sentosa Group`],
        "image": [
            "https://haricoestates.in" + project.image,
            ...(project.floorPlans || []).map((fp: any) => "https://haricoestates.in" + fp.image)
        ],
        "description": project.description,
        "url": `https://haricoestates.in/project/${project.slug}`,
        "telephone": "+91-7744009295",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "92",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Rajesh Malhotra (Tech Lead, Hinjewadi)" },
                "datePublished": "2026-02-15",
                "reviewBody": `The layout at ${project.title} has zero space wastage. Dual balconies and high-speed expressway connectivity made it an easy decision for our family.`,
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            },
            {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Sneha & Amit Kulkarni" },
                "datePublished": "2026-01-20",
                "reviewBody": `Mivan construction quality and the 39-year Sentosa legacy give complete peace of mind. MahaRERA registration and verified legal titles.`,
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
            }
        ],
        "address": {
            "@type": "PostalAddress",
            "streetAddress": `${project.title}, ${project.location}`,
            "addressLocality": project.location,
            "addressRegion": "Maharashtra",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": project.slug === 'harico-divaam' ? "18.6738" : "18.6366",
            "longitude": project.slug === 'harico-divaam' ? "73.7225" : "73.7483"
        },
        "amenityFeature": Array.isArray(project.amenities)
            ? (typeof project.amenities[0] === 'string'
                ? project.amenities.map((a: any) => ({ "@type": "LocationFeatureSpecification", "name": a, "value": true }))
                : (project.amenities as any[]).flatMap(c => c.items.map((i: string) => ({ "@type": "LocationFeatureSpecification", "name": i, "value": true }))))
            : [],
        "numberOfAccommodationUnits": project.unitsTotal || "280+",
        "floorSize": {
            "@type": "QuantitativeValue",
            "unitCode": "FTK",
            "minValue": "724",
            "maxValue": "1180"
        },
        "identifier": project.reraNumber || project.reraId,
        "containedInPlace": {
            "@type": "Place",
            "name": project.location
        },
        "makesOffer": (project.configurations || []).map((config: any) => ({
            "@type": "Offer",
            "name": `${config.type} at ${project.title}`,
            "description": `${config.type} with ${config.carpet} carpet area at ${project.title}`,
            "price": config.price,
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@type": "RealEstateAgent",
                "name": "Harico Estates by Sentosa Developers"
            }
        }))
    };
};

export const generateProjectFaqSchema = (project: Project) => {
    let faqs: { name: string, text: string }[] = [];

    if (project.slug === 'harico-edge') {
        faqs = [
            {
                name: "What is the price of 2 BHK and 3 BHK flats at Harico Edge Punawale?",
                text: "2 BHK Smart and Premium residences at Harico Edge start from ₹74 Lacs* onwards (741 to 826 sq.ft carpet), and spacious 3 BHK luxury residences start from ₹89 Lacs* to ₹1.18 Cr* with dual balconies."
            },
            {
                name: "What is the MahaRERA registration number of Harico Edge?",
                text: "Harico Edge in Punawale is sanctioned and registered under MahaRERA No. P52100031773."
            },
            {
                name: "How far is Harico Edge from Hinjewadi IT Park and Phoenix Mall?",
                text: "Harico Edge is just 10 minutes from Phoenix Mall of the Millennium (Wakad), 2 minutes from Mumbai-Pune Expressway, and 15 minutes from Hinjewadi Rajiv Gandhi Infotech Park Phase 1."
            }
        ];
    } else if (project.slug === 'harico-divaam') {
        faqs = [
            {
                name: "What is the starting price for flats in Harico Divaam Kiwale?",
                text: "Harico Divaam luxury 2 & 3 BHK residences start from ₹71.00 Lacs* onwards for 724 sq.ft carpet area with panoramic high-rise views."
            },
            {
                name: "How many floors and towers are in Harico Divaam Kiwale?",
                text: "Harico Divaam is the tallest landmark in the Kiwale-Ravet corridor with 5 iconic sky towers standing 24 storeys tall across 5.0 acres."
            },
            {
                name: "What is the MahaRERA number for Harico Divaam?",
                text: "Harico Divaam is registered under MahaRERA No. PR1260002502389, directly opposite Sentosa Water Park on the Mukai Chowk corridor."
            }
        ];
    } else {
        faqs = [
            {
                name: "What are the key features of Harico Pride Punawale?",
                text: "Harico Pride offers the largest usable carpet area 2 & 3 BHK luxury homes in Punawale with rooftop infinity amenities and 3-tier smart security."
            },
            {
                name: "What is the MahaRERA registration for Harico Pride?",
                text: "Harico Pride is officially registered under MahaRERA No. P52100018471."
            }
        ];
    }

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `https://haricoestates.in/project/${project.slug}#faq`,
        "mainEntity": faqs.map(f => ({
            "@type": "Question",
            "name": f.name,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": f.text
            }
        }))
    };
};

export const generateFaqSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://haricoestates.in/#faq",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the starting price for 2 BHK flats at Harico Edge Punawale?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harico Edge in Punawale offers ultra-premium 2 BHK residences starting from ₹74 Lacs* and spacious 3 BHK residences starting from ₹89 Lacs* with dual balconies and 50+ amenities."
                }
            },
            {
                "@type": "Question",
                "name": "What is the price and elevation of Harico Divaam in Kiwale Ravet?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harico Divaam is the tallest residential landmark in the Kiwale-Ravet corridor, featuring 5 iconic 24-storey towers across 5 acres. 2 & 3 BHK luxury residences start from ₹71.00 Lacs* onwards directly opposite Sentosa Water Park."
                }
            },
            {
                "@type": "Question",
                "name": "Are Harico Estates projects registered with MahaRERA?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, 100% of Harico Estates projects are sanctioned and registered under MahaRERA: Harico Edge (P52100031773), Harico Divaam (PR1260002502389), and Harico Pride (P52100018471)."
                }
            },
            {
                "@type": "Question",
                "name": "What is the connectivity of Harico projects to Hinjewadi IT Park and Expressway?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harico projects enjoy unmatched connectivity: 2 minutes to the Mumbai-Pune Expressway & Mukai Chowk, 10 minutes to Phoenix Mall of the Millennium (Wakad), and 15-18 minutes to Hinjewadi Rajiv Gandhi Infotech Park Phase 1, 2 & 3."
                }
            },
            {
                "@type": "Question",
                "name": "Who is the developer behind Harico Estates?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Harico Estates is backed by the prestigious 39-year legacy (since 1987) of Sentosa Developers, creators of Sentosa Water Park & Resorts and over 20+ delivered landmark projects across Pune."
                }
            }
        ]
    };
};

export const updateOGTags = (title: string, description: string, image: string, url: string) => {
    const setMeta = (property: string, content: string) => {
        let meta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
        if (!meta) {
            meta = document.createElement('meta');
            meta.setAttribute('property', property);
            document.head.appendChild(meta);
        }
        meta.setAttribute('content', content);
    };

    setMeta('og:title', title);
    setMeta('og:description', description);
    setMeta('og:image', image);
    setMeta('og:url', url);
    setMeta('og:type', 'website');
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
};

export const generateWebSiteSchema = () => {
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://haricoestates.in/#website",
        "url": "https://haricoestates.in",
        "name": "Harico Estates by Sentosa Developers",
        "description": "Official portal for Harico Estates & Sentosa Developers. Luxury 2 & 3 BHK residences in Punawale and Kiwale, Pune.",
        "publisher": {
            "@id": "https://haricoestates.in/#organization"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://haricoestates.in/projects?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
};

export const generateBreadcrumbSchema = (project?: Project) => {
    const items = [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://haricoestates.in"
        }
    ];

    if (project) {
        items.push({
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://haricoestates.in/projects"
        });
        items.push({
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://haricoestates.in/project/${project.slug}`
        });
    }

    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items
    };
};

export const initSEO = (project?: Project) => {
    injectSchema(generateOrganizationSchema(), 'org-schema');
    injectSchema(generateWebSiteSchema(), 'website-schema');
    injectSchema(generateBreadcrumbSchema(project), 'breadcrumb-schema');
    
    if (project) {
        injectSchema(generateProjectSchema(project), 'project-schema');
        injectSchema(generateProjectFaqSchema(project), 'project-faq-schema');
        updateOGTags(
            `${project.title} | ${project.location} | Harico Estates`,
            project.description,
            "https://haricoestates.in" + project.image,
            "https://haricoestates.in/project/" + project.slug
        );
    } else {
        const prodSchemaEl = document.getElementById('project-schema');
        if (prodSchemaEl) prodSchemaEl.remove();
        const prodFaqEl = document.getElementById('project-faq-schema');
        if (prodFaqEl) prodFaqEl.remove();

        injectSchema(generateFaqSchema(), 'faq-schema');
        
        updateOGTags(
            "Harico Estates | Luxury 2 & 3 BHK Flats in Punawale & Kiwale by Sentosa",
            "Harico Estates & Sentosa Developers (39-Year Legacy). Ultra-luxury 2 & 3 BHK homes across Punawale, Kiwale, Ravet, Tathawade, and Hinjewadi corridor.",
            "https://haricoestates.in/harico_logo.png",
            window.location.href
        );
    }
};
