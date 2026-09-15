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
  console.error('[IndexDispatch] Error: public/sitemap.xml not found.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const matches = sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g);
const urlList = Array.from(matches, m => m[1]);

console.log(`[IndexDispatch] Loaded ${urlList.length} verified canonical URLs from sitemap.xml.`);

// 1. Submit to IndexNow Protocol (Bing, Yandex, Seznam, Naver)
const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

const indexNowEndpoints = [
  'api.indexnow.org',
  'www.bing.com',
  'yandex.com'
];

console.log('[IndexDispatch] Dispatching IndexNow batch submissions...');

indexNowEndpoints.forEach(endpoint => {
  const options = {
    hostname: endpoint,
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': Buffer.byteLength(payload)
    },
    timeout: 5000
  };

  const req = https.request(options, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`[IndexDispatch] IndexNow [${endpoint}] -> Status: ${res.statusCode} ${res.statusMessage || ''}`);
    });
  });

  req.on('error', (e) => {
    console.warn(`[IndexDispatch] IndexNow [${endpoint}] notice:`, e.message);
  });

  req.on('timeout', () => {
    req.destroy();
    console.warn(`[IndexDispatch] IndexNow [${endpoint}] timed out.`);
  });

  req.write(payload);
  req.end();
});

// 2. Ping Search Engine Sitemap Endpoints
const pingEndpoints = [
  { name: 'Google Sitemap Ping', url: 'https://www.google.com/ping?sitemap=https%3A%2F%2Fharicoestates.in%2Fsitemap.xml' },
  { name: 'Bing Sitemap Ping', url: 'https://www.bing.com/ping?sitemap=https%3A%2F%2Fharicoestates.in%2Fsitemap.xml' }
];

console.log('[IndexDispatch] Sending live search engine sitemap pings...');

pingEndpoints.forEach(ping => {
  try {
    https.get(ping.url, { timeout: 5000 }, (res) => {
      console.log(`[IndexDispatch] ${ping.name} -> Status: ${res.statusCode}`);
    }).on('error', (err) => {
      console.log(`[IndexDispatch] ${ping.name} notice:`, err.message);
    });
  } catch (err) {
    console.log(`[IndexDispatch] ${ping.name} skipped:`, err.message);
  }
});

console.log('[IndexDispatch] Search engine notification engine dispatched.');
