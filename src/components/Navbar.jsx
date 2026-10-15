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
    { label: 'Home', id: 'home', href: '/' },
    { label: 'Portfolio', id: 'portfolio', href: '/portfolio' },
    { label: 'Experience', id: 'experience', href: '/experience' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setCurrentRoute(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', id === 'home' ? '/' : `/${id}`);
  };

  return (
    <header className={`navbar-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a 
          href="/"
          className="brand-logo" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img 
            src="/images/profile.jpg" 
            alt="Jimmy Fleck" 
            className="brand-avatar"
          />
          <span>Jimmy Fleck</span>
        </a>

        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`nav-item ${currentRoute === item.id ? 'active' : ''}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
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
