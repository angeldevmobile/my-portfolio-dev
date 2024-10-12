// Header.tsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importa iconos para el menú
import { CSSTransition } from "react-transition-group"; // Importar CSSTransition
import './css/header.css'; // Importa el archivo CSS para estilos y transiciones

interface HeaderProps {
  setCurrentSection: (section: string) => void; // función para cambiar la sección visible
}

const Header: React.FC<HeaderProps> = ({ setCurrentSection }) => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar el menú

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (section: string) => {
    setCurrentSection(section);
    setMenuOpen(false); // Cierra el menú al seleccionar una sección
  };

  return (
    <header className="flex items-center justify-between p-4 bg-dark">
      <h1 className="text-3xl font-bold">
        <span style={{ color: "purple" }}>{"< "}</span>
        <span style={{ color: "white" }}>Portfolio</span>
        <span style={{ color: "purple" }}>{" />"}</span>
      </h1>
      {/* Menú en versión de escritorio */}
      <nav className="justify-center flex-grow hidden md:flex">
        <ul className="flex space-x-6">
          <li>
            <button
              onClick={() => handleNavClick("hero")}
              className="text-white hover:text-purple"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-white hover:text-purple"
            >
              Contact Me
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("skills")}
              className="text-white hover:text-purple"
            >
              Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("experience")}
              className="text-white hover:text-purple"
            >
              Experience
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("projects")}
              className="text-white hover:text-purple"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavClick("education")}
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
        <button onClick={toggleMenu} className="text-4xl text-white">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Menú para móviles */}
      <CSSTransition
        in={menuOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <nav className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <button
                onClick={() => handleNavClick("hero")}
                className="text-white hover:text-purple"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-white hover:text-purple"
              >
                Contact Me
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("skills")}
                className="text-white hover:text-purple"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("experience")}
                className="text-white hover:text-purple"
              >
                Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="text-white hover:text-purple"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("education")}
                className="text-white hover:text-purple"
              >
                Education
              </button>
            </li>
          </ul>
        </nav>
      </CSSTransition>
    </header>
  );
};

export default Header;
