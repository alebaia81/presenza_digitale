import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { Buffer } from 'buffer';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

// Polyfill for gray-matter/buffer in browser
window.Buffer = Buffer;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
