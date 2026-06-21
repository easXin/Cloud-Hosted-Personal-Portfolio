export type Bullet = { html: string };

export type Experience = {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  context: string;
  bullets: Bullet[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Developer II',
    company: 'Leidos — Enterprise Logistics Management System (ELMS)',
    location: 'Mechanicsburg, PA',
    start: 'Dec 2023',
    end: 'Present',
    context:
      'Contributed to large-scale enterprise logistics systems in a cleared environment, supporting warehouse,inventory, transportation, and supply-chain workflows through ASP.NET Core API development, React/TypeScript UIenhancements, SQL Server data-access logic, and legacy system modernization.',
    bullets: [
      {
        html: 'Designed and implemented the integration of a <strong>RabbitMQ-based event-driven workflow</strong> from a <strong>microservice</strong> into a <strong>legacy monolithic logistics application</strong>, decoupling inventory processing from existing logic and <strong>enabling asynchronous execution without disrupting legacy functionality</strong>.',
      },
      {
        html: 'Optimized inventory grid performance by building a <strong>custom WhereIn LINQ extension</strong> and pushing <strong>Entity Framework filters</strong> into <strong>SQL Server before materialization</strong>, <span class="metric">reducing grid load time from 10+ sec to 1–2 sec</span>.',
      },
      {
        html: 'Implemented <strong>Redis caching</strong> for <strong>inventory-type dropdown data</strong>, querying <strong>SQL Server only when lookup criteria changed</strong> to reduce redundant database reads and improve grid responsiveness.',
      },
      {
        html: 'Built a reusable, <strong>configuration-driven Enterprise Rollup React component</strong> with <strong>dynamic cascading filters</strong>, generalizing it into the <strong>DLMS frontend library</strong> for cross-team reuse and standardized <strong>DLMS transaction file search workflows</strong>.',
      },
      {
        html: 'Supported <strong>production stability</strong> by troubleshooting <strong>cross-layer</strong> issues across application, database, messaging, and deployment environments, using <strong>logs, debugging, and release validation to verify stable deployments</strong>.',
      },
    ],
  },
  {
    role: 'Software Engineer Contractor',
    company: 'Wiley Edge — JPMorgan Chase & Co. CIB',
    location: 'Plano, TX',
    start: 'Jul 2022',
    end: 'Mar 2023',
    context:
      'Enterprise financial applications supporting reporting, data processing, and legacy application functionality within an Agile Scrum team.',
    bullets: [
      {
        html: 'Replaced <strong>row-by-row report processing</strong> with <strong>batch-processing logic</strong> and optimized SQL queries, <strong>reducing legacy financial reporting latency by over 90% from approximately 2 minutes to 10 seconds</strong>.',
      },
      {
        html: 'Enhanced <strong>C#/ASP.NET reporting workflows</strong> using <strong>centralized data warehouse sources</strong> and automated daily report delivery through a <strong>scheduled shell script task</strong>, reducing manual effort for <strong>daily securities reporting</strong>.',
      },
      {
        html: 'Built a <strong>project-wide NUnit automated test suite</strong> for a legacy C# application, <span class="metric">increasing SonarQube coverageto 65%–70%</span> and reducing code quality and vulnerability findings to improve release readiness.',
      },
      {
        html: 'Supported <strong>UAT deployment validation</strong> through <strong>Jenkins release processes</strong>, assisting with environment checks, troubleshooting, and <strong>Docker-based runtime verification</strong>.',
      },
    ],
  },
];
