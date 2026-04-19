import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Cascinetto",
    subtitle: "Ristorazione & Catering",
    description: "Design moderno per una delle location più esclusive di Piacenza. Focus su lusso e facilità di prenotazione.",
    image: "/images/mockup-cascinetto.webp"
  },
  {
    title: "Il Delfino",
    subtitle: "Piscina & Tempo Libero",
    description: "Un'interfaccia vivace e fresca per comunicare relax ed energia. Ottimizzato per la velocità su mobile.",
    image: "/images/mockup-delfino.webp"
  },
  {
    title: "Fabbro Armelloni",
    subtitle: "Artigianato d'Eccellenza",
    description: "Solidità e professionalità trasmesse attraverso un design pulito. Strategia SEO per lead locali.",
    image: "/images/mockup-fabbro.webp"
  },
  {
    title: "Matrimonio a Piacenza",
    subtitle: "Servizi per Matrimoni",
    description: "Eleganza e romanticismo per catturare l'attenzione delle coppie. Alta conversione tramite WhatsApp.",
    image: "/images/mockup-matrimonio.webp"
  },
  {
    title: "Trattoria Da Ennio",
    subtitle: "Tradizione & Sapori",
    description: "Un'identità digitale calda e tradizionale. Ottimizzazione delle prenotazioni e valorizzazione del territorio.",
    image: "/images/mockup-ennio.png"
  }
];

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 bg-zinc-950 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">I nostri Progetti.</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">Una selezione di eccellenze piacentine che hanno scelto di evolversi digitalmente con noi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] bg-zinc-900 rounded-[2rem] overflow-hidden mb-6 border border-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute top-6 right-6 p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 text-white">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
              <div className="px-2">
                <p className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">{project.subtitle}</p>
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  {project.title}
                  <ArrowRight className="w-6 h-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/50" />
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-md font-light">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-black border border-white/5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vuoi essere il nostro prossimo successo?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">Siamo sempre alla ricerca di nuove sfide e di eccellenze da valorizzare nel territorio piacentino.</p>
          <a href="/#contatti" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform">
            Inizia il tuo Progetto <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
