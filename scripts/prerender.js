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

const projects = [
  {
    slug: 'harico-edge',
    title: 'Harico Edge 2 & 3 BHK Flats in Punawale | Near Wakad & Highway | Sentosa Group',
    description: 'Harico Edge by Sentosa: Premium 2 & 3 BHK flats in Punawale starting ₹74 Lacs*. Just 2 mins from Mumbai-Pune Highway. RERA Registered. Enquire for Floor Plans.',
    keywords: 'Sentosa developers, Harico Estates Punawale, harico projects punawale, sentos punawale, 2 BHK Punawale, 3 BHK Wakad, Harico Edge Launch Price',
    image: '/assets/harico-edge-hero.png',
  },
  {
    slug: 'harico-divaam',
    title: 'Harico Divaam 2 & 3 BHK in Kiwale | Tallest Towers near Ravet Expressway',
    description: 'Harico Divaam (Divine): The tallest towers in Kiwale/Ravet. Luxury 2 & 3 BHK homes from ₹64.5 Lacs*. Next to Mumbai-Pune Expressway & Mukai Chowk. 100+ Amenities.',
    keywords: 'Sentosa developers, Harico Estates Punawale, harico projects punawale, sentos punawale, Tallest Towers in Kiwale, Flats near Mukai Chowk, Harico Divaam Brochure',
    image: '/assets/harico-divaam-hero.jpg',
  },
  {
    slug: 'harico-pride',
    title: 'Harico Pride Punawale | New Launch Spacious 2 & 3 BHK | Pre-Launch Offers',
    description: 'Harico Pride: New Launch in Punawale offering spacious 2 & 3 BHK homes. Located near Bhiku Vallabh Kale School. Avail Pre-Launch Price Benefits & Early Bird Offers.',
    keywords: 'Sentosa developers, Harico Estates Punawale, harico projects punawale, sentos punawale, New Launch in Punawale 2025, Harico Pride Pre-launch',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  }
];

console.log('[Prerender] Generating static HTML routes for SEO bots...');

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

// Also create global index placeholder for Privacy / Terms simply to avoid 404 bots jumping directly into non-hydrated spaces
const legalPages = ['privacy', 'terms', 'contact', 'amenities', 'projects'];
legalPages.forEach(page => {
    const pageDir = path.join(distDir, page);
    fs.mkdirSync(pageDir, { recursive: true });
    
    // For these, we just rewrite canonical back to / and let SPA handle it
    let html = template;
    const canonicalTag = '<link rel="canonical" href="https://haricoestates.in/' + page + '" />';
    if (html.includes('<head>')) {
       html = html.replace('<head>', '<head>\n  ' + canonicalTag);
    }
    html = html.replace(/<title>(.*?)<\/title>/is, '<title>Harico Estates | ' + page.charAt(0).toUpperCase() + page.slice(1) + '</title>');

    fs.writeFileSync(path.join(pageDir, 'index.html'), html, 'utf-8');
    console.log('[Prerender] Generated static backbone: /' + page + '/index.html');
});

console.log('[Prerender] Complete. Architecture is now Bot-Hydration Ready.');
