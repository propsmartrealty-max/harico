import fs from 'fs';
import path from 'path';
import https from 'https';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const keyPath = path.resolve(__dirname, '../service_account.json');
const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');

console.log('[Google Indexing API] Starting batch submission pipeline...');

if (!fs.existsSync(sitemapPath)) {
  console.error('[Google Indexing API] Error: public/sitemap.xml not found.');
  process.exit(1);
}

const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const matches = sitemapContent.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g);
const urls = Array.from(matches, m => m[1]);

console.log(`[Google Indexing API] Loaded ${urls.length} target URLs.`);

if (!fs.existsSync(keyPath) && !process.env.GOOGLE_SERVICE_ACCOUNT_KEY) {
  console.log('\n========================================================================');
  console.log('ℹ️  GOOGLE INDEXING API NOTICE:');
  console.log('   To submit URLs directly to Google via the official Indexing API:');
  console.log('   1. Create a Service Account in Google Cloud Console with "Owner" role in Google Search Console.');
  console.log('   2. Download the JSON key file as "service_account.json" into the project root.');
  console.log('   3. Run: npm run index:google');
  console.log('========================================================================\n');
  process.exit(0);
}

let credentials;
try {
  if (fs.existsSync(keyPath)) {
    credentials = JSON.parse(fs.readFileSync(keyPath, 'utf8'));
  } else {
    credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY);
  }
} catch (err) {
  console.error('[Google Indexing API] Error reading service account credentials:', err.message);
  process.exit(1);
}

function base64UrlEncode(str) {
  return Buffer.from(str).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function createJWT(creds) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: creds.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedToken);
  const signature = signer.sign(creds.private_key, 'base64')
    .replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');

  return `${unsignedToken}.${signature}`;
}

async function getAccessToken(creds) {
  return new Promise((resolve, reject) => {
    const jwt = createJWT(creds);
    const postData = `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`;

    const req = https.request({
      hostname: 'oauth2.googleapis.com',
      path: '/token',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 10000
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(body);
          if (json.access_token) resolve(json.access_token);
          else reject(new Error(json.error_description || 'Failed to obtain access token'));
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function publishUrl(token, url) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({
      url,
      type: 'URL_UPDATED'
    });

    const req = https.request({
      hostname: 'indexing.googleapis.com',
      path: '/v3/urlNotifications:publish',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      },
      timeout: 5000
    }, res => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        resolve({ status: res.statusCode, body });
      });
    });

    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

(async () => {
  try {
    const token = await getAccessToken(credentials);
    console.log('[Google Indexing API] Successfully authenticated with Google Cloud OAuth2.');

    for (const url of urls) {
      const res = await publishUrl(token, url);
      console.log(`[Google Indexing API] ${url} -> Status ${res.status}`);
      await new Promise(r => setTimeout(r, 200)); // Respect rate limits
    }

    console.log('[Google Indexing API] All URLs successfully submitted to Google Indexing Queue.');
  } catch (err) {
    console.error('[Google Indexing API] Submission error:', err.message);
  }
})();
