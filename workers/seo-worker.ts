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

// Master Route-Specific SEO Lookup for Real-Time Edge HTMLRewriter
const routeSEOMap: Record<string, RouteSEO> = {
  '/': {
    title: 'Harico Estates by Sentosa Developers | Harico Divaam & Harico Edge',
    description: 'Harico Estates by Sentosa Developers: Ultra-luxury 2 & 3 BHK flats at Harico Divaam (Harico Diwaam Kiwale, Dec 2030, Starts ₹70L*, 3 BHK from ₹89.90L*) & Harico Edge (Punawale, June 2030). Call +91 7744009295.',
    keywords: 'Harico Estates, Harico Estates Pune, Sentosa Developers, Sentosa Developers Pune, Harico Divaam, Harico Diwaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Harico Divaam, Harico Edge, Harico Edge Punawale, Sentosa Edge Punawale, Harico Pride, Harico Kiwale, Harico Punawale, Harico new launch, 2 BHK Flats in Punawale, 3 BHK Flats in Punawale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale Ravet',
    ogImage: 'https://haricoestates.in/harico_logo.png',
    canonical: 'https://haricoestates.in/'
  },
  '/project/harico-divaam': {
    title: 'Harico Divaam (Harico Diwaam Kiwale) | Sentosa Developers | 2 & 3 BHK Sky Towers',
    description: 'Harico Divaam (Harico Diwaam Kiwale) by Sentosa Developers: 24-storey luxury sky towers in Kiwale Ravet opposite Sentosa Water Park starting ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards). Possession Dec 2030. 100+ Amenities, 5 Iconic Sky Towers. MahaRERA PR1260002502389. Call +91 7744009295.',
    keywords: 'Harico Diwaam, Harico Diwaam Kiwale, Harico Kiwale, Harico Divaam, Harico Divaam Kiwale, Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico Diwaam new launch, Harico Divaam new launch, Harico Diwaam Kiwale new launch, Sentosa Diwaam, Sentosa Divaam, Sentosa Harico Diwaam, Sentosa Harico Divaam, Codename Divine Kiwale, Harico Diwaam Price, Harico Divaam Price, Harico Diwaam 2 BHK, Harico Diwaam 3 BHK, Harico Diwaam Floor Plan, Harico Diwaam Brochure PDF, Harico Diwaam Sample Flat, Harico Diwaam RERA PR1260002502389, Harico Diwaam Possession December 2030, Harico Diwaam 24 Storey Towers, Tallest Towers in Kiwale Ravet, 5 Sky Towers Kiwale, Flats opposite Sentosa Water Park, Flats near Mukai Chowk, Symbiosis University Kiwale, Kiwale Ravet Real Estate, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, Contact 7744009295, हरिको दिवाम किवाळे, हॅरिको दिवाम, हरिको किवाळे, हरिको दिवाम नवीन लाँच',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/project/harico-divaam'
  },
  '/project/harico-edge': {
    title: 'Harico Edge Punawale | Sentosa Developers | 2 & 3 BHK Luxury Residences',
    description: 'Harico Edge in Punawale by Sentosa Developers. Ultra-premium 2 & 3 BHK flats starting ₹74 Lacs* near Bhumkar Chowk, 2 mins to Expressway & 12 mins to Hinjewadi. Possession June 2030. MahaRERA P52100031773. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Edge, Harico Edge Punawale, Sentosa Edge, Sentosa Edge Punawale, Sentosa Harico Edge, Harico Estates Punawale, Harico Edge Price, Harico Edge Price List, Harico Edge Floor Plan, Harico Edge 2 BHK Punawale, Harico Edge 3 BHK Punawale, Harico Edge Brochure PDF, Harico Edge Sample Flat, Harico Edge RERA P52100031773, Harico Edge Possession June 2030, Harico Edge Contact 7744009295, Sentosa Developers Punawale, Flats near Bhumkar Chowk, Flats near Akshara International School, Flats near Hinjewadi IT Park, 2 BHK with 2 Balconies Punawale, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, हरिको एज पुनावळे, हॅरिको एज, हरिको पुनावळे, हरिको एज पुनावळे जून 2030',
    ogImage: 'https://haricoestates.in/assets/harico-edge-hero.png',
    canonical: 'https://haricoestates.in/project/harico-edge'
  },
  '/project/harico-pride': {
    title: 'Harico Pride Punawale | Sentosa Developers | 2 & 3 BHK Ready & Near-Possession Flats',
    description: 'Harico Pride in Punawale by Sentosa Developers near Bhiku Vallabh Kale School. Largest carpet layouts, rooftop pool & 2 mins to Expressway. MahaRERA P52100018471. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Pride, Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Pride Phase 1 2 3 Punawale, Harico Estates Pride, Harico Pride 2 BHK, Harico Pride 3 BHK, Harico Pride Price, Harico Pride Floor Plan, Harico Pride Brochure, Harico Pride RERA P52100018471, Harico Pride Contact 7744009295, Flats near Bhumkar Chowk, Punawale Largest Carpet Flats, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, Sentosa Developers Punawale, हरिको प्राईड पुनावळे',
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
    description: 'Harico Kiwale & Harico Diwaam: Tallest 24-storey high-rise luxury towers in Kiwale opposite Sentosa Water Park starting ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards). 5 Iconic Sky Towers with 100+ Amenities.',
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
  },
  '/harico-new-launch': {
    title: 'Harico New Launch Kiwale & Punawale 2026 | Harico Divaam & Harico Edge',
    description: 'Harico New Launch: Flagship residential launch of Harico Divaam in Kiwale (Dec 2030) and Harico Edge in Punawale (June 2030). Tallest 24-storey sky towers opposite Sentosa Water Park starting ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs*). MahaRERA PR1260002502389.',
    keywords: 'Harico new launch, Harico new launch Kiwale, Harico new launch Pune, Harico new launch Punawale, Harico Diwaam new launch, Harico Divaam new launch, Harico Diwaam Kiwale new launch, Harico Diwaam, Harico Divaam, Harico Kiwale, Harico Punawale, Sentosa new launch, Sentosa Diwaam new launch, 2 BHK new launch Kiwale, 3 BHK new launch Kiwale, new launch flats near Expressway, हरिको नवीन लाँच, हरिको दिवाम नवीन लाँच पुणे',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/harico-new-launch'
  },
  '/harico-diwaam-kiwale': {
    title: 'Harico Diwaam Kiwale Floor Plans, Brochure & Pricing | Sentosa Developers',
    description: 'Official floor plans (724–1108 sq.ft), brochure PDF download, and price sheets for Harico Diwaam (Harico Divaam Kiwale). Starts ₹70.00 Lacs* (3 BHK from ₹89.90 Lacs* onwards). MahaRERA PR1260002502389. Call +91 7744009295.',
    keywords: 'Harico Diwaam Kiwale, Harico Diwaam, Harico Divaam Kiwale, Harico Divaam, Sentosa Diwaam Kiwale, Sentosa Diwaam, Sentosa Divaam Kiwale, Harico Kiwale, Harico Estates Kiwale, 2 BHK in Kiwale, 3 BHK in Kiwale, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, Harico Diwaam Possession December 2030, Harico Diwaam Price, Harico Diwaam Floor Plan, Harico Diwaam Brochure, हरिको दिवाम किवाळे, हॅरिको दिवाम किवाळे',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/harico-diwaam-kiwale'
  },
  '/harico-kiwale': {
    title: 'Harico Kiwale Residential Projects & Master Layout | Harico Estates',
    description: 'Explore Harico Kiwale residential enclaves by Sentosa Developers. 5-acre master plan, 5 iconic towers, and infrastructure connectivity near Mukai Chowk. Starts ₹70 Lacs* (3 BHK from ₹89.90 Lacs*). Call +91 7744009295.',
    keywords: 'Harico Kiwale, Harico Diwaam Kiwale, Harico Divaam Kiwale, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale, Flats in Kiwale Ravet, Mukai Chowk Flats, Flats opposite Sentosa Water Park, Kiwale Property Price, Kiwale Real Estate, हरिको किवाळे, हॅरिको किवाळे, किवाळे फ्लॅट्स',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/harico-kiwale'
  },
  '/harico-punawale': {
    title: 'Harico Punawale | Luxury 2 & 3 BHK Flats in Punawale Pune',
    description: 'Discover Harico Edge and Harico Pride in Punawale by Sentosa Developers. Premium residences 2 minutes from Mumbai-Pune Expressway & Bhumkar Chowk. Starts ₹74 Lacs*. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Flats in Punawale, Flats near Bhumkar Chowk, Harico Edge Possession June 2030, पुनावळे फ्लॅट्स, हरिको पुनावळे, Sentosa Developers Punawale, हरिको प्राईड पुनावळे',
    ogImage: 'https://haricoestates.in/assets/harico-edge-hero.png',
    canonical: 'https://haricoestates.in/harico-punawale'
  },
  '/flats-opposite-sentosa-water-park-kiwale': {
    title: 'Flats Opposite Sentosa Water Park Kiwale | Harico Divaam 2 & 3 BHK Sky Towers',
    description: 'Flats opposite Sentosa Water Park Kiwale: Harico Divaam 24-storey landmark sky residences by Sentosa Developers. 2 & 3 BHK flats starting ₹70 Lacs* (3 BHK from ₹89.90 Lacs* onwards). Possession Dec 2030. Call +91 7744009295.',
    keywords: 'Flats opposite Sentosa Water Park, Flats opposite Sentosa Water Park Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Sentosa Diwaam, Sentosa Water Park Kiwale Flats, Kiwale Ravet High Rise, 2 BHK opposite Sentosa, 3 BHK opposite Sentosa Water Park, Harico Kiwale, Sentosa Developers Kiwale, सेंटोसा वॉटर पार्क जवळील फ्लॅट्स किवाळे',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/flats-opposite-sentosa-water-park-kiwale'
  },
  '/articles': {
    title: 'Harico Estates Knowledge Hub | Homebuyer Guides, MahaRERA & Market Analysis',
    description: 'Official Harico Estates Knowledge Hub: Comprehensive guides on Harico Diwaam, Harico Kiwale, Harico Punawale, 2 & 3 BHK floor plans, MahaRERA compliance, and transit reports.',
    keywords: 'Harico Estates articles, Harico Diwaam guide, Harico Punawale guide, Harico Kiwale investment, Pune real estate guides, MahaRERA knowledge hub',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/articles'
  },
  '/articles/harico-estates-overview': {
    title: 'Harico Estates Pune: Developer Profile, Sentosa Legacy & Master Portfolio Guide',
    description: 'Complete guide to Harico Estates Pune by Sentosa Developers. Explore ongoing projects (Harico Diwaam, Harico Edge, Harico Pride), 39-year legacy, and 100% MahaRERA transparency.',
    keywords: 'Harico Estates, Harico Estates Pune, Sentosa Developers Pune, Sentosa Harico, Harico Group, Harico Punawale, Harico Kiwale, Harico Diwaam, Harico Edge, Harico Pride',
    ogImage: 'https://haricoestates.in/assets/harico-edge-hero.png',
    canonical: 'https://haricoestates.in/articles/harico-estates-overview'
  },
  '/articles/harico-diwaam-kiwale-buyer-guide': {
    title: 'Harico Diwaam Kiwale: Floor Plans, 2 & 3 BHK Pricing, 100+ Amenities & Buyer Guide | Harico Estates',
    description: 'Detailed buyer guide for Harico Diwaam Kiwale (Harico Divaam). Review 2 & 3 BHK floor plans (724–1108 sq.ft), starting price ₹70 Lacs*, 24-storey towers, 100+ amenities, and MahaRERA PR1260002502389.',
    keywords: 'Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Diwaam Price, Harico Diwaam Floor Plan, Harico Diwaam Brochure',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/articles/harico-diwaam-kiwale-buyer-guide'
  },
  '/articles/harico-kiwale-real-estate-investment': {
    title: 'Why Kiwale Ravet is Pune’s #1 Real Estate Growth Corridor: Harico Kiwale Guide | Harico Estates',
    description: 'Discover why Kiwale Ravet is West Pune’s top real estate investment hub. Explore expressway connectivity, BRTS corridors, price trends, and Harico Kiwale developments.',
    keywords: 'Harico Kiwale, Kiwale Real Estate, Flats in Kiwale Ravet, Kiwale Property Price, Mukai Chowk Flats, Flats opposite Sentosa Water Park, Kiwale Pune Investment',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-composite.jpg',
    canonical: 'https://haricoestates.in/articles/harico-kiwale-real-estate-investment'
  },
  '/articles/harico-punawale-guide-edge-pride': {
    title: 'Harico Punawale: Comprehensive Guide to Harico Edge & Harico Pride near Hinjewadi IT Park | Harico Estates',
    description: 'Complete guide to Harico Punawale developments: Harico Edge (MahaRERA P52100031773) and Harico Pride (MahaRERA P52100018471). Explore 2 & 3 BHK homes near Bhumkar Chowk.',
    keywords: 'Harico Punawale, Sentosa Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Flats in Punawale, 2 BHK in Punawale',
    ogImage: 'https://haricoestates.in/assets/harico-edge-hero.png',
    canonical: 'https://haricoestates.in/articles/harico-punawale-guide-edge-pride'
  },
  '/articles/mivan-monolithic-construction-guide': {
    title: 'Mivan Monolithic Concrete Technology Explained: Why Harico Homes Outlast Conventional Construction | Harico Estates',
    description: 'Comprehensive guide to Mivan monolithic concrete technology used by Harico Estates in Pune. Learn about seismic safety, crack resistance, and superior construction quality.',
    keywords: 'Mivan Construction flats Pune, Mivan Technology benefits, Earthquake resistant homes PCMC, Monolithic concrete construction',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-master-layout.png',
    canonical: 'https://haricoestates.in/articles/mivan-monolithic-construction-guide'
  },
  '/articles/punawale-vs-kiwale-comparison': {
    title: 'Punawale vs Kiwale: Where Should You Buy a 2 or 3 BHK Flat in West Pune in 2026? | Harico Estates',
    description: 'Punawale vs Kiwale property comparison 2026. Compare 2 & 3 BHK flat prices, Hinjewadi commute times, social infrastructure, and Harico Estates projects.',
    keywords: 'Punawale vs Kiwale, Kiwale vs Punawale property, Best area to buy flat in PCMC, Flats in Punawale or Kiwale, Hinjewadi commute flats',
    ogImage: 'https://haricoestates.in/assets/harico-divaam-hero.jpg',
    canonical: 'https://haricoestates.in/articles/punawale-vs-kiwale-comparison'
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

    // 5. HTMLRewriter Edge Transformation (only if route is explicitly defined)
    const routeSEO = routeSEOMap[path];

    let rewriter = new HTMLRewriter();

    if (routeSEO) {
      rewriter = rewriter
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
        .on('meta[name="twitter:title"]', {
          element(el) {
            el.setAttribute('content', routeSEO.title);
          }
        })
        .on('meta[name="twitter:description"]', {
          element(el) {
            el.setAttribute('content', routeSEO.description);
          }
        })
        .on('meta[name="twitter:image"]', {
          element(el) {
            el.setAttribute('content', routeSEO.ogImage);
          }
        });
    }

    rewriter = rewriter.on('head', {
      element(el) {
        let headInjection =
          `\n  <!-- Cloudflare Standalone Worker Dynamic Edge Optimization -->\n` +
          (routeSEO ? `  <link rel="canonical" href="${routeSEO.canonical}" />\n` : '') +
          `  <meta name="cf-edge-colo" content="${clientColo}" />\n` +
          `  <meta name="cf-edge-location" content="${clientCity}, ${clientCountry}" />\n` +
          `  <meta name="cf-nri-currency" content="${preferredCurrency}" />\n` +
          `  <meta name="cf-ray-id" content="${cfRay}" />\n` +
          `  <link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />\n` +
          `  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />\n` +
          `  <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin />\n`;

        if (isAIBot || isSearchEngine) {
          headInjection +=
            `\n  <!-- AI Knowledge Graph & Entity Acceleration -->\n` +
            `  <meta name="ai-developer-entity" content="Sentosa Developers (Founded 1987, 39 Years of Real Estate Legacy in Pune)" />\n` +
            `  <meta name="ai-flagship-projects" content="Harico Diwaam Kiwale (PR1260002502389), Harico Edge Punawale (P52100031773), Harico Pride Punawale (P52100018471)" />\n` +
            `  <meta name="ai-micro-markets" content="Punawale, Kiwale, Ravet, Tathawade, Hinjewadi Phase 1-2-3, Wakad, PCMC, Pune West" />\n` +
            `  <meta name="ai-pricing-baseline" content="Harico Diwaam 2 BHK starting from 70 Lacs*, 3 BHK starting from 89.90 Lacs*, Harico Edge 2 & 3 BHK starting from 74 Lacs*" />\n`;
        }

        el.append(headInjection, { html: true });
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

    // Edge cache freshness: browser validates immediately, CDN holds max 5 mins
    newHeaders.set('Cache-Control', 'public, max-age=0, must-revalidate');
    newHeaders.set('Cloudflare-CDN-Cache-Control', 'max-age=300, stale-while-revalidate=60');
    newHeaders.set('CDN-Cache-Control', 'max-age=300');
    newHeaders.set('Cache-Tag', 'harico-estates-seo, sentosa-developers, harico-diwaam, sentosa-punawale, harico-kiwale, harico-punawale, harico-articles');

    // Universal unconstrained SERP snippet controls for Googlebot & search engines
    newHeaders.set('X-Robots-Tag', 'all, index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    if (isSearchEngine || isAIBot || isSocialBot) {
      newHeaders.set('X-Edge-Bot-Status', 'Indexed-AI-Verified');
    }

    // Canonical link in header (only if route SEO is explicitly resolved)
    if (routeSEO?.canonical) {
      newHeaders.set('Link', `<${routeSEO.canonical}>; rel="canonical"`);
    }

    return new Response(transformedResponse.body, {
      status: originResponse.status,
      statusText: originResponse.statusText,
      headers: newHeaders
    });
  }
};
