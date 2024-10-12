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
import { CSSTransition } from 'react-transition-group'; // Importar CSSTransition
import './App.css'; // Asegúrate de tener un archivo CSS para las transiciones

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('hero'); 

  return (
    <div className="min-h-screen overflow-hidden text-white bg-dark">
      <Header setCurrentSection={setCurrentSection} />

      {/* Usar CSSTransition para cada sección */}
      <CSSTransition
        in={currentSection === 'hero'}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <HeroSection setCurrentSection={setCurrentSection} />
      </CSSTransition>

      <CSSTransition
        in={currentSection === 'skills'}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Skills />
      </CSSTransition>

      <CSSTransition
        in={currentSection === 'experience'}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Experience />
      </CSSTransition>

      <CSSTransition
        in={currentSection === 'projects'}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Project />
      </CSSTransition>

      <CSSTransition
        in={currentSection === 'education'}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Study />
      </CSSTransition>

      <CSSTransition
        in={currentSection === 'contact'}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Contact />
      </CSSTransition>
      
      <Footer />
    </div>
  );
};

export default App;
