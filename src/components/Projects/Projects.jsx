import "./Projects.css";

import wanderlust from "../../assets/images/wanderlust.png";
import mindscope from "../../assets/images/mindscope-ai.png";

const projects = [
  {
    title: "WanderLust",
    subtitle: "Airbnb Clone",

    image: wanderlust,

    technologies: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],

    description:
      "WanderLust is a full-stack web application inspired by Airbnb that allows users to explore, create, update, and manage property listings. The application provides a user-friendly platform for discovering accommodations and interacting with listings.",

    features: [
      "User authentication and authorization",
      "Create, update and delete property listings",
      "Property image integration",
      "Reviews and ratings",
      "Responsive user interface",
    ],
  },

  {
    title: "MindScope AI",
    subtitle: "Student Mental Stress Prediction",

    image: mindscope,

    technologies: [
      "Python",
      "Flask",
      "Machine Learning",
      "HTML",
      "CSS",
      "JavaScript",
    ],

    description:
      "MindScope AI is a machine learning based web application designed to predict stress levels among students using academic, lifestyle, and behavioral factors. The system integrates a trained machine learning model with a web interface to provide an interactive prediction experience.",

    features: [
      "Student stress level prediction",
      "Machine learning model integration",
      "Multiple academic and lifestyle inputs",
      "Interactive prediction interface",
      "Low, Medium and High stress classification",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      {/* Section Heading */}

      <div className="section-title">
        <h2>My Projects</h2>

        <div className="underline"></div>

        <p>
          Some of the projects I have developed to apply my technical knowledge
          and problem-solving skills.
        </p>
      </div>

      {/* Projects Container */}

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Project Image */}

            <div className="project-image">
              <img src={project.image} alt={`${project.title} homepage`} />
            </div>

            {/* Project Content */}

            <div className="project-content">
              <h3>{project.title}</h3>

              <h4>{project.subtitle}</h4>

              {/* Technologies */}

              <div className="project-section">
                <h5>Technologies</h5>

                <div className="technology-list">
                  {project.technologies.map((tech, i) => (
                    <span className="technology" key={i}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}

              <div className="project-section">
                <h5>Description</h5>

                <p className="project-description">{project.description}</p>
              </div>

              {/* Features */}

              <div className="project-section">
                <h5>Key Features</h5>

                <ul className="project-features">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
