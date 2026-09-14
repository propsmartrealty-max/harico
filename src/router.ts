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
        const rawPath = window.location.pathname;
        const search = window.location.search;
        const normalizedPath = rawPath.replace(/\/$/, '') || '/';

        const pathSegments = normalizedPath.split('/').filter(Boolean); // ['project', 'slug-name'] or ['location', 'punawale']
        const params = new URLSearchParams(search);

        // 1. Check for exact path match (e.g., '/', '/location/punawale', '/faq', '/privacy', etc.)
        let matchedRoute = this.routes.find(r => r.path === normalizedPath);
        let slug: string | undefined = undefined;

        // 2. If no exact match, check for /project/:slug or /articles/:slug wildcard match
        if (!matchedRoute && pathSegments.length >= 1 && pathSegments[0] === 'project') {
            matchedRoute = this.routes.find(r => r.path === '/project');
            slug = pathSegments[1];
        } else if (!matchedRoute && pathSegments.length >= 1 && pathSegments[0] === 'articles') {
            if (pathSegments.length === 1) {
                matchedRoute = this.routes.find(r => r.path === '/articles');
            } else {
                matchedRoute = this.routes.find(r => r.path === '/articles/detail');
                slug = pathSegments[1];
            }
        }

        // 3. If still no match, check if first segment is registered as a direct route
        if (!matchedRoute && pathSegments.length > 0) {
            matchedRoute = this.routes.find(r => r.path === `/${pathSegments[0]}`);
        }

        // 4. Default fallback to root '/'
        if (!matchedRoute) {
            matchedRoute = this.routes.find(r => r.path === '/');
        }

        if (matchedRoute) {
            matchedRoute.handler(params, slug);

            // --- SEO Metadata Logic ---
            if (slug) {
                const project = Object.values(projectsData).find(p => p.slug === slug);
                if (project && project.seo) {
                    MetaManager.setTitle(project.seo.title);
                    MetaManager.setDescription(project.seo.description);
                    MetaManager.setKeywords(project.seo.keywords);
                    MetaManager.setImage(project.image);
                    MetaManager.setUrl(window.location.href);

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
                            "postalCode": "411033"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "18.6366",
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
                    MetaManager.setTitle(`${project.title} | Harico Estates`);
                    MetaManager.setDescription(project.description.slice(0, 160));
                    MetaManager.setImage(project.image);
                    MetaManager.setUrl(window.location.href);
                }
            }

            // Smooth Scroll Handling
            setTimeout(() => {
                const hash = window.location.hash.replace('#', '');
                if (hash) {
                    const el = document.getElementById(hash);
                    if (el) {
                        const offset = 80;
                        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                        return;
                    }
                }
                window.scrollTo(0, 0);
            }, 50);
        }
    }

    public navigate(path: string) {
        window.history.pushState({}, '', path);
        this.handleLocationChange();
    }
}

export const router = new Router();
