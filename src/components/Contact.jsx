import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this to a backend
    setStatus('success')
    setTimeout(() => {
      setStatus('')
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm always open to new opportunities and collaborations
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Whether you have a project in mind, need help with development,
              or just want to say hello, feel free to reach out!
            </p>

            <div className="contact-methods">
              <a href="mailto:melissa@example.com" className="contact-method">
                <FaEnvelope />
                <span>melissa@example.com</span>
              </a>
              <a href="https://linkedin.com/in/melissa-bolcar" target="_blank" rel="noopener noreferrer" className="contact-method">
                <FaLinkedin />
                <span>linkedin.com/in/melissa-bolcar</span>
              </a>
              <a href="https://github.com/melissa-bolcar" target="_blank" rel="noopener noreferrer" className="contact-method">
                <FaGithub />
                <span>github.com/melissa-bolcar</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              />
            </div>

            <button type="submit" className="submit-button">
              <FaPaperPlane /> Send Message
            </button>

            {status === 'success' && (
              <div className="success-message">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
