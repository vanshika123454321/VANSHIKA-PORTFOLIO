import "./Skills.css";

const skillData = [
  {
    title: "Programming Languages",
    type: "progress",
    skills: [
      { name: "C", short: "C", level: 75 },
      { name: "Java", short: "JAVA", level: 85 },
      { name: "Python", short: "PY", level: 70 },
      { name: "Web Development", short: "WEB", level: 85 },
    ],
  },

  {
    title: "Tools & Technologies",
    type: "list",
    skills: [
      { name: "Git", short: "GIT" },
      { name: "GitHub", short: "GH" },
      { name: "VS Code", short: "VS" },
      { name: "Postman", short: "POST" },
      { name: "Vite", short: "V" },
    ],
  },

  {
    title: "Frontend",
    type: "progress",
    skills: [
      { name: "HTML", short: "HTML", level: 85 },
      { name: "CSS", short: "CSS", level: 80 },
      { name: "JavaScript", short: "JS", level: 75 },
    ],
  },

  {
    title: "Backend & Frameworks",
    type: "list",
    skills: [
      { name: "React", short: "RCT" },
      { name: "Node.js", short: "NODE" },
      { name: "Express.js", short: "EXP" },
      { name: "MongoDB", short: "MONGO" },
      { name: "MySQL", short: "SQL" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-title">
        <h2>My Skills</h2>
        <div className="underline"></div>
      </div>

      <div className="skills-container">
        {skillData.map((category, index) => (
          <div className="skill-category" key={index}>
            <h3>{category.title}</h3>

            {category.type === "progress" ? (
              category.skills.map((skill, i) => (
                <div className="skill" key={i}>
                  <div className="skill-info">
                    <span className="skill-name">
                      <span className="skill-badge">{skill.short}</span>

                      {skill.name}
                    </span>

                    <span className="skill-percentage">{skill.level}%</span>
                  </div>

                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))
            ) : (
              <div className="tool-list">
                {category.skills.map((tool, i) => (
                  <div className="tool-item" key={i}>
                    <span className="tool-badge">{tool.short}</span>

                    <span>{tool.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
