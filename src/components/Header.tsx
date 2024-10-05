import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importa iconos para el menú

interface HeaderProps {
  setCurrentSection: (section: string) => void; // función para cambiar la sección visible
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-dark">
      <h1 className="text-3xl font-bold text-purple">{'<Portfolio/>'}</h1>

      {/* Menú en versión de escritorio */}
      <nav className="justify-center flex-grow hidden md:flex">
        <ul className="flex space-x-6">
          <li>
            <button 
              onClick={() => setCurrentSection('hero')} 
              className="text-white hover:text-purple"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentSection('contact')} 
              className="text-white hover:text-purple"
            >
              Contact Me
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentSection('skills')} 
              className="text-white hover:text-purple"
            >
              Skills
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentSection('experience')} 
              className="text-white hover:text-purple"
            >
              Experience
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentSection('projects')} 
              className="text-white hover:text-purple"
            >
              Projects
            </button>
          </li>
          <li>
            <button 
              onClick={() => setCurrentSection('education')} 
              className="text-white hover:text-purple"
            >
              Education
            </button>
          </li>
        </ul>
      </nav>

      {/* Botón de GitHub siempre a la derecha */}
      <a
        href="https://github.com/ALPHA0101010101001010101010101011010"
        className="px-4 py-2 ml-auto text-white border rounded border-purple hover:bg-purple"
      >
        Github Profile
      </a>

      {/* Icono de menú para móviles */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Ícono de abrir/cerrar */}
        </button>
      </div>

      {/* Menú para móviles */}
      {menuOpen && (
        <nav className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <button 
                onClick={() => { setCurrentSection('hero'); toggleMenu(); }} 
                className="text-white hover:text-purple"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentSection('contact'); toggleMenu(); }} 
                className="text-white hover:text-purple"
              >
                Contact Me
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentSection('skills'); toggleMenu(); }} 
                className="text-white hover:text-purple"
              >
                Skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentSection('experience'); toggleMenu(); }} 
                className="text-white hover:text-purple"
              >
                Experience
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentSection('projects'); toggleMenu(); }} 
                className="text-white hover:text-purple"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => { setCurrentSection('education'); toggleMenu(); }} 
                className="text-white hover:text-purple"
              >
                Education
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
