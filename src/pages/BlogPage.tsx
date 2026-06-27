import React, { useEffect, useState } from 'react';
import { m } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllPosts } from '../utils/blog';
import { BlogPost } from '../types/blog';

const BlogPage = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getAllPosts();
        setPosts(data);
      } catch (error) {
        console.error('Errore nel caricamento dei post:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary transition-colors duration-300">
        <div className="w-12 h-12 border-4 border-gold-amber/20 border-t-gold-amber rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 pt-40 md:pt-48 pb-20 px-6">
      <Helmet>
        <title>Blog | Strategie Web e SEO a Piacenza | Presenza Digitale</title>
        <meta name="description" content="Leggi gli articoli e le guide pratiche di Presenza Digitale su sviluppo web, accessibilità WCAG e ottimizzazione SEO locale a Piacenza e provincia." />
        <link rel="canonical" href="https://www.presenzadigitale.com/blog" />
      </Helmet>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-amber/10 border border-gold-amber/20 text-gold-amber text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4" />
            <span>Journal & Strategia</span>
          </m.div>
          
          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-text-primary mb-6 tracking-tight font-serif"
          >
            Blog <span className="text-gold-amber">Presenza Digitale</span>
          </m.h1>
          
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-text-secondary max-w-2xl mx-auto font-light font-sans"
          >
            Approfondimenti tecnici, analisi SEO e strategie digitali per dominare la tua nicchia nel 2026.
          </m.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <m.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-bg-card rounded-3xl border border-border-primary overflow-hidden hover:border-gold-amber/30 transition-all duration-500 flex flex-col shadow-sm hover:shadow-lg"
            >
              <Link to={`/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </Link>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-gold-amber uppercase tracking-widest px-3 py-1 rounded-full bg-gold-amber/10">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-text-secondary text-xs font-medium font-sans">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-text-primary mb-4 group-hover:text-gold-amber transition-colors font-serif">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-text-secondary text-sm mb-6 line-clamp-3 font-light leading-relaxed font-sans">
                  {post.description}
                </p>

                <div className="mt-auto pt-6 border-t border-border-primary flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-amber to-amber-700 flex items-center justify-center text-[10px] font-bold text-black">
                      AB
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-text-primary">{post.author}</span>
                      <time itemProp="datePublished" className="text-[10px] text-text-secondary mt-0.5">Pubblicato il {post.date}</time>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-primary hover:bg-gold-amber hover:text-black transition-all cursor-pointer"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
