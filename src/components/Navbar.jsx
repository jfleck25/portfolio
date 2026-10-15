import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function Navbar({ currentRoute, setCurrentRoute }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setCurrentRoute(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', id === 'home' ? '/' : `/${id}`);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div 
          className="brand-logo" 
          onClick={() => handleNavClick('home')}
          style={{ cursor: 'pointer' }}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Jimmy Fleck" 
            className="brand-avatar"
          />
          <span>Jimmy Fleck</span>
        </div>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${currentRoute === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-item"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            LinkedIn <ArrowUpRight size={14} />
          </a>
        </nav>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
