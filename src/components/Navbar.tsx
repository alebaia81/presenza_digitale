import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MonitorSmartphone, MessageCircle, ArrowRight, X, Menu } from 'lucide-react';
import { motion } from 'motion/react';
import { waLink } from '../constants';

interface NavbarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Navbar({ isMobileMenuOpen, setIsMobileMenuOpen }: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (!isHome) return; // Link will handle navigation if not on home
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/pd-4.png" alt="Presenza Digitale Logo" width="76" height="76" className="w-[76px] h-[76px] object-contain drop-shadow-[0_0_15px_rgba(191,149,63,0.3)]" />
          <span className="text-2xl font-black tracking-tight font-serif" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Presenza Digitale</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('servizi')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">I Nostri Servizi</button>
              <Link to="/progetti" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Portfolio Progetti</Link>
              <button onClick={() => scrollToSection('prezzi')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Piani e Prezzi</button>
              <button onClick={() => scrollToSection('contatti')} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contattaci Ora</button>
            </>
          ) : (
            <>
              <Link to="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Torna alla Home</Link>
              <Link to="/progetti" className="text-sm font-bold text-white transition-colors">Portfolio Progetti</Link>
            </>
          )}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-300 hover:text-[#25D366] transition-colors flex items-center gap-2">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
          <button onClick={() => isHome ? scrollToSection('contatti') : window.location.href='/#contatti'} className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Inizia Ora <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 flex flex-col gap-6 shadow-2xl"
        >
          {isHome ? (
            <>
              <button onClick={() => scrollToSection('servizi')} className="text-2xl font-semibold text-left text-zinc-200 hover:text-white">I Nostri Servizi</button>
              <Link to="/progetti" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-zinc-200 hover:text-white">Portfolio Progetti</Link>
              <button onClick={() => scrollToSection('prezzi')} className="text-2xl font-semibold text-left text-zinc-200 hover:text-white">Piani e Prezzi</button>
              <button onClick={() => scrollToSection('contatti')} className="text-2xl font-semibold text-left text-zinc-200 hover:text-white">Contattaci Ora</button>
            </>
          ) : (
            <>
              <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-zinc-200 hover:text-white">Torna alla Home</Link>
              <Link to="/progetti" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-white">Portfolio Progetti</Link>
            </>
          )}
          <div className="h-px bg-white/10 w-full my-2"></div>
          <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-4 rounded-full text-center font-bold hover:bg-[#25D366]/20 transition-colors flex justify-center items-center gap-2 text-lg">
            <MessageCircle className="w-5 h-5" /> Scrivici su WhatsApp
          </a>
          <button onClick={() => isHome ? scrollToSection('contatti') : window.location.href='/#contatti'} className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-4 rounded-full text-center font-bold hover:opacity-90 transition-opacity text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            Inizia Ora
          </button>
        </motion.div>
      )}
    </header>
  );
}
