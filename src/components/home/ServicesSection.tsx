import { m } from 'motion/react';
import { Layout, Zap, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  city?: string;
  serviceLink?: string;
}

export default function ServicesSection({ 
  city = "Piacenza", 
  serviceLink = "/servizi/siti-web-piacenza" 
}: ServicesSectionProps) {
  return (
    <section id="servizi" className="py-24 px-6 relative border-t border-border-primary bg-bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight font-serif">Perché sceglierci a {city}.</h2>
          <p className="text-xl text-text-secondary max-w-2xl font-light font-sans">Non creiamo semplici siti vetrina, ma strumenti digitali studiati per superare i tuoi concorrenti e portare risultati concreti.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[340px]">
          <m.div whileHover={{ scale: 0.98 }} className="md:col-span-2 bg-gradient-to-br from-bg-card to-bg-secondary/40 border border-border-primary rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-lg flex flex-col justify-between transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 h-full flex flex-col justify-between will-change-transform">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-amber to-amber-600 rounded-2xl flex items-center justify-center text-black shadow-lg">
                <Layout className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-text-primary mb-4 font-serif">Design su Misura & UX</h3>
                <p className="text-text-secondary text-lg leading-relaxed max-w-lg font-light mb-6">
                  Dimentica i template copiati e incollati. Progettiamo layout unici, belli da vedere e facilissimi da usare, per massimizzare il tempo di permanenza dei tuoi clienti sul sito.
                </p>
                <Link to={serviceLink} className="inline-flex items-center gap-2 text-gold-amber font-bold hover:gap-3 transition-all" aria-label="Scopri il servizio di realizzazione siti web">
                  Scopri di più <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </m.div>
          <div className="grid grid-rows-2 gap-6">
            <m.div whileHover={{ scale: 0.98 }} className="bg-bg-card border border-border-primary rounded-[2rem] p-6 relative overflow-hidden group flex flex-col justify-center transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-xl flex items-center justify-center text-emerald-500 dark:text-emerald-455 shrink-0 will-change-transform shadow-inner">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 font-serif">Velocità Estrema</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light font-sans mb-3">L'80% degli utenti abbandona i siti lenti. Noi usiamo le tecnologie più veloci (React/Vite).</p>
                  <Link to={serviceLink} className="inline-flex items-center gap-1.5 text-gold-amber text-sm font-bold hover:gap-2 transition-all">
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </m.div>
            <m.div whileHover={{ scale: 0.98 }} className="bg-bg-card border border-border-primary rounded-[2rem] p-6 relative overflow-hidden group flex flex-col justify-center transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 bg-black/5 dark:bg-white/10 rounded-xl flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0 will-change-transform shadow-inner">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-2 font-serif">SEO Locale</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light font-sans mb-3">Ti facciamo trovare prima su Google per le ricerche legate a {city} e provincia.</p>
                  <Link to={serviceLink} className="inline-flex items-center gap-1.5 text-gold-amber text-sm font-bold hover:gap-2 transition-all">
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </m.div>
          </div>
          <m.div whileHover={{ scale: 0.98 }} className="md:col-span-3 bg-bg-card border border-border-primary rounded-[2rem] p-8 md:p-12 relative overflow-hidden group transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-l from-gold-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left will-change-transform">
              <div className="flex-1">
                <div className="w-16 h-16 bg-black/5 dark:bg-white/10 rounded-2xl flex items-center justify-center text-gold-amber mb-6 mx-auto md:mx-0 shadow-inner">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-text-primary mb-4 font-serif">Conversioni Garantite</h3>
                <p className="text-text-secondary text-lg leading-relaxed max-w-2xl font-light font-sans">
                  Applichiamo i principi psicologici del web design per spingere l'utente a contattarti. Non puntiamo ai clic, ma ai contatti reali (Lead Generation).
                </p>
              </div>
              <div className="shrink-0 w-full md:w-auto">
                 <a href="#contatti" className="w-full md:w-auto bg-text-primary text-bg-primary px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer">
                  Migliora le tue vendite <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
