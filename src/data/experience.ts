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
      'Large-scale enterprise logistics platform supporting government and defense-related operational workflows in a cleared environment. Responsibilities span API development, legacy modernization, React/TypeScript UI work, and SQL Server data-access logic.',
    bullets: [
      {
        html: 'Implemented <strong>end-to-end inventory workflow enhancements</strong> across multiple enterprise logistics applications, spanning React/TypeScript state management, ASP.NET Web API integration, SQL Server data access, and event-driven backend processing across <strong>4+ application layers</strong>.',
      },
      {
        html: 'Refactored LINQ and Entity Framework query logic to optimize enterprise data retrieval, <span class="metric">reducing grid load time by 80–90% (10+ seconds to 1–2 seconds)</span>.',
      },
      {
        html: 'Improved reliability of complex <strong>React/TypeScript</strong> and <strong>Kendo UI</strong> workflows by preserving user selections across grid interactions and refresh, reducing selection-loss issues in multi-step processes.',
      },
      {
        html: 'Served as the <strong>primary assigned developer</strong> for a legacy microservice, owning defect resolution, enhancements, modernization tasks, and production-readiness improvements across multiple release cycles.',
      },
      {
        html: 'Designed and delivered a <strong>reusable React component</strong> for a shared UI component library, reducing duplicated frontend implementation effort across internal applications.',
      },
      {
        html: 'Supported <strong>root-cause analysis</strong> for integration and deployment issues by collaborating with senior developers, QA, and DevOps across frontend, backend, database, and deployment layers.',
      },
      {
        html: 'Used AI-assisted tools (<strong>Claude Code</strong>, <strong>Sourcegraph Cody</strong>) to accelerate legacy code analysis, debugging, and implementation planning while manually reviewing and testing every change before delivery.',
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
        html: 'Improved legacy application data-loading performance by refactoring SQL queries and batch-processing logic, <span class="metric">reducing processing latency by over 90% (~2 minutes to ~10 seconds)</span>.',
      },
      {
        html: 'Contributed to an <strong>ASP.NET reporting tool</strong> in C# integrating with enterprise data sources to support recurring internal reporting workflows for downstream teams.',
      },
      {
        html: 'Added <strong>NUnit test coverage</strong> across multiple applications to improve regression coverage, support code-quality validation, and strengthen reliability across release cycles.',
      },
    ],
  },
];
