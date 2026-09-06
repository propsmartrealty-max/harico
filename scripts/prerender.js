import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');
const indexHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[Prerender] Error: dist/index.html not found. Did vite build run?');
  process.exit(1);
}

const template = fs.readFileSync(indexHtmlPath, 'utf-8');

const globalKeywords = 'Harico Estates, Sentosa Developers, Sentosa Group Pune, Harico Estates Punawale, Harico Estates Kiwale, Harico Divaam Kiwale, Harico Diwaam Kiwale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, Sentosa Divaam Kiwale, Sentosa Diwaam Kiwale, Sentosa Serene Tathawade, Sentosa Paradise Wakad, Sentosa Elysium, Sentosa Pearl, Sentosa Palm, Sentosa Elite Biz Hub, Sentosa Era Moshi, Sentosa Residency Hadapsar, 2 BHK Flats in Punawale, 3 BHK Flats in Punawale, 2 BHK Flats in Kiwale, 3 BHK Flats in Kiwale Ravet, 2 BHK in Tathawade, Flats near Hinjewadi IT Park Phase 1 2 3, Rajiv Gandhi Infotech Park, Real Estate PCMC Pune, Pimpri Chinchwad, Tallest Towers Kiwale Ravet, Mukai Chowk, Bhumkar Chowk, Mumbai-Pune Expressway Flats, MahaRERA Registered Projects Pune, Harico Estates contact 7744009295, Sentosa Developers 39 years legacy, Sentosa Water Park builder, पुनावळे मधील २ आणि ३ बीएचके फ्लॅट्स, किवाळे सेंटोसा प्रोजेक्ट्स, तथावडे फ्लॅट, हिंजवडी घरे, हरिको इस्टेट्स, सेंटोसा डेव्हलपर्स';

const projects = [
  {
    slug: 'harico-edge',
    title: 'Harico Punawale | Harico Edge & Sentosa Punawale 2 & 3 BHK Luxury Flats',
    description: 'Harico Punawale: Harico Edge by Sentosa Developers Punawale. Ultra-premium 2 & 3 BHK flats starting ₹74 Lacs* near Bhumkar Chowk, 2 mins to Expressway & 12 mins to Hinjewadi. MahaRERA P52100031773. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Edge, Harico Edge Punawale, Sentosa Edge, Sentosa Edge Punawale, Sentosa Harico Edge, Harico Estates Punawale, Harico Edge Price, Harico Edge Price List, Harico Edge Floor Plan, Harico Edge 2 BHK Punawale, Harico Edge 3 BHK Punawale, Harico Edge Brochure PDF, Harico Edge Sample Flat, Harico Edge RERA P52100031773, Harico Edge Possession Date, Harico Edge Contact 7744009295, Sentosa Developers Punawale, Flats near Bhumkar Chowk, Flats near Akshara International School, Flats near Hinjewadi IT Park, 2 BHK with 2 Balconies Punawale, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, हरिको एज पुनावळे, हॅरिको एज, हरिको पुनावळे',
    image: '/assets/harico-edge-hero.png',
  },
  {
    slug: 'harico-divaam',
    title: 'Harico Diwaam | Harico Kiwale 2 & 3 BHK Flats Opposite Sentosa Water Park',
    description: 'Harico Diwaam (Harico Divaam Kiwale): Tallest 24-storey luxury towers in Kiwale Ravet opposite Sentosa Water Park starting ₹71 Lacs*. 100+ Amenities, 5 Iconic Sky Towers. MahaRERA PR1260002502389. Call +91 7744009295.',
    keywords: 'Harico Diwaam, Harico Diwaam Kiwale, Harico Kiwale, Harico Divaam, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Sentosa Harico Diwaam, Sentosa Harico Divaam, Codename Divine Kiwale, Harico Diwaam Price, Harico Divaam Price, Harico Diwaam 2 BHK, Harico Diwaam 3 BHK, Harico Diwaam Floor Plan, Harico Diwaam Brochure PDF, Harico Diwaam Sample Flat, Harico Diwaam RERA PR1260002502389, Harico Diwaam 24 Storey Towers, Tallest Towers in Kiwale Ravet, 5 Sky Towers Kiwale, Flats opposite Sentosa Water Park, Flats near Mukai Chowk, Symbiosis University Kiwale, Kiwale Ravet Real Estate, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, Contact 7744009295, हरिको दिवाम किवाळे, हॅरिको दिवाम, हरिको किवाळे',
    image: '/assets/harico-divaam-hero.jpg',
  },
  {
    slug: 'harico-pride',
    title: 'Harico Punawale | Harico Pride & Sentosa Punawale 2 & 3 BHK Flats',
    description: 'Harico Punawale: Harico Pride by Sentosa Developers Punawale near Bhiku Vallabh Kale School. Largest carpet layouts, rooftop pool & 2 mins to Expressway. MahaRERA P52100018471. Call +91 7744009295.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Pride, Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Pride Phase 1 2 3 Punawale, Harico Estates Pride, Harico Pride 2 BHK, Harico Pride 3 BHK, Harico Pride Price, Harico Pride Floor Plan, Harico Pride Brochure, Harico Pride RERA P52100018471, Harico Pride Contact 7744009295, Flats near Bhiku Vallabh Kale School, Punawale Largest Carpet Flats, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, Sentosa Developers Punawale, हरिको प्राईड पुनावळे',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  }
];

const programmaticPages = [
  // Location hubs
  { 
    path: 'location/punawale', 
    title: 'Harico Punawale & Sentosa Punawale | 2 & 3 BHK Luxury Flats in Punawale, Pune', 
    desc: 'Harico Punawale & Sentosa Punawale: Premium 2 & 3 BHK luxury residences with dual balconies and 2-min expressway access. Harico Edge & Harico Pride.',
    keywords: 'Harico Punawale, Sentosa Punawale, Sentosa Punwale, Harico Estates Punawale, Sentosa Developers Punawale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale, 2 BHK Flats in Punawale, 3 BHK Luxury Flats Punawale, Flats near Bhumkar Chowk, 2 BHK under 75 lakh Punawale, 3 BHK under 1 crore Punawale, पुनावळे फ्लॅट्स'
  },
  { 
    path: 'location/kiwale', 
    title: 'Harico Kiwale & Harico Diwaam | 24-Storey 2 & 3 BHK Towers Opposite Sentosa', 
    desc: 'Harico Kiwale & Harico Diwaam: Tallest 24-storey high-rise luxury towers in Kiwale opposite Sentosa Water Park starting ₹71 Lacs*. 5 Iconic Sky Towers with 100+ Amenities.',
    keywords: 'Harico Kiwale, Harico Diwaam, Harico Divaam, Harico Diwaam Kiwale, Harico Divaam Kiwale, Sentosa Diwaam, Sentosa Divaam, Harico Estates Kiwale, Sentosa Developers Kiwale, Flats in Kiwale, 2 BHK in Kiwale Ravet, 3 BHK in Kiwale Pune, Tallest Towers Kiwale, Flats opposite Sentosa Water Park, 2 BHK under 75 lakh Kiwale, 3 BHK under 1 crore Kiwale, किवाळे फ्लॅट्स'
  },
  { 
    path: 'location/ravet', 
    title: 'Luxury 2 & 3 BHK Homes near Mukai Chowk Ravet | Sentosa Harico', 
    desc: 'Luxury homes near Mukai Chowk & Ravet BRTS corridor. 5 mins to Akurdi Railway Station and Expressway.',
    keywords: 'Harico Diwaam Ravet, Harico Divaam Ravet, Flats in Ravet Pune, 2 BHK near Mukai Chowk, 3 BHK flats Ravet, Sentosa Group Ravet, Sentosa Developers Kiwale Ravet, Harico Kiwale, Ravet BRTS Connectivity Flats, Harico Estates Kiwale Ravet'
  },
  { 
    path: 'location/tathawade', 
    title: 'Flats near Tathawade & Wakad IT Hub | Harico Estates Portfolio', 
    desc: 'Premium residences 5 mins from JSPM and Indira College Tathawade with high rental demand and Mivan construction.',
    keywords: 'Flats in Tathawade, 2 BHK in Tathawade Pune, 3 BHK in Tathawade, Flats near JSPM Tathawade, Flats near Indira College, Wakad Hinjewadi Corridor Flats, Sentosa Serene Tathawade, Harico Punawale Tathawade, Sentosa Developers Tathawade'
  },
  { 
    path: 'location/hinjewadi', 
    title: 'Luxury Residences near Hinjewadi Rajiv Gandhi Infotech Park | Harico', 
    desc: 'Homes for IT professionals just 15 mins from Hinjewadi Phase 1, 2 & 3. Dual balconies, co-working studios & zero brokerage.',
    keywords: 'Flats near Hinjewadi IT Park, 2 BHK near Hinjewadi Phase 1, 3 BHK near Hinjewadi, Homes for IT Professionals Pune, Harico Edge Hinjewadi, Harico Divaam Hinjewadi, Harico Punawale Hinjewadi, Harico Kiwale Hinjewadi, Sentosa Hinjewadi Flats'
  },
  
  // Typology hubs
  { 
    path: 'flats/2-bhk-flats-in-punawale', 
    title: '2 BHK Flats in Punawale | Harico Punawale & Sentosa Edge from ₹74 Lacs*', 
    desc: 'Zero-wastage 2 BHK Smart & Premium homes in Punawale with dual balconies and 50+ amenities.',
    keywords: 'Harico Punawale 2 BHK, Sentosa Punawale 2 BHK, 2 BHK Flats in Punawale, 2 BHK with 2 Balconies Punawale, Affordable Luxury 2 BHK Pune, Harico Edge 2 BHK Price, Sentosa Edge 2 BHK Punawale, Best 2 BHK in PCMC, 2 BHK under 75 lakh Punawale'
  },
  { 
    path: 'flats/3-bhk-flats-in-punawale', 
    title: '3 BHK Flats in Punawale | Harico Punawale & Sentosa Pride Luxury Residences', 
    desc: 'Expansive 3 BHK luxury residences in Punawale with walk-in wardrobes and large private decks.',
    keywords: 'Harico Punawale 3 BHK, Sentosa Punawale 3 BHK, 3 BHK Flats in Punawale, Large Carpet 3 BHK Pune, 3 BHK with Walk-In Wardrobe, Harico Edge 3 BHK, Harico Pride 3 BHK, Sentosa Edge 3 BHK, Sentosa Pride 3 BHK, 3 BHK under 1 crore Punawale'
  },
  { 
    path: 'flats/2-bhk-flats-in-kiwale', 
    title: '2 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam from ₹71.00 Lacs*', 
    desc: 'Kiwale’s tallest 24-storey residential development opposite Sentosa Water Park, starting ₹71.00 Lacs*.',
    keywords: 'Harico Kiwale 2 BHK, Harico Diwaam 2 BHK, 2 BHK Flats in Kiwale, 2 BHK in Kiwale Ravet starts 71 Lacs, Harico Divaam 2 BHK Price, Harico Diwaam 2 BHK, Sentosa Divaam 2 BHK, Sentosa Diwaam 2 BHK, 2 BHK under 75 lakh Kiwale'
  },
  { 
    path: 'flats/3-bhk-flats-in-kiwale', 
    title: '3 BHK Flats in Kiwale | Harico Kiwale & Harico Diwaam Sky Residences', 
    desc: 'Palatial 3 BHK sky residences in Kiwale with 1,108 sq.ft carpet, designer lobbies, and 12 luxury guest suites.',
    keywords: 'Harico Kiwale 3 BHK, Harico Diwaam 3 BHK, 3 BHK in Kiwale, 3 BHK Luxury High Rise Kiwale Ravet, Harico Divaam 3 BHK Price, Harico Diwaam 3 BHK, Tallest Towers 3 BHK Pune, Sentosa Divaam 3 BHK, 3 BHK under 1 crore Kiwale'
  },
  
  // Institutional hubs
  { 
    path: 'developer/sentosa-developers-pune', 
    title: 'Sentosa Punawale & Sentosa Developers Pune | 39-Year Real Estate Legacy', 
    desc: '39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group.',
    keywords: 'Sentosa Punawale, Sentosa Punwale, Sentosa Developers, Sentosa Developers Pune, Sentosa Group Pune, Sentosa Real Estate, Harico Estates Sentosa, Sentosa Water Park Builder, Sentosa Projects Pune, 39 Years Legacy Builder Pune, Sentosa Edge Punawale, Sentosa Pride Punawale, Sentosa Ekam Punawale'
  },
  { 
    path: 'maharera-registered-projects-pune', 
    title: 'MahaRERA Approved & Registered Projects | Harico Estates Transparency', 
    desc: '100% legal verification, clear title certificates, and sanctioned layouts: Harico Edge, Divaam & Pride.',
    keywords: 'MahaRERA Approved Projects Pune, Harico Edge RERA P52100031773, Harico Divaam RERA PR1260002502389, Harico Pride RERA P52100018471, Verified Real Estate PCMC, RERA registered flats Punawale Kiwale'
  },

  // Standard subpages
  { path: 'privacy', title: 'Privacy Policy | Harico Estates & Sentosa Developers', desc: 'Official privacy policy for Harico Estates and Sentosa Developers.', keywords: globalKeywords },
  { path: 'terms', title: 'Terms of Use | Harico Estates & Sentosa Developers', desc: 'Terms of use and legal disclaimers for Harico Estates web portal.', keywords: globalKeywords },
  { path: 'contact', title: 'Contact Sales & VIP Site Visit | Harico Estates Punawale & Kiwale', desc: 'Schedule priority VIP site visits and connect directly with developer sales consultants.', keywords: 'Harico Estates contact, Harico Estates phone 7744009295, Harico Estates site visit, Harico Edge site office, Harico Divaam site office, Sentosa Developers office Pune' },
  { path: 'amenities', title: '100+ World Class Curated Amenities | Harico Estates & Sentosa', desc: 'Explore 100+ curated lifestyle amenities across wellness, sports, and sky lounges.', keywords: 'Harico Estates amenities, Harico Divaam amenities, Harico Edge amenities, rooftop infinity pool Punawale, sky gymnasium Kiwale' },
  { path: 'projects', title: 'Luxury 2 & 3 BHK Projects in Punawale & Kiwale | Harico Estates', desc: 'Explore all ongoing and upcoming luxury residential developments by Harico Estates.', keywords: 'Harico Estates projects, Harico Edge, Harico Divaam, Harico Pride, Sentosa Developers projects Pune, 2 BHK Punawale, 3 BHK Kiwale' },
  { path: 'project-comparison', title: 'Compare Harico Edge vs Divaam vs Pride | Harico Estates', desc: 'Detailed side-by-side comparison matrix of carpet areas, pricing, and amenities.', keywords: 'Compare Harico Edge vs Divaam vs Pride, Harico Edge vs Harico Divaam, Punawale vs Kiwale property, flats comparison PCMC' },
  { path: 'specifications', title: 'Mivan Construction & Luxury Technical Specs | Harico Estates', desc: 'Technical specifications, Mivan monolithic concrete engineering, and branded fittings.', keywords: 'Mivan construction flats Pune, Harico Estates specifications, Kohler fittings, earthquake resistant homes Punawale Kiwale' },
  { path: 'location-hub', title: 'Punawale, Kiwale, Tathawade & Hinjewadi Connectivity Matrix', desc: 'Comprehensive micro-market transit times and road connectivity matrix.', keywords: 'Punawale Kiwale Tathawade Hinjewadi connectivity, Mumbai Pune Expressway flats, Bhumkar Chowk, Mukai Chowk' },
  { path: 'emi-calculator', title: 'Home Loan EMI Calculator & Bank Approvals | Harico Estates', desc: 'Calculate exact monthly EMIs and explore pre-approved bank loans from SBI, HDFC, ICICI.', keywords: 'Home loan EMI calculator Pune, Harico Estates bank approvals, SBI home loan Harico Edge, HDFC home loan Harico Divaam' },
  { path: 'faq', title: 'MahaRERA & Homebuyer FAQ Knowledge Hub | Harico Estates', desc: 'Frequently asked questions on approvals, possession timelines, and purchasing process.', keywords: 'Harico Estates FAQ, Harico Edge possession date, Harico Divaam RERA number, buying flat in Punawale Kiwale' }
];

console.log('[Prerender] Generating ultra-advanced static HTML routes for Programmatic SEO...');

// 1. Generate Project Pages
projects.forEach(project => {
  const projectDir = path.join(distDir, 'project', project.slug);
  fs.mkdirSync(projectDir, { recursive: true });

  let html = template;
  html = html.replace(/<title>(.*?)<\/title>/is, '<title>' + project.title + '</title>');
  html = html.replace(/<meta name="description"[\s\S]*?>/is, '<meta name="description" content="' + project.description + '">');
  html = html.replace(/<meta name="keywords"[\s\S]*?>/is, '<meta name="keywords" content="' + project.keywords + '">');
  html = html.replace(/<meta property="og:title"[\s\S]*?>/is, '<meta property="og:title" content="' + project.title + '">');
  html = html.replace(/<meta property="og:description"[\s\S]*?>/is, '<meta property="og:description" content="' + project.description + '">');
  html = html.replace(/<meta property="og:image"[\s\S]*?>/is, '<meta property="og:image" content="https://haricoestates.in' + project.image + '">');
  html = html.replace(/<meta property="og:url"[\s\S]*?>/is, '<meta property="og:url" content="https://haricoestates.in/project/' + project.slug + '">');

  const canonicalTag = '<link rel="canonical" href="https://haricoestates.in/project/' + project.slug + '" />';
  if (html.includes('<head>')) {
      html = html.replace('<head>', '<head>\n  ' + canonicalTag);
  }

  const outPath = path.join(projectDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log('[Prerender] Generated static route: /project/' + project.slug + '/index.html');
});

// 2. Generate Programmatic & Static Pages
programmaticPages.forEach(page => {
    const pageDir = path.join(distDir, page.path);
    fs.mkdirSync(pageDir, { recursive: true });
    
    let html = template;
    const canonicalTag = `<link rel="canonical" href="https://haricoestates.in/${page.path}" />`;
    if (html.includes('<head>')) {
       html = html.replace('<head>', '<head>\n  ' + canonicalTag);
    }
    html = html.replace(/<title>(.*?)<\/title>/is, `<title>${page.title}</title>`);
    if (page.desc) {
      html = html.replace(/<meta name="description"[\s\S]*?>/is, `<meta name="description" content="${page.desc}">`);
    }
    const pageKeywords = page.keywords || globalKeywords;
    html = html.replace(/<meta name="keywords"[\s\S]*?>/is, `<meta name="keywords" content="${pageKeywords}">`);

    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    console.log(`[Prerender] Generated programmatic route: /${page.path}/index.html`);
});

// 3. Automatically Build Complete XML Sitemap
const allUrls = [
  'https://haricoestates.in/',
  ...projects.map(p => `https://haricoestates.in/project/${p.slug}`),
  ...programmaticPages.map(p => `https://haricoestates.in/${p.path}`)
];

const today = new Date().toISOString().split('T')[0];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${allUrls.map(u => `  <url>
    <loc>${u}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${u === 'https://haricoestates.in/' || u.includes('/project/') ? '1.0' : '0.9'}</priority>
  </url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf-8');
const publicDir = path.resolve(__dirname, '../public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`[Prerender] Generated master sitemap.xml with ${allUrls.length} verified programmatic URLs.`);

console.log('[Prerender] Complete. Ultra-Advanced Programmatic SEO Engine Ready.');
