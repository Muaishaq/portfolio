// App.jsx - Main application component
// This will be populated with sections in later phases

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';

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
      
      {/* Other sections will be added here in later phases */}
    </div>
  )
}

export default App
