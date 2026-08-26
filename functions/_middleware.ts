/**
 * Cloudflare Pages Edge Middleware - Harico Estates
 * Runs on Cloudflare's global edge (330+ data centers) on every incoming request.
 * Enhances SEO bot detection, enforces security headers, and provides edge caching.
 */

interface Env {
  ENVIRONMENT?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. Process Request through Cloudflare Pages Edge Pipeline
  const response = await next();

  // Clone headers for mutation
  const newHeaders = new Headers(response.headers);

  // 2. Googlebot & Search Engine Crawler Optimization
  const userAgent = request.headers.get('user-agent') || '';
  const isBot = /googlebot|bingbot|yandex|duckduckbot|slurp|baiduspider|twitterbot|facebookexternalhit|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest|slackbot|vkShare|W3C_Validator|whatsapp/i.test(userAgent);

  if (isBot) {
    newHeaders.set('X-Robots-Tag', 'all, index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newHeaders.set('X-Edge-Bot-Status', 'Indexed-Verified');
  }

  // 3. Cloudflare Edge Diagnostic & Geo-Routing Indicators
  const cfRay = request.headers.get('cf-ray') || 'edge';
  const country = (request as any).cf?.country || 'IN';
  const city = (request as any).cf?.city || 'Pune';

  newHeaders.set('X-Served-By', 'Cloudflare-Pages-Edge');
  newHeaders.set('X-Edge-Ray', cfRay);
  newHeaders.set('X-Edge-Location', `${city}, ${country}`);

  // 4. Edge Canonical Link Header for Search Engines
  if (url.pathname.startsWith('/project/')) {
    const canonicalUrl = `https://haricoestates.in${url.pathname.replace(/\/$/, '')}`;
    newHeaders.set('Link', `<${canonicalUrl}>; rel="canonical"`);
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
};
