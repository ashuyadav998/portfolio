import { useEffect } from 'react'
import AOS from 'aos'
import { SpeedInsights } from '@vercel/speed-insights/react'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Footer from './components/Footer.jsx'
import Navigation from './components/Navbar.jsx'

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      offset: 100,
      easing: 'ease-in-out'
    })
  }, [])

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Footer />
      <SpeedInsights />
    </div>
  )
}

export default App