import React from 'react';
import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import Footer from '../src/components/Footer';
import Skills from '../src/components/Habilities';
import Experience from './components/Experience';
import Project from './components/Projects';
import Study from './components/Study';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white bg-dark">
      <Header />
      <section id="contact me">
        <HeroSection />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="education">
        <Study />
      </section>
      <Contact />
      <Footer />
    </div>
  );
};
export default App;

