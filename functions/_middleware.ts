/**
 * Cloudflare Pages Edge SEO & Indexing Middleware
 * Runs at Cloudflare Edge across 330+ Global PoPs
 */

interface Env {
  ENVIRONMENT?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const userAgent = context.request.headers.get('user-agent') || '';

  const isCrawler = /Googlebot|bingbot|Baiduspider|DuckDuckBot|YandexBot|Applebot|PerplexityBot|ClaudeBot|GPTBot/i.test(userAgent);

  // Execute downstream handler
  const response = await context.next();

  // Clone headers for modification
  const newHeaders = new Headers(response.headers);

  // 1. Universal Search Engine Discovery Links
  newHeaders.set(
    'Link',
    '<https://haricoestates.in/sitemap.xml>; rel="sitemap", <https://haricoestates.in/feed.xml>; rel="alternate"; type="application/rss+xml"'
  );

  // 2. Unrestricted Search Engine Indexing Directives
  if (!newHeaders.has('X-Robots-Tag')) {
    newHeaders.set('X-Robots-Tag', 'all, index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
  }

  // 3. Crawler Acceleration & Tiered Edge Cache Directives
  if (isCrawler) {
    newHeaders.set('CF-Edge-Cache', 'HIT');
    newHeaders.set('Cloudflare-CDN-Cache-Control', 'max-age=86400, stale-while-revalidate=604800');
    newHeaders.set('X-Crawler-Detected', 'true');
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
};
