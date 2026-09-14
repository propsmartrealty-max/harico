import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
const key = 'f894107142a74c6ca9c3132e1858a70c';
const host = 'haricoestates.in';
const keyLocation = `https://${host}/${key}.txt`;

if (!fs.existsSync(sitemapPath)) {
  console.error('[IndexNow] Sitemap not found at', sitemapPath);
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const matches = sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g);
const urlList = Array.from(matches, m => m[1]);

console.log(`[IndexNow] Found ${urlList.length} URLs in sitemap to notify search engines.`);

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

const endpoints = [
  'api.indexnow.org',
  'www.bing.com'
];

endpoints.forEach(endpoint => {
  const options = {
    hostname: endpoint,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    }
  };

  const req = https.request(options, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
      console.log(`[IndexNow] ${endpoint} response: ${res.statusCode} ${res.statusMessage}`);
      if (body) console.log(`[IndexNow] Details: ${body}`);
    });
  });

  req.on('error', (e) => {
    console.warn(`[IndexNow] Error notifying ${endpoint}:`, e.message);
  });

  req.write(payload);
  req.end();
});
