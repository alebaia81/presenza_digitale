import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="w-12 h-12 border-4 border-gold-amber/20 border-t-gold-amber rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-amber/10 border border-gold-amber/20 text-gold-amber text-sm font-medium mb-6"
          >
            <BookOpen className="w-4 h-4" />
            <span>Journal & Strategia</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Blog <span className="text-gold-amber">Presenza Digitale</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 max-w-2xl mx-auto font-light"
          >
            Approfondimenti tecnici, analisi SEO e strategie digitali per dominare la tua nicchia nel 2026.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900/30 rounded-3xl border border-white/5 overflow-hidden hover:border-gold-amber/30 transition-all duration-500 flex flex-col"
            >
              <Link to={`/blog/${post.slug}`} className="block aspect-[16/9] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </Link>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-bold text-gold-amber uppercase tracking-widest px-3 py-1 rounded-full bg-gold-amber/10">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-gold-amber transition-colors">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-zinc-400 text-sm mb-6 line-clamp-3 font-light leading-relaxed">
                  {post.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-amber to-amber-700 flex items-center justify-center text-[10px] font-bold text-black">
                      AB
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-white">{post.author}</span>
                      <span className="text-[10px] text-zinc-500">{post.date}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-gold-amber hover:text-black transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
