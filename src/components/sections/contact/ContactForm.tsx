type ContactFormState = {
    name: string;
    email: string;
    message: string;
    companyWebsite: string;
};

type ContactFormStatus = 'idle' | 'loading' | 'success' | 'error';

type ContactFormProps = {
    form: ContactFormState;
    status: ContactFormStatus;
    errorMessage: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function ContactForm({
    form,
    status,
    errorMessage,
    onChange,
    onSubmit,
}: ContactFormProps) {
    return (
    <form className="contact-form" onSubmit={onSubmit}>
        <input
            type="text"
            name="companyWebsite"
            value={form.companyWebsite}
            onChange={onChange}
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
            onChange={onChange}
            maxLength={80}
            />

            <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={onChange}
            maxLength={120}
            />
        </div>

        <textarea
            name="message"
            placeholder="Your message"
            value={form.message}
            onChange={onChange}
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
  );
}