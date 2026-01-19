# Interactive Professional Portfolio - Feature Documentation

## Overview
This portfolio now includes an interactive data portal showcasing your professional projects, presentations, and GitHub metrics from multiple datasets.

## New Features

### 1. Enhanced GitHub Metrics Dashboard
**Location:** `src/components/EnhancedGitHubStats.jsx`

Displays comprehensive analytics from your GitHub metrics.json:
- **User Profile Card**: Shows avatar, name, and account details
- **Statistics Overview**:
  - 51 Total Repositories
  - 616 Total Commits
  - 3 Stars across all projects
  - 17 Programming languages used
- **Language Distribution Chart**: Interactive bar chart showing percentage breakdown
  - Python: 38.55%
  - Jupyter Notebook: 24.07%
  - TypeScript: 21.39%
  - And 14 more languages
- **Recent Repositories Grid**: Shows your 6 most recently updated projects
- **Code Composition Summary**: Visual breakdown of top 6 languages

**Features:**
- Hover effects on language bars
- Color-coded language indicators
- Real-time repository stats (commits, stars, forks)
- Links to GitHub profile

### 2. Interactive Project Portfolio
**Location:** `src/components/InteractivePortfolio.jsx`

A comprehensive showcase of your professional projects:

**Projects Included:**
1. **My Next Home POC** (2026)
   - Full-stack home search and scoring platform
   - Tech: Next.js 14, React 18, TypeScript, Prisma, Tailwind CSS
   - Features intelligent scoring across 5 dimensions
   - Includes C4 architecture diagrams information

2. **Texas Instruments: Oracle Database VCS Sync Git Implementation** (2022)
   - Enterprise version control migration project
   - Tech: Java, JGit, Oracle Database 19c, PL/SQL
   - Team of 5 developers
   - Includes project phases timeline
   - Business value: Replaced expensive closed-source solution

3. **Next Business Idea** (2025)
   - AI-powered business opportunity platform
   - Tech: Python, TypeScript, Docker

4. **Job Report Mobile App** (2025-2026)
   - Cross-platform field measurement app
   - Tech: TypeScript, React Native

5. **Job Scheduling Portal** (2025-2026)
   - Admin and contractor management system
   - Tech: TypeScript, JavaScript, CSS

6. **Documentation Portal** (2026)
   - Live at https://documentation-site-rho.vercel.app
   - Centralized technical documentation

**Interactive Features:**
- **Tabbed Navigation**: Switch between "Projects" and "Presentations"
- **Category Filtering**: Filter projects by type
  - All Projects
  - Full-Stack Application
  - Enterprise Software
  - AI-Powered Platform
  - Mobile Application
  - Technical Documentation
- **Project Cards**: Click any project to see detailed modal
- **Detailed Modal View** shows:
  - Full project description
  - Business value proposition
  - Complete technology stack
  - Key features list
  - System architecture breakdown
  - Project phases/timeline
  - Team members
  - Links to GitHub and live sites

**Presentation Archive:**
- Application Development Initiatives 2012
  - Versioning & Code Reviews (VCS Sync, Crucible)
  - Testing (Worksoft automation)
  - Impact Analysis (Database and Unix)

### 3. Project Data Structure
**Location:** `src/data/projectsData.js`

Centralized data storage containing:
- Complete project metadata
- Technology stacks
- Business value descriptions
- Architecture details
- Team information
- GitHub statistics
- Presentation content

## Data Sources Integrated

### From Documents:
1. **presentation(1).txt**: Application development presentation content
2. **Architecture - My Next Home POC.pdf**: Complete C4 architecture, scoring rules, deployment strategy
3. **Project_Proposal - With Signature Fields.pdf**: VCS Sync project details, team, phases, risks
4. **metrics.json**: Real GitHub statistics for all 51 repositories

### Metrics Data:
- Total Commits: 616
- Total Repositories: 51
- Languages: 17 different programming languages
- Code Distribution: ~8.2 MB of code across all languages
- Repository dates, descriptions, and links
- Commit counts by language

## How to Use

### Development Mode:
```bash
npm run dev
```

### Build for Production:
```bash
npm run build
npm run preview
```

### Navigate the Portfolio:
1. **Hero Section**: Landing page
2. **About**: Personal introduction
3. **Enhanced GitHub Stats**: Comprehensive metrics dashboard
4. **Interactive Portfolio**: Project and presentation showcase
5. **Projects**: Original project grid
6. **Case Studies**: Detailed case studies
7. **Contact**: Contact information

## Customization

### Adding New Projects:
Edit `src/data/projectsData.js` and add to the `projectsData` array:

```javascript
{
  id: 'unique-id',
  title: 'Project Name',
  category: 'Category Name',
  description: 'Description...',
  technologies: ['Tech1', 'Tech2'],
  features: ['Feature 1', 'Feature 2'],
  businessValue: 'Business impact...',
  githubUrl: 'https://github.com/...',
  status: 'Active', // or 'Completed', 'In Progress'
  year: '2026'
}
```

### Adding Presentations:
Edit `src/data/projectsData.js` and add to the `presentationsData` array.

### Updating GitHub Metrics:
Replace `src/data/metrics.json` with new metrics data following the same structure.

## Styling

All components have dedicated CSS files:
- `InteractivePortfolio.css`: Project portfolio styling
- `EnhancedGitHubStats.css`: GitHub metrics dashboard styling

Color scheme:
- Primary gradient: Purple (#667eea to #764ba2)
- GitHub theme: Blue (#1e3a8a to #3b82f6)
- Accents: Language-specific colors

## Responsive Design

All components are fully responsive:
- Desktop: Grid layouts, multi-column displays
- Tablet: Adjusted grid columns
- Mobile: Single column, optimized touch interactions

## Future Enhancements

Potential additions:
- Skills visualization from Tech Ladder data
- Interactive timeline of career progression
- Project comparison tool
- Search functionality
- Dark mode toggle
- Export capabilities (PDF resume generation)

## Credits

Built with:
- React 18
- Vite
- React Icons
- CSS3 with modern features

Data sources:
- GitHub API metrics
- Professional documentation archives
- Project architecture diagrams
- Presentation materials
