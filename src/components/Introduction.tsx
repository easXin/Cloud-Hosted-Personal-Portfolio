export default function Introduction() {
  return (
    <section id="introduction" className="intro">
      <div className="intro-greet">// Introduction</div>
      <h1 className="intro-name">Dengxin (Eric) Wang</h1>
      <h2 className="intro-title">Software Developer — .NET &amp; Full-Stack</h2>
      <p className="intro-desc">
        Software developer with <strong>3+ years of experience</strong> building and modernizing
        enterprise applications using <strong>C#/.NET</strong>, <strong>React/TypeScript</strong>,
        and <strong>SQL Server</strong>. Current work is in a <strong>Secret-cleared environment</strong> at Leidos,
        delivering features across React frontends, ASP.NET Web APIs, and event-driven backend services
        for the Enterprise Logistics Management System (ELMS).
      </p>

      <div className="badges">
        <span className="badge">
          <span className="dot" />
          Open to new opportunities
        </span>
        <span className="badge clearance">
          <span className="dot" />
          Active Secret Clearance
        </span>
        <span className="badge">U.S. Citizen</span>
        <span className="badge">Mechanicsburg, PA</span>
      </div>

      <div className="cta-row">
        <a className="btn btn-primary" href="#contact">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          Contact me
        </a>
        <a className="btn btn-ghost" href="/myResume.pdf" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7,10 12,15 17,10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download résumé
        </a>
        <a className="btn btn-ghost" href="https://linkedin.com/in/ericxin" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3v9zM6.5 8.25A1.75 1.75 0 1 1 8.3 6.5a1.78 1.78 0 0 1-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0 0 13 14.19a.66.66 0 0 0 0 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 0 1 2.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
          </svg>
          LinkedIn
        </a>
        <a className="btn btn-ghost" href="https://github.com/easxin" target="_blank" rel="noopener">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.7.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3" />
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
}
