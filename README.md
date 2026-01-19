# Melissa Bolcar - Portfolio

A modern, responsive single-page portfolio website built with React and Vite.

## Features

- 🎨 Modern, responsive design
- 📊 GitHub statistics integration
- 💼 Project showcase with live demos and code links
- 📚 Detailed case studies
- 📄 Resume download functionality
- 📱 Mobile-friendly navigation
- ✨ Smooth animations and transitions

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** CSS3 with CSS Variables
- **Icons:** React Icons
- **API Integration:** GitHub REST API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/melissa-bolcar/portfolio.git
cd portfolio-melissa-bolcar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:3000`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Customization

### Update Personal Information

1. **GitHub Username**: Update the username in [src/components/GitHubStats.jsx](src/components/GitHubStats.jsx)
2. **Social Links**: Update links in [src/components/Hero.jsx](src/components/Hero.jsx) and [src/components/Contact.jsx](src/components/Contact.jsx)
3. **Projects**: Modify the projects array in [src/components/Projects.jsx](src/components/Projects.jsx)
4. **Case Studies**: Update case studies in [src/components/CaseStudies.jsx](src/components/CaseStudies.jsx)
5. **Resume**: Add your resume PDF to the `public` folder as `resume.pdf`

### Styling

The color scheme can be customized by modifying CSS variables in [src/index.css](src/index.css):

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... other variables */
}
```

## Project Structure

```
portfolio-melissa-bolcar/
├── public/
│   └── resume.pdf          # Your resume file
├── src/
│   ├── components/
│   │   ├── About.jsx       # About section
│   │   ├── CaseStudies.jsx # Case studies section
│   │   ├── Contact.jsx     # Contact form
│   │   ├── Footer.jsx      # Footer component
│   │   ├── GitHubStats.jsx # GitHub statistics
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section
│   │   └── Projects.jsx    # Projects showcase
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Features Detail

### GitHub Stats
- Automatically fetches real-time statistics from GitHub API
- Displays repositories, stars, forks, and followers
- Fallback to demo data if API is unavailable

### Projects
- Showcases featured projects with descriptions
- Links to GitHub repositories and live demos
- Technology tags for each project

### Case Studies
- Expandable/collapsible detailed case studies
- Includes challenge, solution, and results
- Technologies used for each project

### Contact Form
- Functional contact form with validation
- Social media links
- Direct email integration

## Deployment

This site can be deployed to various platforms:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## License

MIT License - feel free to use this template for your own portfolio!

## Contact

Melissa Bolcar - melissa@example.com

Portfolio: [https://melissa-bolcar.dev](https://melissa-bolcar.dev)

GitHub: [@melissa-bolcar](https://github.com/melissa-bolcar)
