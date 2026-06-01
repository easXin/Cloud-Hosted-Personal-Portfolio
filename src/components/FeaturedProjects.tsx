import { useReveal } from '../hooks/useReveal';
import { projects, type Project } from '../data/projects';

function ProjectIcon({ name }: { name: Project['icon'] }) {
  switch (name) {
    case 'grid':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
        </svg>
      );
    case 'zap':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'package':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      );
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case 'cog':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'report':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="16" y2="17" />
          <line x1="10" y1="9" x2="9" y2="9" />
        </svg>
      );
    case 'personal':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="8" x2="21" y2="8" />
          <line x1="7" y1="6" x2="7.01" y2="6" />
          <line x1="10" y1="6" x2="10.01" y2="6" />
          <line x1="13" y1="6" x2="13.01" y2="6" />
          <path d="M15 13l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" />
        </svg>
      );
    case 'tracker':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h4l2-4 3 8 2-4h7" />
          <path d="M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9" />
          <path d="M12 3c-2.5 2.5-3.5 5.5-3.5 9s1 6.5 3.5 9" />
        </svg>
      );
  }
}

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
