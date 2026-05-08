import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Share2, Bookmark, List } from 'lucide-react';
import { getPostBySlug } from '../utils/blog';
import { BlogPost } from '../types/blog';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        try {
          const data = await getPostBySlug(slug);
          setPost(data);
        } catch (error) {
          console.error('Errore nel caricamento del post:', error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchPost();
  }, [slug]);

  // Table of Contents Extraction
  const toc = useMemo(() => {
    if (!post?.content) return [];
    const lines = post.content.split('\n');
    return lines
      .filter(line => line.startsWith('## '))
      .map(line => {
        const text = line.replace('## ', '').trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-àèìòùáéíóú]/g, '')
          .trim()
          .replace(/\s+/g, '-');
        return { text, id };
      });
  }, [post?.content]);

  // JSON-LD Generation
  const jsonLd = useMemo(() => {
    if (!post) return null;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "image": [post.image],
      "datePublished": post.date,
      "author": [{
        "@type": "Person",
        "name": post.author,
        "url": "https://www.presenzadigitale.com"
      }],
      "description": post.description
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": toc.map(item => ({
        "@type": "Question",
        "name": item.text,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Approfondimento su ${item.text} nel post ${post.title}.`
        }
      }))
    };

    return [articleSchema, faqSchema];
  }, [post, toc]);

  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
    email: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent('Leggi questo articolo su Presenza Digitale: ' + window.location.href)}`,
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
    setShowShareMenu(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#050505]">
        <div className="w-12 h-12 border-4 border-gold-amber/20 border-t-gold-amber rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post non trovato</h1>
        <p className="text-zinc-400 mb-8">L'articolo che stai cercando potrebbe essere stato spostato o rimosso.</p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-gold-amber text-black rounded-full font-bold hover:bg-amber-500 transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" /> Torna al Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <Helmet>
        <title>{post.title} | Blog Presenza Digitale</title>
        <meta name="description" content={post.description} />
        {jsonLd && jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <article className="max-w-4xl mx-auto">
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between mb-12">
          <Link 
            to="/blog" 
            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-gold-amber transition-all group-hover:text-black">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Torna agli articoli</span>
          </Link>
          
          <div className="flex items-center gap-3 relative">
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-gold-amber hover:bg-white/10 transition-all"
                title="Condividi"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {showShareMenu && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setShowShareMenu(false)}
                    />
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-2 space-y-1">
                        <a 
                          href={shareLinks.whatsapp} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors"
                        >
                          <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
                        </a>
                        <a 
                          href={shareLinks.telegram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors"
                        >
                          <Send className="w-4 h-4 text-[#0088cc]" /> Telegram
                        </a>
                        <a 
                          href={shareLinks.email}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors"
                        >
                          <Mail className="w-4 h-4 text-amber-400" /> Email
                        </a>
                        <button 
                          onClick={handleCopyLink}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white rounded-xl transition-colors"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                          </div>
                          Copia Link
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {copyStatus && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-gold-amber text-black text-[10px] px-3 py-1 rounded-full font-bold whitespace-nowrap shadow-lg z-50"
              >
                Link Copiato!
              </motion.div>
            )}
          </div>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-gold-amber uppercase tracking-widest px-3 py-1 rounded-full bg-gold-amber/10">
              {post.category}
            </span>
            <div className="w-1 h-1 rounded-full bg-zinc-700"></div>
            <div className="flex items-center gap-2 text-zinc-500 text-xs">
              <Clock className="w-3 h-3" />
              <span>{post.readTime} di lettura</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-8 border-y border-white/5">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-amber to-amber-700 flex items-center justify-center font-bold text-lg text-black">
              AB
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-white">{post.author}</span>
              <span className="text-xs text-zinc-500">Creatore di Presenza Digitale • {post.date}</span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        {toc.length > 0 && (
          <div className="mb-12 p-8 rounded-3xl bg-zinc-900/30 border border-white/5">
            <div className="flex items-center gap-3 mb-6 text-gold-amber">
              <List className="w-5 h-5" />
              <h2 className="text-lg font-bold uppercase tracking-wider !m-0">Indice dei Contenuti</h2>
            </div>
            <nav className="grid gap-3">
              {toc.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="text-zinc-400 hover:text-gold-amber transition-colors flex items-center gap-3 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-800 group-hover:bg-gold-amber transition-colors"></span>
                  {item.text}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Featured Image with AVIF/WebP logic */}
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 border border-white/5 shadow-2xl relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-p:text-zinc-400 prose-p:leading-relaxed prose-li:text-zinc-400">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-zinc-900/50 to-gold-amber/10 border border-gold-amber/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ti piace questo approccio?</h3>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            Sviluppiamo strategie SEO e digitali basate su dati e tecnologia all'avanguardia. Scopri come possiamo scalare il tuo business.
          </p>
          <Link 
            to="/#contatti" 
            className="px-8 py-4 bg-gold-amber text-black rounded-full font-bold hover:bg-amber-500 transition-all inline-block hover:scale-105 shadow-[0_0_30px_rgba(255,191,0,0.3)]"
          >
            Lavoriamo Insieme
          </Link>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
