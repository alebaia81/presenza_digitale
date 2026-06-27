import React from 'react';
import { m } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, CheckCircle, Clock, Zap, Shield, Star } from 'lucide-react';
import { waLink } from '../constants';
import WhatsAppIcon from '../components/WhatsAppIcon';

// FAQ specifiche per questa pagina di servizio
const faqSitiWeb = [
  {
    question: 'Quanto costa la realizzazione di un sito web a Piacenza?',
    answer:
      'Il costo per un sito web professionale a Piacenza varia in base alla complessità del progetto. Le nostre soluzioni partono da landing page monopagina ad alta conversione per artigiani e attività locali, fino a siti multipagina aziendali con blog integrato. Ogni preventivo è gratuito, personalizzato e senza costi nascosti.',
  },
  {
    question: 'Quanto tempo ci vuole per sviluppare un sito web a Piacenza?',
    answer:
      "Per una landing page strategica la consegna avviene generalmente in 2-3 settimane. Per un sito multipagina il tempo stimato è di 4-6 settimane, a partire dalla disponibilità dei contenuti. Ogni progetto include revisioni e test su dispositivi mobili prima della pubblicazione.",
  },
  {
    question: 'I vostri siti web sono ottimizzati per Google e la SEO locale?',
    answer:
      "Sì. Ogni sito che realizziamo include SEO tecnica e locale: ottimizzazione dei meta tag, markup strutturato Schema.org, sitemap XML, configurazione Google Business Profile e ottimizzazione per le ricerche geolocalizzate a Piacenza e provincia.",
  },
  {
    question: 'Lavorate solo a Piacenza o anche in provincia?',
    answer:
      "Operiamo su tutto il territorio della provincia di Piacenza: Castel San Giovanni, Monticelli d'Ongina, Rivergaro, Pontenure, Gossolengo, Vigolzone, Rottofreno, Fiorenzuola e altri comuni limitrofi. Le consulenze avvengono online e in presenza.",
  },
  {
    question: 'Posso aggiornare il sito in autonomia dopo la consegna?',
    answer:
      "Sì. Forniamo una formazione dedicata con brevi video guide per permetterti di aggiornare testi, immagini e articoli del blog in piena autonomia. Siamo comunque sempre disponibili per manutenzioni tecniche straordinarie.",
  },
];

const includedFeatures = [
  'Design Dark Luxury su misura per il tuo brand',
  'Ottimizzazione SEO locale e tecnica completa',
  'Markup Schema.org (LocalBusiness / ProfessionalService)',
  'Conformità WCAG 2.2 AA per accessibilità e ranking',
  'Velocità Core Web Vitals: LCP < 2s, CLS < 0.1',
  'Integrazione WhatsApp Booking diretta',
  'Responsive design mobile-first certificato',
  'Blog integrato per content marketing e SEO',
  'Sitemap XML e robots.txt configurati',
  'Consulenza Google Business Profile inclusa',
];

const areeServite = [
  'Piacenza (città)',
  "Castel San Giovanni",
  "Monticelli d'Ongina",
  'Rivergaro',
  'Pontenure',
  'Gossolengo',
  'Fiorenzuola d\'Arda',
  'Vigolzone',
  'Rottofreno',
  'Podenzano',
];

export default function ServizioSitiWebPiacenzaPage() {
  const professionalServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Presenza Digitale — Realizzazione Siti Web Piacenza',
    description:
      'Sviluppiamo siti web professionali, landing page ad alta conversione e soluzioni di SEO locale per attività commerciali, artigiani e liberi professionisti a Piacenza e provincia.',
    url: 'https://www.presenzadigitale.com/servizi/siti-web-piacenza',
    telephone: '+393398156719',
    email: 'info@presenzadigitale.com',
    priceRange: '€€',
    areaServed: [
      'Piacenza',
      "Castel San Giovanni",
      "Monticelli d'Ongina",
      'Rivergaro',
      'Pontenure',
      'Gossolengo',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Piacenza',
      addressRegion: 'PC',
      addressCountry: 'IT',
    },
    serviceType: ['Realizzazione Siti Web', 'SEO Locale', 'Landing Page', 'Web Design'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Servizi di Web Design a Piacenza',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Landing Page ad Alta Conversione',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Sito Web Aziendale Multipagina',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO Locale Piacenza',
          },
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqSitiWeb.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-bg-primary min-h-screen transition-colors duration-300"
    >
      <Helmet>
        <title>Realizzazione Siti Web Piacenza | Presenza Digitale</title>
        <meta
          name="description"
          content="Realizziamo siti web professionali e landing page ad alta conversione a Piacenza e provincia. Design Dark Luxury, SEO locale, WhatsApp Booking. Preventivo gratuito."
        />
        <link rel="canonical" href="https://www.presenzadigitale.com/servizi/siti-web-piacenza" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.presenzadigitale.com/servizi/siti-web-piacenza" />
        <meta property="og:title" content="Realizzazione Siti Web Piacenza | Presenza Digitale" />
        <meta
          property="og:description"
          content="Siti web professionali per attività locali a Piacenza. Design premium, SEO locale e alta velocità. Preventivo gratuito senza impegno."
        />
        <script type="application/ld+json">{JSON.stringify(professionalServiceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 px-6 overflow-hidden bg-bg-primary">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gold-amber/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Geo pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border-primary text-sm font-semibold text-text-primary mb-8 shadow-sm">
            <MapPin className="w-4 h-4 text-gold-amber" aria-hidden="true" />
            <span>Piacenza e Provincia — Servizio in Presenza e Online</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold font-serif text-text-primary leading-[1.1] mb-6">
            Realizzazione{' '}
            <span className="font-serif italic pb-1 pr-2 inline-block text-gold-gradient">
              Siti Web
            </span>{' '}
            a Piacenza
          </h1>

          <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed max-w-3xl mb-10">
            Progettiamo siti web su misura per artigiani, ristoratori e professionisti locali.
            Non template generici: ogni sito è pensato per convertire i visitatori in clienti reali
            e per dominare la ricerca locale su Google.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-wa-cta"
              className="bg-[#075E54] hover:bg-[#0c4f47] text-white px-8 py-4 rounded-full text-lg font-bold transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(7,94,84,0.3)]"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Preventivo Gratuito su WhatsApp
            </a>
            <Link
              to="/progetti"
              className="border border-border-primary text-text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-bg-card transition-colors flex items-center justify-center gap-3"
            >
              Vedi i Nostri Progetti <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────── */}
      <section className="border-y border-border-primary py-10 px-6 bg-bg-secondary/30 transition-colors duration-300">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: Zap, value: '< 2s', label: 'LCP su mobile' },
            { icon: Star, value: '100%', label: 'Mobile-first' },
            { icon: Shield, value: 'WCAG 2.2', label: 'Accessibilità AA' },
            { icon: Clock, value: '2-3 sett.', label: 'Tempo medio di consegna' },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <Icon className="w-6 h-6 text-gold-amber" aria-hidden="true" />
              <span className="text-2xl font-extrabold text-text-primary">{value}</span>
              <span className="text-sm text-text-secondary">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── COSA È INCLUSO ───────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-primary transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-text-primary mb-4">
            Cosa include ogni{' '}
            <span className="italic text-gold-gradient">sito web</span>
          </h2>
          <p className="text-text-secondary text-lg font-light mb-12 max-w-2xl">
            Nessun "piano base" ridotto. Ogni progetto di sviluppo web a Piacenza include
            di default tutto ciò che serve per apparire, convertire e crescere.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {includedFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-4 p-5 rounded-2xl bg-bg-card border border-border-primary hover:border-gold-amber/30 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-gold-amber shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-text-primary font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PERCHÉ NOI ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-secondary/20 border-y border-border-primary transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-text-primary mb-12">
            Perché scegliere{' '}
            <span className="italic text-gold-gradient">Presenza Digitale</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Specializzati nel mercato locale',
                body:
                  "Non siamo un'agenzia generalista. Conosciamo il mercato di Piacenza e della provincia: le esigenze degli artigiani, dei ristoratori e dei liberi professionisti locali. Ogni progetto è pensato per intercettare la tua clientela reale.",
              },
              {
                title: 'Tecnologie moderne, zero dipendenze',
                body:
                  'Utilizziamo React 19 e Vite per costruire siti statici ultra-veloci. Nessun database vulnerabile, nessuna licenza mensile per plugin. Proprietario al 100%, ospitabile su qualsiasi piattaforma senza costi fissi.',
              },
              {
                title: 'SEO Locale integrata sin dal primo giorno',
                body:
                  'La SEO non è un "extra". Ogni sito che costruiamo include markup Schema.org, ottimizzazione dei Core Web Vitals, configurazione della sitemap e consulenza Google Business Profile per dominarle ricerche locali.',
              },
            ].map(({ title, body }) => (
              <div
                key={title}
                className="p-8 rounded-3xl bg-bg-card border border-border-primary hover:shadow-[0_0_40px_rgba(191,149,63,0.1)] transition-all duration-500"
              >
                <h3 className="text-xl font-bold font-serif text-text-primary mb-4">{title}</h3>
                <p className="text-text-secondary font-light leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AREE SERVITE ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-primary transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-primary mb-4">
            Aree Servite in Provincia di Piacenza
          </h2>
          <p className="text-text-secondary font-light mb-10 max-w-2xl">
            Operiamo su tutto il territorio provinciale, con incontri in presenza o online a seconda delle tue preferenze.
          </p>
          <div className="flex flex-wrap gap-3">
            {areeServite.map((area) => (
              <span
                key={area}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-card border border-border-primary text-text-secondary text-sm font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-amber" aria-hidden="true" />
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO LINK ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-bg-secondary/20 border-y border-border-primary transition-colors duration-300">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-text-primary mb-2">
              Guarda i nostri progetti realizzati
            </h2>
            <p className="text-text-secondary font-light">
              Ristoranti, artigiani, centri benessere e attività locali di Piacenza.
            </p>
          </div>
          <Link
            to="/progetti"
            className="shrink-0 bg-text-primary text-bg-primary px-8 py-4 rounded-full text-base font-bold hover:scale-105 transition-transform flex items-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            Vedi il Portfolio <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-primary transition-colors duration-300">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-text-primary mb-12">
            Domande Frequenti sui Siti Web a Piacenza
          </h2>
          <div className="space-y-6">
            {faqSitiWeb.map(({ question, answer }) => (
              <details
                key={question}
                className="group border border-border-primary rounded-2xl bg-bg-card overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-semibold text-text-primary list-none select-none hover:bg-bg-secondary/30 transition-colors">
                  {question}
                  <span className="shrink-0 text-gold-amber text-xl group-open:rotate-45 transition-transform duration-300">+</span>
                </summary>
                <p className="px-6 pb-6 text-text-secondary font-light leading-relaxed">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA FINALE ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-bg-secondary/20 border-t border-border-primary transition-colors duration-300">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold font-serif text-text-primary mb-6">
            Pronto a portare la tua attività{' '}
            <span className="italic text-gold-gradient">online?</span>
          </h2>
          <p className="text-text-secondary text-lg font-light mb-10 max-w-xl mx-auto">
            Raccontaci il tuo progetto. Ti risponderemo entro poche ore con un preventivo gratuito, senza impegno.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              id="footer-wa-cta"
              className="bg-[#075E54] hover:bg-[#0c4f47] text-white px-8 py-4 rounded-full text-lg font-bold transition-colors flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(7,94,84,0.3)]"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Scrivici su WhatsApp
            </a>
            <Link
              to="/#contatti"
              className="border border-border-primary text-text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-bg-card transition-colors flex items-center justify-center gap-3"
            >
              Usa il Modulo di Contatto <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </m.div>
  );
}
