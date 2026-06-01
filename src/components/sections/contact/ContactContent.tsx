import { contact } from '../../../data/profile';

export default function ContactContent() {
    return (
        <>
            <div className="section-label">{contact.label}</div>
            <h2>{contact.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: contact.description }} />
        </>
    );
}
