import React from 'react';
import { m, useReducedMotion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

export default function AccessibilityFeature() {
  const shouldReduceMotion = useReducedMotion();

  const checklistItems = [
    {
      title: "Più Clienti",
      description: "Nessun utente abbandona il sito per problemi di leggibilità o navigazione."
    },
    {
      title: "Miglior Posizionamento SEO",
      description: "Google premia i siti strutturati secondo gli standard di usabilità ufficiali."
    },
    {
      title: "100% A Norma di Legge",
      description: "Piena conformità con le direttive europee ed AgID sulla leggibilità digitale, senza dover pagare extra."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' as const }
    }
  };

  return (
    <section 
      aria-labelledby="accessibility-heading" 
      className="py-24 px-6 relative border-t border-border-primary bg-bg-primary transition-colors duration-300 overflow-hidden"
    >
      {/* Elemento sfocato decorativo di sfondo ad altissimo contrasto */}
      <div 
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gold-amber/5 rounded-full blur-[120px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Colonna Sinistra: Testo, Badge e Checklist */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 text-left"
        >
          {/* Pill di Stato / Badge interattivo */}
          <m.div 
            variants={itemVariants}
            className="inline-flex"
          >
            <div
              role="status"
              tabIndex={0}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-sm font-medium transition-all duration-300 hover:bg-emerald-500/20 focus-visible:outline-3 cursor-pointer"
              title="Standard di usabilità certificato secondo le direttive europee ed AgID."
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" aria-hidden="true"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span>Standard di Usabilità Certificato</span>
            </div>
          </m.div>

          {/* Titolo Semantico */}
          <m.h2 
            id="accessibility-heading"
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-[#2d2a26] dark:text-text-primary leading-[1.15] font-serif tracking-tight"
          >
            Il tuo sito rende difficile l'acquisto <br />
            al 20% dei clienti. <span className="text-gold-gradient">E Google lo penalizza.</span>
          </m.h2>

          {/* Immagine di Supporto Mobile (visibile solo su mobile) */}
          <m.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="block lg:hidden relative rounded-3xl overflow-hidden border border-border-primary/20 dark:border-border-primary bg-bg-card p-3 shadow-2xl transition-shadow duration-500 group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-gold-amber/5 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
            <img
              src="/images/accessibilita.avif"
              alt="Mockup dell'interfaccia di Presenza Digitale con sovrapposti indicatori tecnici di focus e punteggio Lighthouse 100% in accessibilità"
              className="w-full h-auto object-cover rounded-2xl shadow-inner transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              loading="lazy"
            />
          </m.div>

          {/* Descrizione Principale */}
          <m.p 
            variants={itemVariants}
            className="text-lg text-text-secondary leading-relaxed font-light font-sans max-w-xl"
          >
            Se un sito ha testi illeggibili, bottoni piccoli o contrasti sbagliati, oltre 4 milioni di persone in Italia lo abbandonano subito per andare dalla concorrenza. Noi progettiamo la tua presenza digitale per essere perfetta, fluida e accessibile da qualsiasi dispositivo e da chiunque — facendoti guadagnare più clienti e una posizione più alta nei risultati di ricerca su Google.
          </m.p>

          {/* Checklist Semantica */}
          <ul 
            className="space-y-4 pt-2"
            aria-label="Punti chiave del nostro sviluppo accessibile"
          >
            {checklistItems.map((item, index) => (
              <m.li
                key={index}
                variants={itemVariants}
                className="flex items-start gap-3.5 text-text-secondary font-light font-sans text-base md:text-lg"
              >
                <span 
                  className="mt-1 flex items-center justify-center w-5 h-5 rounded-full border border-gold-amber/30 text-gold-amber shrink-0" 
                  aria-hidden="true"
                >
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>
                  <strong className="font-semibold text-text-primary">{item.title}</strong> — {item.description}
                </span>
              </m.li>
            ))}
          </ul>

          {/* Link di Approfondimento con Focus Ring Visibile */}
          <m.div 
            variants={itemVariants}
            className="pt-4"
          >
            <a
              href="#contatti"
              className="inline-flex items-center gap-2 text-gold-amber hover:text-amber-700 dark:hover:text-amber-400 font-bold text-lg transition-colors group cursor-pointer focus-visible:outline-3 focus-visible:outline-offset-3"
            >
              Richiedi un'analisi di usabilità del tuo sito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </m.div>
        </m.div>

        {/* Colonna Destra: Immagine di Supporto Accessibile (visibile solo su desktop) */}
        <m.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="hidden lg:block relative rounded-3xl overflow-hidden border border-border-primary/20 dark:border-border-primary bg-bg-card p-3 shadow-2xl hover:shadow-[0_24px_50px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_24px_50px_rgba(255,255,255,0.02)] transition-shadow duration-500 group"
        >
          {/* Overlay di rifrazione luce vetrosa al passaggio del mouse */}
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-amber/5 via-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />
          
          <img
            src="/images/accessibilita.avif"
            alt="Mockup dell'interfaccia di Presenza Digitale con sovrapposti indicatori tecnici di focus e punteggio Lighthouse 100% in accessibilità"
            className="w-full h-auto object-cover rounded-2xl shadow-inner transform group-hover:scale-[1.01] transition-transform duration-700 ease-out"
            loading="lazy"
          />
        </m.div>

      </div>
    </section>
  );
}
