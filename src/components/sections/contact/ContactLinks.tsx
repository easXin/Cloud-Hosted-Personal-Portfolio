import { contact } from '../../../data/contact';
import ContactIcon from './ContactIcon';

export default function ContactLinks() {
    return (
        <div className="contact-links">
            {contact.map((c,idx) => (
                <a className="btn btn-ghost" href={c.toHref} key={idx} target="_blank" rel="noopener noreferrer">
                    <ContactIcon name={c.icon} />
                    {c.info}
                </a>
            ))}
        </div>
    );
}