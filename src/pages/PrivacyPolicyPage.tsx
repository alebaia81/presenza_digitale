import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-32"
    >
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white mb-12 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Torna alla Home
      </Link>
      
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif" style={{ backgroundImage: 'linear-gradient(to right, #bf953f, #fcf6ba, #b38728)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
        Privacy Policy
      </h1>
      
      <div className="prose prose-invert max-w-none text-zinc-300 space-y-6">
        <p><strong>Ultimo aggiornamento:</strong> 25 aprile 2025</p>
        
        <p>La presente informativa è resa ai sensi degli artt. 13 e 14 del Regolamento (UE) 2016/679 (GDPR) e descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web <strong>presenzadigitale.com</strong>.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Titolare del Trattamento</h2>
        <p>Il Titolare del trattamento dei dati personali è:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Denominazione:</strong> Presenza Digitale — progetto personale</li>
          <li><strong>Sede:</strong> Piacenza (PC), Italia</li>
          <li><strong>Email:</strong> <a href="mailto:presenzadigitalepc@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">presenzadigitalepc@gmail.com</a></li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Tipologia di Dati Raccolti</h2>
        <p>Il sito raccoglie le seguenti categorie di dati personali:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati di navigazione:</strong> I sistemi informatici e le procedure software preposte al funzionamento del sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es. indirizzi IP, tipo di browser, sistema operativo, pagine visitate).</li>
          <li><strong>Dati forniti volontariamente dall'utente:</strong> L'invio volontario di messaggi tramite il modulo di contatto presente sul sito comporta l'acquisizione del nome, dell'indirizzo email e del contenuto del messaggio inseriti dall'utente.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Finalità e Base Giuridica del Trattamento</h2>
        <p>I dati personali sono trattati per le seguenti finalità:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 pr-4 text-white font-semibold">Finalità</th>
                <th className="py-3 text-white font-semibold">Base giuridica (art. 6 GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Rispondere alle richieste di contatto e preventivi</td>
                <td className="py-3">Consenso dell'interessato (art. 6, par. 1, lett. a)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Garantire il funzionamento tecnico del sito</td>
                <td className="py-3">Legittimo interesse del Titolare (art. 6, par. 1, lett. f)</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Adempiere ad obblighi di legge</td>
                <td className="py-3">Obbligo legale (art. 6, par. 1, lett. c)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Periodo di Conservazione</h2>
        <p>I dati personali saranno conservati per il tempo strettamente necessario al raggiungimento delle finalità per cui sono stati raccolti:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati di contatto</strong> (nome, email, messaggio): conservati per un massimo di <strong>12 mesi</strong> dalla ricezione, salvo diversa richiesta dell'interessato.</li>
          <li><strong>Dati di navigazione</strong> (log tecnici): conservati per un massimo di <strong>90 giorni</strong>.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Comunicazione e Diffusione dei Dati</h2>
        <p>I dati personali <strong>non saranno ceduti a terzi</strong> per finalità commerciali o di marketing. Potranno essere comunicati a:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Fornitori di servizi tecnici necessari al funzionamento del sito (es. provider di hosting).</li>
          <li>Autorità competenti, nei casi previsti dalla legge.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">6. Servizi di Terze Parti</h2>
        <p>Il sito utilizza i seguenti servizi esterni:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Google Fonts</strong> — per il caricamento dei caratteri tipografici. Google può raccogliere dati tecnici (indirizzo IP). <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy di Google</a>.</li>
          <li><strong>WhatsApp (Meta)</strong> — il form di contatto reindirizza a WhatsApp per l'invio del messaggio. <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">Privacy Policy di WhatsApp</a>.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">7. Cookie</h2>
        <p>Il sito utilizza esclusivamente cookie tecnici necessari al corretto funzionamento. Per maggiori informazioni, consulta la nostra <Link to="/cookie-policy" className="text-indigo-400 hover:text-indigo-300 transition-colors">Cookie Policy</Link>.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">8. Diritti dell'Interessato</h2>
        <p>Ai sensi degli artt. 15-22 del GDPR, l'utente ha il diritto di:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Accesso</strong> — ottenere conferma dell'esistenza di un trattamento e accedere ai propri dati.</li>
          <li><strong>Rettifica</strong> — ottenere la correzione di dati inesatti o incompleti.</li>
          <li><strong>Cancellazione</strong> — ottenere la cancellazione dei propri dati ("diritto all'oblio").</li>
          <li><strong>Limitazione</strong> — ottenere la limitazione del trattamento.</li>
          <li><strong>Portabilità</strong> — ricevere i propri dati in formato strutturato e leggibile.</li>
          <li><strong>Opposizione</strong> — opporsi al trattamento per motivi legittimi.</li>
        </ul>
        <p>Per esercitare i propri diritti, l'utente può inviare una richiesta a: <a href="mailto:presenzadigitalepc@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">presenzadigitalepc@gmail.com</a></p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">9. Diritto di Reclamo</h2>
        <p>L'interessato ha il diritto di proporre reclamo all'autorità di controllo competente:</p>
        <p><strong>Garante per la Protezione dei Dati Personali</strong><br />
        Piazza Venezia 11, 00187 Roma<br />
        <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">www.garanteprivacy.it</a></p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">10. Modifiche alla presente informativa</h2>
        <p>Il Titolare si riserva il diritto di modificare la presente informativa in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con indicazione della data di ultimo aggiornamento.</p>
      </div>
    </motion.div>
  );
}
