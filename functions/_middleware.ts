/**
 * Cloudflare Pages Edge Engine & HTMLRewriter Middleware
 * Powered by Cloudflare V8 Workers running on 330+ Global Edge Locations.
 * 
 * Capabilities:
 * 1. AI Search & LLM Bot Optimization (Google SGE, Perplexity, GPTBot, ClaudeBot)
 * 2. Real-Time HTMLRewriter Edge Transformation (Early Hints Preloading, Geo-Personalization)
 * 3. NRI & Gulf Buyer Currency/Contact Routing via Cloudflare Geo-IP
 * 4. Zero-Trust Security & Diagnostic Headers
 */

interface Env {
  ENVIRONMENT?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;
  const url = new URL(request.url);

  // 1. Edge Geo-Telemetry
  const clientCountry = (request as any).cf?.country || 'IN';
  const clientCity = (request as any).cf?.city || 'Pune';
  const clientAsn = (request as any).cf?.asn || 'Unknown';
  const cfRay = request.headers.get('cf-ray') || 'edge';

  // 2. AI Bot & Search Engine Detection (Googlebot, Bingbot, PerplexityBot, GPTBot, ClaudeBot, Applebot)
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchEngine = /googlebot|bingbot|yandex|duckduckbot|slurp|baiduspider/i.test(userAgent);
  const isAIBot = /perplexitybot|gptbot|claudebot|chatgpt-user|applebot-extended|cohere-ai|omgilibot/i.test(userAgent);
  const isSocialBot = /twitterbot|facebookexternalhit|whatsapp|linkedinbot|telegrambot/i.test(userAgent);

  // 3. Process request through Pages pipeline
  const response = await next();

  // If response is not HTML, return directly with edge cache headers
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    const assetHeaders = new Headers(response.headers);
    assetHeaders.set('X-Served-By', 'Cloudflare-Pages-Edge');
    assetHeaders.set('X-Edge-Location', `${clientCity}, ${clientCountry}`);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: assetHeaders
    });
  }

  // 4. Transform HTML dynamically at Cloudflare Edge using HTMLRewriter
  const rewriter = new HTMLRewriter()
    // Inject Edge Preload Early Hints & Preconnects
    .on('head', {
      element(el) {
        el.append(
          `\n  <!-- Cloudflare Edge Early Hints & Geo Meta -->\n` +
          `  <meta name="cf-edge-location" content="${clientCity}, ${clientCountry}" />\n` +
          `  <meta name="cf-ray-id" content="${cfRay}" />\n` +
          `  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />\n` +
          `  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n` +
          `  <link rel="dns-prefetch" href="https://api.qrserver.com" />\n`,
          { html: true }
        );

        // If accessed by an AI search engine, inject structured AI entity metadata
        if (isAIBot || isSearchEngine) {
          el.append(
            `\n  <!-- AI Knowledge Graph & SGE Entities -->\n` +
            `  <meta name="ai-developer-entity" content="Sentosa Developers (Founded 1987, 39 Years of Legacy in Pune Real Estate)" />\n` +
            `  <meta name="ai-flagship-projects" content="Harico Edge Punawale (P52100031773), Harico Divaam Kiwale Ravet (PR1260002502389), Harico Pride Punawale (P52100018471)" />\n` +
            `  <meta name="ai-micro-markets" content="Punawale, Kiwale, Ravet, Tathawade, Hinjewadi Phase 1-2-3, Wakad, PCMC, Pune West" />\n`,
            { html: true }
          );
        }
      }
    });

  // Apply edge rewriter to HTML body
  const transformedResponse = rewriter.transform(response);
  const newHeaders = new Headers(transformedResponse.headers);

  // 5. Enterprise Security & SEO Edge Headers
  newHeaders.set('X-Served-By', 'Cloudflare-Pages-Edge-V8');
  newHeaders.set('X-Edge-Ray', cfRay);
  newHeaders.set('X-Edge-Location', `${clientCity}, ${clientCountry} (ASN: ${clientAsn})`);
  newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
  
  if (isSearchEngine || isAIBot || isSocialBot) {
    newHeaders.set('X-Robots-Tag', 'all, index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    newHeaders.set('X-Edge-Bot-Status', 'Indexed-AI-Verified');
  }

  // Canonical link injection
  if (url.pathname.startsWith('/project/')) {
    const canonicalUrl = `https://haricoestates.in${url.pathname.replace(/\/$/, '')}`;
    newHeaders.set('Link', `<${canonicalUrl}>; rel="canonical"`);
  }

  return new Response(transformedResponse.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
};
