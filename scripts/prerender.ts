/**
 * prerender.ts — Post-build static pre-rendering for Vite SPA
 *
 * How it works:
 * 1. Starts a local static server serving the `dist/` folder
 * 2. Uses Puppeteer to visit each route
 * 3. Waits for React to hydrate and render content
 * 4. Captures the full HTML (with content inside #root)
 * 5. Writes it back to the correct file in dist/
 *
 * This means crawlers that don't execute JS will see real content.
 * React hydration still works — it "adopts" the existing DOM.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, '..', 'dist');
const PORT = 4173;

// ── Routes to pre-render ──────────────────────────────────────────
// Blog slugs are discovered dynamically from src/content/blog/*.md
function discoverBlogSlugs(): string[] {
  const blogDir = path.resolve(__dirname, '..', 'src', 'content', 'blog');
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, ''));
}

function getRoutes(): string[] {
  const blogSlugs = discoverBlogSlugs();
  return [
    '/',
    '/blog',
    '/progetti',
    '/servizi/siti-web-piacenza',
    '/privacy',
    '/cookie-policy',
    '/termini',
    ...blogSlugs.map(s => `/blog/${s}`),
  ];
}

// ── Static file server ────────────────────────────────────────────
function startServer(): Promise<http.Server> {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let filePath = path.join(DIST_DIR, req.url || '/');

      // SPA fallback: if the file doesn't exist, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        // Check for index.html in directory
        const indexPath = path.join(filePath, 'index.html');
        if (fs.existsSync(indexPath)) {
          filePath = indexPath;
        } else {
          filePath = path.join(DIST_DIR, 'index.html');
        }
      }

      const ext = path.extname(filePath);
      const mimeTypes: Record<string, string> = {
        '.html': 'text/html',
        '.js': 'application/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.avif': 'image/avif',
        '.webp': 'image/webp',
        '.mp4': 'video/mp4',
      };

      try {
        const content = fs.readFileSync(filePath);
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        res.end(content);
      } catch {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    server.listen(PORT, () => {
      console.log(`📡 Static server running on http://localhost:${PORT}`);
      resolve(server);
    });
  });
}

// ── Pre-render a single route ─────────────────────────────────────
async function prerenderRoute(
  browser: import('puppeteer').Browser,
  route: string,
): Promise<void> {
  const page = await browser.newPage();

  // Block heavy resources that crawlers don't need
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const type = req.resourceType();
    if (['image', 'media', 'font', 'stylesheet'].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const url = `http://localhost:${PORT}${route}`;
  console.log(`  🔄 Rendering ${route}...`);

  await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });

  // Wait a bit for React to fully hydrate and any lazy sections to render
  await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

  // Get the full rendered HTML
  const html = await page.content();

  // Determine output path in the new seo-html directory
  const SEO_DIR = path.resolve(__dirname, '..', 'seo-html');
  const routePath = route === '/' ? '/index.html' : `${route}/index.html`;
  const outFile = path.join(SEO_DIR, routePath);
  const outDir = path.dirname(outFile);

  // Create directory if needed
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(outFile, html, 'utf-8');
  console.log(`  ✅ ${route} → seo-html${routePath}`);

  await page.close();
}

// ── Main ──────────────────────────────────────────────────────────
async function main() {
  console.log('\n🚀 Pre-rendering SPA routes...\n');

  const routes = getRoutes();
  console.log(`📋 ${routes.length} routes to pre-render:\n${routes.map(r => `   ${r}`).join('\n')}\n`);

  const server = await startServer();

  // Dynamic import for puppeteer (ESM)
  const puppeteer = await import('puppeteer');
  const browser = await puppeteer.default.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      await prerenderRoute(browser, route);
    }
    console.log(`\n✨ Pre-rendering complete! ${routes.length} routes generated.\n`);
  } catch (err) {
    console.error('❌ Pre-rendering failed:', err);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
  }
}

main();
