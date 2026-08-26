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
        "priceRange": "₹64.50 Lacs - ₹1.50 Cr",
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
                    "price": "6450000",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "price": "6450000",
                        "priceCurrency": "INR",
                        "minPrice": "6450000",
                        "maxPrice": "9700000"
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
        "image": "https://haricoestates.in" + project.image,
        "description": project.description,
        "url": `https://haricoestates.in/project/${project.slug}`,
        "telephone": "+91-7744009295",
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
        updateOGTags(
            project.title,
            project.description,
            "https://haricoestates.in" + project.image,
            "https://haricoestates.in/project/" + project.slug
        );
    } else {
        const prodSchemaEl = document.getElementById('project-schema');
        if (prodSchemaEl) prodSchemaEl.remove();
        
        updateOGTags(
            "Harico Estates | Luxury 2 & 3 BHK Flats in Punawale & Kiwale by Sentosa",
            "Harico Estates & Sentosa Developers (39-Year Legacy). Ultra-luxury 2 & 3 BHK homes across Punawale, Kiwale, Ravet, Tathawade, and Hinjewadi corridor.",
            "https://haricoestates.in/harico_logo.png",
            window.location.href
        );
    }
};
