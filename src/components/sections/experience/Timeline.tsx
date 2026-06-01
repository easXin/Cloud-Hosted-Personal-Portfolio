import { experiences } from '../../../data/experience';

export default function Timeline() {
    return (
        <div className="timeline">
            {experiences.map((exp) => (
                <div key={exp.company} className="exp-item">
                    <div className="exp-dot" />
                    <div className="exp-card">
                        <div className="exp-head">
                            <div>
                                <div className="exp-role">{exp.role}</div>
                                <div className="exp-company">{exp.company}</div>
                            </div>
                            <div className="exp-meta">
                                {exp.start.toUpperCase()} — {exp.end.toUpperCase()}
                                <br />
                                {exp.location.toUpperCase()}
                            </div>
                        </div>
                        <div className="exp-context">{exp.context}</div>
                        <ul className="exp-bullets">
                            {exp.bullets.map((b, i) => (
                                <li key={i} dangerouslySetInnerHTML={{ __html: b.html }} />
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}