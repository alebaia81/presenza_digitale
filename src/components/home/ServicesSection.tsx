import React from 'react';
import { motion } from 'motion/react';
import { Layout, Zap, Globe, TrendingUp, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section id="servizi" className="py-24 px-6 relative border-t border-white/5 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Perché sceglierci a Piacenza.</h2>
          <p className="text-xl text-zinc-400 max-w-2xl font-light">Non creiamo semplici siti vetrina, ma strumenti digitali studiati per superare i tuoi concorrenti e portare risultati concreti.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[340px]">
          <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-amber to-amber-600 rounded-2xl flex items-center justify-center text-black shadow-lg">
                <Layout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Design su Misura & UX</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-lg">
                  Dimentica i template copiati e incollati. Progettiamo layout unici, belli da vedere e facilissimi da usare, per massimizzare il tempo di permanenza dei tuoi clienti sul sito.
                </p>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-rows-2 gap-6">
            <motion.div whileHover={{ scale: 0.98 }} className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 shrink-0 will-change-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Velocità Estrema</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">L'80% degli utenti abbandona i siti lenti. Noi usiamo le tecnologie più veloci (React).</p>
                </div>
              </div>
            </motion.div>
            <motion.div whileHover={{ scale: 0.98 }} className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 shrink-0 will-change-transform">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">SEO Locale</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">Ti facciamo trovare prima su Google per le ricerche legate a Piacenza e provincia.</p>
                </div>
              </div>
            </motion.div>
          </div>
          <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-3 bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-l from-gold-amber/5 to-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left will-change-transform">
              <div className="flex-1">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-gold-amber mb-6 mx-auto md:mx-0">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Conversioni Garantite</h3>
                <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
                  Applichiamo i principi psicologici del web design per spingere l'utente a contattarti. Non puntiamo ai clic, ma ai contatti reali (Lead Generation).
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                 <a href="#contatti" className="w-full md:w-auto bg-white text-black px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Migliora le tue vendite <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
