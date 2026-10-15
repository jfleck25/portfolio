import React from 'react';
import { Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/Icons';
import { profileData } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="container">
      {/* Header */}
      <section style={{ padding: '2rem 0 3rem' }}>
        <div className="section-tag">Get in Touch</div>
        <h1 className="hero-title" style={{ fontSize: '2.8rem', marginBottom: '0.8rem' }}>
          Contact {profileData.legalName} ("Jimmy")
        </h1>
        <p style={{ maxWidth: '720px', fontSize: '1.15rem' }}>
          Feel free to reach out to me using the form below. I’m always open to new opportunities, collaborations, or questions about my work. I look forward to hearing from you!
        </p>
      </section>

      {/* Contact Grid */}
      <section style={{ marginBottom: '5rem' }}>
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem', color: '#fff' }}>
                Contact Information
              </h3>
              <p style={{ fontSize: '0.95rem' }}>
                Whether you have a product question, an AI idea, or a career opportunity, feel free to drop a line.
              </p>
            </div>

            <a 
              href={`mailto:${profileData.email}`}
              className="contact-channel"
            >
              <div className="contact-icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  Email
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  {profileData.email}
                </div>
              </div>
            </a>

            <a 
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <div className="contact-icon-box">
                <LinkedinIcon size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  LinkedIn
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>in/james-fleck</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </a>

            <a 
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel"
            >
              <div className="contact-icon-box">
                <GithubIcon size={20} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  GitHub
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span>github.com/jfleck25</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </a>

            <div className="contact-channel">
              <div className="contact-icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
                  Location
                </div>
                <div style={{ fontSize: '1rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                  Denver, CO & Boston, MA
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.25rem', color: '#fff' }}>
              Send a Direct Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
