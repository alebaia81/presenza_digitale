import React from 'react';
import { MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full flex items-center justify-center text-black">
              <MonitorSmartphone className="w-4 h-4" />
            </div>
            <span className="text-xl font-black tracking-tight font-serif" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Presenza Digitale</span>
          </div>
          <span className="hidden md:inline text-zinc-700">|</span>
          <span className="text-sm">Siti web professionali per Piacenza e Provincia.</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-4 text-sm">
          <div className="flex flex-wrap gap-4 justify-center md:justify-end">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link to="/termini" className="hover:text-white transition-colors">Termini</Link>
          </div>
          <span className="text-zinc-600">&copy; {new Date().getFullYear()} Presenza Digitale — Piacenza</span>
        </div>
      </div>
    </footer>
  );
}
