import { useState } from 'react';
import { useReveal } from '../../../hooks/useReveal';

export default function Contact() {
    const ref = useReveal<HTMLElement>();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    companyWebsite: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const apiUrl = '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (!form.name.trim()) {
      setStatus('error');
      setErrorMessage('Please add your name before sending.');
      return;
    }

    if (!isValidEmail(form.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (form.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a message with at least 10 characters.');
      return;
    }

    if (!apiUrl) {
      setStatus('loading');

      window.setTimeout(() => {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          message: '',
          companyWebsite: '',
        });
      }, 700);

      return;
    }

    try {
      setStatus('loading');

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          companyWebsite: form.companyWebsite,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form.');
      }

      setStatus('success');
      setForm({
        name: '',
        email: '',
        message: '',
        companyWebsite: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };
  return (
    <section id="contact" ref={ref} className="reveal contact-section">
      <div className="section-label">05 — Contact</div>
      <h2>Get in touch</h2>
      <p>
        Open to full-stack <strong style={{ color: 'var(--text)' }}>.NET developer</strong> roles —
        cleared and commercial. The fastest way to reach me is email; I respond within one business day.
      </p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyWebsite"
          value={form.companyWebsite}
          onChange={handleChange}
          className="honeypot"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            maxLength={80}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            maxLength={120}
          />
        </div>

        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          maxLength={1000}
          rows={5}
        />

        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="form-success">
            Message sent successfully. I&apos;ll get back to you soon.
          </p>
        )}

        {status === 'error' && (
          <p className="form-error">
            {errorMessage}
          </p>
        )}
      </form>
      <div className="contact-links">
        <a className="btn btn-ghost" href="mailto:eric.xinw1@gmail.com">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          eric.xinw1@gmail.com
        </a>
        <a className="btn btn-ghost" href="https://linkedin.com/in/ericxin" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
          linkedin.com/in/ericxin
        </a>
        <a className="btn btn-ghost" href="https://github.com/easxin" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.7.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
          </svg>
          github.com/easxin
        </a>
        <a className="btn btn-ghost" href="/myResume.pdf" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Résumé (PDF)
        </a>
      </div>
    </section>
  );
}
