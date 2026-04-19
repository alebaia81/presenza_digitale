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
        <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Informazioni Generali</h2>
        <p>Ai sensi del Regolamento (UE) 2016/679 (GDPR), questa pagina descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web di Presenza Digitale.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Titolare del Trattamento</h2>
        <p>Il Titolare del trattamento dei dati è Presenza Digitale, con sede a Piacenza (PC). Per qualsiasi informazione relativa al trattamento dei dati personali, è possibile contattarci ai recapiti indicati sul sito.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Tipologia di Dati Trattati</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Dati di navigazione:</strong> I sistemi informatici acquisiscono alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (indirizzi IP, ecc.).</li>
          <li><strong>Dati forniti volontariamente:</strong> L'invio facoltativo e volontario di messaggi ai contatti indicati o la compilazione di form comportano l'acquisizione dei dati di contatto del mittente.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Finalità del Trattamento</h2>
        <p>I dati personali saranno trattati per le seguenti finalità:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Rispondere alle richieste di informazioni o preventivi.</li>
          <li>Garantire il corretto funzionamento tecnico del sito web.</li>
          <li>Adempiere ad eventuali obblighi di legge.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Diritti dell'Interessato</h2>
        <p>Gli utenti hanno il diritto di chiedere al Titolare l'accesso ai dati personali, la rettifica, la cancellazione degli stessi, la limitazione del trattamento o di opporsi al trattamento, oltre al diritto alla portabilità dei dati.</p>
      </div>
    </motion.div>
  );
}
