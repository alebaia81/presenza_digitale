import matter from 'gray-matter';
import { BlogPost, BlogMetadata } from '../types/blog';

export async function getAllPosts(): Promise<BlogPost[]> {
  const modules = import.meta.glob('../content/blog/*.md', { query: '?raw', import: 'default' });
  const posts: BlogPost[] = [];

  for (const path in modules) {
    const rawContent = await modules[path]() as string;
    const { data, content } = matter(rawContent);
    const slug = path.split('/').pop()?.replace('.md', '') || '';

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
