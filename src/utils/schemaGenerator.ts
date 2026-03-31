import type { Project } from '../data/projects';

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
        "name": "Harico Estates by Sentosa Developers",
        "alternateName": ["Sentosa Group", "Harico Ventures", "Sentosa Real Estate"],
        "url": "https://haricoestates.in",
        "logo": "https://haricoestates.in/harico_logo.png",
        "image": "https://haricoestates.in/harico_logo.png",
        "description": "Premium real estate developers in Pune specializing in luxury 2 and 3 BHK flats in Punawale, Kiwale, and Wakad. Harico Estates is a venture by the esteemed Sentosa Group.",
        "telephone": "+91-7744009295",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Harico Estates, Near Bhumkar Chowk",
            "addressLocality": "Punawale, Pune",
            "addressRegion": "MH",
            "postalCode": "411033",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "18.6366",
            "longitude": "73.7483"
        },
        "areaServed": ["Punawale", "Kiwale", "Wakad", "Ravet", "Hinjewadi"],
        "sameAs": [
            "https://www.facebook.com/haricoestates",
            "https://www.instagram.com/haricoestates"
        ]
    };
};

export const generateProjectSchema = (project: Project) => {
    const rawPrice = project.price ? project.price.replace(/[^0-9.]/g, '') : "0";
    const numericPrice = parseFloat(rawPrice) * 100000;

    return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": project.title,
        "image": "https://haricoestates.in" + project.image,
        "description": project.description,
        "sku": project.id,
        "mpn": project.reraNumber || project.reraId || project.slug,
        "brand": {
            "@type": "Brand",
            "name": "Sentosa Developers"
        },
        "category": "Real Estate / Apartment",
        "offers": {
            "@type": "Offer",
            "url": "https://haricoestates.in/project/" + project.slug,
            "priceCurrency": "INR",
            "price": numericPrice.toString(), 
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "availability": project.status === 'Completed' ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
            "seller": {
                "@type": "Organization",
                "name": "Harico Estates"
            }
        }
    };
};

export const updateOGTags = (title: string, description: string, image: string, url: string) => {
    const setMeta = (property: string, content: string) => {
        let meta = document.querySelector('meta[property="' + property + '"]');
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
};

export const initSEO = (project?: Project) => {
    injectSchema(generateOrganizationSchema(), 'org-schema');
    
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
            "Harico Estates | Premium Real Estate in Punawale by Sentosa",
            "Discover Harico Estates by Sentosa Venture. Premium 2 & 3 BHK flats in Punawale, Kiwale, and Wakad.",
            "https://haricoestates.in/harico_logo.png",
            window.location.href
        );
    }
};
