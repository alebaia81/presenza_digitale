import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-bg-primary text-text-secondary py-12 border-t border-border-primary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-8 text-center md:text-left">

        {/* Brand + Legal Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex items-center gap-3">
            <img
              src="/assets/images/logo-optimized.png"
              alt="Presenza Digitale - Logo"
              width="64"
              height="64"
              loading="lazy"
              className="w-16 h-16 object-contain logo-filter"
            />
            <span className="text-xl font-black tracking-tight font-serif pb-1 pr-2 text-gold-gradient">
              Presenza Digitale
            </span>
          </div>

          {/* <address> semantico — WCAG 1.3.1 */}
          <address className="not-italic text-sm text-text-secondary flex flex-col gap-1 md:border-l md:border-border-primary md:pl-6">
            <span className="font-semibold text-text-primary">Alessandro Baiamonte</span>
            <span>Sviluppo Web &amp; SEO Locale — Piacenza e Provincia</span>
            <span className="text-xs">
              Attività prestata in conformità alle norme vigenti per le collaborazioni occasionali.
            </span>
          </address>
        </div>

        {/* Right column: links + social + compliance */}
        <div className="flex flex-col items-center md:items-start gap-4 text-sm">
          <p className="font-semibold text-text-primary text-xs uppercase tracking-widest">Servizi</p>
          <nav aria-label="Link servizi" className="flex flex-col gap-2">
            <Link to="/servizi/siti-web-piacenza" className="hover:text-text-primary transition-colors">Realizzazione Siti Web Piacenza</Link>
            <Link to="/progetti" className="hover:text-text-primary transition-colors">Portfolio Progetti</Link>
            <Link to="/blog" className="hover:text-text-primary transition-colors">Blog</Link>
          </nav>
        </div>

        {/* Right column: legal links + social + compliance */}
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">

          {/* Legal nav links */}
          <nav aria-label="Link legali" className="flex flex-wrap gap-4 justify-center md:justify-end items-center">
            <Link to="/privacy" className="underline hover:text-text-primary transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="underline hover:text-text-primary transition-colors">Cookie Policy</Link>
            <Link to="/termini" className="underline hover:text-text-primary transition-colors">Termini e Condizioni</Link>
            <button
              onClick={() => window.dispatchEvent(new Event('show-cookie-banner'))}
              className="underline hover:text-text-primary transition-colors cursor-pointer"
            >
              Preferenze Cookie
            </button>
          </nav>

          {/* Social icons */}
          <div className="flex gap-4 justify-center md:justify-end">
            <a
              href="https://www.facebook.com/share/19zzXVXjks/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
              aria-label="Seguici su Facebook"
            >
              <Facebook className="w-5 h-5" aria-hidden="true" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text-primary transition-colors"
              aria-label="Seguici su Instagram"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          {/* WCAG 2.2 AA compliance declaration */}
          <p className="text-[10px] md:text-xs text-center md:text-right leading-relaxed max-w-xs">
            Sito progettato in conformità alle linee guida{' '}
            <a
              href="https://www.w3.org/Translations/WCAG22-it/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-primary transition-colors"
            >
              WCAG 2.2 Livello AA
            </a>
            .{' '}
            &copy; {new Date().getFullYear()} <strong>Presenza Digitale</strong> — Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
}
