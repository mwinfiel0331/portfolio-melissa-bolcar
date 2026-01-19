import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard. Built with React, Node.js, and MongoDB.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/melissa-bolcar/ecommerce-platform',
      demo: 'https://demo-ecommerce.example.com',
      image: '🛍️'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team workspaces, and progress tracking.',
      tags: ['React', 'Firebase', 'Material-UI'],
      github: 'https://github.com/melissa-bolcar/task-manager',
      demo: 'https://task-manager.example.com',
      image: '✅'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard that displays current conditions, forecasts, and interactive maps using weather APIs.',
      tags: ['JavaScript', 'API Integration', 'Chart.js'],
      github: 'https://github.com/melissa-bolcar/weather-dashboard',
      demo: 'https://weather-dashboard.example.com',
      image: '🌤️'
    },
    {
      id: 4,
      title: 'Portfolio Generator',
      description: 'A tool that helps developers create and customize their portfolio websites with various templates and themes.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com/melissa-bolcar/portfolio-generator',
      demo: 'https://portfolio-gen.example.com',
      image: '🎨'
    },
    {
      id: 5,
      title: 'Blog Platform',
      description: 'A modern blogging platform with markdown support, syntax highlighting, and SEO optimization.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL'],
      github: 'https://github.com/melissa-bolcar/blog-platform',
      demo: 'https://blog.example.com',
      image: '📝'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A fitness tracking application that monitors workouts, nutrition, and progress with data visualization.',
      tags: ['React Native', 'Express', 'MySQL'],
      github: 'https://github.com/melissa-bolcar/fitness-tracker',
      demo: 'https://fitness-tracker.example.com',
      image: '💪'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects showcasing my skills and expertise
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.image}</div>
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
