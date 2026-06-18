import React from 'react';

/**
 * SkipLink — WCAG 2.4.1 (Bypass Blocks)
 *
 * Primo elemento del DOM, invisibile a schermo ma accessibile da tastiera.
 * Al focus (Tab dal browser) scende a top:1rem diventando visibile.
 * Salta direttamente a #main-content, evitando la navbar a ogni pagina.
 */
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link font-semibold shadow-lg"
    >
      Salta al contenuto principale
    </a>
  );
}
