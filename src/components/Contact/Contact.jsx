import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("Sending...");

    emailjs
      .sendForm("service_zsyrd7i", "template_xqdmlds", form.current, {
        publicKey: "M6UJDisMnWv0ZRtlF",
      })
      .then(
        () => {
          setStatus("Message sent successfully!");

          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);

          setStatus("Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section id="contact" className="contact">
      {/* Section Heading */}

      <div className="section-title">
        <h2>Contact Me</h2>

        <div className="underline"></div>

        <p>
          Feel free to reach out for collaboration, opportunities, or simply to
          connect.
        </p>
      </div>

      <div className="contact-container">
        {/* ================= LEFT SIDE ================= */}

        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            I'm always open to discussing new opportunities, interesting
            projects, and ideas in web development, AI & ML, and software
            development.
          </p>

          <div className="contact-details">
            {/* Email */}

            <div className="contact-item">
              <div className="contact-icon">@</div>

              <div>
                <h4>Email</h4>
                <p>vanshikasinha207@gmail.com</p>
              </div>
            </div>

            {/* Location */}

            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <h4>Location</h4>
                <p>
                  Rajgangpur, Odisha, India <br /> PIN: 770017
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}

          <div className="contact-socials">
            <a
              href="https://www.linkedin.com/in/vanshika-sinha-544b79368"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>

            <a
              href="https://github.com/vanshika123454321"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              href="https://www.instagram.com/vanshika_sinha_07/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>

            <a
              href="https://t.me/van_shika_07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>

            <a
              href="https://www.facebook.com/share/19fAHFfpFa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="contact-form-container">
          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-row">
              {/* Name */}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}

              <div className="form-group">
                <label htmlFor="email">Your Email</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Subject */}

            <div className="form-group">
              <label htmlFor="subject">Subject</label>

              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter subject"
                required
              />
            </div>

            {/* Message */}

            <div className="form-group">
              <label htmlFor="message">Message</label>

              <textarea
                id="message"
                name="message"
                rows="7"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {/* Submit */}

            <button type="submit" className="send-btn">
              Send Message
            </button>

            {/* Status */}

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
