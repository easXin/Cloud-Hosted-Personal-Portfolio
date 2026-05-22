export type Project = {
  domain: string;
  title: string;
  description: string;
  impact: string;
  stack: string[];
  icon: 'grid' | 'zap' | 'package' | 'shield' | 'cog' | 'report';
};

export const projects: Project[] = [
  {
    domain: 'Leidos · ELMS',
    title: 'Inventory Workflow Enhancement',
    description:
      'End-to-end implementation of inventory-related workflow features spanning React/TypeScript state management, ASP.NET Web API integration, SQL Server data access, and event-driven backend processing.',
    impact: 'Delivered across 4+ application layers in a cleared environment.',
    stack: ['React', 'TypeScript', 'ASP.NET Web API', 'SQL Server', 'RabbitMQ'],
    icon: 'grid',
  },
  {
    domain: 'Leidos · ELMS',
    title: 'Data Retrieval Performance Tuning',
    description:
      'Refactored LINQ and Entity Framework query logic for high-volume enterprise data grids, profiling slow paths and removing redundant joins and N+1 access patterns.',
    impact: 'Grid load time reduced 80–90% (10+ s → 1–2 s).',
    stack: ['C#', 'Entity Framework', 'LINQ', 'SQL Server'],
    icon: 'zap',
  },
  {
    domain: 'Leidos · ELMS',
    title: 'Shared React Component Library',
    description:
      'Designed and delivered a reusable React component contributed to a shared internal UI library, enabling reuse across multiple enterprise applications and reducing duplicated frontend work.',
    impact: 'Adopted by multiple internal applications.',
    stack: ['React', 'TypeScript', 'Kendo UI', 'CSS'],
    icon: 'package',
  },
  {
    domain: 'Leidos · ELMS',
    title: 'Legacy Microservice Ownership',
    description:
      'Primary assigned developer for a legacy microservice. Responsible for defect resolution, service enhancements, modernization tasks, and production-readiness improvements across multiple release cycles.',
    impact: 'Sustained ownership across multiple release cycles.',
    stack: ['C#', '.NET', 'RabbitMQ', 'Microservices'],
    icon: 'cog',
  },
  {
    domain: 'JPMorgan Chase · CIB',
    title: 'Legacy Batch Processing Optimization',
    description:
      'Refactored SQL queries and batch-processing logic in a legacy financial application to remove serial bottlenecks and improve data-loading throughput.',
    impact: 'Processing latency reduced over 90% (~2 min → ~10 s).',
    stack: ['C#', 'SQL', 'ASP.NET', '.NET'],
    icon: 'zap',
  },
  {
    domain: 'JPMorgan Chase · CIB',
    title: 'ASP.NET Reporting Tool',
    description:
      'Contributed to an internal ASP.NET reporting tool integrating with enterprise data sources to support recurring reporting workflows for downstream teams.',
    impact: 'Supports recurring internal reporting workflows.',
    stack: ['C#', 'ASP.NET', 'SQL Server', 'NUnit'],
    icon: 'report',
  },
];
