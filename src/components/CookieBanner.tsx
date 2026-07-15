import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const COOKIE_CONSENT_KEY = 'cookie_consent';
const CONSENT_EXPIRY_MS = 365 * 24 * 60 * 60 * 1000; // 12 mesi

function isConsentValid(): boolean {
  const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!stored) return false;
  try {
    const { timestamp } = JSON.parse(stored);
    return Date.now() - timestamp < CONSENT_EXPIRY_MS;
  } catch {
    return false;
  }
}

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isConsentValid()) {
      setIsVisible(true);
    }

    const handleShowBanner = () => {
      setIsVisible(true);
    };

    window.addEventListener('show-cookie-banner', handleShowBanner);
    return () => {
      window.removeEventListener('show-cookie-banner', handleShowBanner);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ timestamp: Date.now(), accepted: true })
    );
    setIsVisible(false);

    // Attiva Google Analytics dopo il consenso esplicito
    if (typeof (window as any).initGA === 'function') {
      (window as any).initGA();
    }
  };

  const handleReject = () => {
    localStorage.setItem(
      COOKIE_CONSENT_KEY,
      JSON.stringify({ timestamp: Date.now(), accepted: false })
    );
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
          aria-label="Informativa sui cookie"
        >
          <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 shadow-[0_-10px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-[#bf953f] to-[#b38728] rounded-xl flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="text-zinc-200 text-sm leading-relaxed">
                  Questo sito utilizza esclusivamente <strong className="text-white">cookie tecnici</strong> necessari al corretto funzionamento. Non utilizziamo cookie di profilazione né strumenti di tracciamento.{' '}
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
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
