import React, { useState } from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import Footer from '../src/components/Footer';
import Skills from '../src/components/Habilities';
import Experience from './components/Experience';
import Project from './components/Projects';
import Study from './components/Study';
import Contact from './components/Contact';

const App: React.FC = () => {
  // Estado para controlar la sección visible
  const [currentSection, setCurrentSection] = useState('hero'); 

  return (
    <div className="min-h-screen overflow-hidden text-white bg-dark">
      <Header setCurrentSection={setCurrentSection} /> 
      
      {currentSection === 'hero' && (
        <section id="hero">
          <HeroSection />
        </section>
      )}
      {currentSection === 'skills' && (
        <section id="skills">
          <Skills />
        </section>
      )}
      {currentSection === 'experience' && (
        <section id="experience">
          <Experience />
        </section>
      )}
      {currentSection === 'projects' && (
        <section id="projects">
          <Project />
        </section>
      )}
      {currentSection === 'education' && (
        <section id="education">
          <Study />
        </section>
      )}
      {currentSection === 'contact' && (
        <section id="contact">
          <Contact />
        </section>
      )}
      
      <Footer />
    </div>
  );
};

export default App;
