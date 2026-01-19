import { useState } from 'react';
import { projectsData, presentationsData } from '../data/projectsData';
import './InteractivePortfolio.css';

const InteractivePortfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('projects');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = ['all', ...new Set(projectsData.map(p => p.category))];

  const filteredProjects = filterCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filterCategory);

  const ProjectCard = ({ project }) => (
    <div className="project-card" onClick={() => setSelectedProject(project)}>
      <div className="project-card-header">
        <h3>{project.title}</h3>
        <span className="project-category">{project.category}</span>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-meta">
        <span className="project-year">{project.year}</span>
        <span className={`project-status status-${project.status.toLowerCase()}`}>
          {project.status}
        </span>
      </div>
      <div className="project-tech-preview">
        {project.technologies.slice(0, 3).map((tech, idx) => (
          <span key={idx} className="tech-tag">{tech}</span>
        ))}
        {project.technologies.length > 3 && (
          <span className="tech-more">+{project.technologies.length - 3} more</span>
        )}
      </div>
    </div>
  );

  const ProjectDetailModal = ({ project, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="modal-meta">
            <span className="project-category">{project.category}</span>
            <span className="project-year">{project.year}</span>
            <span className={`project-status status-${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          </div>
        </div>

        <div className="modal-body">
          <section className="detail-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </section>

          {project.businessValue && (
            <section className="detail-section business-value">
              <h3>Business Value</h3>
              <p>{project.businessValue}</p>
            </section>
          )}

          <section className="detail-section">
            <h3>Technologies</h3>
            <div className="tech-stack">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-tag large">{tech}</span>
              ))}
            </div>
          </section>

          {project.features && (
            <section className="detail-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.architecture && (
            <section className="detail-section">
              <h3>Architecture</h3>
              <div className="architecture-grid">
                {Object.entries(project.architecture).map(([key, value]) => (
                  <div key={key} className="architecture-item">
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.phases && (
            <section className="detail-section">
              <h3>Project Phases</h3>
              <div className="phases-timeline">
                {project.phases.map((phase, idx) => (
                  <div key={idx} className="phase-item">
                    <div className="phase-marker">Phase {phase.phase}</div>
                    <div className="phase-content">
                      <div className="phase-date">{phase.date}</div>
                      <div className="phase-goals">{phase.goals}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.team && (
            <section className="detail-section">
              <h3>Team</h3>
              <div className="team-grid">
                {project.team.map((member, idx) => (
                  <span key={idx} className="team-member">{member}</span>
                ))}
              </div>
            </section>
          )}

          {project.sponsor && (
            <section className="detail-section">
              <h3>Sponsor</h3>
              <p>{project.sponsor}</p>
            </section>
          )}

          <section className="detail-section">
            <h3>Links</h3>
            <div className="project-links">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-button">
                  View on GitHub
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-button">
                  View Live Site
                </a>
              )}
              {project.commits && (
                <span className="commits-badge">{project.commits} commits</span>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );

  const PresentationCard = ({ presentation }) => (
    <div className="presentation-card">
      <h3>{presentation.title}</h3>
      <p className="presentation-description">{presentation.description}</p>
      <div className="presentation-meta">
        <span className="presentation-year">{presentation.year}</span>
        {presentation.organization && (
          <span className="presentation-org">{presentation.organization}</span>
        )}
      </div>
      <div className="presentation-topics">
        {presentation.topics.map((topic, idx) => (
          <div key={idx} className="topic-section">
            <h4>{topic.area}</h4>
            {topic.goals && (
              <div className="topic-subsection">
                <strong>Goals:</strong>
                <ul>
                  {topic.goals.map((goal, gIdx) => (
                    <li key={gIdx}>{goal}</li>
                  ))}
                </ul>
              </div>
            )}
            {topic.tools && (
              <div className="topic-subsection">
                <strong>Tools:</strong>
                <div className="tools-list">
                  {topic.tools.map((tool, tIdx) => (
                    <span key={tIdx} className="tool-tag">{tool}</span>
                  ))}
                </div>
              </div>
            )}
            {topic.accomplishments && (
              <div className="topic-subsection">
                <strong>Accomplishments:</strong>
                <ul>
                  {topic.accomplishments.map((acc, aIdx) => (
                    <li key={aIdx}>{acc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="interactive-portfolio">
      <div className="container">
        <h2 className="section-title">Interactive Portfolio</h2>
        <p className="section-subtitle">
          Explore my professional projects, presentations, and technical achievements
        </p>

        <div className="portfolio-tabs">
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            Projects ({projectsData.length})
          </button>
          <button
            className={`tab-button ${activeTab === 'presentations' ? 'active' : ''}`}
            onClick={() => setActiveTab('presentations')}
          >
            Presentations ({presentationsData.length})
          </button>
        </div>

        {activeTab === 'projects' && (
          <>
            <div className="filter-bar">
              <label>Filter by category:</label>
              <div className="filter-buttons">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-button ${filterCategory === category ? 'active' : ''}`}
                    onClick={() => setFilterCategory(category)}
                  >
                    {category === 'all' ? 'All Projects' : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}

        {activeTab === 'presentations' && (
          <div className="presentations-grid">
            {presentationsData.map(presentation => (
              <PresentationCard key={presentation.id} presentation={presentation} />
            ))}
          </div>
        )}

        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
};

export default InteractivePortfolio;
