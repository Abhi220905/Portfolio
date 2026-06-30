import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#141a22] transition-colors duration-300">
      {activeProject ? (
        <ProjectDetails 
          project={activeProject} 
          onBack={() => setActiveProject(null)} 
          onSelectProject={setActiveProject} 
        />
      ) : (
        <>
          <Navbar />
          <Hero />
          <About />
          <Projects onSelectProject={setActiveProject} />
          <Experience />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
