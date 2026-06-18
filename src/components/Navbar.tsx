import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MonitorSmartphone, ArrowRight, X, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { waLink } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navigate = useNavigate();

  // After cross-page navigation, poll until the lazy-loaded section mounts then scroll
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    let attempts = 0;
    const interval = setInterval(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        clearInterval(interval);
      } else if (++attempts > 20) {
        clearInterval(interval); // give up after 2s
      }
    }, 100);
    return () => clearInterval(interval);
  }, [location]);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border-primary bg-bg-primary/80 backdrop-blur-xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[76px] h-[76px] flex items-center justify-center drop-shadow-[0_0_8px_rgba(161,68,0,0.15)] dark:drop-shadow-[0_0_15px_rgba(191,149,63,0.3)] shrink-0">
            <img 
              src="/assets/images/logo-optimized.png" 
              alt="Presenza Digitale - Logo" 
              width="76" 
              height="76" 
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-contain logo-filter" 
            />
          </div>
          <span className="text-2xl font-black tracking-tight font-serif pb-1 pr-2 text-gold-gradient">Presenza Digitale</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Menu principale">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('servizi')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer">I Nostri Servizi</button>
              <Link to="/progetti" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Portfolio Progetti</Link>
              <Link to="/blog" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors">Blog</Link>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer">FAQ</button>
              <button onClick={() => scrollToSection('contatti')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer">Contattaci Ora</button>
            </>
          ) : (
            <>
              <Link to="/" className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" aria-current={location.pathname === '/' ? 'page' : undefined}>Torna alla Home</Link>
              <Link to="/progetti" className={`text-sm font-medium transition-colors ${location.pathname === '/progetti' ? 'text-text-primary font-bold' : 'text-text-secondary hover:text-text-primary'}`} aria-current={location.pathname === '/progetti' ? 'page' : undefined}>Portfolio Progetti</Link>
              <Link to="/blog" className={`text-sm font-medium transition-colors ${location.pathname.startsWith('/blog') ? 'text-text-primary font-bold' : 'text-text-secondary hover:text-text-primary'}`} aria-current={location.pathname.startsWith('/blog') ? 'page' : undefined}>Blog</Link>
              <button onClick={() => scrollToSection('faq')} className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors cursor-pointer">FAQ</button>
            </>
          )}
        </nav>
        
        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <ThemeToggle />
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-text-secondary hover:text-[#075E54] dark:hover:text-[#25D366] transition-colors flex items-center gap-2">
            <WhatsAppIcon className="w-4 h-4 text-[#075E54] dark:text-[#25D366]" /> WhatsApp
          </a>
          <button onClick={() => scrollToSection('contatti')} className="bg-text-primary text-bg-primary px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-pointer">
            Inizia Ora <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        <button 
          aria-label={isMobileMenuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden p-2 text-text-secondary hover:text-text-primary transition-colors z-50 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          id="mobile-menu"
          role="dialog"
          aria-label="Menu di navigazione mobile"
          aria-modal="true"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 w-full bg-bg-primary/95 backdrop-blur-2xl border-b border-border-primary py-8 px-6 flex flex-col gap-6 shadow-2xl transition-colors duration-300"
        >
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('servizi')} className="text-2xl font-semibold text-left text-text-secondary hover:text-text-primary cursor-pointer">I Nostri Servizi</button>
              <Link to="/progetti" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-secondary hover:text-text-primary">Portfolio Progetti</Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-secondary hover:text-text-primary">Blog</Link>
              <button onClick={() => scrollToSection('faq')} className="text-2xl font-semibold text-left text-text-secondary hover:text-text-primary cursor-pointer">FAQ</button>
              <button onClick={() => scrollToSection('contatti')} className="text-2xl font-semibold text-left text-text-secondary hover:text-text-primary cursor-pointer">Contattaci Ora</button>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-text-secondary hover:text-text-primary">Torna alla Home</Link>
              <Link to="/progetti" onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-semibold transition-colors ${location.pathname === '/progetti' ? 'text-text-primary font-bold' : 'text-text-secondary hover:text-text-primary'}`}>Portfolio Progetti</Link>
              <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`text-2xl font-semibold transition-colors ${location.pathname.startsWith('/blog') ? 'text-text-primary font-bold' : 'text-text-secondary hover:text-text-primary'}`}>Blog</Link>
              <button onClick={() => scrollToSection('faq')} className="text-2xl font-semibold text-left text-text-secondary hover:text-text-primary cursor-pointer">FAQ</button>
            </>
          )}
          
          <div className="flex items-center justify-between py-2 border-t border-border-primary mt-2">
            <span className="text-lg font-medium text-text-secondary">Tema della Pagina</span>
            <ThemeToggle />
          </div>
          
          <div className="h-px bg-border-primary w-full"></div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#075E54]/10 text-[#075E54] border border-[#075E54]/30 dark:bg-[#25D366]/10 dark:text-[#25D366] dark:border-[#25D366]/30 px-6 py-4 rounded-full text-center font-bold hover:bg-[#075E54]/20 dark:hover:bg-[#25D366]/20 transition-colors flex justify-center items-center gap-2 text-lg">
            <WhatsAppIcon className="w-5 h-5 text-[#075E54] dark:text-[#25D366]" /> Scrivici su WhatsApp
          </a>
          <button onClick={() => scrollToSection('contatti')} className="bg-text-primary text-bg-primary px-6 py-4 rounded-full text-center font-bold hover:scale-105 transition-all text-lg shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer">
            Inizia Ora
          </button>
        </motion.div>
      )}
    </header>
  );
}
