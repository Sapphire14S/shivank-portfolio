import "./Navbar.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link to="/">Home</Link>
      </div>

      <div className="nav-links">

        {/* ABOUT */}
        {location.pathname === "/" ? (
          <a href="#about">About Me</a>
        ) : (
          <Link to="/">About Me</Link>
        )}

        {/* SKILLS */}
        <Link to="/skills">Skills</Link>

        {/* WORK */}
        <Link to="/work">Work</Link>

        {/* PROJECTS */}
        <Link to="/projects">Projects</Link>

        {/* CONTACT */}
        <Link to="/contact">Contact</Link>

        {/* GALLERY */}
        <Link to="/gallery">Snapshots</Link>

        {/* RESUME */}
        <a
          href="/WillComeSoon.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn-nav"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}