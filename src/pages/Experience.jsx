import React from 'react';
import { ArrowUpRight, Briefcase, GraduationCap, Award, Heart } from 'lucide-react';
import { profileData, experienceTimeline } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';

export default function Experience() {
  const getIconForType = (type) => {
    switch (type) {
      case 'Education':
        return <GraduationCap size={16} />;
      case 'Leadership':
        return <Award size={16} />;
      default:
        return <Briefcase size={16} />;
    }
  };

  return (
    <div className="container">
      {/* Experience Header */}
      <section style={{ padding: '2rem 0 3rem' }}>
        <div className="section-tag">Career & Education</div>
        <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: '0.8rem' }}>
          Experience
        </h1>
        <p style={{ maxWidth: '780px', fontSize: '1.15rem', color: 'var(--text-secondary)' }}>
          {profileData.legalName} — {profileData.subheadline}
        </p>
        <div style={{ marginTop: '1.25rem' }}>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
          >
            Connect on LinkedIn <ArrowUpRight size={14} />
          </a>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="timeline">
          {experienceTimeline.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker"></div>
              
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{item.role}</h3>
                  <div className="timeline-org">{item.organization}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span className="timeline-period">{item.period}</span>
                </div>
              </div>

              <ul className="timeline-bullets">
                {item.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="timeline-bullet">
                    {bullet}
                  </li>
                ))}
              </ul>
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
            <div className="section-tag">Reach Out</div>
            <h2 className="section-title">Let's build something great.</h2>
            <p className="section-subtitle">
              Interested in collaborating or learning more?
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
