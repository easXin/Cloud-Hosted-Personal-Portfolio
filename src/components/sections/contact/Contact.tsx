import { useState } from 'react';
import { useReveal } from '../../../hooks/useReveal';
import ContactContent from './ContactContent';
import ContactForm from './ContactForm';
import ContactLinks from './ContactLinks';

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    websiteUrl: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const apiUrl = import.meta.env.VITE_CONTACT_API_URL ?? '';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status === 'error') {
      setStatus('idle');
      setErrorMessage('');
    }
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
      setStatus('error');
      setErrorMessage('Contact service is not configured yet.');
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
          websiteUrl: form.websiteUrl,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);

          if (response.status === 429) {
            throw new Error(
              errorData?.message ||
                'This email was used recently. Please wait a few minutes before sending another message.'
            );
          }

        throw new Error(
          errorData?.message || 'Failed to submit contact form.'
        );
      }

      setStatus('success');
      setErrorMessage('');
      setForm({
        name: '',
        email: '',
        message: '',
        websiteUrl: '',
      });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <section id="contact" ref={ref} className="reveal contact-section">
      <ContactContent />
      <ContactForm
        form={form}
        status={status}
        errorMessage={errorMessage}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <ContactLinks />
    </section>
  );
}
