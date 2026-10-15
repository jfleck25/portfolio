import React from 'react';
import { ArrowUpRight, Briefcase, GraduationCap, Award } from 'lucide-react';
import { profileData, experienceTimeline } from '../data/portfolioData';

export default function Experience() {
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
    </div>
  );
}
