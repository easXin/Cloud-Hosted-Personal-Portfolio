export type ProjectIcon =
| 'grid'
| 'zap'
| 'package'
| 'shield'
| 'cog'
| 'report'
| 'personal'
| 'tracker'
| 'media'
| 'default';

export type Project = {
  domain: string;
  title: string;
  description: string;
  impact: string;
  stack: string[];
  icon: ProjectIcon;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    domain: 'Enterprise Logistics',
    title: 'Inventory Workflow Enhancement',
    description:
      'End-to-end implementation of inventory-related workflow features spanning React/TypeScript state management, ASP.NET Web API integration, SQL Server data access, and event-driven backend processing.',
    impact: 'Delivered across 4+ application layers in a cleared environment.',
    stack: ['React', 'TypeScript', 'ASP.NET Web API', 'SQL Server', 'RabbitMQ'],
    icon: 'grid',
  },
  {
    domain: 'Enterprise Logistics',
    title: 'Data Retrieval Performance Tuning',
    description:
      'Refactored LINQ and Entity Framework query logic for high-volume enterprise data grids, profiling slow paths and removing redundant joins and N+1 access patterns.',
    impact: 'Grid load time reduced 80–90% (10+ s → 1–2 s).',
    stack: ['C#', 'Entity Framework', 'LINQ', 'SQL Server', 'SQL Profiler'],
    icon: 'zap',
  },
  {
    domain: 'Enterprise UI Platform',
    title: 'Shared React Component Library',
    description:
      'Designed and delivered a reusable React component contributed to a shared internal UI library, enabling reuse across multiple enterprise applications and reducing duplicated frontend work.',
    impact: 'Adopted by multiple internal applications.',
    stack: ['React', 'TypeScript', 'Kendo UI', 'CSS', 'Redux'],
    icon: 'package',
  },
  {
    domain: 'Enterprise Logistics',
    title: 'Legacy Service Maintenance',
    description:
      'Primary assigned developer for a legacy microservice. Responsible for defect resolution, service enhancements, modernization tasks, and release-cycle maintenance.',
    impact: 'Helped maintain service continuity after developer transition.',
    stack: ['C#', '.NET', 'RabbitMQ', 'Microservices'],
    icon: 'cog',
  },
  {
    domain: 'Enterprise Finance',
    title: 'Legacy Batch Processing Optimization',
    description:
      'Refactored SQL queries and batch-processing logic in a legacy financial application to remove serial bottlenecks and improve data-loading throughput.',
    impact: 'Processing latency reduced over 90% (~2 min → ~10 s).',
    stack: ['C#', 'SQL', 'ASP.NET', '.NET'],
    icon: 'zap',
  },
  {
    domain: 'Enterprise Reporting',
    title: 'ASP.NET Reporting Tool',
    description:
      'Contributed to an internal ASP.NET reporting tool integrating with enterprise data sources to support recurring reporting workflows for downstream teams.',
    impact: 'Supports recurring internal reporting workflows.',
    stack: ['C#', 'ASP.NET', 'SQL Server', 'NUnit'],
    icon: 'report',
  },
  {
    domain: 'PERSONAL PROJECT',
    title: 'Cloud-Hosted Personal Portfolio Website',
    description:
      'Developed a responsive personal portfolio website using React, TypeScript, and Vite to showcase software engineering experience, technical skills, and project work.',
    impact: 'Deployed to AWS using S3, CloudFront, Route 53, and ACM.',
    stack: [ 'React', 'TypeScript', 'Vite', 'S3', 'CloudFront', 'API Gateway', 'Lambda', 'DynamoDB', 'SES', 'Cloudflare', 'ACM'],
    icon: 'personal',
    liveUrl: 'https://easxin.dev/',
    githubUrl: 'https://github.com/easXin/Cloud-Hosted-Personal-Portfolio-Website',
  },
  {
    domain: 'EARLY PERSONAL PROJECT',
    title: 'Covid-19 Tracker',
    description:
      'Built a responsive React-based Covid-19 tracking dashboard using real-time public health data, interactive charts, and map-based country selection..',
    impact: 'Integrated public API data with chart and map visualizations.',
    stack: ['React', 'Material UI', 'Fetch API', 'React-chartjs-2', 'Firebase'],
    icon: 'tracker',
    liveUrl: 'https://covid19-tracker-6ae25.web.app/',
    githubUrl: 'https://github.com/easXin/covid-19-tracker',
  },
  {
    domain: 'EARLY PERSONAL PROJECT',
    title: 'Netflix Clone',
    description:
      'Built a React-based Netflix-style frontend application with reusable UI components, responsive layout, and Firebase Hosting deployment.',
    impact: 'Strengthened React, responsive UI, API integration, and Firebase deployment skills.',
    stack: ['React', 'JavaScript', 'CSS', 'HTML', 'Firebase'],
    icon: 'media',
    liveUrl: 'https://netflix-clone-3ace6.web.app/',
    githubUrl: 'https://github.com/easXin/netflix-app',
  },
];
