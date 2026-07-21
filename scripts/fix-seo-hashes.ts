import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SEO_DIR = path.resolve(__dirname, '..', 'seo-html');

function updateHtmlFiles(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      updateHtmlFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      content = content.replace(/href="\/assets\/style-[^"]+\.css"/g, 'href="/assets/index.css"');
      content = content.replace(/src="\/assets\/index-[^"]+\.js"/g, 'src="/assets/index.js"');
      fs.writeFileSync(fullPath, content, 'utf-8');
    }
  }
}

updateHtmlFiles(SEO_DIR);
console.log('✅ Updated all seo-html files to use stable assets: /assets/index.css and /assets/index.js');
