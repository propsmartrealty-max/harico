import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist');

console.log('[Validator] Commencing pre-flight SEO & integrity audit...');

if (!fs.existsSync(distDir)) {
  console.error('[Validator] Error: dist/ does not exist. Run npm run build first.');
  process.exit(1);
}

// 1. Validate JSON-LD in dist/index.html
const indexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const schemaMatches = [...indexHtml.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];

if (schemaMatches.length === 0) {
  console.error('[Validator] FAILED: No JSON-LD schema found in dist/index.html');
  process.exit(1);
}

let schemaPass = true;
schemaMatches.forEach((m, idx) => {
  try {
    const obj = JSON.parse(m[1]);
    console.log(`[Validator] Schema #${idx + 1} valid: @type=${obj['@type']} | name=${obj.name || 'N/A'}`);
  } catch (err) {
    console.error(`[Validator] Schema #${idx + 1} INVALID JSON:`, err.message);
    schemaPass = false;
  }
});

if (!schemaPass) {
  console.error('[Validator] FAILED: JSON-LD syntax errors detected.');
  process.exit(1);
}

// 2. Validate All Internal Links
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules') getAllHtmlFiles(fullPath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

const allHtml = getAllHtmlFiles(distDir);
const redirects = fs.readFileSync(path.join(distDir, '_redirects'), 'utf8');

let totalChecked = 0;
let brokenLinks = [];

allHtml.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const hrefs = [...content.matchAll(/href="(\/[^"#?]*)/g)].map(m => m[1]);
  hrefs.forEach(link => {
    if (link === '/' || link.startsWith('/assets/')) return;
    totalChecked++;
    const asFile = path.join(distDir, link);
    const asDirIndex = path.join(distDir, link, 'index.html');
    const inRedirects = redirects.includes(link);
    if (!fs.existsSync(asFile) && !fs.existsSync(asDirIndex) && !inRedirects) {
      brokenLinks.push({ file: path.relative(distDir, file), link });
    }
  });
});

if (brokenLinks.length > 0) {
  console.error(`[Validator] FAILED: Found ${brokenLinks.length} broken links:`, brokenLinks);
  process.exit(1);
}

console.log(`[Validator] Audited ${allHtml.length} static HTML files and ${totalChecked} links. 0 broken links.`);

// 3. Validate Sitemap & Feed
const sitemap = path.join(distDir, 'sitemap.xml');
const feed = path.join(distDir, 'feed.xml');

if (!fs.existsSync(sitemap)) {
  console.error('[Validator] FAILED: dist/sitemap.xml missing.');
  process.exit(1);
}
if (!fs.existsSync(feed)) {
  console.error('[Validator] FAILED: dist/feed.xml missing.');
  process.exit(1);
}

console.log('[Validator] ALL PRE-FLIGHT SEO & BUILD VALIDATIONS PASSED.');
