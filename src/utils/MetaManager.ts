export class MetaManager {
    static setTitle(title: string) {
        document.title = title;
        this.setMeta('og:title', title);
        this.setMeta('twitter:title', title);
    }

    static setDescription(description: string) {
        this.setMeta('description', description);
        this.setMeta('og:description', description);
        this.setMeta('twitter:description', description);
    }

    static setKeywords(keywords: string) {
        this.setMeta('keywords', keywords);
    }

    static setImage(imageUrl: string) {
        const fullUrl = imageUrl.startsWith('http') ? imageUrl : window.location.origin + imageUrl;
        this.setMeta('og:image', fullUrl);
        this.setMeta('twitter:image', fullUrl);
    }

    static setUrl(url: string) {
        this.setMeta('og:url', url);
        // Update canonical
        let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
        if (!link) {
            link = document.createElement('link');
            link.rel = 'canonical';
            document.head.appendChild(link);
        }
        link.href = url;
    }

    static setSchema(schemaData: object) {
        let script = document.getElementById('json-ld-schema') as HTMLScriptElement;
        if (!script) {
            script = document.createElement('script');
            script.id = 'json-ld-schema';
            script.type = 'application/ld+json';
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(schemaData);
    }

    private static setMeta(nameOrProperty: string, content: string) {
        // Try finding by name
        let element = document.querySelector(`meta[name="${nameOrProperty}"]`);
        // If not found, try finding by property (for OG tags)
        if (!element) {
            element = document.querySelector(`meta[property="${nameOrProperty}"]`);
        }

        if (element) {
            element.setAttribute('content', content);
        } else {
            // Create if it doesn't exist
            const meta = document.createElement('meta');
            if (nameOrProperty.startsWith('og:') || nameOrProperty.startsWith('twitter:')) {
                meta.setAttribute('property', nameOrProperty);
            } else {
                meta.setAttribute('name', nameOrProperty);
            }
            meta.setAttribute('content', content);
            document.head.appendChild(meta);
        }
    }

    static reset() {
        this.setTitle('Harico Estates | Premium 2 & 3 BHK Flats in Punawale | By Sentosa Venture');
        this.setDescription('Discover Harico Estates by Sentosa Venture. Offering premium 2 & 3 BHK flats in Punawale and luxury commercial spaces. Explore the most luxury projects in Punawale today.');
        this.setKeywords('Harico Edge, Sentosa Edge Punawale, 2 BHK with 2 Balconies Punawale, 3 BHK with Walk-in Wardrobe, RERA PM1260002501839, Premium Properties in Punawale, Luxury Projects in Punawale, Real Estate Pune, 2.5 Acre Project Punawale');
        this.setImage('/harico_logo.png');
        this.setUrl(window.location.origin);

        // Default Organization Schema
        this.setSchema({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Harico Estates",
            "url": window.location.origin,
            "logo": `${window.location.origin}/harico_logo.png`,
            "description": "Premium Real Estate Developer in Punawale and Kiwale, Pune.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
            }
        });
    }
}
