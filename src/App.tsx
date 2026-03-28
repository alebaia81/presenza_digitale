import React, { useState } from 'react';
import { 
  Check, X, Zap, Layout, TrendingUp, ArrowRight, MonitorSmartphone, Menu, 
  Sparkles, Globe, MessageCircle, PlayCircle, Send, MapPin, Mail, PhoneCall, User
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // WhatsApp number
  const WA_NUMBER = "393398156719"; 
  const waLink = `https://wa.me/${WA_NUMBER}?text=Ciao,%20vorrei%20informazioni%20sui%20vostri%20servizi%20di%20Web%20Design%20a%20Piacenza.`;

  return (
    <div className="min-h-screen bg-[#050505] font-sans text-zinc-100 selection:bg-indigo-500/30">
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] rounded-full flex items-center justify-center text-black shadow-[0_0_15px_rgba(191,149,63,0.3)]">
              <MonitorSmartphone className="w-5 h-5" />
            </div>
            <span className="text-2xl font-black tracking-tight font-serif" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Presenza Digitale</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servizi" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Servizi</a>
            <a href="#prezzi" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Prezzi</a>
            <a href="#contatti" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Contatti</a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-zinc-300 hover:text-[#25D366] transition-colors flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="#contatti" className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Inizia Ora <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <button 
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-20 left-0 w-full bg-[#050505]/95 backdrop-blur-2xl border-b border-white/5 py-8 px-6 flex flex-col gap-6 shadow-2xl"
          >
            <a href="#servizi" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-zinc-200 hover:text-white">Servizi</a>
            <a href="#prezzi" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-zinc-200 hover:text-white">Prezzi</a>
            <a href="#contatti" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-semibold text-zinc-200 hover:text-white">Contatti</a>
            <div className="h-px bg-white/10 w-full my-2"></div>
            <a href={waLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 px-6 py-4 rounded-full text-center font-bold hover:bg-[#25D366]/20 transition-colors flex justify-center items-center gap-2 text-lg">
              <MessageCircle className="w-5 h-5" /> Scrivici su WhatsApp
            </a>
            <a href="#contatti" onClick={() => setIsMobileMenuOpen(false)} className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-4 rounded-full text-center font-bold hover:opacity-90 transition-opacity text-lg shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              Inizia Ora
            </a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        {/* Background glow & Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Text Content */}
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

          {/* Hero Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(99,102,241,0.15)] group"
          >
            {/* Fallback pattern while loading */}
            <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center -z-10">
              <PlayCircle className="w-16 h-16 text-indigo-500/50 animate-pulse" />
            </div>
            
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
            
            {/* Mini Video - Using a beautiful generic tech/design sample for now */}
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2000"
            >
              {/* Note: This is a placeholder stock video. Update src when the client provides the actual video */}
              <source src="https://cdn.pixabay.com/video/2023/10/22/186115-877685601_large.mp4" type="video/mp4" />
            </video>

            {/* Video overlay badges */}
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

      {/* Specializzazione Ristorazione */}
      <section className="py-20 px-6 relative bg-[#050505] z-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 border relative overflow-hidden text-center shadow-[0_0_50px_rgba(191,149,63,0.1)]" style={{ borderColor: 'rgba(191,149,63,0.3)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a150c] to-[#050505] -z-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/10 blur-[100px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-serif tracking-wide" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Specialisti nella Ristorazione</h2>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
            Dal pesce fresco della bassa alle pizzerie storiche, sappiamo come far venire l'acquolina in bocca ai tuoi clienti prima ancora che si siedano a tavola. Design <strong className="text-white font-medium">Dark Luxury</strong> e prenotazioni istantanee su WhatsApp.
          </p>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="servizi" className="py-24 px-6 relative border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Perché sceglierci a Piacenza.</h2>
            <p className="text-xl text-zinc-400 max-w-2xl font-light">Non creiamo semplici siti vetrina, ma strumenti digitali studiati per superare i tuoi concorrenti e portare risultati concreti.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[340px]">
            {/* Bento Item 1 - Large */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-2 bg-gradient-to-br from-zinc-900/80 to-zinc-900/30 border border-white/10 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-lg"
            >
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

            {/* Bento Item 2 */}
            <div className="grid grid-rows-2 gap-6">
              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Velocità Estrema</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      L'80% degli utenti abbandona i siti lenti. Noi usiamo le tecnologie più veloci (React).
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 0.98 }}
                className="bg-zinc-900/50 border border-white/10 rounded-[2rem] p-6 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-amber-400 shrink-0">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">SEO Locale</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Ti facciamo trovare prima su Google per le ricerche legate a Piacenza e provincia.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bento Item 4 - Large */}
            <motion.div 
              whileHover={{ scale: 0.98 }}
              className="md:col-span-3 bg-zinc-900/50 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden group"
            >
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

      {/* Pricing */}
      <section id="prezzi" className="py-24 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0,transparent_100%)]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Investimento Garantito</h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light">Scegli la soluzione perfetta per la tua attività piacentina. Prezzi chiari, nessun costo nascosto.</p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 bg-zinc-900/80 backdrop-blur-md inline-flex p-1.5 rounded-full border border-white/10 shadow-xl">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-indigo-500 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                Mensile
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-indigo-500 text-white shadow-md' : 'text-zinc-400 hover:text-white'}`}
              >
                Annuale <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full ${isAnnual ? 'bg-white text-indigo-600' : 'bg-indigo-500/20 text-indigo-300'}`}>-10%</span>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Plan 1 */}
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-8 border border-white/5 flex flex-col hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Landing Page Basic</h3>
              <p className="text-zinc-400 text-sm mb-8 h-10 line-clamp-2">Perfetta per chi inizia. Paghi una sola volta, il sito è totalmente tuo.</p>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-white tracking-tighter">299€</span>
                  <span className="text-zinc-500 font-medium">/ una tantum</span>
                </div>
              </div>

              <div className="space-y-4 flex-1 mb-8">
                {[
                  'Sito One-Page professionale',
                  'Design Responsive',
                  'Ottimizzazione Base (Velocità)',
                  'Modulo Contatti',
                  'Tasto WhatsApp'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-zinc-300 shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-full font-bold transition-colors text-center block border border-white/10 hover:border-white/20">
                Seleziona Basic
              </a>
            </div>

            {/* Plan 2 - PRO */}
            <div className="bg-gradient-to-b from-indigo-600/20 to-zinc-900/80 rounded-[2.5rem] p-8 border border-indigo-500/50 relative flex flex-col transform lg:-translate-y-4 shadow-[0_0_50px_-15px_rgba(99,102,241,0.4)]">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-xl border border-white/10">
                Consigliato
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Landing + Gestione (Pro)</h3>
              <p className="text-indigo-200/80 text-sm mb-8 h-10 line-clamp-2">Creiamo la tua landing, ottimizziamo per la SEO Locale e la gestiamo per te.</p>
              
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-300 tracking-tighter line-through decoration-indigo-500/50">299€</span>
                  <span className="text-3xl font-extrabold text-white tracking-tighter ml-2">199€</span>
                  <span className="text-zinc-500 font-medium text-sm">/ setup iniziale</span>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-indigo-400 tracking-tighter">+ {isAnnual ? Math.round(39 * 0.9) : 39}€</span>
                  <span className="text-zinc-400 font-medium">/ mese</span>
                </div>
              </div>
              
              <div className="space-y-4 flex-1 mb-8">
                {[
                  'Tutto del piano Basic',
                  'Hosting + Dominio incluso',
                  'Ricerca Keyword Locali (Piacenza)',
                  'Aggiornamenti & 1 Modifica/mese',
                  'Supporto Tecnico Rapido'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0" />
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white text-black hover:bg-zinc-200 py-4 rounded-full font-bold transition-transform hover:scale-105 text-center block shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Inizia ora con Pro
              </a>
            </div>

            {/* Plan 3 - BUSINESS */}
            <div className="bg-zinc-900/30 rounded-[2.5rem] p-8 border border-white/5 flex flex-col hover:bg-zinc-900/60 hover:border-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-2">Sito Web Multi-Pagina</h3>
              <p className="text-zinc-400 text-sm mb-8 h-10 line-clamp-2">Per aziende che hanno bisogno di una presenza molto strutturata.</p>
              
              <div className="mb-2">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-white tracking-tighter">da 899€</span>
                  <span className="text-zinc-500 font-medium text-sm">/ una tantum</span>
                </div>
              </div>
              <div className="mb-8">
                <div className="flex items-baseline gap-1 text-sm text-zinc-500">
                  <span className="font-medium">+ Setup SEO Avanzato</span>
                </div>
              </div>

              <div className="space-y-4 flex-1 mb-8">
                {[
                  'Sito multipagina (fino a 10)',
                  'UI/UX Design Personalizzato',
                  'Integrazione CMS (Blog/Casi Studio)',
                  'SEO Avanzata per ogni pagina',
                  'Strategia Lead Generation'
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-zinc-300 shrink-0" />
                    <span className="text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>

              <a href={waLink} target="_blank" rel="noopener noreferrer" className="w-full bg-white/5 hover:bg-white/10 text-white py-4 rounded-full font-bold transition-colors text-center block border border-white/10 hover:border-white/20">
                Richiedi Consulenza
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section Modernized */}
      <section id="contatti" className="py-24 px-6 relative bg-zinc-950 border-t border-white/5">
        <div className="absolute inset-0 bg-indigo-500/5 mix-blend-color-burn" />
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
             <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">Facciamo decollare <br/><span className="text-indigo-400">il tuo business.</span></h2>
             <p className="text-xl text-zinc-400 font-light">
               Non aspettare che i tuoi concorrenti prendano tutti i clienti della provincia. Contattaci oggi per una consulenza gratuita.
             </p>
             
             <div className="space-y-6 pt-6 text-lg">
                <div className="flex items-center gap-4 text-zinc-300">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span>Operiamo in tutta la Provincia di Piacenza</span>
                </div>
             </div>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Inviaci un messaggio</h3>
            {/* WhatsApp Direct Form */}
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

              <button type="submit" className="w-full bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black py-4 rounded-xl font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4 shadow-[0_0_30px_rgba(191,149,63,0.3)] hover:shadow-[0_0_50px_rgba(191,149,63,0.6)] animate-[pulse_3s_ease-in-out_infinite] hover:animate-none">
                Invia Messaggio <Send className="w-4 h-4" />
              </button>
              <p className="text-zinc-500 text-sm text-center mt-3">
                Il messaggio verrà inviato istantaneamente tramite WhatsApp.
              </p>
            </form>
          </div>

        </div>
      </section>

      {/* Footer */}
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
            <span className="text-sm">Web Agency partner per Piacenza e Provincia.</span>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm">
            <span>&copy; {new Date().getFullYear()} Presenza Digitale. Tutti i diritti riservati.<br/><span className="mt-1 inline-block text-zinc-400">Made with ❤️ in Piacenza.</span></span>
            <div className="flex gap-4 justify-center">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Termini</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-6 transition-all duration-300 flex items-center justify-center group"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-black px-3 py-1.5 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-xl">
          Rispondiamo subito!
        </span>
      </a>

    </div>
  );
}
