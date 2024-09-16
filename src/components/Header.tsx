import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-dark">
      <h1 className="text-3xl font-bold text-purple">{'<Portfolio/>'}</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#contact me" className="text-white hover:text-purple">Contact Me</a></li>
          <li><a href="#skills" className="text-white hover:text-purple">Skills</a></li>
          <li><a href="#experience" className="text-white hover:text-purple">Experience</a></li>
          <li><a href="#projects" className="text-white hover:text-purple">Projects</a></li>
          <li><a href="#education" className="text-white hover:text-purple">Education</a></li>
        </ul>
      </nav>
      <a href="https://github.com/Gabi-code-Dev/IA-DEVELOPER" className="px-4 py-2 text-white border rounded border-purple hover:bg-purple">Github Profile</a>
    </header>
  );
};

export default Header;

