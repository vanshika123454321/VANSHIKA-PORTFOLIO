import "./Hero.css";
import profile from "../../assets/images/background-portfolio.avif";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span>Vanshika</span> Sinha
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Typewriter
              words={[
                "Aspiring Full Stack Developer",
                "Web Developer",
                "AI & ML Enthusiast",
                "Problem Solver",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about building responsive web applications, exploring
            Artificial Intelligence & Machine Learning, and creating clean,
            user-friendly digital experiences.
          </motion.p>

          <motion.div
            className="tech-stack"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <span className="tech-badge">⚛ React</span>
            <span className="tech-badge">☕ Java</span>
            <span className="tech-badge">🐍 Python</span>
            <span className="tech-badge">🤖 AI/ML</span>
          </motion.div>

          <motion.div
            className="social-icons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/vanshika123454321"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vanshika-sinha-544b79368"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:vanshikasinha207@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        {/* Right Side */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-image-wrapper">
            <div className="floating-card top">💻 Web Developer</div>

            <div className="floating-card left">🤖 AI Explorer</div>

            <div className="floating-card bottom">☁ Cloud Learner</div>

            <div className="image-box">
              <div className="ring ring1"></div>
              <div className="ring ring2"></div>

              <img src={profile} alt="Vanshika" />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="scroll-down">
        <span></span>
      </div>
    </section>
  );
}

export default Hero;
