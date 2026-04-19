import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Ristorante Gourmet",
    subtitle: "Ristorazione d'Alta Classe",
    description: "Design moderno per una delle location più esclusive del territorio. Focus sull'eleganza visiva e sulla facilità di prenotazione.",
    image: "/images/mockup-cascinetto.webp"
  },
  {
    title: "Centro Sportivo",
    subtitle: "Benessere & Tempo Libero",
    description: "Un'interfaccia vivace e dinamica per riflettere energia e relax. Ottimizzata per la massima velocità di navigazione su mobile.",
    image: "/images/mockup-delfino.webp"
  },
  {
    title: "Artigiano Specializzato",
    subtitle: "Eccellenza nelle Lavorazioni",
    description: "Solidità e professionalità comunicate attraverso un design pulito ed essenziale. Strategia SEO mirata alla visibilità locale.",
    image: "/images/mockup-fabbro.webp"
  },
  {
    title: "Luxury Wedding",
    subtitle: "Pianificazione Eventi",
    description: "Un'estetica raffinata per catturare l'attenzione dei clienti più esigenti. Ottimizzazione delle conversioni tramite canali diretti.",
    image: "/images/mockup-matrimonio.webp"
  },
  {
    title: "Gastronomia d'Eccellenza",
    subtitle: "Tradizione & Sapori",
    description: "Un'identità digitale calda e accogliente che valorizza la tradizione e la storia. Ottimizzazione delle prenotazioni rapide.",
    image: "/images/mockup-ennio.webp"
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
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto font-light">Una selezione di eccellenze che hanno scelto di evolversi digitalmente con noi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[16/10] bg-zinc-900 rounded-[2rem] overflow-hidden mb-6 border border-white/5 transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="px-2">
                <p className="text-indigo-400 text-sm font-bold uppercase tracking-wider mb-2">{project.subtitle}</p>
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed max-w-md font-light">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 rounded-[3rem] bg-gradient-to-r from-zinc-900 to-black border border-white/5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Vuoi essere il nostro prossimo successo?</h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">Siamo sempre alla ricerca di nuove sfide e di eccellenze da valorizzare.</p>
          <a href="/#contatti" className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full font-bold hover:scale-105 transition-transform">
            Inizia il tuo Progetto <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
