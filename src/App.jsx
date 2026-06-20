import "./App.css";

import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";

import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

import Footer from "./components/Footer";

/* ================= HOME PAGE ================= */

function HomePage() {
  return (
    <>
      <Hero />
      <About />
    </>
  );
}

/* ================= APP ================= */

function App() {
  return (
    <div className="app">

      <ScrollToTop />

      <Navbar />

      <main className="main-content">

        <Routes>

          {/* HOME */}
          <Route path="/" element={<HomePage />} />

          {/* SKILLS */}
          <Route path="/skills" element={<Skills />} />

          {/* EXPERIENCE */}
          <Route path="/work" element={<Work />} />

          {/* PROJECTS */}
          <Route path="/projects" element={<Projects />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* GALLERY */}
          <Route path="/gallery" element={<Gallery />} />

        </Routes>

      </main>

      <Footer />

    </div>
  );
}

export default App;