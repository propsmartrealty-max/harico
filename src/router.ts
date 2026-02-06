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
        window.addEventListener('hashchange', this.handleHashChange.bind(this));
        window.addEventListener('load', this.handleHashChange.bind(this));
    }

    public add(path: string, handler: RouteHandler) {
        this.routes.push({ path, handler });
    }

    private handleHashChange() {
        const hash = window.location.hash.slice(1); // Remove '#'
        const [fullPath, query] = hash.split('?');

        // Handle routes like /project/slug-name
        const pathSegments = fullPath.split('/').filter(Boolean); // ['project', 'slug-name']
        const rootPath = '/' + (pathSegments[0] || '');
        const slug = pathSegments[1];

        // Match route
        const matchedRoute = this.routes.find(r => r.path === rootPath) || this.routes.find(r => r.path === '/');

        if (matchedRoute) {
            const params = new URLSearchParams(query);
            matchedRoute.handler(params, slug);

            // --- SEO Logic ---
            if (pathSegments[0] === 'project' && slug) {
                // Find project by slug
                const project = Object.values(projectsData).find(p => p.slug === slug);
                if (project && project.seo) {
                    MetaManager.setTitle(project.seo.title);
                    MetaManager.setDescription(project.seo.description);
                    MetaManager.setKeywords(project.seo.keywords);
                    MetaManager.setImage(project.image);
                    MetaManager.setUrl(window.location.href);

                    // Schema Injection
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
                            "addressCountry": "IN"
                        },
                        "amenityFeature": project.amenities.map(a => ({
                            "@type": "LocationFeatureSpecification",
                            "name": typeof a === 'string' ? a : a.items.join(', ')
                        }))
                    });
                } else if (project) {
                    // Fallback if SEO object missing but project exists
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

            // Allow DOM to update then try to scroll
            setTimeout(() => {
                const sectionId = pathSegments[0]; // e.g. 'projects' or 'amenities'

                if (slug) {
                    // If detailed page, just scroll top usually, or preserve if needed
                    window.scrollTo(0, 0);
                } else if (sectionId && sectionId !== 'project') {
                    // If homepage section anchor (e.g. #amenities)
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const offset = 80;
                        const top = section.getBoundingClientRect().top + window.pageYOffset - offset;
                        window.scrollTo({ top: top, behavior: 'smooth' });
                    }
                } else {
                    // Default home
                    window.scrollTo(0, 0);
                }
            }, 50);
        }
    }

    public navigate(path: string, query?: Record<string, string>) {
        let hash = path.startsWith('/') ? path.slice(1) : path;
        if (query) {
            const params = new URLSearchParams(query);
            hash += `?${params.toString()}`;
        }
        window.location.hash = hash;
    }
}

export const router = new Router();
