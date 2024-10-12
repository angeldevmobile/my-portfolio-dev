import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import profilePic from '../assets/foto_web.jpg';
import backgroundVideo from '../assets/background.mp4';

const AnimatedText = ({ text }: { text: string }) => {
  return (
    <span>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} style={{ marginRight: '0.5em', display: 'inline-block' }}>
          {word.split('').map((letter, letterIndex) => (
            <span
              key={letterIndex}
              className="inline-block font-bold animate-fade-out-in-letter text-purple"
              style={{ animationDelay: `${(wordIndex * 10 + letterIndex) * 0.1}s` }}
            >
              {letter}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
};

interface HeroSectionProps {
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ setCurrentSection }) => {
  const language = 'es'; // O el método que utilices para determinar el idioma

  const handleScrollToContact = () => {
    setCurrentSection('contact'); // Cambia a la sección de contacto
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen -mt-2 bg-dark">
      <video
        src={backgroundVideo}
        autoPlay
        muted
        loop
        className="absolute left-0 object-cover w-full h-full top-15"
      />
      <div className="container relative z-10 flex flex-col items-center mx-auto md:flex-row">
        <div className="flex justify-center mb-8 md:w-1/2 md:justify-start md:mb-0 pl-[60px]">
          <img
            src={profilePic}
            alt="Profile"
            className="w-48 h-48 border-4 rounded-full md:w-64 md:h-64"
          />
        </div>
        <div className="text-center md:w-1/2 md:text-left">
          <h2 className="text-xl">Hi, I am</h2>
          <h1 className="mt-2 text-5xl font-bold">Angel Dev</h1>
          <h3 className="mt-4 text-2xl">
            {language === 'es' ? 'I am' : 'I am a'} <AnimatedText text="Software Developer" />
          </h3>
          <div className="p-4 mt-6 text-lg bg-black bg-opacity-50 rounded-lg" style={{ marginLeft: '-3px' }}>
            I am a software developer specialized in creating innovative applications using Flutter and designing modern, responsive websites. My experience covers the development of robust APIs and the integration of artificial intelligence to provide advanced and efficient technological solutions. My focus is on delivering applications that not only meet the highest quality standards but also provide an exceptional user experience. Whether you're looking for a high-performance mobile app or an interactive website, I'm here to transform your ideas into reality.
          </div>
          <button
            onClick={handleScrollToContact}
            className="inline-block px-6 py-3 mt-8 text-white rounded-lg bg-purple hover:bg-white hover:text-purple"
          >
            Connect with Me
          </button>
          <div className="flex justify-center mt-6 space-x-6 md:justify-start">
            <a href="https://www.linkedin.com/in/gabriel-zapata-239501287/" className="text-2xl hover:text-purple"><FaLinkedin /></a>
            <a href="https://github.com/angeldevmobile" className="text-2xl hover:text-purple"><FaGithub /></a>
            <a href="https://twitter.com" className="text-2xl hover:text-purple"><FaTwitter /></a>
            <a href="https://instagram.com" className="text-2xl hover:text-purple"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
