import { useState } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";

import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <Navbar
        toggleDark={() => setDarkMode(!darkMode)}
      />

      <Routes>

        {/* HOME */}
        <Route path="/" element={<HomePage />} />

        {/* SKILLS */}
        <Route path="/skills" element={<Skills />} />

        {/* WORK */}
        <Route path="/work" element={<Work />} />

        {/* PROJECTS */}
        <Route path="/projects" element={<Projects />} />

        {/* CONTACT */}
        <Route path="/contact" element={<Contact />} />

        {/* SNAPSHOTS */}
        <Route path="/gallery" element={<Gallery />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;