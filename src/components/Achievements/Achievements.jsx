import "./Achievements.css";

const achievements = [
  {
    icon: "CERT",
    title: "Certifications",
    items: [
      "NPTEL — The Joy of Computing using Python",
      "NPTEL — Cloud Computing",
      "NPTEL — Privacy and Security in Online Social Media",
      "Udemy — Machine Learning Course",
      "IBM SkillsBuild — Getting Started with Artificial Intelligence",
    ],
  },

  {
    icon: "DSA",
    title: "Coding & Technical",
    items: [
      "Solved 100+ problems on LeetCode",
      "Regular practice of Data Structures & Algorithms",
      "Participated in Learnathon 3.0",
    ],
  },

  {
    icon: "PROJ",
    title: "Projects & Learning",
    items: [
      "Developed WanderLust — Full-stack accommodation platform",
      "Developed MindScope AI — ML-based student stress prediction application",
      "Applied programming and development concepts through practical projects",
    ],
  },

  {
    icon: "WORK",
    title: "Workshops & Events",
    items: [
      "Attended IoT and Robotics workshops",
      "Participated in Arduino workshop",
      "Participated in ESP-32 workshop",
    ],
  },
];

function Achievements() {
  return (
    <section id="achievements" className="achievements">
      {/* Section Heading */}

      <div className="section-title">
        <h2>Achievements & Activities</h2>

        <div className="underline"></div>

        <p>
          A collection of certifications, technical milestones, projects, and
          learning experiences that have contributed to my technical growth.
        </p>
      </div>

      {/* Achievement Cards */}

      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            {/* Icon */}

            <div className="achievement-icon">{achievement.icon}</div>

            {/* Title */}

            <h3>{achievement.title}</h3>

            {/* Items */}

            <ul>
              {achievement.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
