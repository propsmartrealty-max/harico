import { MetaManager } from './utils/MetaManager';
import { projectsData } from './data/projects';

type RouteHandler = (params?: URLSearchParams, slug?: string) => void;

interface Route {
    path: string; // e.g., '/' or '/project'
    handler: RouteHandler;
}

class Router {
    private routes: Route[] = [];

    constructor() {
        // Handle Legacy Hash URLs (Redirect to clean URLs)
        const hash = window.location.hash;
        if (hash) {
            console.log('[Router] Hash detected:', hash);
            let cleanHash = hash.substring(1); // Remove '#'
            if (cleanHash) {
                if (!cleanHash.startsWith('/')) {
                    cleanHash = '/' + cleanHash;
                }
                console.log('[Router] Cleaning hash to:', cleanHash);
                window.history.replaceState({}, '', cleanHash); // Update URL without reload
            }
        }

        window.addEventListener('popstate', this.handleLocationChange.bind(this));
        window.addEventListener('load', this.handleLocationChange.bind(this));

        // global click listener for internal links
        document.addEventListener('click', (e) => {
            const link = (e.target as HTMLElement).closest('a');
            if (link && link.href.startsWith(window.location.origin) && !link.hasAttribute('download') && link.target !== '_blank') {
                e.preventDefault();
                const path = link.getAttribute('href');
                if (path) this.navigate(path);
            }
        });
    }

    public add(path: string, handler: RouteHandler) {
        this.routes.push({ path, handler });
    }

    private handleLocationChange() {
        const path = window.location.pathname;
        const search = window.location.search;

        const pathSegments = path.split('/').filter(Boolean); // ['project', 'slug-name'] or ['projects']
        const rootSegment = pathSegments[0];

        // Determine root route path
        // IF /project/slug -> rootPath = '/project'
        // IF /projects -> rootPath = '/' (fallback to home but scroll to section)
        let rootPath = '/';
        let slug = undefined;

        if (rootSegment === 'project') {
            rootPath = '/project';
            slug = pathSegments[1];
        }

        // Match route
        const matchedRoute = this.routes.find(r => r.path === rootPath);

        if (matchedRoute) {
            const params = new URLSearchParams(search);
            matchedRoute.handler(params, slug);

            // --- SEO Logic ---
            if (rootPath === '/project' && slug) {
                // Find project by slug
                const project = Object.values(projectsData).find(p => p.slug === slug);
                if (project && project.seo) {
                    MetaManager.setTitle(project.seo.title);
                    MetaManager.setDescription(project.seo.description);
                    MetaManager.setKeywords(project.seo.keywords);
                    MetaManager.setImage(project.image);
                    MetaManager.setUrl(window.location.href);

                    // Schema Injection - Advanced Real Estate Schema
                    MetaManager.setSchema({
                        "@context": "https://schema.org",
                        "@type": "ApartmentComplex",
                        "name": project.title,
                        "description": project.seo.description,
                        "url": window.location.href,
                        "image": project.image.startsWith('http') ? project.image : window.location.origin + project.image,
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": project.location.split(',')[0].trim(),
                            "addressRegion": "Maharashtra",
                            "addressCountry": "IN",
                            "postalCode": "411033" // Default for Punawale/Kiwale area
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "18.6366", // Approx center for Punawale/Kiwale
                            "longitude": "73.7483"
                        },
                        "priceRange": project.price,
                        "amenityFeature": project.amenities.map(a => ({
                            "@type": "LocationFeatureSpecification",
                            "name": typeof a === 'string' ? a : a.items.join(', '),
                            "value": "True"
                        })),
                        "potentialAction": {
                            "@type": "ReserveAction",
                            "target": {
                                "@type": "EntryPoint",
                                "urlTemplate": `${window.location.href}#enquire`,
                                "inLanguage": "en-US",
                                "actionPlatform": [
                                    "http://schema.org/DesktopWebPlatform",
                                    "http://schema.org/MobileWebPlatform"
                                ]
                            },
                            "result": {
                                "@type": "Reservation",
                                "name": "Book Site Visit"
                            }
                        }
                    });
                } else if (project) {
                    // Fallback
                    MetaManager.setTitle(`${project.title} | Harico Estates`);
                    MetaManager.setDescription(project.description.slice(0, 160));
                    MetaManager.setImage(project.image);
                    MetaManager.setUrl(window.location.href);
                }
            } else {
                // Reset to Home/Default
                MetaManager.reset();
            }
            // -----------------

            // Handle Scrolling for Home Sections
            setTimeout(() => {
                if (rootPath === '/') {
                    // Check if pathSegment corresponds to a section ID (e.g. /amenities)
                    const sectionId = rootSegment;
                    if (sectionId) {
                        const section = document.getElementById(sectionId);
                        if (section) {
                            const offset = 80;
                            const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
                            window.scrollTo({ top: top, behavior: 'smooth' });
                            return;
                        }
                    }
                    // Default scroll top
                    window.scrollTo(0, 0);
                } else {
                    // Details page
                    window.scrollTo(0, 0);
                }
            }, 50);
        }
    }

    public navigate(path: string) {
        window.history.pushState({}, '', path);
        this.handleLocationChange();
    }
}

export const router = new Router();
