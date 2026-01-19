import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Melissa_Bolcar_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Melissa Bolcar</span>
          </h1>
          <h2 className="hero-subtitle">Full Stack Developer & Designer</h2>
          <p className="hero-description">
            I craft beautiful, functional web experiences with modern technologies.
            Passionate about clean code, user experience, and continuous learning.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={handleDownloadResume}>
              <FaFileDownload /> Download Resume
            </button>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>

          <div className="hero-social">
            <a href="https://github.com/melissa-bolcar" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/melissa-bolcar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:melissa@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            <div className="code-animation">
              <span>{'<code>'}</span>
              <span>{'  portfolio'}</span>
              <span>{'</code>'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
