import React, { Suspense, useState, useEffect, useRef } from 'react';
import { m } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, PlayCircle, MapPin
} from 'lucide-react';
import { waLink } from '../constants';
import WhatsAppIcon from '../components/WhatsAppIcon';

// Lazy loaded components (ContactSection is sync — it's the conversion goal, must always be in DOM)
const ServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const TrustSection = React.lazy(() => import('../components/home/TrustSection'));
import ContactSection from '../components/home/ContactSection';

// Helper for true lazy loading on scroll
const LazySection = ({ children, height = "400px" }: { children: React.ReactNode, height?: string }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading 200px before it enters the viewport
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} style={{ minHeight: inView ? "auto" : height }}>{inView ? children : null}</div>;
};

export default function HomePage() {
  const navigate = useNavigate();

  const scrollToContact = () => {
    // ContactSection is always in the DOM (not lazy) — direct scroll
    document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' });
  };

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
    <div>
      {/* Hero Section - CRITICAL (Sync Load) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/40 opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-amber/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-left space-y-8 hero-content">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 text-sm font-semibold shadow-lg backdrop-blur-md hero-badge"
            >
              <MapPin className="w-4 h-4 text-gold-amber" />
              <span>Consulenza Digitale a Piacenza e Provincia</span>
            </div>
            
            <h1 className="sr-only">Creazione Siti Web Piacenza</h1>
            {/* LCP ELEMENT — immediately visible, no opacity:0 */}
            <div
              aria-hidden="true"
              className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] hero-title"
            >
              Non ti serve solo un sito. <br />
              Ti serve <span className="font-serif italic pb-1 pr-4 inline-block" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>presenza.</span>
            </div>
            
            <p
              className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light max-w-xl hero-subtitle"
            >
              Realizziamo siti su misura per attività locali che vogliono apparire credibili, professionali e riconoscibili online.
            </p>
            
            <div
              className="flex flex-col sm:flex-row gap-5 pt-4 hero-cta"
            >
              <button
                onClick={scrollToContact}
                className="bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Richiedi un Preventivo <ArrowRight className="w-5 h-5" />
              </button>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-8 py-4 rounded-full text-lg font-bold hover:bg-[#25D366]/20 transition-colors flex items-center justify-center gap-3">
                <WhatsAppIcon className="w-6 h-6" /> WhatsApp
              </a>
            </div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(255,255,255,0.05)] group"
          >
            <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-xl flex items-center justify-center -z-10">
              <PlayCircle className="w-16 h-16 text-gold-amber/50 animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
            <picture>
              <source srcSet="/assets/images/hero-bg.avif" type="image/avif" />
              <source srcSet="/assets/images/hero-bg.webp" type="image/webp" />
              <img
                src="/assets/images/hero-bg.webp"
                alt="Creazione Siti Web Piacenza - Consulenza Digitale Presenza Digitale"
                fetchPriority="high"
                loading="eager"
                decoding="async"
                width="1200"
                height="800"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
            </picture>
          </m.div>
        </div>
      </section>

      {/* Specializzazione Section */}
      <section className="py-20 px-6 relative bg-[#050505] z-20">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 border relative overflow-hidden text-center shadow-[0_0_50px_rgba(191,149,63,0.15)] group hover:shadow-[0_0_80px_rgba(191,149,63,0.25)] transition-all duration-700" style={{ borderColor: 'rgba(191,149,63,0.4)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a150c] via-[#050505] to-[#1a150c] -z-10" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/15 blur-[100px] pointer-events-none group-hover:bg-[#bf953f]/25 transition-colors duration-700" />
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 font-serif tracking-wide pb-2 pr-2" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Sarti del Digital per le Eccellenze Locali</h2>
          <p className="text-xl md:text-2xl text-zinc-200 max-w-4xl mx-auto leading-relaxed font-light">
            Dall'artigiano di fiducia al ristorante storico, sappiamo come far brillare il tuo business a Piacenza. Progettiamo esperienze digitali <strong className="text-white font-medium">Dark Luxury</strong> e sistemi di vendita su WhatsApp studiati per il mercato locale.
          </p>
        </div>
      </section>

      {/* Servizi Section - True Lazy Load */}
      <LazySection height="600px">
        <Suspense fallback={<div className="h-96 bg-zinc-950 animate-pulse rounded-[3rem] m-6" />}>
          <ServicesSection />
        </Suspense>
      </LazySection>

      {/* Trust Section - True Lazy Load */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <LazySection height="400px">
            <Suspense fallback={<div className="h-96 bg-zinc-900/20 animate-pulse rounded-3xl" />}>
              <TrustSection />
            </Suspense>
          </LazySection>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 relative bg-[#050505] border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/20 -z-10" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-serif tracking-wide pb-2 pr-2" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>L'Importanza della Presenza Digitale per le Aziende</h2>
          
          <div className="space-y-6 text-zinc-200 font-light leading-relaxed text-lg">
            <p>
              Nel mercato odierno, avere una solida <strong>presenza digitale</strong> non è più un'opzione, ma una necessità assoluta per qualsiasi attività commerciale. A Piacenza e provincia, la competizione locale è sempre più accesa, e affidarsi a una <strong>consulenza web professionale</strong> esperta nella <strong>realizzazione siti web</strong> è il primo passo per distinguersi. Molti imprenditori sottovalutano l'impatto di un sito web professionale, accontentandosi di soluzioni amatoriali o pagine social non ottimizzate, perdendo così preziose opportunità di business a vantaggio dei competitor.
            </p>
            <p>
              Il nostro studio si specializza nella creazione di <strong>landing page ad alta conversione</strong>. Non ci limitiamo a fornire un design estetico "Dark Luxury": studiamo l'architettura dell'informazione, la user experience (UX) e le strategie di copywriting persuasivo per trasformare i visitatori in contatti concreti. Questo approccio è vitale per artigiani, ristoratori, liberi professionisti e piccole-medie imprese che desiderano un ritorno sull'investimento tangibile e misurabile. Un sito lento, confuso o non adattato per i dispositivi mobili (smartphone) danneggia gravemente la credibilità del tuo marchio aziendale.
            </p>
            <p>
              Inoltre, il <strong>posizionamento SEO locale</strong> (Search Engine Optimization) gioca un ruolo cruciale. Essere visibili sui motori di ricerca quando un utente cerca i tuoi servizi a Piacenza significa intercettare una domanda consapevole e altamente profilata. Attraverso un'attenta ricerca delle parole chiave, l'ottimizzazione avanzata dei contenuti, la strutturazione semantica dei tag HTML e l'implementazione del markup strutturato, garantiamo che il tuo portale web non sia solo una "vetrina nel deserto", ma un potente strumento di lead generation integrato nel tuo ecosistema di vendita.
            </p>
            <p>
              Investire nella tua infrastruttura digitale oggi significa proteggere e scalare il fatturato di domani. Affidati a professionisti del settore digital per curare ogni aspetto tecnico, strategico e visivo: dall'hosting ultraveloce alla stabilità del codice, per far sì che la tua azienda sia sempre un passo avanti ed emerga con un'immagine premium e inconfondibile.
            </p>

            <div className="pt-12 border-t border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Consulenza Web a Piacenza, Rivergaro, Pontenure e Provincia</h3>
              <p className="text-base text-zinc-400 font-light">
                Cerchi una <strong>consulenza web a Piacenza</strong> capace di trasformare il tuo business locale? <strong>Presenza Digitale</strong> non è un'agenzia, ma il tuo partner strategico per la <strong>creazione di siti web professionali a Piacenza e provincia</strong>. Operiamo capillarmente su tutto il territorio emiliano, offrendo soluzioni di <strong>sviluppo siti internet a Rivergaro, Pontenure e Podenzano</strong>, garantendo visibilità massima ai professionisti di <strong>Gossolengo, Vigolzone e Rottofreno</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section — sync import, always in DOM for reliable scroll-to */}
      <ContactSection inviaWhatsApp={inviaWhatsApp} />
    </div>
  );
}
