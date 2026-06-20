// App.jsx - Main application component
// This will be populated with sections in later phases

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Interests from './components/Interests';

function App() {
  return (
    <div className="app">
      {/* Navbar component */}
      <Navbar />
      
      {/* Hero section */}
      <Hero />
      
      {/* About section */}
      <About />
      
      {/* Skills section */}
      <Skills />
      
      {/* Projects section */}
      <Projects />
      
      {/* Leadership section */}
      <Leadership />
      
      {/* Education & Experience section */}
      <Education />
      
      {/* Certifications section */}
      <Certifications />
      
      {/* Interests section */}
      <Interests />
      
      {/* Other sections will be added here in later phases */}
    </div>
  )
}

export default App
