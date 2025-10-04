import { useEffect } from 'react'
import AOS from 'aos'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navbar.jsx'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }) // animación de 1s, solo una vez
  }, [])

  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
