import { m } from 'motion/react';
import { Layout, Zap, MapPin, TrendingUp, ShieldCheck, Smartphone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesSectionProps {
  city?: string;
  serviceLink?: string;
}

interface CardData {
  icon: React.ReactNode;
  title: string;
  text: string;
  serviceLink: string;
}

import React from 'react';

const buildCards = (city: string, serviceLink: string): CardData[] => [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Design Su Misura, Zero Template",
    text: "Il tuo sito deve sembrare te, non quello del tuo concorrente. Ogni layout è progettato da zero per raccontare la tua storia, guidare il visitatore e spingerlo a contattarti. Zero compromessi.",
    serviceLink,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Velocità Estrema (Meno di 1s)",
    text: "Hai 3 secondi: dopo, il cliente va dalla concorrenza. I nostri siti caricano in meno di 1 secondo su ogni dispositivo — misurato sul campo, non promesso.",
    serviceLink,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: `Visibilità Locale a ${city}`,
    text: `Quando un cliente a ${city} cerca il tuo servizio su Google, il tuo sito deve essere il primo che vede. Ottimizziamo ogni pagina per farti trovare esattamente quando serve.`,
    serviceLink,
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Progettato per Convertire",
    text: "Un sito che non converte è solo un costo. Il nostro obiettivo non è il traffico vago: è il telefono che squilla e il WhatsApp che notifica contatti reali.",
    serviceLink,
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Nessun Abbonamento Mensile",
    text: "Paghi una volta, il sito è tuo per sempre. Zero canoni nascosti, zero sorprese in bolletta. La tua infrastruttura digitale, senza dipendenze.",
    serviceLink,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-First by Design",
    text: "Oltre il 70% delle visite arriva da smartphone. Ogni sito che costruiamo è perfetto su qualsiasi schermo — dal desktop al telefono, senza compromessi.",
    serviceLink,
  },
];

export default function ServicesSection({
  city = "Piacenza",
  serviceLink = "/servizi/siti-web-piacenza"
}: ServicesSectionProps) {
  const cards = buildCards(city, serviceLink);

  return (
    <section id="servizi" className="py-24 px-6 relative border-t border-border-primary bg-bg-secondary transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight font-serif">Sei motivi per cui i tuoi concorrenti hanno già un sito migliore del tuo.</h2>
          <p className="text-xl text-text-secondary max-w-2xl font-light font-sans">Il nostro metodo trasforma ogni euro investito in visibilità misurabile, contatti reali e prenotazioni dirette. Niente template, niente scorciatoie.</p>
        </div>

        {/* 6-card grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <m.div
              key={i}
              whileHover={{ scale: 0.98 }}
              className="bg-bg-card border border-border-primary rounded-[2rem] p-8 relative overflow-hidden group flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10 flex flex-col gap-5 will-change-transform">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-gold-amber to-amber-600 rounded-xl flex items-center justify-center text-black shrink-0 shadow-lg">
                  {card.icon}
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3 font-serif">{card.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-light font-sans mb-5">{card.text}</p>
                  <Link
                    to={card.serviceLink}
                    className="inline-flex items-center gap-1.5 text-gold-amber text-sm font-bold hover:gap-2.5 transition-all"
                    aria-label={`Scopri: ${card.title}`}
                  >
                    Scopri di più <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* Full-width CTA banner */}
        <m.div
          whileHover={{ scale: 0.995 }}
          className="mt-6 bg-bg-card border border-border-primary rounded-[2rem] p-8 md:p-12 relative overflow-hidden group transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-l from-gold-amber/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left will-change-transform">
            <div className="max-w-2xl">
              <p className="text-text-secondary text-lg font-light font-sans">
                Pronto a smettere di regalare clienti ai tuoi concorrenti? Parliamo del tuo progetto — risposta garantita entro 24 ore.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <a
                href="#contatti"
                className="w-full md:w-auto bg-text-primary text-bg-primary px-10 py-5 rounded-full text-lg font-bold hover:scale-105 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(255,255,255,0.15)] cursor-pointer"
              >
                Inizia a ricevere più contatti <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </m.div>

      </div>
    </section>
  );
}
