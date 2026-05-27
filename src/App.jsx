import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Team from './pages/Team';
import Demo from './pages/Demo';
import Download from './pages/Download';
import BackgroundDynamics from './components/ui/BackgroundDynamics';

// Global ScrollToTop behavior for Single Page Application routing transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant reset to allow page entrance animations to reveal from top
    });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/team" element={<Team />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  // Enforce dark mode for premium clinical aesthetic
  if (typeof document !== 'undefined') {
    document.documentElement.classList.remove('light-mode');
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <BrowserRouter>
      {/* Auto scroll-reset on route change */}
      <ScrollToTop />
      
      {/* Global Background Dynamics Backdrop */}
      <BackgroundDynamics />
      
      <div className="relative z-10 min-h-screen flex flex-col justify-between">
        <Navigation />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


