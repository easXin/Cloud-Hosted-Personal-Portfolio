import { useReveal } from '../hooks/useReveal';
import { experiences } from '../data/experience';

export default function WorkExperience() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="experience" ref={ref} className="reveal">
      <div className="section-label">03 — Work Experience</div>
      <h2 className="section-title">Work experience</h2>
      <p className="section-sub">
        Roles delivering production .NET and full-stack work in enterprise environments.
      </p>
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
    </section>
  );
}
