import { useReveal } from '../hooks/useReveal';

const points: { title: string; body: string }[] = [
  {
    title: 'Active Secret Clearance',
    body: 'Currently held and in good standing. U.S. Citizen. Eligible for cleared roles without additional sponsorship.',
  },
  {
    title: 'Government Logistics Domain',
    body: 'Two years of full-time work on the Enterprise Logistics Management System (ELMS), a large-scale platform supporting government and defense-related operational workflows.',
  },
  {
    title: 'Cleared Development Workflow',
    body: 'Experience working within secure development environments, internal tooling, controlled deployment pipelines, and coordinated release cycles common to cleared programs.',
  },
  {
    title: 'Cross-Team Collaboration',
    body: 'Regularly collaborate with senior developers, QA, and DevOps on integration, deployment, and production-readiness across frontend, backend, database, and infrastructure layers.',
  },
];

export default function ClearanceExperience() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="clearance" ref={ref} className="reveal clearance-section">
      <div className="section-label">05 — Clearance &amp; Government Experience</div>
      <h2 className="section-title">Clearance &amp; government logistics experience</h2>
      <p className="section-sub">
        Relevant context for cleared and government-adjacent roles.
      </p>

      <div className="clearance-card">
        <div className="clearance-head">
          <div className="clearance-shield">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <polyline points="9 12 11 14 15 10" />
            </svg>
          </div>
          <div>
            <div className="clearance-title">Active U.S. Secret Security Clearance</div>
            <div className="clearance-sub">U.S. CITIZEN · IN GOOD STANDING</div>
          </div>
        </div>

        <div className="clearance-body">
          <p>
            At <strong>Leidos</strong>, I work on the <strong>Enterprise Logistics Management System (ELMS)</strong>,
            a large-scale platform supporting <strong>government and defense-related operational workflows</strong> in
            a cleared environment. Day-to-day responsibilities span API development, legacy system modernization,
            React/TypeScript UI delivery, and SQL Server data-access logic across the ELMS application suite.
          </p>
          <p>
            This includes end-to-end ownership of inventory-related workflow enhancements across multiple
            applications, performance tuning of high-volume enterprise data grids, and primary developer
            responsibility for a legacy microservice through ongoing modernization.
          </p>
        </div>

        <div className="clearance-points">
          {points.map((p) => (
            <div key={p.title} className="clearance-point">
              <div className="clearance-point-head">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {p.title}
              </div>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
