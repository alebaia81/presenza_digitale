import React from 'react';
import { MonitorSmartphone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg-primary text-text-secondary py-12 border-t border-border-primary transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/assets/images/logo-optimized.png" alt="Presenza Digitale - Logo" width="64" height="64" loading="lazy" className="w-16 h-16 object-contain brightness-[0.4] dark:brightness-100 contrast-[1.2] dark:contrast-100" />
            <span className="text-xl font-black tracking-tight font-serif pb-1 pr-2 text-gold-gradient">Presenza Digitale</span>
          </div>
          <span className="hidden md:inline text-border-primary">|</span>
          <span className="text-sm">Siti web professionali per Piacenza e Provincia.</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link to="/privacy" className="underline hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="underline hover:text-text-primary transition-colors">Cookie Policy</Link>
            <Link to="/termini" className="underline hover:text-text-primary transition-colors">Termini e Condizioni</Link>
          </div>
          <div className="flex gap-4 mb-2 md:mb-0 justify-center md:justify-end">
            <a href="https://www.facebook.com/share/19zzXVXjks/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" aria-label="Seguici su Facebook">
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors" aria-label="Seguici su Instagram">
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
          <span className="text-[10px] md:text-xs text-center md:text-right leading-relaxed">
            &copy; {new Date().getFullYear()} <strong>Alessandro Baiamonte Piacenza</strong> — Tutti i diritti riservati. <br />
            Sito a scopo illustrativo delle competenze professionali e portfolio di Alessandro Baiamonte. <br />
            Attività prestata in conformità alle norme vigenti per le collaborazioni occasionali.
          </span>
        </div>
      </div>
    </footer>
  );
}
