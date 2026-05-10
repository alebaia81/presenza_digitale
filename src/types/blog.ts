export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  featured: boolean;
  content: string;
  schemaType?: string;
}

export interface BlogMetadata {
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
  featured: boolean;
  schemaType?: string;
}
