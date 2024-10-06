// App.tsx

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
  const [currentSection, setCurrentSection] = useState('hero'); 

  return (
    <div className="min-h-screen overflow-hidden text-white bg-dark">
      <Header setCurrentSection={setCurrentSection} />
      
      {currentSection === 'hero' && <HeroSection setCurrentSection={setCurrentSection} />}
      {currentSection === 'skills' && <Skills />}
      {currentSection === 'experience' && <Experience />}
      {currentSection === 'projects' && <Project />}
      {currentSection === 'education' && <Study />}
      {currentSection === 'contact' && <Contact />}
      
      <Footer />
    </div>
  );
};

export default App;
