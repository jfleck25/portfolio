import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Experience from './pages/Experience';

export default function App() {
  const getInitialRoute = () => {
    const path = window.location.pathname.replace(/^\/+/g, '').toLowerCase();
    if (['portfolio', 'experience'].includes(path)) {
      return path;
    }
    const hash = window.location.hash.replace(/^#\/?/g, '').toLowerCase();
    if (['portfolio', 'experience'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentRoute, setCurrentRoute] = useState(getInitialRoute);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(getInitialRoute());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (routeId) => {
    setCurrentRoute(routeId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const targetUrl = routeId === 'home' ? '/' : `/${routeId}`;
    window.history.pushState(null, '', targetUrl);
  };

  return (
    <>
      <Navbar currentRoute={currentRoute} setCurrentRoute={handleNavigate} />
      <main className="main-content">
        {currentRoute === 'home' && <Home onNavigate={handleNavigate} />}
        {currentRoute === 'portfolio' && <Portfolio onNavigate={handleNavigate} />}
        {currentRoute === 'experience' && <Experience onNavigate={handleNavigate} />}
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  );
}
