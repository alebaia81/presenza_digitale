import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';
import StickyWhatsApp from './components/StickyWhatsApp';

const HomePage = React.lazy(() => import('./pages/HomePage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = React.lazy(() => import('./pages/CookiePolicyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));

function AnimatedRoutes() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-indigo-500/30">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <ScrollToTop />
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#050505]"><div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div></div>}>
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/progetti" element={<ProjectsPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/termini" element={<TermsPage />} />
            </Routes>
          </Suspense>
        </motion.div>
      </AnimatePresence>

      <Footer />
      <StickyWhatsApp />
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
