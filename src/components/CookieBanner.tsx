import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'cookie_consent';
const GA_ID = 'G-ZPJVEH8NC9';

// Tipizzazione sicura per gtag globale (inizializzato in index.html)
const gtag = (...args: unknown[]) => {
  if (typeof (window as Window & { gtag?: (...a: unknown[]) => void }).gtag === 'function') {
    (window as Window & { gtag: (...a: unknown[]) => void }).gtag(...args);
  }
};

// Carica lo script GA4 una sola volta (idempotente)
const loadGA4Script = () => {
  if (document.getElementById('ga4-script')) return;
  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);
};

// Aggiorna il consenso analytics e registra la pageview
const grantAnalytics = () => {
  gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  loadGA4Script();
  // Registra config + pageview iniziale per la sessione corrente
  gtag('config', GA_ID, { anonymize_ip: true });
};

// Mantiene il deny esplicito (ridondante ma chiaro per audit)
const denyAnalytics = () => {
  gtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
};

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);

    if (stored === 'granted') {
      // Consenso già dato: aggiorna e carica GA4 silenziosamente
      grantAnalytics();
    } else if (stored === 'denied') {
      // Consenso già negato: mantieni denied (nessuna azione)
      denyAnalytics();
    } else {
      // Prima visita: mostra il banner
      setIsVisible(true);
    }

    // Listener per riapertura da Cookie Policy / Footer
    const handleReopen = () => setIsVisible(true);
    window.addEventListener('show-cookie-banner', handleReopen);
    return () => window.removeEventListener('show-cookie-banner', handleReopen);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'granted');
    setIsVisible(false);
    grantAnalytics();
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'denied');
    setIsVisible(false);
    denyAnalytics();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <m.aside
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
          aria-label="Informativa sui cookie"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_-10px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-[#bf953f] to-[#b38728] rounded-xl flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-zinc-200 text-sm leading-relaxed">
                  Questo sito utilizza cookie tecnici e analitici per comprendere come navighi. I cookie analitici (Google Analytics 4) vengono attivati solo se fornisci il tuo consenso.{' '}
                  <Link
                    to="/cookie-policy"
                    className="text-[#FFBF00] hover:text-white transition-colors underline underline-offset-2"
                  >
                    Scopri di più
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleReject}
                className="flex-1 md:flex-none bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10 px-5 py-2.5 rounded-xl font-bold text-sm transition-all cursor-pointer text-center"
              >
                Solo necessari
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-gradient-to-r from-[#bf953f] via-[#fcf6ba] to-[#b38728] text-black px-5 py-2.5 rounded-xl font-bold text-sm hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(191,149,63,0.2)] cursor-pointer text-center"
              >
                Accetta tutti
              </button>
            </div>
          </div>
        </m.aside>
      )}
    </AnimatePresence>
  );
}
