import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CookiePolicyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 pt-28 pb-32"
    >
      <Helmet>
        <title>Cookie Policy | Presenza Digitale</title>
        <meta name="description" content="Leggi l'informativa sui cookie di Presenza Digitale relativa all'utilizzo dei cookie tecnici e di terze parti." />
        <link rel="canonical" href="https://www.presenzadigitale.com/cookie-policy" />
      </Helmet>
      <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-10 block">
        <ArrowLeft className="w-4 h-4" />
        Torna alla Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 font-serif text-gold-gradient">
        Cookie Policy
      </h1>
      
      <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-6">
        <p><strong>Ultimo aggiornamento:</strong> 08 maggio 2026</p>
        
        <p>La presente Cookie Policy è resa ai sensi dell'art. 122 del D.Lgs. 196/2003, delle <strong>Linee Guida del Garante per la Protezione dei Dati Personali del 10 giugno 2021</strong>, e del Regolamento (UE) 2016/679 (GDPR).</p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Cosa sono i Cookie</h2>
        <p>I cookie sono piccoli file di testo che i sites web visitati inviano al browser dell'utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Vengono utilizzati per diverse finalità, come memorizzare preferenze, migliorare l'esperienza di navigazione e raccogliere informazioni statistiche.</p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Tipologie di Cookie utilizzati</h2>
        <p>Questo sito utilizza <strong>esclusivamente cookie tecnici</strong>, che non richiedono il consenso preventivo dell'utente ai sensi della normativa vigente.</p>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <caption className="sr-only">Tipologie di cookie utilizzati e durata</caption>
            <thead>
              <tr className="border-b border-border-primary">
                <th className="py-3 pr-4 text-text-primary font-semibold">Cookie</th>
                <th className="py-3 pr-4 text-text-primary font-semibold">Tipo</th>
                <th className="py-3 pr-4 text-text-primary font-semibold">Finalità</th>
                <th className="py-3 text-text-primary font-semibold">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-primary/40">
                <td className="py-3 pr-4 font-mono text-sm">cookie_consent</td>
                <td className="py-3 pr-4">Tecnico (proprio)</td>
                <td className="py-3 pr-4">Memorizza l'avvenuta presa visione del banner cookie</td>
                <td className="py-3">12 mesi</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. Cookie di Terze Parti</h2>
        <p>Il sito si avvale di servizi esterni che potrebbero installare cookie tecnici propri:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Google Fonts</strong> (Google LLC) — utilizzato per il caricamento dei caratteri tipografici. Google potrebbe raccogliere dati tecnici come l'indirizzo IP dell'utente. Si tratta di cookie tecnici di CDN, non di profilazione. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Privacy Policy di Google</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Cookie di Profilazione</h2>
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
          <p className="text-emerald-600 dark:text-emerald-350 font-medium mb-0">✅ Questo sito <strong>NON utilizza cookie di profilazione</strong>, cookie analitici di terze parti, né strumenti di tracciamento pubblicitario (es. Google Analytics, Facebook Pixel, ecc.).</p>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">5. Come gestire i Cookie</h2>
        <p>L'utente può gestire le preferenze relative ai cookie direttamente tramite le impostazioni del proprio browser. Di seguito i link alle guide dei principali browser:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Mozilla Firefox</a></li>
          <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Apple Safari</a></li>
          <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Microsoft Edge</a></li>
        </ul>
        <p>La disabilitazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzionalità del sito.</p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">6. Riferimenti Normativi</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Regolamento (UE) 2016/679 — GDPR</li>
          <li>D.Lgs. 30 giugno 2003, n. 196 — Codice in materia di protezione dei dati personali</li>
          <li><a href="https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/9677876" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Linee Guida del Garante sui Cookie e altri strumenti di tracciamento (10 giugno 2021)</a></li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">7. Titolare del Trattamento</h2>
        <p>Per qualsiasi richiesta relativa ai cookie utilizzati dal sito, è possibile contattare il Titolare del trattamento all'indirizzo: <a href="mailto:presenzadigitalepc@gmail.com" className="text-gold-amber hover:underline transition-colors">presenzadigitalepc@gmail.com</a></p>
      </div>
    </motion.div>
  );
}
