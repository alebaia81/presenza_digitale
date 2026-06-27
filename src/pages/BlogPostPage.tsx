import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { m, AnimatePresence } from 'motion/react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Share2, List, Send, Mail, Download } from 'lucide-react';
import { getPostBySlug } from '../utils/blog';
import { BlogPost } from '../types/blog';
import { waLinkBlog } from '../constants';
import WhatsAppIcon from '../components/WhatsAppIcon';

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

  // Table of Contents + body text extraction per H2 section
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

  /**
   * Extracts a map of H2 heading text → adjacent body text.
   * For each ## section, collects non-heading, non-empty lines until
   * the next heading (## or #) appears, then joins them as the answer.
   * Falls back to a generic sentence when no body text is found.
   */
  const h2BodyMap = useMemo((): Record<string, string> => {
    if (!post?.content) return {};
    const lines = post.content.split('\n');
    const result: Record<string, string> = {};
    let currentHeading: string | null = null;
    let bodyLines: string[] = [];

    const flush = () => {
      if (currentHeading !== null) {
        const body = bodyLines
          // strip inline Markdown: bold, italic, inline code, links
          .map(l =>
            l
              .replace(/\*\*(.+?)\*\*/g, '$1')
              .replace(/\*(.+?)\*/g, '$1')
              .replace(/`(.+?)`/g, '$1')
              .replace(/\[(.+?)\]\(.+?\)/g, '$1')
              .replace(/^[-*>]\s+/, '')
              .trim()
          )
          .filter(Boolean)
          .slice(0, 4) // limit to first 4 non-empty lines for conciseness
          .join(' ');
        result[currentHeading] = body || `Approfondimento su "${currentHeading}" nell'articolo.`;
        bodyLines = [];
      }
    };

    for (const line of lines) {
      if (line.startsWith('## ')) {
        flush();
        currentHeading = line.replace('## ', '').trim();
      } else if (line.startsWith('#')) {
        // H1 or H3+ → close current section but don't start a new H2
        flush();
        currentHeading = null;
      } else if (currentHeading !== null) {
        bodyLines.push(line);
      }
    }
    flush(); // flush the last section

    return result;
  }, [post?.content]);

  // JSON-LD Generation
  const jsonLd = useMemo(() => {
    if (!post) return null;

    const authorName = post.author.includes(' - ')
      ? post.author.split(' - ')[0]
      : post.author;

    const absoluteImage = post.image.startsWith('http')
      ? post.image
      : `https://presenzadigitale.com${post.image}`;

    const articleSchema = {
      "@context": "https://schema.org",
      "@type": post.schemaType || "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "author": {
        "@type": "Person",
        "name": authorName,
        "url": "https://presenzadigitale.com"
      },
      "image": absoluteImage,
      "publisher": {
        "@type": "Organization",
        "name": "Presenza Digitale"
      },
      "datePublished": post.date
    };

    // Only include FAQPage when there are actual H2 sections
    if (toc.length === 0) return [articleSchema];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": toc.map(item => ({
        "@type": "Question",
        "name": item.text,
        "acceptedAnswer": {
          "@type": "Answer",
          // Use the real paragraph text extracted from the Markdown
          "text": h2BodyMap[item.text] ?? `Approfondimento su "${item.text}" nell'articolo.`
        }
      }))
    };

    return [articleSchema, faqSchema];
  }, [post, toc, h2BodyMap]);

  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copyStatus, setCopyStatus] = useState(false);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-primary transition-colors duration-300">
        <div className="w-12 h-12 border-4 border-gold-amber/20 border-t-gold-amber rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-bg-primary px-6 text-center transition-colors duration-300">
        <h1 className="text-4xl font-bold text-text-primary mb-4 font-serif">Post non trovato</h1>
        <p className="text-text-secondary mb-8">L'articolo che stai cercando potrebbe essere stato spostato o rimosso.</p>
        <Link 
          to="/blog" 
          className="px-6 py-3 bg-gold-amber text-black rounded-full font-bold hover:bg-amber-500 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" /> Torna al Blog
        </Link>
      </div>
    );
  }

  // 1. Definizione delle costanti di produzione e fallback
  const SITE_URL = "https://www.presenzadigitale.com"; // O process.env.VITE_SITE_URL
  const DEFAULT_DESC = "Presenza Digitale: Sviluppo web engineering in React 19 e strategie SEO semantiche per professionisti.";
  const DEFAULT_IMAGE = `${SITE_URL}/assets/images/og-fallback-presenza-digitale.avif`;

  // 2. Risoluzione dinamica dei valori con fallback e URL assoluti
  const ogDescription = post.description || DEFAULT_DESC;
  const ogImageAbsolute = post.image 
    ? (post.image.startsWith("http") ? post.image : `${SITE_URL}${post.image}`)
    : DEFAULT_IMAGE;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopyStatus(true);
    setTimeout(() => setCopyStatus(false), 2000);
    setShowShareMenu(false);
  };

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`,
    email: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent('Leggi questo articolo su Presenza Digitale: ' + window.location.href)}`,
  };

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300 pt-40 md:pt-48 pb-20 px-6">
      <Helmet>
        <title>{post.title} | Blog Presenza Digitale</title>
        <meta name="description" content={ogDescription} />
        <meta name="keywords" content={`${post.category || 'Web'}, Presenza Digitale, sviluppo web, SEO`} />
        <link rel="canonical" href={`${SITE_URL}/blog/${post.slug}`} />
        
        {/* Open Graph ottimizzato per Crawler Social */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImageAbsolute} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/blog/${post.slug}`} />
        <meta property="og:site_name" content="Presenza Digitale" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={ogDescription} />
        <meta name="twitter:image" content={ogImageAbsolute} />
        
        {jsonLd && jsonLd.map((schema, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Helmet>

      <article className="max-w-4xl mx-auto">
        {/* Navigation & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 relative z-20">
          <Link 
            to="/blog" 
            className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors w-fit cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-bg-secondary flex items-center justify-center group-hover:bg-gold-amber transition-all group-hover:text-black">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Torna agli articoli</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => setShowShareMenu(!showShareMenu)}
                className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center text-text-secondary hover:text-gold-amber hover:bg-bg-card transition-all cursor-pointer"
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
                    <m.div 
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      className="absolute right-0 mt-2 w-48 bg-bg-card border border-border-primary rounded-2xl shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-2 space-y-1">
                        <a 
                          href={shareLinks.whatsapp} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-xl transition-colors cursor-pointer"
                        >
                          <WhatsAppIcon className="w-4 h-4 text-[#075E54] dark:text-[#25D366]" /> WhatsApp
                        </a>
                        <a 
                          href={shareLinks.telegram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-xl transition-colors cursor-pointer"
                        >
                          <Send className="w-4 h-4 text-[#0088cc]" /> Telegram
                        </a>
                        <a 
                          href={shareLinks.email}
                          className="flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-xl transition-colors cursor-pointer"
                        >
                          <Mail className="w-4 h-4 text-amber-400" /> Email
                        </a>
                        <button 
                          onClick={handleCopyLink}
                          className="w-full flex items-center gap-3 px-4 py-3 text-sm text-text-secondary hover:bg-bg-secondary hover:text-text-primary rounded-xl transition-colors text-left cursor-pointer"
                        >
                          <div className="w-4 h-4 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                          </div>
                          Copia Link
                        </button>
                      </div>
                    </m.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            <AnimatePresence>
              {copyStatus && (
                <m.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-gold-amber text-black text-xs px-4 py-2 rounded-full font-bold shadow-2xl z-[100]"
                >
                  Link Copiato negli appunti!
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        {/* Header */}
        <header className="mb-12 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-bold text-gold-amber uppercase tracking-widest px-3 py-1 rounded-full bg-gold-amber/10">
              {post.category}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-border-primary"></div>
            <div className="flex items-center gap-2 text-text-secondary text-xs font-medium">
              <Clock className="w-3 h-3" />
              <span>{post.readTime} di lettura</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-text-primary mb-10 tracking-tight leading-tight font-serif">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 py-8 border-y border-border-primary">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-amber to-amber-700 flex items-center justify-center font-bold text-lg text-black">
              AB
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-primary">{post.author}</span>
              <span className="text-xs text-text-secondary font-medium mt-0.5">Creatore di Presenza Digitale • Pubblicato il <time itemProp="datePublished">{post.date}</time></span>
            </div>
          </div>
        </header>

        {/* Table of Contents */}
        {toc.length > 0 && (
          <div className="mb-16 p-8 rounded-3xl bg-bg-card border border-border-primary relative z-10">
            <div className="flex items-center gap-3 mb-8 text-gold-amber">
              <List className="w-5 h-5" />
              <h2 className="text-lg font-bold uppercase tracking-wider !m-0 font-serif">Indice dei Contenuti</h2>
            </div>
            <nav className="grid gap-4">
              {toc.map(item => (
                <a 
                  key={item.id} 
                  href={`#${item.id}`}
                  className="text-text-secondary hover:text-gold-amber transition-colors flex items-center gap-4 group cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-border-primary group-hover:bg-gold-amber transition-colors shrink-0"></span>
                  <span className="text-base leading-snug font-sans">{item.text}</span>
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* Featured Image with AVIF/WebP logic */}
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden mb-16 border border-border-primary shadow-2xl relative">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="prose dark:prose-invert max-w-none 
          prose-headings:text-text-primary prose-headings:font-bold prose-headings:font-serif
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-2 prose-h2:border-l-4 prose-h2:border-gold-amber prose-h2:pl-6
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-text-secondary prose-p:leading-[1.75] prose-p:text-lg prose-p:mb-6 prose-p:font-sans prose-p:font-light
          prose-li:text-text-secondary prose-li:mb-2 prose-li:font-sans prose-li:font-light
          prose-strong:text-gold-amber prose-strong:font-semibold
          prose-a:text-gold-amber prose-a:no-underline hover:prose-a:underline
        ">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]]}
          >
            {post.content}
          </ReactMarkdown>
        </div>

        {/* Download Strategic Blueprint CTA */}
        <div className="bg-[#141414] border-l-4 border-gold-amber p-8 my-12 rounded-3xl relative overflow-hidden group">
          {/* Subtle background decoration */}
          <div className="absolute right-0 bottom-0 translate-x-1/3 translate-y-1/3 w-48 h-48 bg-gold-amber/5 rounded-full blur-3xl group-hover:bg-gold-amber/10 transition-colors duration-500"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left">
            <div className="max-w-xl">
              <h3 className="text-[#F5F5F5] font-serif font-bold text-2xl mb-2">
                Vuoi approfondire l'architettura del 2026?
              </h3>
              <p className="text-[#D1D1D1] text-base font-light">
                Scarica il nostro **Strategic Blueprint** completo in formato PDF ad alta definizione.
              </p>
            </div>
            
            <a 
              href="/downloads/SEO_React_2026_Strategic_Blueprint.pdf" 
              download
              className="inline-flex items-center gap-2 bg-gold-amber hover:bg-amber-600 dark:hover:bg-amber-400 text-black dark:text-black font-bold px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_4px_20px_rgba(255,191,0,0.15)] shrink-0 w-fit cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Scarica il Report PDF
            </a>
          </div>
        </div>

        {/* Footer CTA — WhatsApp diretto */}
        <div className="mt-20 p-10 rounded-[2.5rem] bg-gradient-to-br from-bg-card to-[#075E54]/5 border border-[#075E54]/20 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-[#075E54]/10 flex items-center justify-center">
              <WhatsAppIcon className="w-8 h-8 text-[#075E54] dark:text-[#25D366]" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-text-primary mb-3 font-serif">Hai trovato utile questo articolo?</h3>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto font-sans font-light">
            Scrivici su WhatsApp per una consulenza gratuita. Analizziamo la tua situazione e ti diciamo cosa puoi fare subito per migliorare la tua presenza digitale.
          </p>
          <a
            href={waLinkBlog}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#075E54] hover:bg-[#0c4f47] text-white rounded-full font-bold transition-all hover:scale-105 shadow-[0_0_30px_rgba(7,94,84,0.3)] text-lg cursor-pointer"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Scrivici Ora — È Gratuito
          </a>
          <p className="text-xs text-text-secondary/60 mt-4">Risposta garantita entro 24 ore · Nessun impegno</p>
        </div>
      </article>
    </div>
  );
};

export default BlogPostPage;
