import './About.css'

const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'Figma', 'Docker', 'PostgreSQL'] }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen eye for design and a love for
              creating seamless user experiences. With expertise in modern web technologies,
              I bring ideas to life through clean, efficient code.
            </p>
            <p>
              My journey in web development started with a curiosity about how things work
              and evolved into a career building impactful applications. I'm constantly
              learning and adapting to new technologies to deliver the best solutions.
            </p>
            <p>
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring new design trends.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skillSet) => (
              <div key={skillSet.category} className="skill-category">
                <h3>{skillSet.category}</h3>
                <ul>
                  {skillSet.items.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
