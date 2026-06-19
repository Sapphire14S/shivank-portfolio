import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
      </div>

      <div className="nav-links">

        {/* ABOUT */}
        {location.pathname === "/" ? (
          <a href="#about">About Me</a>
        ) : (
          <Link to="/">About Me</Link>
        )}

        {/* SKILLS */}
        <Link to="/skills" onClick={() => window.scrollTo(0, 0)}>Skills</Link>

        {/* WORK */}
        <Link to="/work" onClick={() => window.scrollTo(0, 0)}>Work</Link>

        {/* PROJECTS */}
        <Link to="/projects" onClick={() => window.scrollTo(0, 0)}>Projects</Link>

        {/* CONTACT */}
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>Contact</Link>

        {/* GALLERY */}
        <Link to="/gallery" onClick={() => window.scrollTo(0, 0)}>Snapshots</Link>

        {/* RESUME */}
        <a
          href="/WillComeSoon.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn-nav"
        >
          Resume
        </a>

        {/* DARK MODE */}
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

      </div>
    </nav>
  );
}