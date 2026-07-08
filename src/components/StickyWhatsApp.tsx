import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';
import { getWaLink } from '../constants';
import WhatsAppIcon from './WhatsAppIcon';

export default function StickyWhatsApp() {
  const location = useLocation();
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 4 seconds to grab attention organically
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-3 pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <m.div
            initial={{ opacity: 0, y: 15, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="pointer-events-auto bg-white/95 dark:bg-[#1C1C1C]/90 backdrop-blur-md border border-black/10 dark:border-gold-amber/30 text-stone-900 dark:text-text-primary px-4 py-2.5 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-3 relative mr-1 max-w-[280px]"
          >
            {/* Tiny green indicator inside chat message */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[10px] text-gold-amber font-bold uppercase tracking-widest leading-none mb-1">Alessandro</span>
              <p className="text-xs text-stone-800 dark:text-text-secondary font-normal leading-snug">Hai una domanda? Scrivimi ora su WhatsApp!</p>
            </div>
            {/* Close button for tooltip */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-stone-400 dark:text-text-secondary hover:text-gold-amber dark:hover:text-gold-amber p-1 transition-colors rounded-lg pointer-events-auto ml-1 self-start cursor-pointer"
              aria-label="Chiudi suggerimento"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            {/* Tooltip speech bubble arrow */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white dark:bg-[#1C1C1C] border-r border-b border-black/10 dark:border-gold-amber/30 rotate-45"></div>
          </m.div>
        )}
      </AnimatePresence>

      <m.a
        href={getWaLink(location.pathname)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contattaci su WhatsApp"
        className="pointer-events-auto relative flex items-center justify-center p-4 bg-white/95 dark:bg-[#121212]/80 backdrop-blur-md text-white rounded-full border border-black/10 dark:border-gold-amber/30 shadow-[0_10px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_35px_rgba(255,191,0,0.15)] group overflow-hidden cursor-pointer"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
        whileHover={{ 
          scale: 1.1,
          borderColor: 'rgba(255,191,0,0.6)',
          boxShadow: '0 12px 40px rgba(37,211,102,0.25)' 
        }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Subtle glowing ring pulse */}
        <span className="absolute inset-0 rounded-full border border-black/5 dark:border-gold-amber/20 scale-100 group-hover:animate-ping opacity-60"></span>
        
        {/* Hover background color morph */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366]/10 to-gold-amber/5 dark:from-[#25D366]/20 dark:to-gold-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* WhatsApp Icon */}
        <WhatsAppIcon className="w-7 h-7 relative z-10 text-transparent dark:text-transparent" />

        {/* Active online green dot */}
        <span className="absolute top-3 right-3 flex h-2 w-2 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]"></span>
        </span>
      </m.a>
    </div>
  );
}
