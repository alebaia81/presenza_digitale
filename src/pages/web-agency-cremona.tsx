import React, { Suspense, useState, useEffect, useRef } from 'react';
import { m, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, PlayCircle, MapPin
} from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';
import { Helmet } from 'react-helmet-async';
import { scrollToElement } from '../utils/scroll';

// Lazy loaded components
const ServicesSection = React.lazy(() => import('../components/home/ServicesSection'));
const AccessibilityFeature = React.lazy(() => import('../components/home/AccessibilityFeature'));
const TrustSection = React.lazy(() => import('../components/home/TrustSection'));
const FaqSection = React.lazy(() => import('../components/home/FaqSection'));
import ContactSection from '../components/home/ContactSection';

// Helper for true lazy loading on scroll
const LazySection = ({ children, id, height = "400px" }: { children: React.ReactNode, id?: string, height?: string }) => {
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
      { rootMargin: "200px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return <div id={id} ref={ref} style={{ minHeight: height }}>{inView ? children : null}</div>;
};

const cremonaWaLink = "https://wa.me/393398156719?text=Ciao%20Alessandro%2C%20vorrei%20maggiori%20informazioni%20sui%20vostri%20servizi%20di%20sviluppo%20siti%20web%20e%20soluzioni%20AI%20a%20Cremona.";

const reviewsCremonaAI = [
  {
    text: "Hanno integrato un assistente AI sul sito della mia attività a Cremona e ora gestiamo le richieste di informazioni dei clienti in automatico anche di notte. Rivoluzionario e conveniente!",
    author: "Marco R.",
    role: "E-commerce Owner, Cremona"
  },
  {
    text: "Cercavo una web agency a Cremona per una landing page veloce e accessibile. Risultato fantastico: posizionamento locale immediato su Google e un'immagine davvero premium.",
    author: "Andrea A.",
    role: "Libero Professionista, Cremona"
  },
  {
    text: "Avere un sito web moderno con WhatsApp integrato e automazioni intelligenti ha permesso alla nostra azienda agricola di raddoppiare i contatti commerciali in provincia.",
    author: "Elena T.",
    role: "Azienda Agricola, Crema"
  }
];

const faqCremonaAI = [
  {
    question: "Quali sono i vantaggi di integrare l'Intelligenza Artificiale nel mio sito web a Cremona?",
    answer: "L'integrazione di assistenti AI personalizzati consente di rispondere automaticamente ai clienti 24/7, pre-qualificare i lead commerciali e automatizzare compiti ripetitivi (come prenotazioni e FAQ complesse), liberando tempo prezioso per il tuo business a Cremona."
  },
  {
    question: "Quanto costa lo sviluppo di un sito web o e-commerce con soluzioni AI a Cremona?",
    answer: "I costi variano in base alla complessità delle automazioni e delle funzionalità richieste. Offriamo preventivi personalizzati e trasparenti a partire da landing page ad alta conversione per attività locali fino a portali aziendali multipagina con agenti AI integrati. Non ci sono costi mensili obbligatori o licenze nascoste."
  },
  {
    question: "Come funziona il posizionamento SEO locale a Cremona e provincia?",
    answer: "La SEO locale posiziona il tuo sito web in cima alle ricerche di chi cerca i tuoi servizi a Cremona e dintorni. Ottimizziamo la semantica HTML, inseriamo dati strutturati Schema.org conformi e ti supportiamo nella configurazione del Google Business Profile per dominare le ricerche geolocalizzate."
  },
  {
    question: "I siti web che sviluppate a Cremona sono veloci e conformi alle norme di accessibilità (WCAG 2.2 AA)?",
    answer: "Sì, assolutamente. Utilizziamo framework moderni come React 19 e Vite che garantiscono caricamenti fulminei (LCP < 2s). Ogni riga di codice rispetta le specifiche di accessibilità WCAG 2.2 AA, migliorando l'esperienza utente e il posizionamento naturale su Google."
  },
  {
    question: "Lavorate anche con aziende e attività in provincia di Cremona?",
    answer: "Sì. Copriamo l'intero territorio della provincia di Cremona, inclusi comuni come Crema, Casalmaggiore, Castelleone, Soresina, Pandino, Pizzighettone e zone limitrofe, offrendo consulenze sia da remoto che di persona."
  }
];

export default function WebAgencyCremonaPage() {
  const [isDesktop, setIsDesktop] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 180], [0, 1]);
  const y = useTransform(scrollY, [0, 180], [80, 0]);

  const scrollToContact = () => {
    scrollToElement('contatti');
  };

  const inviaWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mioNumero = "393398156719"; 
    const nome = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const messaggioCorpo = (document.getElementById('message') as HTMLTextAreaElement).value;

    const testo = `*Nuovo Contatto da Presenza Digitale (Cremona AI)*%0A%0A` +
                  `👤 *Nome:* ${nome}%0A` +
                  `📧 *Email:* ${email}%0A` +
                  `💬 *Messaggio:* ${messaggioCorpo}`;

    const url = `https://wa.me/${mioNumero}?text=${testo}`;
    window.open(url, '_blank')?.focus();
    (document.getElementById('contact-form') as HTMLFormElement).reset();
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Presenza Digitale — Web Agency Cremona",
    "description": "Realizzazione siti web, e-commerce avanzati e soluzioni con Intelligenza Artificiale a Cremona e provincia. Ottimizza il tuo business con Presenza Digitale.",
    "url": "https://www.presenzadigitale.com/web-agency-cremona",
    "telephone": "+393398156719",
    "email": "info@presenzadigitale.com",
    "priceRange": "€€",
    "areaServed": [
      "Cremona",
      "Crema",
      "Casalmaggiore",
      "Castelleone",
      "Soresina",
      "Pandino"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Cremona",
      "addressRegion": "CR",
      "postalCode": "26100",
      "addressCountry": "IT"
    },
    "serviceType": [
      "Realizzazione Siti Web",
      "Soluzioni AI",
      "Consulenza Digitale",
      "Automazione Processi",
      "SEO Locale"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCremonaAI.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div>
      <Helmet>
        <title>Web Agency Cremona | Realizzazione Siti Web e AI | Presenza Digitale</title>
        <meta name="description" content="Creazione siti web, e-commerce avanzati e soluzioni con Intelligenza Artificiale a Cremona. Ottimizza il tuo business con Presenza Digitale." />
        <link rel="canonical" href="https://www.presenzadigitale.com/web-agency-cremona" />
        <script type="application/ld+json">
          {JSON.stringify(professionalServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 px-6 overflow-hidden min-h-[90vh] flex items-center bg-bg-primary transition-colors duration-300">
        <div className="absolute inset-0 bg-bg-primary/40 opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-amber/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 text-left space-y-8 hero-content">
            <div
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-bg-card border border-border-primary text-text-primary text-sm font-semibold shadow-lg backdrop-blur-md hero-badge transition-all"
            >
              <MapPin className="w-4 h-4 text-gold-amber" />
              <span>Consulenza Digitale e AI a Cremona e Provincia</span>
            </div>
            
            <h1 className="sr-only">Web Agency Cremona | Sviluppo Siti Web e Soluzioni AI</h1>
            <div
              aria-hidden="true"
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] hero-title font-serif"
            >
              Web Agency Cremona <br />
              Siti Web e <span className="font-serif italic pb-1 pr-4 inline-block text-gold-gradient">Soluzioni AI.</span>
            </div>
            
            <p
              className="text-xl md:text-2xl text-text-secondary leading-relaxed font-light max-w-xl hero-subtitle"
            >
              Realizziamo siti web ed e-commerce a Cremona e provincia integrati con assistenti AI personalizzati, automazioni e strategie di conversione per far crescere il tuo business.
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
              <a href={cremonaWaLink} target="_blank" rel="noopener noreferrer" className="bg-[#075E54] hover:bg-[#0c4f47] text-white px-8 py-4 rounded-full text-lg font-bold transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(7,94,84,0.3)]">
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
            {isDesktop ? (
              <video
                src="/assets/video/hero1.mp4"
                poster="/assets/images/hero-bg.avif"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-[1.12] origin-top-left transform group-hover:scale-[1.18] transition-transform duration-1000 ease-in-out"
              />
            ) : (
              <img
                src="/assets/images/hero-bg.avif"
                alt="Presenza Digitale Hero Background"
                className="absolute inset-0 w-full h-full object-cover scale-[1.12] origin-top-left transform group-hover:scale-[1.18] transition-transform duration-1000 ease-in-out"
              />
            )}
          </m.div>
        </div>
      </section>

      {/* Specializzazione Section */}
      <section className="py-20 px-6 relative bg-bg-primary z-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 border relative overflow-hidden text-center shadow-[0_0_50px_rgba(191,149,63,0.1)] dark:shadow-[0_0_50px_rgba(191,149,63,0.15)] group hover:shadow-[0_0_80px_rgba(191,149,63,0.2)] transition-all duration-700 border-gold-amber/30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcfb] via-bg-primary to-[#f8f5ee] dark:from-[#1a150c] dark:via-[#050505] dark:to-[#1a150c] -z-10 transition-colors duration-300" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#bf953f]/5 dark:bg-[#bf953f]/15 blur-[100px] pointer-events-none group-hover:bg-[#bf953f]/15 dark:group-hover:bg-[#bf953f]/25 transition-colors duration-700" />
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 font-serif tracking-wide pb-2 pr-2 text-gold-gradient">Sarti del Digital e dell'Intelligenza Artificiale</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto leading-relaxed font-light font-sans">
            Dall'artigiano di fiducia all'azienda strutturata, sappiamo come far brillare e automatizzare il tuo business a Cremona. Progettiamo esperienze digitali <strong className="text-text-primary font-semibold">Sleek &amp; Gourmet Luxury</strong>, integrando assistenti virtuali intelligenti e sistemi di conversione automatici studiati per superare la concorrenza locale.
          </p>
        </div>
      </section>

      {/* Servizi Section - True Lazy Load */}
      <LazySection id="servizi" height="600px">
        <Suspense fallback={<div className="h-96 bg-bg-secondary animate-pulse rounded-[3rem] m-6" />}>
          <ServicesSection city="Cremona" serviceLink="/web-agency-cremona" />
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
              <TrustSection city="Cremona" reviews={reviewsCremonaAI} />
            </Suspense>
          </LazySection>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-24 px-6 relative bg-bg-primary border-t border-border-primary transition-colors duration-300">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-bg-secondary/20 -z-10 pointer-events-none" />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-serif tracking-wide pb-2 pr-2 text-gold-gradient">Sviluppo Siti Web e Intelligenza Artificiale a Cremona</h2>
          
          <div className="space-y-6 text-text-secondary font-light leading-relaxed text-lg font-sans">
            <p>
              Nel panorama imprenditoriale moderno, possedere un sito web standard non è più sufficiente per emergere. A Cremona e provincia, la competizione locale sta cambiando rapidamente, ed è fondamentale affidarsi a una <strong className="text-text-primary font-medium">web agency specializzata nell'integrazione di Intelligenza Artificiale</strong> per automatizzare i processi e convertire i visitatori in clienti fedeli. Molti business locali operano ancora con siti web obsoleti o basati su template vecchi e lenti, perdendo costantemente quote di mercato a favore di chi sceglie di innovare.
            </p>
            <p>
              Presenza Digitale si occupa di realizzare <strong className="text-text-primary font-medium">landing page e portali web ad alte prestazioni</strong>. Il nostro approccio combina un design estetico esclusivo "Dark Luxury" con la potenza degli agenti AI personalizzati. Immagina un assistente virtuale istruito sul catalogo o sui servizi della tua azienda, in grado di accogliere i clienti sul sito, chiarire i loro dubbi e guidarli alla prenotazione o all'acquisto 24 ore su 24, 7 giorni su 7. Questo riduce drasticamente i tempi di attesa e massimizza la lead generation per professionisti e aziende.
            </p>
            <p>
              L'ottimizzazione per i motori di ricerca (<strong className="text-text-primary font-medium">SEO locale a Cremona</strong>) rappresenta un altro pilastro fondamentale. Non ci limitiamo a far apparire bello il tuo sito: ne curiamo la velocità di caricamento, l'accessibilità (secondo gli standard internazionali WCAG 2.2 AA) e la semantica dei dati strutturati Schema.org. In questo modo, Google e i moderni motori di ricerca basati su intelligenza artificiale (GEO) comprendono perfettamente chi sei e cosa offri, posizionandoti davanti alla concorrenza locale.
            </p>
            <p>
              Progettare oggi la tua presenza online significa gettare le basi per la crescita e l'efficienza operativa di domani. Contattaci per scoprire come le nostre soluzioni di web design e intelligenza artificiale personalizzata possono trasformare il tuo business sul territorio di Cremona e provincia.
            </p>

            <div className="pt-12 border-t border-border-primary">
              <h3 className="text-xl font-bold text-text-primary mb-6 font-serif">Consulenza Web e Soluzioni AI a Cremona, Crema, Casalmaggiore e Provincia</h3>
              <p className="text-base text-text-secondary font-light font-sans">
                Vuoi una <strong className="text-text-primary font-medium">consulenza web a Cremona</strong> in grado di automatizzare e far crescere il tuo business? <strong className="text-text-primary font-medium">Presenza Digitale</strong> è il tuo partner nello <strong className="text-text-primary font-medium">sviluppo di siti web e soluzioni AI a Cremona, Crema, Casalmaggiore</strong> e comuni limitrofi come Castelleone, Soresina e Pandino. Creiamo strumenti digitali moderni e senza canoni mensili fissi, pensati per far fare un salto di qualità concreto al tuo marchio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - True Lazy Load */}
      <LazySection id="faq" height="500px">
        <Suspense fallback={<div className="h-96 bg-bg-secondary animate-pulse rounded-[3rem] m-6" />}>
          <FaqSection city="Cremona" items={faqCremonaAI} />
        </Suspense>
      </LazySection>

      {/* Contact Section — sync import, always in DOM for reliable scroll-to */}
      <ContactSection 
        inviaWhatsApp={inviaWhatsApp} 
        city="Cremona" 
        placeholderText="Voglio integrare un assistente AI o realizzare un sito per la mia azienda a Cremona..." 
      />
    </div>
  );
}
