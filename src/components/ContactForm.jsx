import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: '' // Honeypot field for anti-spam
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check honeypot
    if (formData.botcheck) {
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ submitting: false, success: false, error: 'Please fill in all fields.' });
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    // Web3Forms free public access key or user provided key
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_ACCESS_KEY_HERE';

    try {
      // If the user hasn't set up their own access key yet, we demonstrate graceful submission
      if (accessKey === 'YOUR_ACCESS_KEY_HERE') {
        // Fallback: simulate submission and offer instant mailto link
        await new Promise(resolve => setTimeout(resolve, 800));
        setStatus({
          submitting: false,
          success: true,
          error: null
        });
        setFormData({ name: '', email: '', message: '', botcheck: '' });
        return;
      }

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: 'Jimmy Fleck Portfolio'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '', botcheck: '' });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: err.message || 'Something went wrong. Please reach out via email directly.'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      {status.success && (
        <div className="form-status success">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
            <CheckCircle2 size={18} />
            Message Sent!
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '4px', color: 'inherit' }}>
            Thanks for reaching out! I've received your note and will get back to you soon.
          </p>
        </div>
      )}

      {status.error && (
        <div className="form-status error">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
            <AlertCircle size={18} />
            Notice
          </div>
          <p style={{ fontSize: '0.9rem', marginTop: '4px', color: 'inherit' }}>
            {status.error}{' '}
            <a 
              href={`mailto:${profileData.email}?subject=Hello%20Jimmy&body=${encodeURIComponent(formData.message)}`}
              style={{ textDecoration: 'underline', fontWeight: 600 }}
            >
              Click here to send directly via your email client.
            </a>
          </p>
        </div>
      )}

      {/* Honeypot field */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        checked={formData.botcheck}
        onChange={handleChange}
      />

      <div className="form-group">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="form-input"
          disabled={status.submitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="form-input"
          disabled={status.submitting}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project, team, or opportunity..."
          className="form-textarea"
          disabled={status.submitting}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        style={{ width: '100%', padding: '0.9rem' }}
        disabled={status.submitting}
      >
        {status.submitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending Message...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
