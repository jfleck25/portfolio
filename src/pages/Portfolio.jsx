import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import { profileData, majorProjects, sideProjects } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';

export default function Portfolio() {
  return (
    <div className="container">
      {/* Portfolio Header */}
      <section style={{ padding: '2rem 0 3rem' }}>
        <div className="section-tag">Case Studies & Applications</div>
        <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: '0.8rem' }}>
          Portfolio
        </h1>
        <p style={{ maxWidth: '720px', fontSize: '1.15rem' }}>
          A collection of product leadership initiatives, AI systems, and full-stack software built to solve real-world problems.
        </p>
      </section>

      {/* Major Projects */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="section-header">
          <div className="section-tag">Flagship Work</div>
          <h2 className="section-title">Major Projects</h2>
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

      {/* Side Projects */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="section-header">
          <div className="section-tag">Experiments & Tools</div>
          <h2 className="section-title">Side Projects</h2>
          <p className="section-subtitle">
            Curiosities, utilities, and applications built across coffee, data tracking, and productivity.
          </p>
        </div>

        <div className="side-projects-grid">
          {sideProjects.map((proj, idx) => (
            <div key={idx} className="side-project-card">
              <div>
                <div className="side-project-meta">
                  <span className="side-project-cat">{proj.category}</span>
                  <span className="side-project-year">{proj.year}</span>
                </div>
                <h3 className="side-project-title">{proj.title}</h3>
                <p className="side-project-desc">{proj.description}</p>
              </div>
              <div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                >
                  {proj.type === 'GitHub' ? <GithubIcon size={15} /> : <ExternalLink size={15} />}
                  View {proj.type}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded Contact Section */}
      <section style={{ 
        margin: '5rem 0', 
        padding: '3rem', 
        background: 'var(--bg-surface)', 
        border: '1px solid var(--border-subtle)',
        borderRadius: 'var(--radius-lg)' 
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div className="section-tag">Let's Connect</div>
            <h2 className="section-title">Let's build something great.</h2>
            <p className="section-subtitle">
              Interested in collaborating, hiring, or learning more? Drop me a message below.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
