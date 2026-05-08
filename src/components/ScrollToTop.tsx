import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      let attempts = 0;
      const maxAttempts = 20; // 2 secondi totali (20 * 100ms)

      const interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          // Piccolo ritardo ulteriore per superare eventuali animazioni di ingresso
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 50);
          clearInterval(interval);
        }
        
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}
