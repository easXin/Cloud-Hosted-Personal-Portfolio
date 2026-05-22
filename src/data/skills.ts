export type SkillCategory = {
  title: string;
  icon: 'code' | 'monitor' | 'server' | 'database' | 'layers' | 'tool';
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'code',
    items: ['C#', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'Python'],
  },
  {
    title: 'Frontend',
    icon: 'monitor',
    items: ['React', 'TypeScript', 'Kendo UI', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend',
    icon: 'server',
    items: [
      'ASP.NET Web API',
      'Entity Framework',
      'LINQ',
      'REST APIs',
      'RabbitMQ',
      '.NET Core',
    ],
  },
  {
    title: 'Databases',
    icon: 'database',
    items: ['SQL Server', 'PostgreSQL', 'T-SQL', 'Query Optimization'],
  },
  {
    title: 'Architecture',
    icon: 'layers',
    items: ['Microservices', 'Modular Monoliths', 'Event-Driven', 'REST'],
  },
  {
    title: 'Tools & DevOps',
    icon: 'tool',
    items: [
      'Git',
      'Azure DevOps',
      'CI/CD',
      'Swagger',
      'Postman',
      'SonarQube',
      'NUnit',
      'Claude Code',
      'Sourcegraph Cody',
    ],
  },
];
