import "./Hero.css";
import { useEffect, useState } from "react";
import profileImg from "/sk.png";
// import bgImg from "/bg.jpg";

export default function Hero() {

  const prefix = "Hi, I'm ";
  const name = "Shivank Kumar";

  const [typedPrefix, setTypedPrefix] = useState("");
  const [typedName, setTypedName] = useState("");

  useEffect(() => {
    let i = 0;

    const typePrefix = setInterval(() => {
      setTypedPrefix(prefix.slice(0, i + 1));
      i++;

      if (i === prefix.length) {
        clearInterval(typePrefix);

        let j = 0;

        const typeName = setInterval(() => {
          setTypedName(name.slice(0, j + 1));
          j++;

          if (j === name.length) clearInterval(typeName);
        }, 80);

      }

    }, 80);

    return () => clearInterval(typePrefix);
  }, []);

  return (
    <section id="home" className="hero">

      <div className="hero-wrapper">

        <div className="hero-bg"></div> {/* background inside box */}

        <div className="hero-content">

          <img src={profileImg} alt="Shivank" className="hero-image" />

          <h1>
            {typedPrefix}
            <span className="hero-name">
              {typedName}</span>
            <span className="cursor">|</span>
          </h1>

          <p className="hero-sub">
            Computer Science Undergraduate • 
            Software Engineering • 
            Algorithms & Scalable Systems
          </p>

          <a href="#about" className="about-btn">
            About Me ↓
          </a>

        </div>

      </div>

    </section>
  );
}