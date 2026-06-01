import { contactRow } from '../../../data/contact';
import ContactIcon from '../contact/ContactIcon';

export default function ContactRow() {
    return (
        <div className="cta-row">
            {contactRow.map((c,idx) => (
                <a
                    className={`btn ${c.icon === 'email' ? 'btn-primary' : 'btn-ghost'}`}
                    href={ c.icon === 'email' ? '#contact' :c.toHref}
                    key={idx}
                    target="_blank"
                    rel="noopener">
                        <ContactIcon name={c.icon} />
                    {c.text}
                </a>
            ))}
        </div>
    );
}
