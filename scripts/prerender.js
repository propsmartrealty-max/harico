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

console.log('[Prerender] Generating ultra-advanced static HTML routes for SEO & SGE bots...');

projects.forEach(project => {
  const projectDir = path.join(distDir, 'project', project.slug);
  fs.mkdirSync(projectDir, { recursive: true });

  let html = template;

  // Replace Title
  html = html.replace(/<title>(.*?)<\/title>/is, '<title>' + project.title + '</title>');

  // Replace Description
  html = html.replace(/<meta name="description"[\s\S]*?>/is, '<meta name="description" content="' + project.description + '">');

  // Replace Keywords
  html = html.replace(/<meta name="keywords"[\s\S]*?>/is, '<meta name="keywords" content="' + project.keywords + '">');

  // Replace OG Tags (Title, Desc, Image, URL)
  html = html.replace(/<meta property="og:title"[\s\S]*?>/is, '<meta property="og:title" content="' + project.title + '">');
  html = html.replace(/<meta property="og:description"[\s\S]*?>/is, '<meta property="og:description" content="' + project.description + '">');
  html = html.replace(/<meta property="og:image"[\s\S]*?>/is, '<meta property="og:image" content="https://haricoestates.in' + project.image + '">');
  html = html.replace(/<meta property="og:url"[\s\S]*?>/is, '<meta property="og:url" content="https://haricoestates.in/project/' + project.slug + '">');

  // Force bots to see correct canonical
  const canonicalTag = '<link rel="canonical" href="https://haricoestates.in/project/' + project.slug + '" />';
  if (html.includes('<head>')) {
      html = html.replace('<head>', '<head>\n  ' + canonicalTag);
  }

  const outPath = path.join(projectDir, 'index.html');
  fs.writeFileSync(outPath, html, 'utf-8');
  console.log('[Prerender] Generated static route: /project/' + project.slug + '/index.html');
});

// Also create global index placeholders for subroutes
const staticPages = [
  { path: 'privacy', title: 'Privacy Policy | Harico Estates & Sentosa Developers' },
  { path: 'terms', title: 'Terms of Use | Harico Estates & Sentosa Developers' },
  { path: 'contact', title: 'Contact Sales & VIP Site Visit | Harico Estates Punawale & Kiwale' },
  { path: 'amenities', title: '100+ World Class Curated Amenities | Harico Estates & Sentosa' },
  { path: 'projects', title: 'Luxury 2 & 3 BHK Projects in Punawale & Kiwale | Harico Estates' },
  { path: 'project-comparison', title: 'Compare Harico Edge vs Divaam vs Pride | Harico Estates' },
  { path: 'specifications', title: 'Mivan Construction & Luxury Technical Specs | Harico Estates' },
  { path: 'location-hub', title: 'Punawale, Kiwale, Tathawade & Hinjewadi Connectivity Matrix' },
  { path: 'emi-calculator', title: 'Home Loan EMI Calculator & Bank Approvals | Harico Estates' },
  { path: 'faq', title: 'MahaRERA & Homebuyer FAQ Knowledge Hub | Harico Estates' }
];

staticPages.forEach(page => {
    const pageDir = path.join(distDir, page.path);
    fs.mkdirSync(pageDir, { recursive: true });
    
    let html = template;
    const canonicalTag = `<link rel="canonical" href="https://haricoestates.in/${page.path}" />`;
    if (html.includes('<head>')) {
       html = html.replace('<head>', '<head>\n  ' + canonicalTag);
    }
    html = html.replace(/<title>(.*?)<\/title>/is, `<title>${page.title}</title>`);
    html = html.replace(/<meta name="keywords"[\s\S]*?>/is, `<meta name="keywords" content="${globalKeywords}">`);

    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    console.log(`[Prerender] Generated static backbone: /${page.path}/index.html`);
});

console.log('[Prerender] Complete. Ultra-Advanced SEO & SGE Injection Ready.');
