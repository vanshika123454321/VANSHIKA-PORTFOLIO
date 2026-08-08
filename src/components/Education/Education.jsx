import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool, FaBookReader } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="education">
      <div className="section-title">
        <h2>Education</h2>
        <div className="underline"></div>
      </div>

      <div className="timeline">
        {/* BTech */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <FaGraduationCap />
          </div>

          <div className="timeline-content">
            <h3>B.Tech in Computer Science & Engineering</h3>

            <h4>GIET University</h4>

            <span>2024 – Present</span>

            <p>
              Currently pursuing Bachelor's degree with focus on Full Stack
              Development, Artificial Intelligence, Data Structures &
              Algorithms, and Cloud Computing.
            </p>
          </div>
        </motion.div>

        {/* 12th */}

        <motion.div
          className="timeline-item right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <FaSchool />
          </div>

          <div className="timeline-content">
            <h3>Senior Secondary (Class XII)</h3>

            <h4>Dalmia Vidya Mandir</h4>

            <span>CBSE Board</span>

            <div className="education-badge">🏅 88.2%</div>

            <p>
              Successfully completed higher secondary education with strong
              academic performance and a solid foundation in Mathematics,
              Physics and Computer Science.
            </p>
          </div>
        </motion.div>

        {/* 10th */}

        <motion.div
          className="timeline-item left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="timeline-icon">
            <FaBookReader />
          </div>

          <div className="timeline-content">
            <h3>Secondary Education (Class X)</h3>

            <h4>Dalmia Vidya Mandir</h4>

            <span>CBSE Board</span>

            <div className="education-badge">🏅 92%</div>

            <p>
              Built a strong academic foundation while developing analytical
              thinking, logical reasoning and problem-solving skills.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
