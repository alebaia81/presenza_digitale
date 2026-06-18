import React, { Suspense, useState, useEffect, useRef } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, PlayCircle, MapPin
} from 'lucide-react';
import { waLink } from '../constants';
import WhatsAppIcon from '../components/WhatsAppIcon';

// Lazy loaded components (ContactSection is sync — it's the conversion goal, must always be in DOM)
const ServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const AccessibilityFeature = React.lazy(() => import('../components/home/AccessibilityFeature'));
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

  // Scroll tracking for interactive scroll-driven hero animations
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 180], [0, 1]);
  const y = useTransform(scrollY, [0, 180], [80, 0]);
  const indicatorOpacity = useTransform(scrollY, [0, 60], [1, 0]);

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
      {/* Hero Section - CRITICAL (Sync, first visible block) */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 px-6 overflow-hidden min-h-[90vh] flex items-center bg-bg-primary transition-colors duration-300">
        <div className="absolute inset-0 bg-bg-primary/40 opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-amber/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-left space-y-8 hero-content">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-bg-card border border-border-primary text-text-primary text-sm font-semibold shadow-lg backdrop-blur-md hero-badge transition-all"
            >
              <MapPin className="w-4 h-4 text-gold-amber" />
              <span>Consulenza Digitale a Piacenza e Provincia</span>
            </div>
            
            <h1 className="sr-only">Creazione Siti Web Piacenza</h1>
            {/* LCP ELEMENT — immediately visible, no opacity:0 */}
            <div
              aria-hidden="true"
              className="text-5xl md:text-7xl font-extrabold text-text-primary leading-[1.1] hero-title font-serif"
            >
              Non ti serve solo un sito. <br />
              Ti serve <span className="font-serif italic pb-1 pr-4 inline-block text-gold-gradient">presenza.</span>
            </div>
            
            <p
              className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light max-w-xl hero-subtitle"
            >
              Realizziamo siti su misura per attività locali che vogliono apparire credibili, professionali e riconoscibili online.
            </p>
            
            <div
              className="flex flex-col sm:flex-row gap-5 pt-4 hero-cta"
            >
              <button
                onClick={scrollToContact}
                className="bg-text-primary text-bg-primary px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                Richiedi un Preventivo <ArrowRight className="w-5 h-5" />
              </button>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#1da851] transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(37,211,102,0.3)]">
                <WhatsAppIcon className="w-6 h-6" /> WhatsApp
              </a>
            </div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 relative lg:h-[620px] w-full rounded-[2.5rem] overflow-hidden border border-border-primary shadow-[0_0_50px_rgba(0,0,0,0.05)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] group transition-colors duration-300"
          >
            <div className="absolute inset-0 bg-bg-secondary/50 backdrop-blur-xl flex items-center justify-center -z-10">
              <PlayCircle className="w-16 h-16 text-gold-amber/50 animate-pulse" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 z-10 pointer-events-none" />
            <video
              src="/assets/video/hero1.mp4"
              poster="/assets/images/hero-bg.webp"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover scale-[1.12] origin-top-left transform group-hover:scale-[1.18] transition-transform duration-1000 ease-in-out"
            />
          </m.div>
        </div>
      </section>

      {/* Specializzazione Section */}
      <section className="py-20 px-6 relative bg-bg-primary z-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 border relative overflow-hidden text-center shadow-[0_0_50px_rgba(191,149,63,0.1)] dark:shadow-[0_0_50px_rgba(191,149,63,0.15)] group hover:shadow-[0_0_80px_rgba(191,149,63,0.2)] transition-all duration-700 border-gold-amber/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcfb] via-bg-primary to-[#f8f5ee] dark:from-[#1a150c] dark:via-[#050505] dark:to-[#1a150c] -z-10 transition-colors duration-300" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/5 dark:bg-[#bf953f]/15 blur-[100px] pointer-events-none group-hover:bg-[#bf953f]/15 dark:group-hover:bg-[#bf953f]/25 transition-colors duration-700" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-serif tracking-wide pb-2 pr-2 text-gold-gradient">Sarti del Digital per le Eccellenze Locali</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-light font-sans">
            Dall'artigiano di fiducia al ristorante storico, sappiamo come far brillare il tuo business a Piacenza. Progettiamo esperienze digitali <strong className="text-text-primary font-semibold">Sleek &amp; Gourmet Luxury</strong> e sistemi di vendita su WhatsApp studiati per il mercato locale.
          </p>
        </div>
      </section>

      {/* Servizi Section - True Lazy Load */}
      <LazySection height="600px">
        <Suspense fallback={<div className="h-96 bg-bg-secondary animate-pulse rounded-[3rem] m-6" />}>
          <ServicesSection />
        </Suspense>
      </LazySection>

      {/* Accessibility Feature Section - True Lazy Load */}
      <LazySection height="600px">
        <Suspense fallback={<div className="h-96 bg-bg-primary animate-pulse rounded-[3rem] m-6" />}>
          <AccessibilityFeature />
        </Suspense>
      </LazySection>

      {/* Trust Section - True Lazy Load */}
      <section className="py-24 px-6 relative border-t border-border-primary bg-bg-primary transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <LazySection height="400px">
            <Suspense fallback={<div className="h-96 bg-bg-card/20 animate-pulse rounded-3xl" />}>
              <TrustSection />
            </Suspense>
          </LazySection>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 relative bg-bg-primary border-t border-border-primary transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/20 -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif tracking-wide pb-2 pr-2 text-gold-gradient">L'Importanza della Presenza Digitale per le Aziende</h2>
          
          <div className="space-y-6 text-text-secondary font-light leading-relaxed text-lg font-sans">
            <p>
              Nel mercato odierno, avere una solida <strong className="text-text-primary font-medium">presenza digitale</strong> non è più un'opzione, ma una necessità assoluta per qualsiasi attività commerciale. A Piacenza e provincia, la competizione locale è sempre più accesa, e affidarsi a una <strong className="text-text-primary font-medium">consulenza web professionale</strong> esperta nella <strong className="text-text-primary font-medium">realizzazione siti web</strong> è il primo passo per distinguersi. Molti imprenditori sottovalutano l'impatto di un sito web professionale, accontentandosi di soluzioni amatoriali o pagine social non ottimizzate, perdendo così preziose opportunità di business a vantaggio dei competitor.
            </p>
            <p>
              Il nostro studio si specializza nella creazione di <strong className="text-text-primary font-medium">landing page ad alta conversione</strong>. Non ci limitiamo a fornire un design estetico "Dark Luxury": studiamo l'architettura dell'informazione, la user experience (UX) e le strategie di copywriting persuasivo per trasformare i visitatori in contatti concreti. Questo approccio è vitale per artigiani, ristoratori, liberi professionisti e piccole-medie imprese che desiderano un ritorno sull'investimento tangibile e misurabile. Un sito lento, confuso o non adattato per i dispositivi mobili (smartphone) danneggia gravemente la credibilità del tuo marchio aziendale.
            </p>
            <p>
              Inoltre, il <strong className="text-text-primary font-medium">posizionamento SEO locale</strong> (Search Engine Optimization) gioca un ruolo cruciale. Essere visibili sui motori di ricerca quando un utente cerca i tuoi servizi a Piacenza significa intercettare una domanda consapevole e altamente profilata. Attraverso un'attenta ricerca delle parole chiave, l'ottimizzazione avanzata dei contenuti, la strutturazione semantica dei tag HTML e l'implementazione del markup strutturato, garantiamo che il tuo portale web non sia solo una "vetrina nel deserto", ma un potente strumento di lead generation integrato nel tuo ecosistema di vendita.
            </p>
            <p>
              Investire nella tua infrastruttura digitale oggi significa proteggere e scalare il fatturato di domani. Affidati a professionisti del settore digital per curare ogni aspetto tecnico, strategico e visivo: dall'hosting ultraveloce alla stabilità del codice, per far sì che la tua azienda sia sempre un passo avanti ed emerga con un'immagine premium e inconfondibile.
            </p>

            <div className="pt-12 border-t border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-6 font-serif">Consulenza Web a Piacenza, Rivergaro, Pontenure e Provincia</h3>
              <p className="text-base text-text-secondary font-light font-sans">
                Cerchi una <strong className="text-text-primary font-medium">consulenza web a Piacenza</strong> capace di trasformare il tuo business locale? <strong className="text-text-primary font-medium">Presenza Digitale</strong> non è un'agenzia, ma il tuo partner strategico per la <strong className="text-text-primary font-medium">creazione di siti web professionali a Piacenza e provincia</strong>. Operiamo capillarmente su tutto il territorio emiliano, offrendo soluzioni di <strong className="text-text-primary font-medium">sviluppo siti internet a Rivergaro, Pontenure e Podenzano</strong>, garantendo visibilità massima ai professionisti di <strong className="text-text-primary font-medium">Gossolengo, Vigolzone e Rottofreno</strong>.
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
