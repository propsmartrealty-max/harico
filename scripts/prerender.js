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

const globalKeywords = 'Sentosa Developers, Harico Estates, Sentosa Group Pune, Harico Estates Punawale, Harico Divaam Kiwale, Harico Edge Punawale, Harico Pride Punawale, Sentosa Ekam, Sentosa Serene Tathawade, Sentosa Paradise Wakad, Sentosa Elysium, Sentosa Pearl, Sentosa Palm, Sentosa Elite Biz Hub, Sentosa Era Moshi, Sentosa Residency Hadapsar, 2 BHK Flats in Punawale, 3 BHK Flats in Kiwale Ravet, 2 BHK in Tathawade, Flats near Hinjewadi IT Park Phase 1 2 3, Rajiv Gandhi Infotech Park, Real Estate PCMC Pune, Pimpri Chinchwad, Tallest Towers Kiwale Ravet, Mukai Chowk, Bhumkar Chowk, Mumbai-Pune Expressway Flats, MahaRERA Registered Projects Pune, पुनावळे मधील २ आणि ३ बीएचके फ्लॅट्स, किवाळे सेंटोसा प्रोजेक्ट्स, तथावडे फ्लॅट, हिंजवडी घरे';

const projects = [
  {
    slug: 'harico-edge',
    title: 'Harico Edge 2 & 3 BHK Flats in Punawale | Near Wakad & Expressway | Sentosa Group',
    description: 'Harico Edge by Sentosa: Premium 2 & 3 BHK ultra-luxury flats in Punawale starting ₹74 Lacs*. 2 mins from Mumbai-Pune Expressway, near Wakad & Hinjewadi IT Park. MahaRERA Registered P52100031773.',
    keywords: 'Harico Edge Punawale, Sentosa Edge Punawale, Harico Edge Price, Harico Edge Floor Plan, Harico Edge 2 BHK Punawale, Harico Edge 3 BHK Punawale, Sentosa Developers Punawale, Harico Estates, 2 BHK with 2 Balconies Punawale, Flats near Akshara International School, Flats near Bhumkar Chowk, Tathawade IT Corridor, Hinjewadi Phase 1, PCMC Pune Real Estate, MahaRERA P52100031773, Sentosa Ekam, Sentosa Pride Phase 1 2 3, Sentosa Serene Tathawade',
    image: '/assets/harico-edge-hero.png',
  },
  {
    slug: 'harico-divaam',
    title: 'Harico Divaam 2 & 3 BHK in Kiwale Ravet | Tallest 24-Storey Towers | Sentosa Group',
    description: 'Harico Divaam (Sentosa Divine): The tallest 24-storey landmark in Kiwale-Ravet. Luxury 2 & 3 BHK homes from ₹71.00 Lacs*. Directly opposite Sentosa Water Park, next to Mumbai-Pune Expressway & Mukai Chowk. 100+ Amenities. MahaRERA PR1260002502389.',
    keywords: 'Harico Divaam Kiwale, Harico Diwaam Kiwale Ravet, Sentosa Divine Kiwale, Harico Divaam Brochure, Harico Divaam Price, Harico Divaam 24 Storey Towers, Tallest Towers in Kiwale Ravet, Sentosa Developers Kiwale, Flats opposite Sentosa Water Park, Flats near Mukai Chowk, Symbiosis University Kiwale, MCA Stadium Gahunje, Hinjewadi Rajiv Gandhi Infotech Park, PCMC Pimpri Chinchwad, MahaRERA PR1260002502389',
    image: '/assets/harico-divaam-hero.jpg',
  },
  {
    slug: 'harico-pride',
    title: 'Harico Pride Punawale | Spacious 2 & 3 BHK Luxury Residences | Sentosa Group',
    description: 'Harico Pride: New Launch in Punawale offering the largest carpet 2 & 3 BHK luxury homes. Located near Bhiku Vallabh Kale School, 2 mins from Expressway. Pre-Launch Benefits. MahaRERA P52100018471.',
    keywords: 'Harico Pride Punawale, Sentosa Pride Punawale, Sentosa Pride Phase 1 2 3 Punawale, Harico Pride Pre-Launch Price, Harico Estates Punawale, Sentosa Developers, Spacious 2 BHK Punawale, 3 BHK Luxury Apartments Punawale, Flats near Bhiku Vallabh Kale School, Tathawade, Hinjewadi IT Park, PCMC Pune, MahaRERA P52100018471',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  }
];

const programmaticPages = [
  // Location hubs
  { path: 'location/punawale', title: '2 & 3 BHK Luxury Flats in Punawale, Pune | Harico Estates & Sentosa', desc: 'Explore premium 2 & 3 BHK residences in Punawale with dual balconies and 2-min expressway access. Harico Edge & Harico Pride.' },
  { path: 'location/kiwale', title: 'Tallest 24-Storey 2 & 3 BHK Towers in Kiwale Ravet | Harico Divaam', desc: 'Discover Harico Divaam in Kiwale opposite Sentosa Water Park starting ₹71 Lacs*. 5 Iconic Sky Towers with 100+ Amenities.' },
  { path: 'location/ravet', title: 'Luxury 2 & 3 BHK Homes near Mukai Chowk Ravet | Sentosa Harico', desc: 'Luxury homes near Mukai Chowk & Ravet BRTS corridor. 5 mins to Akurdi Railway Station and Expressway.' },
  { path: 'location/tathawade', title: 'Flats near Tathawade & Wakad IT Hub | Harico Estates Portfolio', desc: 'Premium residences 5 mins from JSPM and Indira College Tathawade with high rental demand and Mivan construction.' },
  { path: 'location/hinjewadi', title: 'Luxury Residences near Hinjewadi Rajiv Gandhi Infotech Park | Harico', desc: 'Homes for IT professionals just 15 mins from Hinjewadi Phase 1, 2 & 3. Dual balconies, co-working studios & zero brokerage.' },
  
  // Typology hubs
  { path: 'flats/2-bhk-flats-in-punawale', title: '2 BHK Flats in Punawale with 2 Balconies from ₹74 Lacs* | Harico Edge', desc: 'Zero-wastage 2 BHK Smart & Premium homes in Punawale with dual balconies and 50+ amenities.' },
  { path: 'flats/3-bhk-flats-in-punawale', title: 'Spacious 3 BHK Luxury Residences in Punawale | Harico Edge & Pride', desc: 'Expansive 3 BHK luxury residences in Punawale with walk-in wardrobes and large private decks.' },
  { path: 'flats/2-bhk-flats-in-kiwale', title: '2 BHK High-Rise Residences in Kiwale from ₹71.00 Lacs* | Harico Divaam', desc: 'Kiwale’s tallest 24-storey residential development opposite Sentosa Water Park, starting ₹71.00 Lacs*.' },
  { path: 'flats/3-bhk-flats-in-kiwale', title: '3 BHK Panoramic Sky Residences in Kiwale Ravet | Harico Divaam', desc: 'Palatial 3 BHK sky residences in Kiwale with 1,108 sq.ft carpet, designer lobbies, and 12 luxury guest suites.' },
  
  // Institutional hubs
  { path: 'developer/sentosa-developers-pune', title: 'Sentosa Developers Pune | 39-Year Legacy (1987-2026) in Real Estate & Hospitality', desc: '39 years of trusted civil engineering, 20+ delivered landmark projects, and world-class hospitality by Sentosa Group.' },
  { path: 'maharera-registered-projects-pune', title: 'MahaRERA Approved & Registered Projects | Harico Estates Transparency', desc: '100% legal verification, clear title certificates, and sanctioned layouts: Harico Edge, Divaam & Pride.' },

  // Standard subpages
  { path: 'privacy', title: 'Privacy Policy | Harico Estates & Sentosa Developers', desc: 'Official privacy policy for Harico Estates and Sentosa Developers.' },
  { path: 'terms', title: 'Terms of Use | Harico Estates & Sentosa Developers', desc: 'Terms of use and legal disclaimers for Harico Estates web portal.' },
  { path: 'contact', title: 'Contact Sales & VIP Site Visit | Harico Estates Punawale & Kiwale', desc: 'Schedule priority VIP site visits and connect directly with developer sales consultants.' },
  { path: 'amenities', title: '100+ World Class Curated Amenities | Harico Estates & Sentosa', desc: 'Explore 100+ curated lifestyle amenities across wellness, sports, and sky lounges.' },
  { path: 'projects', title: 'Luxury 2 & 3 BHK Projects in Punawale & Kiwale | Harico Estates', desc: 'Explore all ongoing and upcoming luxury residential developments by Harico Estates.' },
  { path: 'project-comparison', title: 'Compare Harico Edge vs Divaam vs Pride | Harico Estates', desc: 'Detailed side-by-side comparison matrix of carpet areas, pricing, and amenities.' },
  { path: 'specifications', title: 'Mivan Construction & Luxury Technical Specs | Harico Estates', desc: 'Technical specifications, Mivan monolithic concrete engineering, and branded fittings.' },
  { path: 'location-hub', title: 'Punawale, Kiwale, Tathawade & Hinjewadi Connectivity Matrix', desc: 'Comprehensive micro-market transit times and road connectivity matrix.' },
  { path: 'emi-calculator', title: 'Home Loan EMI Calculator & Bank Approvals | Harico Estates', desc: 'Calculate exact monthly EMIs and explore pre-approved bank loans from SBI, HDFC, ICICI.' },
  { path: 'faq', title: 'MahaRERA & Homebuyer FAQ Knowledge Hub | Harico Estates', desc: 'Frequently asked questions on approvals, possession timelines, and purchasing process.' }
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
    html = html.replace(/<meta name="keywords"[\s\S]*?>/is, `<meta name="keywords" content="${globalKeywords}">`);

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
