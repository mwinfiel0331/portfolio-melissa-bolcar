import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import './CaseStudies.css'

const CaseStudies = () => {
  const [expandedId, setExpandedId] = useState(null)

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Redesign',
      client: 'RetailCo',
      duration: '3 months',
      role: 'Lead Developer',
      overview: 'Complete overhaul of an outdated e-commerce platform to improve user experience and increase conversion rates.',
      challenge: 'The existing platform had poor mobile responsiveness, slow load times, and a confusing checkout process leading to a 65% cart abandonment rate.',
      solution: 'Implemented a modern React-based frontend with server-side rendering, optimized images and assets, simplified the checkout flow to 3 steps, and integrated real-time inventory management.',
      results: [
        'Reduced cart abandonment rate from 65% to 32%',
        'Improved page load time by 73%',
        'Increased mobile conversions by 45%',
        'Achieved 98% positive user feedback'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Redis']
    },
    {
      id: 2,
      title: 'Real-Time Collaboration Tool',
      client: 'TeamSync Inc.',
      duration: '4 months',
      role: 'Full Stack Developer',
      overview: 'Development of a real-time collaboration platform for remote teams to work together seamlessly.',
      challenge: 'Teams were using multiple disconnected tools, leading to communication gaps and productivity loss. Needed a unified solution with real-time capabilities.',
      solution: 'Built a comprehensive platform with WebSocket integration for real-time updates, implemented collaborative document editing, video conferencing, and task management in one unified interface.',
      results: [
        'Reduced tool switching by 80%',
        'Improved team productivity by 35%',
        'Supported 10,000+ concurrent users',
        'Achieved 99.9% uptime in first 6 months'
      ],
      technologies: ['React', 'WebSocket', 'Express', 'MongoDB', 'AWS']
    },
    {
      id: 3,
      title: 'Healthcare Dashboard System',
      client: 'MedTech Solutions',
      duration: '5 months',
      role: 'Senior Developer',
      overview: 'Created a comprehensive healthcare analytics dashboard for medical professionals to track patient data and outcomes.',
      challenge: 'Healthcare providers needed a HIPAA-compliant system to visualize complex patient data while maintaining strict security and privacy standards.',
      solution: 'Developed a secure, role-based dashboard with advanced data visualization, real-time patient monitoring, and automated reporting features. Implemented end-to-end encryption and audit logging.',
      results: [
        'Reduced data analysis time by 60%',
        'Improved patient outcome tracking by 40%',
        'Achieved HIPAA compliance certification',
        'Integrated with 5 major EHR systems'
      ],
      technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Chart.js']
    }
  ]

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section id="case-studies" className="case-studies">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">
          Detailed insights into selected projects and their impact
        </p>

        <div className="case-studies-list">
          {caseStudies.map((study) => (
            <div 
              key={study.id} 
              className={`case-study-card ${expandedId === study.id ? 'expanded' : ''}`}
            >
              <div className="case-study-header" onClick={() => toggleExpand(study.id)}>
                <div>
                  <h3>{study.title}</h3>
                  <div className="case-study-meta">
                    <span className="meta-item">Client: {study.client}</span>
                    <span className="meta-item">Duration: {study.duration}</span>
                    <span className="meta-item">Role: {study.role}</span>
                  </div>
                </div>
                <button className="expand-button" aria-label="Toggle details">
                  {expandedId === study.id ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              </div>

              {expandedId === study.id && (
                <div className="case-study-content">
                  <div className="content-section">
                    <h4>Overview</h4>
                    <p>{study.overview}</p>
                  </div>

                  <div className="content-section">
                    <h4>Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>

                  <div className="content-section">
                    <h4>Solution</h4>
                    <p>{study.solution}</p>
                  </div>

                  <div className="content-section">
                    <h4>Results</h4>
                    <ul className="results-list">
                      {study.results.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="content-section">
                    <h4>Technologies Used</h4>
                    <div className="tech-tags">
                      {study.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies
