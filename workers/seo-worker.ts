/**
 * Cloudflare Standalone Edge SEO Worker
 * Reverse-Proxy & Real-Time HTMLRewriter Engine for Harico Estates & Sentosa Developers
 * Deployable to Cloudflare Workers across 330+ Global PoPs
 */

interface Env {
  ORIGIN_URL?: string; // e.g. https://haricoestates.in or Cloudflare Pages URL
  LEAD_RECIPIENT?: string; // propsmartrealty@gmail.com
}

interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

const routeSEOMap: Record<string, RouteSEO> = {
  '/': {
    title: 'Harico Diwaam & Harico Edge | Sentosa Punawale & Harico Kiwale 2 & 3 BHK Flats',
    description: 'Harico Estates & Sentosa Developers: Ultra-luxury 2 & 3 BHK flats at Harico Diwaam (Kiwale, Dec 2030) & Harico Edge (Punawale, June 2030). Starts ₹71 Lacs*. 2 mins to Expressway. Call +91 7744009295.',
    keywords: 'Harico Diwaam, Harico Diwaam Kiwale, Sentosa Punawale, Sentosa Punwale, Harico Kiwale, Harico Punawale, Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico Divaam, Harico Divaam Kiwale, Harico Edge, Harico Edge Punawale, Sentosa Edge Punawale, Harico Pride, Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, Sentosa Diwaam, Sentosa Divaam, Sentosa Harico Divaam, Harico Estates, Harico Estates Pune, 2 BHK Flats in Punawale, 3 BHK Flats in Punawale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale Ravet',
    ogImage: 'https://haricoestates.in/harico_logo.png',
    canonical: 'https://haricoestates.in/'
  },
  '/project/harico-divaam': {
    title: 'Harico Diwaam Kiwale | Major New Launch 2 & 3 BHK Flats Opposite Sentosa Water Park',
    description: 'Harico Diwaam (Harico Divaam Kiwale): Major New Launch 24-storey luxury sky towers in Kiwale Ravet opposite Sentosa Water Park starting ₹71 Lacs*. Possession Dec 2030. 100+ Amenities, 5 Iconic Sky Towers. MahaRERA PR1260002502389. Call +91 7744009295.',
    keywords: 'Harico Diwaam, Harico Diwaam Kiwale, Harico Kiwale, Harico Divaam, Harico Divaam Kiwale, Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico Diwaam new launch, Harico Divaam new launch, Harico Diwaam Kiwale new launch, Sentosa Diwaam, Sentosa Divaam, Sentosa Harico Diwaam, Sentosa Harico Divaam, Codename Divine Kiwale, Harico Diwaam Price, Harico Divaam Price, Harico Diwaam 2 BHK, Harico Diwaam 3 BHK, Harico Diwaam Floor Plan, Harico Diwaam Brochure PDF, Harico Diwaam Sample Flat, Harico Diwaam RERA PR1260002502389, Harico Diwaam Possession December 2030, Harico Diwaam 24 Storey Towers, Tallest Towers in Kiwale Ravet, 5 Sky Towers Kiwale, Flats opposite Sentosa Water Park, Flats near Mukai Chowk, Symbiosis University Kiwale, Kiwale Ravet Real Estate, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, Contact 7744009295, हरिको दिवाम किवाळे, हॅरिको दिवाम, हरिको किवाळे, हरिको दिवाम नवीन लाँच',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/project/harico-divaam'
  },
  '/project/harico-edge': {
    title: 'Harico Punawale | Harico Edge & Sentosa Punawale 2 & 3 BHK Luxury Flats',
    description: 'Harico Punawale: Harico Edge by Sentosa Developers Punawale. Ultra-premium 2 & 3 BHK flats starting ₹74 Lacs* near Bhumkar Chowk, 2 mins to Expressway & 12 mins to Hinjewadi. Possession June 2030. MahaRERA P52100031773. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Edge, Harico Edge Punawale, Sentosa Edge, Sentosa Edge Punawale, Sentosa Harico Edge, Harico Estates Punawale, Harico Edge Price, Harico Edge Price List, Harico Edge Floor Plan, Harico Edge 2 BHK Punawale, Harico Edge 3 BHK Punawale, Harico Edge Brochure PDF, Harico Edge Sample Flat, Harico Edge RERA P52100031773, Harico Edge Possession June 2030, Harico Edge Contact 7744009295, Sentosa Developers Punawale, Flats near Bhumkar Chowk, Flats near Akshara International School, Flats near Hinjewadi IT Park, 2 BHK with 2 Balconies Punawale, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, हरिको एज पुनावळे, हॅरिको एज, हरिको पुनावळे, हरिको एज पुनावळे जून 2030',
    ogImage: 'https://haricoestates.in/assets/harico-edge-hero.png',
    canonical: 'https://haricoestates.in/project/harico-edge'
  },
  '/project/harico-pride': {
    title: 'Harico Punawale | Harico Pride & Sentosa Punawale 2 & 3 BHK Flats',
    description: 'Harico Punawale: Harico Pride by Sentosa Developers Punawale near Bhiku Vallabh Kale School. Largest carpet layouts, rooftop pool & 2 mins to Expressway. MahaRERA P52100018471. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Pride, Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Pride Phase 1 2 3 Punawale, Harico Estates Pride, Harico Pride 2 BHK, Harico Pride 3 BHK, Harico Pride Price, Harico Pride Floor Plan, Harico Pride Brochure, Harico Pride RERA P52100018471, Harico Pride Contact 7744009295, Flats near Bhiku Vallabh Kale School, Punawale Largest Carpet Flats, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, Sentosa Developers Punawale, हरिको प्राईड पुनावळे',
    ogImage: 'https://haricoestates.in/harico_logo.png',
    canonical: 'https://haricoestates.in/project/harico-pride'
  },
  '/location/punawale': {
    title: 'Harico Punawale & Sentosa Punawale | 2 & 3 BHK Luxury Flats in Punawale, Pune',
    description: 'Harico Punawale & Sentosa Punawale: Premium 2 & 3 BHK luxury residences with dual balconies and 2-min expressway access. Harico Edge & Harico Pride.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Luxury Flats Punawale, Flats near Bhumkar Chowk, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, पुनावळे फ्लॅट्स',
    ogImage: 'https://haricoestates.in/assets/harico-edge-hero.png',
    canonical: 'https://haricoestates.in/location/punawale'
  },
  '/location/kiwale': {
    title: 'Harico Kiwale & Harico Diwaam | 24-Storey 2 & 3 BHK Towers Opposite Sentosa',
    description: 'Harico Kiwale & Harico Diwaam: Tallest 24-storey high-rise luxury towers in Kiwale opposite Sentosa Water Park starting ₹71 Lacs*. 5 Iconic Sky Towers with 100+ Amenities.',
    keywords: 'Harico Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK in Kiwale Ravet, 3 BHK in Kiwale Pune, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, किवाळे फ्लॅट्स',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/location/kiwale'
  },
  '/developer/sentosa-developers-pune': {
    title: 'Sentosa Punawale & Sentosa Developers Pune | 39-Year Real Estate Legacy',
    description: '39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group since 1987.',
    keywords: 'Sentosa Punawale, Sentosa Punwale, Sentosa Developers, Sentosa Developers Pune, Sentosa Group Pune, Sentosa Real Estate, Harico Estates Sentosa, Sentosa Water Park Builder, Sentosa Projects Pune, 39 Years Legacy Builder Pune, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale',
    ogImage: 'https://haricoestates.in/harico_logo.png',
    canonical: 'https://haricoestates.in/developer/sentosa-developers-pune'
  }
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, '') || '/';

    // 1. Handle Lead Dispatch API at Edge
    if (url.pathname === '/api/lead' && request.method === 'POST') {
      try {
        const data = await request.json() as any;
        const clientIp = request.headers.get('cf-connecting-ip') || 'Unknown';
        const clientCountry = (request as any).cf?.country || 'IN';
        const clientCity = (request as any).cf?.city || 'Pune';
        const clientColo = (request as any).cf?.colo || 'BOM';
        const recipientEmail = env.LEAD_RECIPIENT || 'propsmartrealty@gmail.com';
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        const emailPayload = {
          _subject: `🚨 Real Estate Lead [Edge Ingest]: ${data.name || 'Enquiry'} - ${data.project || 'Harico Estates'}`,
          _replyto: data.email || recipientEmail,
          _template: 'table',
          _captcha: 'false',
          "Lead Name": data.name,
          "Phone Number": data.phone,
          "Email Address": data.email || 'Not Provided (Phone Preferred)',
          "Target Project": data.project || 'Harico Estates General Enquiry',
          "Configuration / Requirement": data.requirement || '2 & 3 BHK Luxury Residences',
          "Interest Type": data.interestType || 'Direct Website Lead',
          "Preferred Time Slot": data.timeSlot || 'Flexible / Priority',
          "Buyer Message": data.message || 'Developer consultation requested',
          "Origin Location": `${clientCity}, ${clientCountry} (${clientIp})`,
          "Edge PoP": clientColo,
          "Timestamp (IST)": `${timestamp} IST`
        };

        ctx.waitUntil(
          fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(emailPayload)
          }).catch(err => console.warn('[Cloudflare Worker Lead] Dispatch error:', err))
        );

        return new Response(JSON.stringify({
          success: true,
          message: 'Lead received and processed via Cloudflare Edge Worker',
          origin: `${clientCity}, ${clientCountry}`,
          timestamp: new Date().toISOString()
        }), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        });
      } catch (err: any) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 2. Telemetry & NRI Currency
    const clientCountry = (request as any).cf?.country || 'IN';
    const clientCity = (request as any).cf?.city || 'Pune';
    const clientColo = (request as any).cf?.colo || 'BOM';
    const clientAsn = (request as any).cf?.asn || 'Unknown';
    const cfRay = request.headers.get('cf-ray') || 'edge-v8';

    const isGulfNRI = ['AE', 'SA', 'QA', 'KW', 'OM', 'BH'].includes(clientCountry);
    const isWesternNRI = ['US', 'CA', 'GB', 'DE', 'AU', 'SG'].includes(clientCountry);
    const preferredCurrency = isGulfNRI ? 'AED' : (isWesternNRI ? (clientCountry === 'GB' ? 'GBP' : 'USD') : 'INR');

    // 3. AI & Search Engine Bot Detection
    const userAgent = (request.headers.get('user-agent') || '').toLowerCase();
    const isSearchEngine = /googlebot|bingbot|yandex|duckduckbot|slurp|baiduspider|applebot/i.test(userAgent);
    const isAIBot = /perplexitybot|gptbot|claudebot|chatgpt-user|applebot-extended|cohere-ai|omgilibot|bytespider/i.test(userAgent);
    const isSocialBot = /twitterbot|facebookexternalhit|whatsapp|linkedinbot|telegrambot/i.test(userAgent);

    // 4. Fetch origin resource
    const originUrl = env.ORIGIN_URL || 'https://haricoestates.in';
    const targetUrl = new URL(url.pathname + url.search, originUrl);
    const originResponse = await fetch(new Request(targetUrl.toString(), request));

    const contentType = originResponse.headers.get('content-type') || '';
    if (!contentType.includes('text/html')) {
      const assetHeaders = new Headers(originResponse.headers);
      assetHeaders.set('X-Served-By', 'Cloudflare-Global-Edge-Worker');
      assetHeaders.set('X-Edge-Colo', clientColo);
      assetHeaders.set('X-Edge-Location', `${clientCity}, ${clientCountry}`);
      if (url.pathname.startsWith('/assets/')) {
        assetHeaders.set('Cache-Control', 'public, max-age=31536000, immutable');
        assetHeaders.set('Cloudflare-CDN-Cache-Control', 'max-age=31536000');
      }
      return new Response(originResponse.body, {
        status: originResponse.status,
        statusText: originResponse.statusText,
        headers: assetHeaders
      });
    }

    // 5. HTMLRewriter Edge Transformation
    const routeSEO = routeSEOMap[path] || routeSEOMap['/'];

    const rewriter = new HTMLRewriter()
      .on('title', {
        element(el) {
          el.setInnerContent(routeSEO.title);
        }
      })
      .on('meta[name="description"]', {
        element(el) {
          el.setAttribute('content', routeSEO.description);
        }
      })
      .on('meta[name="keywords"]', {
        element(el) {
          el.setAttribute('content', routeSEO.keywords);
        }
      })
      .on('meta[property="og:title"]', {
        element(el) {
          el.setAttribute('content', routeSEO.title);
        }
      })
      .on('meta[property="og:description"]', {
        element(el) {
          el.setAttribute('content', routeSEO.description);
        }
      })
      .on('meta[property="og:url"]', {
        element(el) {
          el.setAttribute('content', routeSEO.canonical);
        }
      })
      .on('meta[property="og:image"]', {
        element(el) {
          el.setAttribute('content', routeSEO.ogImage);
        }
      })
      .on('head', {
        element(el) {
          el.append(
            `\n  <!-- Cloudflare Standalone Worker Dynamic Edge Optimization -->\n` +
            `  <link rel="canonical" href="${routeSEO.canonical}" />\n` +
            `  <meta name="cf-edge-colo" content="${clientColo}" />\n` +
            `  <meta name="cf-edge-location" content="${clientCity}, ${clientCountry}" />\n` +
            `  <meta name="cf-nri-currency" content="${preferredCurrency}" />\n` +
            `  <meta name="cf-ray-id" content="${cfRay}" />\n` +
            `  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />\n` +
            `  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n` +
            `  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin />\n`,
            { html: true }
          );

          if (isAIBot || isSearchEngine) {
            el.append(
              `\n  <!-- AI Knowledge Graph & Entity Acceleration -->\n` +
              `  <meta name="ai-developer-entity" content="Sentosa Developers (Founded 1987, 39 Years of Real Estate Legacy in Pune)" />\n` +
              `  <meta name="ai-flagship-projects" content="Harico Diwaam Kiwale (PR1260002502389), Harico Edge Punawale (P52100031773), Harico Pride Punawale (P52100018471)" />\n` +
              `  <meta name="ai-micro-markets" content="Punawale, Kiwale, Ravet, Tathawade, Hinjewadi Phase 1-2-3, Wakad, PCMC, Pune West" />\n` +
              `  <meta name="ai-pricing-baseline" content="Harico Diwaam 2 & 3 BHK starting from 71 Lacs*, Harico Edge 2 & 3 BHK starting from 74 Lacs*" />\n`,
              { html: true }
            );
          }
        }
      });

    const transformedResponse = rewriter.transform(originResponse);
    const newHeaders = new Headers(transformedResponse.headers);

    newHeaders.set('X-Served-By', 'Cloudflare-Global-Edge-Worker');
    newHeaders.set('X-Edge-Ray', cfRay);
    newHeaders.set('X-Edge-Colo', clientColo);
    newHeaders.set('X-Edge-Location', `${clientCity}, ${clientCountry} (ASN: ${clientAsn})`);
    newHeaders.set('X-Edge-Currency-Optimization', preferredCurrency);
    newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
    newHeaders.set('Timing-Allow-Origin', '*');

    newHeaders.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
    newHeaders.set('Cloudflare-CDN-Cache-Control', 'max-age=604800, stale-while-revalidate=86400');
    newHeaders.set('CDN-Cache-Control', 'max-age=604800');
    newHeaders.set('Cache-Tag', 'harico-estates-seo, sentosa-developers, harico-diwaam, sentosa-punawale, harico-kiwale, harico-punawale');

    if (isSearchEngine || isAIBot || isSocialBot) {
      newHeaders.set('X-Robots-Tag', 'all, index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
      newHeaders.set('X-Edge-Bot-Status', 'Indexed-AI-Verified');
    }

    newHeaders.set('Link', `<${routeSEO.canonical}>; rel="canonical"`);

    return new Response(transformedResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: newHeaders
    });
  }
};
