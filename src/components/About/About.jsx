import "./About.css";
import profile from "../../assets/images/vanshika.jpg";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-title">
        <h2>About Me</h2>
        <div className="underline"></div>
      </div>

      <div className="about-container">
        {/* Left Side */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="about-image">
            <img src={profile} alt="Vanshika Sinha" />
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>
            Hello, I'm <span>Vanshika Sinha</span>
          </h3>

          <h4>Third Year B.Tech Student | Computer Science & Engineering</h4>

          <p>
            I am currently pursuing my B.Tech in Computer Science & Engineering
            at GIET University. I enjoy building modern web applications and
            continuously expanding my knowledge in software development.
          </p>

          <p>
            My interests include <strong>Full Stack Web Development</strong>,
            <strong> Artificial Intelligence & Machine Learning</strong>, and{" "}
            <strong>Cloud Computing</strong>. I enjoy solving real-world
            problems through technology and continuously improving my technical
            skills by working on practical projects.
          </p>

          <div className="about-info">
            <div className="info-card">
              <div className="card-icon">💻</div>
              <h3>Full Stack</h3>
              <p>Development</p>
            </div>

            <div className="info-card">
              <div className="card-icon">🤖</div>
              <h3>AI & ML</h3>
              <p>Enthusiast</p>
            </div>

            <div className="info-card">
              <div className="card-icon">☁️</div>
              <h3>Cloud</h3>
              <p>Computing</p>
            </div>

            <div className="info-card">
              <div className="card-icon">🧩</div>
              <h3>Problem</h3>
              <p>Solving</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
