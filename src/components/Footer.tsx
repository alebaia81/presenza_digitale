import React from 'react';
import { MonitorSmartphone, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="/pd-4.png" alt="Presenza Digitale - Logo Footer" width="64" height="64" loading="lazy" className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(191,149,63,0.2)]" />
            <span className="text-xl font-black tracking-tight font-serif pb-1 pr-2" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Presenza Digitale</span>
          </div>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span className="text-sm">Siti web professionali per Piacenza e Provincia.</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/termini" className="hover:text-white transition-colors">Termini e Condizioni</Link>
          </div>
          <div className="flex gap-4 mb-2 md:mb-0 justify-center md:justify-end text-zinc-400">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#bf953f] transition-colors" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#bf953f] transition-colors" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <span className="text-zinc-600">&copy; {new Date().getFullYear()} Presenza Digitale — Piacenza</span>
        </div>
      </div>
    </footer>
  );
}
