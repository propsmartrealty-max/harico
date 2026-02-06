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
