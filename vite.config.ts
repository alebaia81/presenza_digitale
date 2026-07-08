import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import type { Plugin } from 'vite';
import { defineConfig, loadEnv } from 'vite';

// ---------------------------------------------------------------------------
// Plugin: converts render-blocking <link rel="stylesheet"> into async load
// ---------------------------------------------------------------------------
function asyncCssPlugin(): Plugin {
  return {
    name: 'async-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
        (_match, href) =>
          `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'" crossorigin>` +
          `<noscript><link rel="stylesheet" href="${href}" crossorigin></noscript>`
      );
    },
  };
}

// ---------------------------------------------------------------------------
// Plugin: generates public/sitemap.xml from static routes + blog .md files
// ---------------------------------------------------------------------------
function sitemapPlugin(): Plugin {
  return {
    name: 'sitemap-generator',
    apply: 'build',
    closeBundle() {
      const SITE_URL = 'https://www.presenzadigitale.com';
      const BUILD_DATE = new Date().toISOString().split('T')[0]; // e.g. 2026-06-18

      // Static routes
      const staticRoutes: Array<{ loc: string; changefreq: string; priority: string }> = [
        { loc: '/',                        changefreq: 'weekly',  priority: '1.0' },
        { loc: '/blog',                    changefreq: 'weekly',  priority: '0.9' },
        { loc: '/progetti',                changefreq: 'monthly', priority: '0.8' },
        { loc: '/servizi/siti-web-piacenza', changefreq: 'weekly',  priority: '0.9' },
        { loc: '/web-agency-cremona',      changefreq: 'weekly',  priority: '0.9' },
        { loc: '/privacy',                 changefreq: 'yearly',  priority: '0.3' },
        { loc: '/cookie-policy',           changefreq: 'yearly',  priority: '0.3' },
        { loc: '/termini',                 changefreq: 'yearly',  priority: '0.3' },
      ];

      // Discover blog posts from src/content/blog/*.md
      const blogDir = path.resolve(__dirname, 'src/content/blog');
      const blogRoutes: Array<{ loc: string; changefreq: string; priority: string; lastmod: string }> = [];

      if (fs.existsSync(blogDir)) {
        const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));
        for (const file of files) {
          const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
          const { data } = matter(raw);

          // Derive the slug: strip date prefix (YYYY-MM-DD-) from filename
          const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.md$/, '');
          const lastmod = data.date
            ? String(data.date).substring(0, 10)
            : BUILD_DATE;

          blogRoutes.push({
            loc: `/blog/${slug}`,
            changefreq: 'monthly',
            priority: data.featured ? '0.8' : '0.6',
            lastmod,
          });
        }

        // Sort newest first
        blogRoutes.sort((a, b) => (a.lastmod > b.lastmod ? -1 : 1));
      }

      // Build XML
      const urlEntries = [
        ...staticRoutes.map(r => `
  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${BUILD_DATE}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`),
        ...blogRoutes.map(r => `
  <url>
    <loc>${SITE_URL}${r.loc}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`),
      ].join('');

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;

      // Write to public/ so Vite copies it to dist/ automatically
      const outPath = path.resolve(__dirname, 'public/sitemap.xml');
      fs.writeFileSync(outPath, xml, 'utf-8');
      console.log(`✅ [sitemap-generator] Wrote ${1 + staticRoutes.length + blogRoutes.length} URLs → public/sitemap.xml`);
    },
  };
}

// ---------------------------------------------------------------------------
// Vite config
// ---------------------------------------------------------------------------
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), asyncCssPlugin(), sitemapPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Force fresh build output
      emptyOutDir: true,
      // Keep CSS in a separate file (required for async loading plugin)
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          // Deterministic filenames for better caching
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: {
        ignored: ['**/dist/**', '**/seo-html/**', '**/public/sitemap.xml']
      }
    },
  };
});