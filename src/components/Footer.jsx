import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import { profileData } from '../data/portfolioData';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div style={{ 
          marginBottom: '2.5rem', 
          padding: '2.5rem', 
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.04) 100%)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '0.4rem', color: '#fff' }}>
              Let's build something great.
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              Interested in collaborating or learning more about my work?
            </p>
          </div>
          <a 
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="footer-content">
          <div className="footer-text">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </div>

          <div className="footer-socials">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-btn"
              title="GitHub"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="social-icon-btn"
              title="Email"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
