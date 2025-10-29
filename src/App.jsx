import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import SectionDivider from './components/SectionDivider'
import About from './pages/About'
import Projects from './pages/Projects'
import TechStack from './pages/TechStack'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import ScrollProgress from './components/ScrollProgress'
import FloatingOrbs from './components/FloatingOrbs'

function App() {
  return (
    <div>
      <ScrollProgress />
      <FloatingOrbs />
      <Navbar />
      <Hero />
      <SectionDivider variant="dots" />
      <About />
      <SectionDivider variant="wave" />
      <Projects />
      <SectionDivider variant="gradient" />
      <TechStack />
      <SectionDivider variant="default" />
      <Contact />
      <Footer />
    </div>
  )
}

export default App