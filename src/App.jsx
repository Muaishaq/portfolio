// App.jsx - Main application component with routing
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Leadership from './components/Leadership';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CardEmbed from './components/CardEmbed';

function App() {
  return (
    <div className="app">
      {/* Main portfolio route */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Leadership />
              <Education />
              <Certifications />
              <Interests />
              <Contact />
              <Footer />
            </>
          }
        />
        
        {/* Standalone profile card route - embedded via iframe */}
        <Route path="/card" element={<CardEmbed />} />
      </Routes>
    </div>
  );
}

export default App;
