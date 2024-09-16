import './css/Experience.css'; 
import frontend from "../assets/front.jpeg";
import backend from "../assets/backend.jpeg";
import automation from "../assets/automation.jpeg";

const experiences = [
  {
    role: "Front-End Developer",
    company: "Personal and University Projects",
    date: "March 2023 - Present",
    description: "As a frontend developer, I developed e-commerce websites for product sales, adding functionalities such as product search, add to cart, and login for both user and admin profiles connected to a database. I worked both independently and as part of a team to create intuitive interfaces through clean and efficient code.",
    skills: ["HTML", "CSS", "Figma", "Spring Boot", "Java", "Bootstrap", "MySql"],
    image: frontend
  },
  {
    role: "Back-end Developer",
    company: "BBVA en Perú",
    date: "January 2024 - July",
    description: "As a backend developer, I developed an AI virtual assistant for a competition with my team members. I was responsible for implementing the required functionalities using Google’s Gemini language model. We added the functionality to read documents with DocumentAI for both extraction and validation. This project was developed on a website.",
    skills: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "Teamwork", "AI", "Leadership", "Mentoring", "Web Development", "LLMS"],
    image: backend
  },
  {
    role: "Automation Developer Intern",
    company: "BBVA en Perú",
    date: "December 2023 - Present",
    description: "During this time as a developer, I was also responsible for creating automations, automating repetitive tasks, working with Excel, extracting reports from terminals and transferring them to Excel, developing dashboards for data visualization, KPIs, sending automatic emails, among other tasks. This way, tasks are streamlined, and both time and FTs are saved.",
    skills: ["Autohotkey", "Excel", "VBA", "Dashboard", "App Script", "TeamWork", "Google sheets", "Python"],
    image: automation
  }
];

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Experience</h2>
      <p>My work experience as a Front-End Developer and Mobile Developer working on different projects and self-taught with personal projects.</p>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="card-container">
            <div className="vertical-line"></div>
            <div className="e-card card_one">
              <div className="experience-icon icon" style={{display:"flex", justifyContent:"center"}}>
                <img src={exp.image} alt={exp.role} /> 
              </div>
              <div className="infotop">{exp.role}</div>
              <div className="experience-details">
                <p className="company">{exp.company}</p>
                <p className="date">{exp.date}</p>
                <div className="description-container">
                  <p className="description">{exp.description}</p>
                </div>
                <p className="skills">
                  Skills: {exp.skills.join(' • ')}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
