import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import GitHubStats from './components/GitHubStats'
import EnhancedGitHubStats from './components/EnhancedGitHubStats'
import InteractivePortfolio from './components/InteractivePortfolio'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <EnhancedGitHubStats />
        <InteractivePortfolio />
        <Projects />
        <CaseStudies />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
