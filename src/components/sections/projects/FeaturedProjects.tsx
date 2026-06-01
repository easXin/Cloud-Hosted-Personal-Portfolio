import { useReveal } from '../../../hooks/useReveal';
import { projects } from '../../../data/projects';
import ProjectIcon from './ProjectIcon';

export default function FeaturedProjects() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="projects" ref={ref} className="reveal">
      <div className="section-label">04 — Featured Projects</div>
      <h2 className="section-title">Featured projects</h2>
      <p className="section-sub">
        Selected enterprise software work from Leidos and JPMorgan Chase, plus a personal AWS-hosted portfolio project demonstrating React, TypeScript, Vite, and cloud deployment. Details are limited to publicly shareable information.
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <div className="project-head">
              <div className="project-icon">
                <ProjectIcon name={p.icon} />
              </div>
              <div className="project-domain">{p.domain}</div>
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-impact">↗ {p.impact}</div>
            {(p.liveUrl || p.githubUrl) && (
            <div className="project-links">
              {p.liveUrl && (
                <a href={p.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              )}

              {p.githubUrl && (
                <a href={p.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          )}
            <div className="project-stack">
              {p.stack.map((s) => (
                <span key={s} className="stack-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
