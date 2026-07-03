import { BlogPost, BlogMetadata } from '../types/blog';

function parseFrontmatter(rawContent: string): { data: Record<string, any>; content: string } {
  const match = rawContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content: rawContent };
  }

  const yamlBlock = match[1];
  const content = match[2];
  const data: Record<string, any> = {};

  const lines = yamlBlock.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const colonIndex = trimmed.indexOf(':');
    if (colonIndex === -1) continue;

    const key = trimmed.slice(0, colonIndex).trim();
    let val = trimmed.slice(colonIndex + 1).trim();

    // Remove surrounding quotes if present
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }

    // Convert booleans and numbers
    if (val.toLowerCase() === 'true') {
      data[key] = true;
    } else if (val.toLowerCase() === 'false') {
      data[key] = false;
    } else if (!isNaN(Number(val)) && val !== '') {
      data[key] = Number(val);
    } else {
      data[key] = val;
    }
  }

  return { data, content };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]() as string;
    const { data, content } = parseFrontmatter(rawContent);
    const slug = path.split('/').pop()?.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace('.md', '') || '';

    posts.push({
      slug,
      content,
      ...(data as BlogMetadata),
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllPosts();
  return posts.find((p) => p.slug === slug) || null;
}
