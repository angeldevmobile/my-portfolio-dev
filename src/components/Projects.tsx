import React, { useState } from 'react';
import './css/Projects.css';
import './css/modals.css';
import Imagen1 from '../assets/Imagen_1.jpg';
import Imagen2 from '../assets/web.png';
import Imagen3 from '../assets/asistente_ia.png';
import colaborator2 from '../assets/foto_web.jpg';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

interface Projects {
  title: string;
  date: string;
  description: string;
  image: string;
  collaborators: string[];
  technologies?: string[];
  members?: { name: string; photo: string; github?: string; linkedin?: string }[];
  codeUrl?: string;
}

const projects: Projects[] = [
  {
    title: 'Personal Projects',
    date: 'January 2021 - Present',
    description: 'I develop mobile applications with Flutter and Dart, featuring attractive and intuitive interfaces (UI/UX) to provide the client with an exceptional navigation experience, always focused on the customer experience.',
    image: Imagen1,
    collaborators: [colaborator2],
    technologies: ['Flutter', 'Dart', 'Android', 'Firebase', 'Figma'],
    members: [
      {
        name: 'Gabriel Zapata',
        photo: colaborator2,
        github: 'https://github.com/ALPHA0101010101001010101010101011010/shopping-econmerce-app',
        linkedin: 'https://www.linkedin.com/in/gabriel-zapata-239501287/',
      },
    ],
    codeUrl: 'https://github.com/ALPHA0101010101001010101010101011010/shopping-econmerce-app',
  },
  {
    title: 'Portfolio and Web E-conmerce',
    date: 'Apr 2021 - Present',
    description: 'I developed an eCommerce website for online product sales, featuring various functionalities with access for both users and administrators, providing an incredible customer experience with all the details. Additionally, I carried out the development of a portfolio showcasing my knowledge and experiences.',
    image: Imagen2,
    collaborators: [colaborator2],
    technologies: ['HTML', 'CSS', 'Spring Boot', 'Node Js', 'Tailwinds', 'TypeScript', 'bootstrap'],
    members: [
      {
        name: 'Gabriel Zapata',
        photo: colaborator2,
        github: 'https://github.com/ALPHA0101010101001010101010101011010/my-portfolio-dev',
        linkedin: 'https://www.linkedin.com/in/gabriel-zapata-239501287/',
      },
    ],
    codeUrl: 'https://github.com/ALPHA0101010101001010101010101011010/my-portfolio-dev',
  },
  {
    title: 'AI Assistant Virtual',
    date: 'January 2024 - July 2024',
    description: 'This project was developed with my team, where I had the role of developer to implement functionalities for reading and validating documents with AI, integrating the agent into a website where users can interact with it. To train it, data was fed through a data storage.',
    image: Imagen3,
    collaborators: [colaborator2],
    technologies: ['Python', 'Flask', 'Gemini', 'DocumentAI', 'Data Storage', 'APIs', 'LLMS'],
    members: [
      {
        name: 'Gabriel Zapata',
        photo: colaborator2,
        github: 'https://github.com/ALPHA0101010101001010101010101011010',
        linkedin: 'https://www.linkedin.com/in/gabriel-zapata-239501287/',
      },
    ],
    codeUrl: 'https://github.com/ALPHA0101010101001010101010101011010',
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);

  const openModal = (project: Projects) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <p>I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index} onClick={() => openModal(project)}>
            <div className={`project-image-container container-${index}`}>
              <img
                src={project.image}
                alt={project.title}
                className={`project-image image-${index}`}
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-date">{project.date}</p>
              <p className="project-description" style={{fontSize:"13px"}}>{project.description}</p>
              <div className="project-collaborators">
                {project.collaborators.map((collaborator, idx) => (
                  <img
                    src={collaborator}
                    alt={`Collaborator ${idx + 1}`}
                    key={idx}
                    className="collaborator-avatar"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <>
          <div className="modal-background" onClick={closeModal}></div>

          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>

              {/* Imagen dentro de una tarjeta (card) para ajustar tamaño */}
              <div className="modal-card">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              </div>

              {/* Nuevo contenedor para el texto */}
              <div className="modal-text-content">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.date}</p>
                <p>{selectedProject.description}</p>

                <div className="tech-container">
                  {selectedProject.technologies?.map((tech: string) => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>

                <h3>Members</h3>
                <div className="members">
                  {selectedProject.members?.map((member: any) => (
                    <div key={member.name} className="member" style={{ display: "flex", alignItems: "center" }}>
                      <img src={member.photo} alt={member.name} className="member-photo" />
                      <p className="nombre" style={{ marginLeft: "15px" }}>{member.name}</p>
                      <div className="member-links" style={{ paddingLeft: "90px", display:"flex", gap:"12px"}}>
                        {member.github && <a href={member.github}><FaGithub/></a>}
                        {member.linkedin && <a href={member.linkedin}><FaLinkedin/></a>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="modal-buttons">
                  <a href={selectedProject.codeUrl} target="_blank" rel="noopener noreferrer" className="button">View Code</a>
                </div>
              </div>
              {/* Fin del nuevo contenedor para el texto */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Project;
