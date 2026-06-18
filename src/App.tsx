import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, LazyMotion, domAnimation } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
const CookieBanner = React.lazy(() => import('./components/CookieBanner'));
import ScrollToTop from './components/ScrollToTop';
import StickyWhatsApp from './components/StickyWhatsApp';
import { SpeedInsights } from "@vercel/speed-insights/react";

import HomePage from './pages/HomePage';
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const BlogPostPage = React.lazy(() => import('./pages/BlogPostPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const CookiePolicyPage = React.lazy(() => import('./pages/CookiePolicyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));
const NotFoundPage = React.lazy(() => import('./pages/NotFoundPage'));

function AnimatedRoutes() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Defer CookieBanner 2s after mount — removes it from the critical rendering path
  const [showCookie, setShowCookie] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowCookie(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-selection-bg transition-colors duration-300 flex flex-col">
        {/* WCAG 2.4.1 — Skip Link: primo elemento assoluto del DOM */}
        <SkipLink />
        <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <ScrollToTop />

          {/*
            AnimatePresence with initial={false}: skips the initial mount animation
            so the first page load is NEVER hidden behind opacity:0.
            Exit animations still work on page transitions (navigate away).
          */}
          <AnimatePresence mode="wait" initial={false}>
            {/* WCAG 2.4.1 — id="main-content" è il target del SkipLink */}
            <main
              id="main-content"
              key={location.pathname}
              className="flex-grow page-enter"
              tabIndex={-1}
            >
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-bg-primary transition-colors duration-300"><div className="w-10 h-10 border-4 border-gold-amber/20 border-t-gold-amber rounded-full animate-spin"></div></div>}>
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/progetti" element={<ProjectsPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:slug" element={<BlogPostPage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                <Route path="/termini" element={<TermsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
        </AnimatePresence>

        <Footer />
        <StickyWhatsApp />
        {showCookie && (
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        )}
        <SpeedInsights />
      </div>
    </LazyMotion>
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
