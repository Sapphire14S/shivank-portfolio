import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_1ufbr0n",
      "template_c963sxw",
      form.current,
      "S_4f1mauN3KDVL37W"
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message.");
    });

    e.target.reset();
  };

  return (
    <section className="contact-section">

      <div className="contact-wrapper">

        <h2 className="contact-title">
          Connect with me!
        </h2>

        {/* ================= TOP CARDS ================= */}

        <div className="contact-cards">

          {/* EMAIL CARD */}
          <div className="contact-card">

            <h3>Email</h3>

            <p>
              <a href="mailto:vankkumar14@gmail.com">
                shivank14.kumar@gmail.com
              </a>
            </p>

            <p>
              <a href="mailto:shivank.kumar24b@iiitg.ac.in">
                shivank.kumar24b@iiitg.ac.in
              </a>
            </p>

          </div>

          {/* SOCIALS CARD */}
          <div className="contact-card">

            <h3>Socials</h3>

            <div className="social-icons">

              <a
                href="https://www.linkedin.com/in/shivank-kumar-a498ba321/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

          {/* CODING PROFILES */}
          <div className="contact-card">

            <h3>Coding Profiles</h3>

            <div className="coding-links">

              <a
                href="https://codeforces.com/profile/Coherent14S"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>

              <a
                href="https://atcoder.jp/users/Rare14S"
                target="_blank"
                rel="noreferrer"
              >
                AtCoder
              </a>

              <a
                href="https://codeforces.com/profile/Coherent14S"
                target="_blank"
                rel="noreferrer"
              >
                Codeforces
              </a>

              <a
                href="https://leetcode.com/u/Arcane14S/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM SECTION ================= */}

        <div className="contact-bottom">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <h3>
              Always open to meaningful conversations.
            </h3>

            <p>
              I'm always open to discussing research ideas,
              scalable systems, internships, software
              engineering roles, or quantitative
              problem-solving opportunities.
            </p>

            <p>
              Whether it's collaboration, networking,
              or just a technical chat — feel free
              to reach out anytime.
            </p>

          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">

            <h3 className="message-title">
              Drop a Message
            </h3>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="message-form"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}