// Professional Projects Data extracted from documentation
export const projectsData = [
  {
    id: 'mynexthome',
    title: 'My Next Home POC',
    category: 'Full-Stack Application',
    description: 'A comprehensive home search and scoring platform that helps users find homes by scoring fit based on multiple criteria including affordability, commute, neighborhood quality, property characteristics, and market momentum.',
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'Prisma', 'SQLite', 'Tailwind CSS', 'JGit', 'Zod'],
    features: [
      'Intelligent scoring system with 5 subscores (Affordability, Commute, Neighborhood, Property Quality, Market Momentum)',
      'Search and compare up to 4 homes simultaneously',
      'Shortlist functionality with persistent storage',
      'Mock and real data provider architecture',
      '150+ sample listings with realistic data',
      'Responsive design for mobile and desktop'
    ],
    architecture: {
      frontend: 'Next.js 14 with React 18 and Tailwind CSS',
      backend: 'API Routes with Zod validation',
      database: 'Prisma with SQLite (POC), PostgreSQL (Production)',
      deployment: 'Vercel with Edge Functions'
    },
    businessValue: 'Helps home seekers make data-driven decisions by scoring properties across multiple dimensions, reducing decision fatigue and improving purchase confidence.',
    githubUrl: 'https://github.com/mwinfiel0331/mynexthomepoc',
    liveUrl: null,
    status: 'Completed',
    year: '2026'
  },
  {
    id: 'vcs-sync',
    title: 'Texas Instruments: Oracle Database VCS Sync Git Implementation',
    category: 'Enterprise Software',
    description: 'A distributed version control system implementation using JGit and Git to replace TI\'s outdated centralized version control system. Automates synchronization of PL/SQL revisions from Oracle Database to BitBucket repositories.',
    technologies: ['Java', 'JGit', 'Oracle Database 19c', 'PL/SQL', 'BitBucket', 'Apache NetBeans', 'Jira'],
    features: [
      'Automated Git commit creation from database revision queue',
      'Time-controlled synchronization loop (10-second intervals)',
      'Automatic repository creation when new projects detected',
      'Distributed version control for multiple development teams',
      'Integration with Oracle Advanced Queue',
      'Support for different database versions',
      'Automated branch management for dev, staging, and production'
    ],
    team: [
      'Rameen Housseini',
      'Zen Park',
      'Thanh Nguyen',
      'Akaanksh Raj Kambalimath',
      'Kaushal Bommena'
    ],
    businessValue: 'Replaces expensive closed-source solution (Gitora), provides TI with customizable open-source alternative, enables better collaboration across teams, and modernizes their development workflow.',
    sponsor: 'Texas Instruments (Melissa Bolcar)',
    status: 'Completed',
    year: '2022',
    phases: [
      {
        phase: 1,
        date: '3/25/2022',
        goals: 'Create Git commits from revision items with correct file changes, dates, and authors'
      },
      {
        phase: 2,
        date: '4/8/2022',
        goals: 'Create new remote BitBucket repositories for new projects'
      },
      {
        phase: 3,
        date: '4/18/2022',
        goals: 'Fix database package bug preventing cross-version communication'
      },
      {
        phase: 4,
        date: '4/29/2022',
        goals: 'Update PL/SQL code and incorporate additional data requirements'
      }
    ]
  },
  {
    id: 'nextbusinessidea',
    title: 'Next Business Idea',
    category: 'AI-Powered Platform',
    description: 'Find your next business idea based on market trends, competitive analysis, and opportunity scoring.',
    technologies: ['Python', 'TypeScript', 'Mermaid', 'JavaScript', 'CSS', 'Docker'],
    features: [
      'Market trend analysis',
      'Business opportunity scoring',
      'Competitive landscape visualization',
      'Idea generation based on multiple factors'
    ],
    githubUrl: 'https://github.com/mwinfiel0331/NextBusinessIdea',
    commits: 26,
    status: 'Active',
    year: '2025'
  },
  {
    id: 'jobreport',
    title: 'Job Report Mobile App',
    category: 'Mobile Application',
    description: 'An iOS/Android app that captures job measurements for field workers.',
    technologies: ['TypeScript', 'React Native'],
    features: [
      'Cross-platform mobile support (iOS/Android)',
      'Field measurement capture',
      'Job tracking and reporting'
    ],
    githubUrl: 'https://github.com/mwinfiel0331/jobreport',
    commits: 20,
    status: 'Active',
    year: '2025-2026'
  },
  {
    id: 'jobscheduling',
    title: 'Job Scheduling Portal',
    category: 'Full-Stack Application',
    description: 'Job admin and contractor portal for scheduling and management.',
    technologies: ['TypeScript', 'JavaScript', 'CSS'],
    features: [
      'Admin portal for job management',
      'Contractor portal for job viewing and updates',
      'Scheduling system',
      'Real-time updates'
    ],
    githubUrl: 'https://github.com/mwinfiel0331/jobscheduling',
    commits: 15,
    status: 'Active',
    year: '2025-2026'
  },
  {
    id: 'documentation-site',
    title: 'Documentation Portal',
    category: 'Technical Documentation',
    description: 'Centralized documentation repository for all projects with searchable content and architecture diagrams.',
    technologies: ['JavaScript', 'TypeScript', 'CSS'],
    features: [
      'Project documentation hosting',
      'Architecture diagram visualization',
      'Searchable content',
      'Markdown support'
    ],
    githubUrl: 'https://github.com/mwinfiel0331/documentation-site',
    liveUrl: 'https://documentation-site-rho.vercel.app',
    commits: 51,
    status: 'Active',
    year: '2026'
  }
];

export const presentationsData = [
  {
    id: 'app-dev-presentation',
    title: 'Application Development Initiatives 2012',
    description: 'Presentation covering three key areas: Versioning and Code Reviews, Testing, and Impact Analysis',
    topics: [
      {
        area: 'Versioning and Code Reviews',
        goals: [
          'Provide automatic versioning system for PL/SQL code',
          'Better process for code reviews',
          'Improve software quality and productivity',
          'Standard versioning across ADSIT'
        ],
        tools: ['VCS Sync (home-grown system)', 'Crucible (code review tool)'],
        benefits: [
          'Automatic code versioning from database to CVS repository',
          'Developer ability to revert to previous revisions',
          'Improved code review collaboration'
        ]
      },
      {
        area: 'Testing',
        goals: [
          'Provision framework for automated test cases',
          'Support for UI, batch loaders, and reports',
          'Reduction in testing time',
          'Improve software quality'
        ],
        accomplishments: ['Selected Worksoft as automated testing tool'],
        plans: [
          'Automate business objects and BRD test cases (pilot)',
          'Train BAs and developers on test automation (Q4)',
          'Provide unit test training for Java developers',
          'Make DB comparison process reusable'
        ]
      },
      {
        area: 'Impact Analysis',
        goals: [
          'Determine who/what is impacted by code changes',
          'Standardize and streamline the IA process'
        ],
        accomplishments: [
          'Automated database IA process',
          'Completed UI for database impact analysis'
        ],
        plans: [
          'Implement IA for Unix server code (Q3)',
          'Streamline auditing enablement process',
          'Develop automatic database cleanup process',
          'Deploy new IA process for DB and Unix (Q4)'
        ]
      }
    ],
    year: '2012',
    organization: 'ADSIT (Application Development and Support IT)'
  }
];

export const githubStats = {
  totalRepositories: 51,
  totalCommits: 616,
  totalStars: 3,
  languageBreakdown: {
    'Python': 38.55,
    'Jupyter Notebook': 24.07,
    'TypeScript': 21.39,
    'JavaScript': 3.20,
    'Astro': 3.12,
    'PowerShell': 2.72,
    'HTML': 2.26,
    'CSS': 1.18,
    'PLpgSQL': 1.17,
    'Shell': 1.15,
    'Go': 0.31,
    'MDX': 0.22,
    'Makefile': 0.22,
    'Batchfile': 0.23,
    'Mermaid': 0.11,
    'Swift': 0.05,
    'Dockerfile': 0.02
  }
};
