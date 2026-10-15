import React from 'react';
import { ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { profileData, majorProjects } from '../data/portfolioData';

export default function Home({ onNavigate }) {
  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-pill">
          <span className="hero-pill-dot"></span>
          Available for PM & Strategy Roles
        </div>

        <h1 className="hero-title">
          Hi, I'm Jimmy. <br />
          <span className="hero-highlight">{profileData.headline}</span>
        </h1>

        <p className="hero-subtitle">
          Fluent in both business strategy and engineering constraints, I tackle complex, data-heavy problems to build scalable products users trust. By combining enterprise rigor with startup execution, I translate technical complexity into intuitive, high-impact user experiences.
        </p>

        <div className="hero-actions">
          <button 
            className="btn btn-primary"
            onClick={() => onNavigate('portfolio')}
          >
            View Portfolio <ArrowRight size={18} />
          </button>
          <a 
            href={`mailto:${profileData.email}`}
            className="btn btn-secondary"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Badges Strip */}
      <section className="badges-strip">
        {profileData.educationBadges.map((badge, idx) => (
          <div key={idx} className="badge-card">
            <span className="badge-title">{badge.title}</span>
            <span className="badge-sub">{badge.sub}</span>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section style={{ 
        margin: '4rem 0', 
        padding: '3rem', 
        background: 'var(--bg-surface)', 
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="section-tag">Background</div>
            <h2 className="section-title" style={{ marginBottom: '1.25rem' }}>{profileData.aboutHeading}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {profileData.aboutBio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div style={{ marginTop: '1.75rem' }}>
              <button 
                className="btn btn-secondary btn-sm"
                onClick={() => onNavigate('experience')}
              >
                View Detailed Experience Timeline →
              </button>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '320px', width: '100%' }}>
              <img 
                src="/images/profile.jpg" 
                alt="Jimmy Fleck"
                style={{ 
                  width: '100%', 
                  borderRadius: 'var(--radius-lg)', 
                  border: '2px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-lg)',
                  aspectRatio: '1/1',
                  objectFit: 'cover'
                }} 
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-12px', 
                right: '-12px', 
                background: 'var(--bg-surface-elevated)', 
                border: '1px solid var(--border-medium)',
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: '#93c5fd',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Sparkles size={16} /> Jimmy Fleck
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section style={{ margin: '4rem 0' }}>
        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="section-tag">Featured Work</div>
            <h2 className="section-title">Major Projects</h2>
          </div>
          <button 
            className="btn btn-secondary btn-sm"
            onClick={() => onNavigate('portfolio')}
          >
            Explore All Projects →
          </button>
        </div>

        <div className="projects-grid">
          {majorProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-content">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <div className="project-sub">{project.subtitle}</div>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="tag-pill">{tag}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                  >
                    {project.linkLabel} <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
