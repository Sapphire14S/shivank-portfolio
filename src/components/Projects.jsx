import "./Projects.css";

const projectsData = [
  {
    title: "Lunar Lander AI",
    description:
      "Trained an autonomous agent using PPO-based Reinforcement Learning to successfully navigate and land in a simulated lunar environment.",
    image: "/lunar-lander-ai.png",
    live: "https://github.com/Sapphire14S/Lunar-Lander-AI",
    source: "https://github.com/Sapphire14S/Lunar-Lander-AI",
  },
  {
    title: "Know Weather",
    description:
      "Developed a responsive weather application that provides real-time weather conditions and forecasts using external weather APIs.",
    image: "/know-weather.png",
    live: "https://sapphire14s.github.io/know-weather/",
    source: "https://github.com/Sapphire14S/know-weather",
  },
  {
    title: "Firm Explorer",
    description:
      "Developed a company exploration platform to discover firms, access key details, and simplify career research.",
    image: "/firm-explorer.png",
    live: "https://firm-explorer.vercel.app/",
    source: "https://github.com/Sapphire14S/firm-explorer",
  },
  {
    title: "QR Code Generator",
    description:
      "Built a web application that instantly generates customizable QR codes from user-provided text, links, and contact information.",
    image: "/qr-code-generator.png",
    live: "https://sapphire14s.github.io/qr-code-generator/",
    source: "https://github.com/Sapphire14S/qr-code-generator",
  },
  {
    title: "Password Generator",
    description:
      "Developed a secure password generation tool with customizable length and character settings to improve online security.",
    image: "/password-generator.png",
    live: "https://sapphire14s.github.io/password-generator/",
    source: "https://github.com/Sapphire14S/password-generator",
  },
  {
    title: "My Portfolio",
    description:
      "Designed and developed a modern portfolio website to showcase projects, skills, achievements, and professional experience.",
    image: "/my-portfolio.png",
    live: "https://shivank-kumar.vercel.app/",
    source: "https://github.com/Sapphire14S/shivank-portfolio",
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <div className="projects-wrapper">

        <div className="projects-header">
          <div className="projects-accent"></div>
          <h2>Projects</h2>
        </div>

        <p className="projects-sub">
          Below are some of the projects I've worked on.
        </p>

        {projectsData.map((project, index) => (
          <div
            className={`project-item ${
              index % 2 !== 0 ? "reverse" : ""
            }`}
            key={index}
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.source} target="_blank" rel="noreferrer">
                  Source Code
                </a>
              </div>

              <div className="project-underline"></div>
            </div>

            <div className="project-image">
              <img src={project.image} alt="Project Preview" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}