import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsPage() {
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
        Termini e Condizioni
      </h1>
      
      <div className="prose prose-invert max-w-none text-zinc-300 space-y-6">
        <p><strong>Ultimo aggiornamento:</strong> {new Date().toLocaleDateString('it-IT')}</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Accettazione dei Termini</h2>
        <p>L'accesso e l'utilizzo del sito web Presenza Digitale comportano l'accettazione espressa delle presenti Condizioni Generali di Utilizzo. Se non si accettano tali condizioni, si è pregati di non utilizzare il sito.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Servizi Offerti</h2>
        <p>Presenza Digitale è una Web Agency che offre servizi di realizzazione siti web, landing page e consulenza digitale per attività locali a Piacenza e provincia. Le informazioni presenti sul sito hanno scopo informativo e promozionale.</p>
        
        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Proprietà Intellettuale</h2>
        <p>Tutti i contenuti presenti sul sito (testi, immagini, loghi, grafica, codice HTML/CSS/JS) sono di proprietà esclusiva di Presenza Digitale o dei rispettivi proprietari e sono protetti dalle leggi sul diritto d'autore.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitazione di Responsabilità</h2>
        <p>Presenza Digitale non si assume alcuna responsabilità per eventuali danni diretti o indiretti derivanti dall'utilizzo del sito. Ci impegniamo a mantenere le informazioni aggiornate, ma non garantiamo l'assoluta completezza o esattezza dei contenuti.</p>

        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">5. Legge Applicabile e Foro Competente</h2>
        <p>Le presenti condizioni sono regolate dalla legge italiana. Per qualsiasi controversia inerente l'interpretazione o l'esecuzione delle presenti condizioni, sarà competente in via esclusiva il Foro di Piacenza.</p>
      </div>
    </motion.div>
  );
}
