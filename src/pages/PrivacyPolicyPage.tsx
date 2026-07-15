import React from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 pt-28 pb-32"
    >
      <Helmet>
        <title>Privacy Policy | Presenza Digitale</title>
        <meta name="description" content="Leggi l'informativa sulla privacy di Presenza Digitale relativa al trattamento dei dati personali degli utenti del sito web." />
        <link rel="canonical" href="https://www.presenzadigitale.com/privacy" />
      </Helmet>
      <Link to="/" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-10 block">
        <ArrowLeft className="w-4 h-4" />
        Torna alla Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 font-serif text-gold-gradient">
        Privacy Policy
      </h1>
      
      <div className="prose dark:prose-invert max-w-none text-text-secondary space-y-6">
        <p><strong>Ultimo aggiornamento:</strong> 15 Luglio 2026</p>
        
        <p>La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web <strong>presenzadigitale.com</strong>, gestito da Alessandro Baiamonte in qualità di persona fisica.</p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">1. Titolare del Trattamento</h2>
        <p>Il Titolare del trattamento dei dati personali è:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Nominativo:</strong> Alessandro Baiamonte</li>
          <li><strong>Status:</strong> Persona Fisica (Attività professionale privata)</li>
          <li><strong>Sede:</strong> Italia</li>
          <li><strong>Email:</strong> <a href="mailto:presenzadigitalec@gmail.com" className="text-gold-amber hover:underline transition-colors">presenzadigitalec@gmail.com</a></li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">2. Tipologia di Dati Raccolti</h2>
        <p>Il sito raccoglie le seguenti categorie di dati personali:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte al funzionamento del sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser, sistema operativo, pagine visitate).</li>
          <li><strong>Dati di interazione:</strong> Il sito fornisce collegamenti per inoltrare richieste (es. pulsante WhatsApp). Il sito non raccoglie dati personali prima del reindirizzamento alle piattaforme esterne.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">3. Finalità e Base Giuridica del Trattamento</h2>
        <p>I dati personali sono trattati per le seguenti finalità:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <caption className="sr-only">Tipologie di dati raccolti e finalità</caption>
            <thead>
              <tr className="border-b border-border-primary">
                <th className="py-3 pr-4 text-text-primary font-semibold">Finalità</th>
                <th className="py-3 text-text-primary font-semibold">Base giuridica (art. 6 GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-primary/40">
                <td className="py-3 pr-4">Garantire il funzionamento tecnico e la stabilità del sito</td>
                <td className="py-3">Legittimo interesse del Titolare (art. 6, par. 1, lett. f)</td>
              </tr>
              <tr className="border-b border-border-primary/40">
                <td className="py-3 pr-4">Analisi statistica aggregata ed anonima del traffico</td>
                <td className="py-3">Consenso dell'interessato (art. 6, par. 1, lett. a)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">4. Periodo di Conservazione</h2>
        <p>I dati personali saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati di navigazione</strong> (log tecnici dell'hosting Vercel): conservati secondo le policy del provider.</li>
          <li><strong>Dati di tracciamento</strong> (cookie analitici di Google Analytics 4): conservati per un massimo di <strong>24 mesi</strong>.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">5. Comunicazione e Diffusione dei Dati</h2>
        <p>I dati personali <strong>non saranno ceduti a terzi</strong> per finalità commerciali o di marketing. Potranno essere comunicati a:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fornitori di servizi tecnici necessari al funzionamento del sito (es. provider di hosting Vercel).</li>
          <li>Autorità competenti, nei casi previsti dalla legge.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">6. Servizi di Terze Parti</h2>
        <p>Il sito utilizza i seguenti servizi esterni:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Vercel (Vercel Inc.)</strong> — Piattaforma di hosting del sito web. Raccoglie log tecnici e indirizzi IP per ragioni di stabilità e sicurezza del server. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Privacy Policy di Vercel</a>.</li>
          <li><strong>Google Analytics 4 (Google Ireland Limited)</strong> — Servizio di analisi web per tracciare e analizzare il traffico del sito in forma aggregata ed anonima. I cookie analitici sono attivati solo a seguito del consenso esplicito dell'utente ed in linea con Google Consent Mode v2. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Privacy Policy di Google</a>.</li>
          <li><strong>WhatsApp (Meta Platforms, Inc.)</strong> — Collegamento ipertestuale che indirizza gli utenti a WhatsApp per inviare messaggi. Nessun dato viene salvato sul sito prima del redirect. <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">Privacy Policy di WhatsApp</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">7. Cookie</h2>
        <p>Il sito utilizza cookie tecnici e cookie analitici (Google Analytics 4). Per maggiori informazioni o per modificare le preferenze, consulta la nostra <Link to="/cookie-policy" className="text-gold-amber hover:underline transition-colors">Cookie Policy</Link>.</p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">8. Diritti dell'Interessato</h2>
        <p>Ai sensi degli artt. 15-22 del GDPR, l'utente ha il diritto di:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Accesso</strong> — ottenere conferma dell'esistenza di un trattamento e accedere ai propri dati.</li>
          <li><strong>Rettifica</strong> — ottenere la correzione di dati inesatti o incompleti.</li>
          <li><strong>Cancellazione</strong> — ottenere la cancellazione dei propri dati ("diritto all'oblio").</li>
          <li><strong>Limitazione</strong> — ottenere la limitazione del trattamento.</li>
          <li><strong>Opposizione</strong> — opporsi al trattamento per motivi legittimi.</li>
        </ul>
        <p>Per esercitare i propri diritti, l'utente può inviare una richiesta a: <a href="mailto:presenzadigitalec@gmail.com" className="text-gold-amber hover:underline transition-colors">presenzadigitalec@gmail.com</a></p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">9. Diritto di Reclamo</h2>
        <p>L'interessato ha il diritto di proporre reclamo all'autorità di controllo competente:</p>
        <p><strong>Garante per la Protezione dei Dati Personali</strong><br />
        Piazza Venezia 11, 00187 Roma<br />
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-gold-amber hover:underline transition-colors">www.garanteprivacy.it</a></p>

        <h2 className="text-2xl font-semibold text-text-primary mt-8 mb-4">10. Modifiche alla presente informativa</h2>
        <p>Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.</p>
      </div>
    </motion.div>
  );
}
