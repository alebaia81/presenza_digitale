import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, MessageCircle, PlayCircle, MapPin, 
  Layout, Zap, Globe, TrendingUp, Check, User, Mail, Send
} from 'lucide-react';
import { waLink, waLinkStarter, waLinkProfessional, waLinkBusiness } from '../constants';

export default function HomePage() {
  const inviaWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mioNumero = "393398156719"; 
    const nome = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const messaggioCorpo = (document.getElementById('message') as HTMLTextAreaElement).value;

    const testo = `*Nuovo Contatto da Presenza Digitale*%0A%0A` +
                  `👤 *Nome:* ${nome}%0A` +
                  `📧 *Email:* ${email}%0A` +
                  `💬 *Messaggio:* ${messaggioCorpo}`;

    const url = `https://wa.me/${mioNumero}?text=${testo}`;
    window.open(url, '_blank')?.focus();
    (document.getElementById('contact-form') as HTMLFormElement).reset();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 text-sm font-semibold shadow-lg backdrop-blur-md"
            >
              <MapPin className="w-4 h-4 text-indigo-400" />
              <span>Web Agency a Piacenza e Provincia</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Trasformiamo la tua attività locale in un'esperienza digitale <br />
              <span className="font-serif italic" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>di lusso.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-light max-w-xl"
            >
              Non creiamo semplici siti web. Progettiamo strumenti di vendita rapidi, eleganti e ottimizzati per la provincia di Piacenza. Più prenotazioni, zero canoni mensili, 100% identità.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 pt-4"
            >
              <a href="#contatti" className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Richiedi un Preventivo <ArrowRight className="w-5 h-5" />
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-3">
                <MessageCircle className="w-6 h-6" /> WhatsApp
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.15)] group"
          >
            <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center -z-10">
              <PlayCircle className="w-16 h-16 text-indigo-500/50 animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out" poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000">
              <source src="https://cdn.pixabay.com/video/2023/10/22/186115-877685601_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute bottom-8 left-8 right-8 z-20 flex justify-between items-end">
              <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold text-sm">Design Funzionale</span>
                </div>
                <p className="text-zinc-400 text-xs">Fatto su misura per te.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specializzazione Section */}
      <section className="py-20 px-6 relative bg-[#050505] z-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 border relative overflow-hidden text-center shadow-[0_0_50px_rgba(191,149,63,0.15)] group hover:shadow-[0_0_80px_rgba(191,149,63,0.25)] transition-all duration-700" style={{ borderColor: 'rgba(191,149,63,0.4)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a150c] via-[#050505] to-[#1a150c] -z-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/15 blur-[100px] pointer-events-none group-hover:bg-[#bf953f]/25 transition-colors duration-700" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-serif tracking-wide" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sarti del Digital per le Eccellenze Locali</h2>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed font-light">
            Dall'artigiano di fiducia al ristorante storico, sappiamo come far brillare il tuo business a Piacenza. Progettiamo esperienze digitali <strong className="text-white font-medium">Dark Luxury</strong> e sistemi di vendita su WhatsApp studiati per il mercato locale.
          </p>
        </div>
      </section>

      {/* Servizi Section */}
      <section id="servizi" className="py-24 px-6 relative border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Perché sceglierci a Piacenza.</h2>
            <p className="text-xl text-zinc-400 max-w-2xl font-light">Non creiamo semplici siti vetrina, ma strumenti digitali studiati per superare i tuoi concorrenti e portare risultati concreti.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[340px]">
            <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
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
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
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
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
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
              <div className="absolute inset-0 bg-gradient-to-l from-fuchsia-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-fuchsia-400 mb-6 mx-auto md:mx-0">
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

      {/* Prezzi Section */}
      <section id="prezzi" className="py-24 px-6 relative bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Le Nostre Soluzioni Premium</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light">Scegli la soluzione perfetta per la tua attività piacentina. Prezzi chiari, nessun costo nascosto.</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch mt-12">
            {/* Starter Card */}
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-8 border border-[#d4af37]/20 hover:border-[#d4af37]/40 flex flex-col hover:bg-zinc-900/60 transition-all duration-300 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Starter</h3>
              <p className="text-zinc-400 text-sm mb-8 h-10 line-clamp-2">Perfetto per una presenza online professionale e dinamica.</p>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white tracking-tighter">€499</span>
                  <span className="text-[#d4af37]/70 font-medium text-sm">/ una tantum</span>
                </div>
              </div>
              <div className="space-y-4 flex-1 mb-8">
                {[
                  'Sito web multi-pagina (fino a 5 pagine)',
                  'Design responsive (mobile, tablet, desktop)',
                  'Sviluppo assistito da AI per consegna rapida',
                  'Configurazione SEO base (meta tag, sitemap)',
                  'Integrazione modulo di contatto',
                  'Fino a 5 sezioni di contenuto'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
              <a href={waLinkStarter} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-[#d4af37]/10 text-white py-4 rounded-full font-bold transition-colors text-center block border border-white/10 hover:border-[#d4af37]/30">Inizia il Progetto</a>
            </div>

            {/* Professional Card */}
            <div className="bg-gradient-to-b from-[#1a150c] to-black rounded-[2.5rem] p-8 border border-[#d4af37] relative flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_rgba(212,175,55,0.15)] hover:shadow-[0_0_70px_rgba(212,175,55,0.3)] transition-shadow duration-500">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black px-6 py-1.5 rounded-full text-xs font-bold tracking-widest shadow-xl border border-[#d4af37]/50 whitespace-nowrap">SCELTA CONSIGLIATA</div>
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">Professional</h3>
              <p className="text-[#d4af37] text-sm mb-8 h-10 line-clamp-2">La soluzione completa per una crescita costante e professionale.</p>
              <div className="mb-4">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-xl font-bold text-zinc-400 tracking-tighter">€199</span>
                  <span className="text-zinc-500 font-medium text-xs">/ setup iniziale</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-6xl font-extrabold tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">€49</span>
                  <span className="text-[#d4af37] font-bold">/ mese</span>
                </div>
                <p className="text-xs text-[#d4af37] font-bold mt-2 uppercase tracking-wide">6 mesi + 1 mese OMAGGIO</p>
              </div>
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs text-zinc-400 mb-1 uppercase tracking-widest font-bold">Versione Una Tantum</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">€799</span>
                  <span className="text-zinc-500 text-[10px] font-medium">(escl. hosting/revisioni)</span>
                </div>
              </div>
              <div className="space-y-4 flex-1 mb-8">
                {[
                  'Sito web multi-pagina (fino a 8 pagine)',
                  'Hosting + Dominio incluso*',
                  'Design responsive (mobile, tablet, desktop)',
                  'Sviluppo assistito da AI per consegna rapida',
                  'Configurazione SEO avanzata (Schema/OG)',
                  'Modulo di contatto WhatsApp',
                  'Fino a 8 sezioni per pagina',
                  '2 cicli di revisioni al mese*'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span className="text-white text-sm font-medium">{feature}</span>
                  </div>
                ))}
                <p className="text-[10px] text-zinc-500 italic mt-2">*Incluso solo nella versione in abbonamento</p>
              </div>
              <a href={waLinkProfessional} target="_blank" rel="noopener noreferrer" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black py-4 rounded-full font-extrabold transition-transform hover:scale-105 text-center flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(191,149,63,0.3)]">Inizia il Progetto <ArrowRight className="w-4 h-4" /></a>
            </div>

            {/* Business Card */}
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-8 border border-[#d4af37]/20 flex flex-col hover:bg-zinc-900/60 hover:border-[#d4af37]/40 transition-all duration-300 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Business</h3>
              <p className="text-zinc-400 text-sm mb-8 h-10 line-clamp-2">La soluzione definitiva per aziende consolidate che puntano all'eccellenza.</p>
              <div className="mb-4">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-xl font-bold text-zinc-400 tracking-tighter">€399</span>
                  <span className="text-zinc-500 font-medium text-xs">/ setup iniziale</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-white tracking-tighter">€79</span>
                  <span className="text-[#d4af37]/70 font-medium">/ mese</span>
                </div>
              </div>
              <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-xs text-zinc-400 mb-1 uppercase tracking-widest font-bold">Versione Una Tantum</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-white">€1249</span>
                  <span className="text-zinc-500 text-[10px] font-medium">(escl. manutenzione)</span>
                </div>
              </div>
              <div className="space-y-4 flex-1 mb-8">
                {[
                  'Sito web multi-pagina (fino a 10 pagine)',
                  'Sviluppo AI & Design Responsive',
                  'SEO Completa (Audit & OG)',
                  'Modulo Contatto & Notifiche Email',
                  'Sezione Blog/News con categorie',
                  'Supporto Multi-lingua (EN/IT)',
                  'Fino a 12 sezioni per pagina',
                  '3 cicli di revisioni al mese*',
                  'E-commerce & Prenotazioni'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#d4af37] shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </div>
                ))}
                <p className="text-[10px] text-zinc-500 italic mt-2">*Revisioni incluse nella versione mensile</p>
              </div>
              <a href={waLinkBusiness} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-[#d4af37]/10 text-white py-4 rounded-full font-bold transition-colors text-center block border border-white/10 hover:border-[#d4af37]/30">Inizia il Progetto</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-24 px-6 relative bg-zinc-950 border-t border-white/5">
        <div className="absolute inset-0 bg-indigo-500/5 mix-blend-color-burn" />
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
             <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Facciamo decollare <br/><span className="text-indigo-400">il tuo business.</span></h2>
             <p className="text-xl text-zinc-400 font-light">Non aspettare che i tuoi concorrenti prendano tutti i clienti della provincia. Contattaci oggi per una consulenza gratuita.</p>
          </div>
          <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Inviaci un messaggio</h3>
            <form id="contact-form" onSubmit={inviaWhatsApp} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input type="text" id="name" name="name" required className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="Mario Rossi" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input type="email" id="email" name="email" required className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" placeholder="mario@azienda.it" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Raccontaci il tuo progetto</label>
                <textarea id="message" name="message" rows={4} required className="w-full bg-zinc-950/50 border border-white/10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none" placeholder="Voglio rifare il sito per la mia azienda a Piacenza..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4 shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:shadow-[0_0_50px_rgba(191,149,63,0.6)]">
                Invia Messaggio <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
