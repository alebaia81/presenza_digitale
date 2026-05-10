import React from 'react';
import { m } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Pizzeria Artigianale",
    subtitle: "Pizza & Cucina Italiana",
    description: "Design moderno per una delle location più esclusive del territorio. Focus sull'eleganza visiva e sulla facilità di prenotazione.",
    image: "/images/mockup-cascinetto.webp"
  },
  {
    title: "Specialità di Mare",
    subtitle: "Sapori di Mare & Tradizione",
    description: "Un'identità digitale dedicata alla freschezza e alla qualità del pescato. Design elegante per una navigazione fluida e invitante.",
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
  },
  {
    title: "Centro Benessere",
    subtitle: "Estetica & Relax",
    description: "Un'identità digitale raffinata e rilassante, studiata per attrarre nuova clientela. Design pulito e percorsi di navigazione ottimizzati per incentivare i contatti.",
    image: "/images/mockup-soave.webp"
  }
];

export default function ProjectsPage() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 px-6 bg-zinc-950 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">I nostri Progetti.</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto font-light">Una selezione di eccellenze che hanno scelto di evolversi digitalmente con noi.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <m.div 
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
                  width="800"
                  height="500"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[0.2] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>
              <div className="px-2">
                <p className="text-gold-amber text-sm font-bold uppercase tracking-wider mb-2">{project.subtitle}</p>
                <h3 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
                  {project.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed max-w-md font-light">{project.description}</p>
              </div>
            </m.div>
          ))}
        </div>

        <div className="mt-32 p-16 rounded-[4rem] bg-zinc-950 border border-white/5 text-center relative overflow-hidden group">
          {/* Subtle Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-amber/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
              Il tuo prossimo grande <br /> <span className="text-gold-amber">capitolo inizia qui.</span>
            </h2>
            <p className="text-zinc-300 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Non accettiamo ogni progetto. Cerchiamo partner pronti a <br className="hidden md:block" /> 
              distinguersi e a dominare il proprio mercato locale.
            </p>
            <a 
              href="/#contatti" 
              className="inline-flex items-center gap-4 bg-gold-amber text-black px-12 py-6 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_0_60px_rgba(212,175,55,0.4)] group/btn"
            >
              Inizia il tuo Progetto 
              <ArrowRight className="w-6 h-6 transform group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </m.div>
  );
}
