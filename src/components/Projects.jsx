import "./Projects.css";

const projectsData = [
  {
    title: "Algorithm Visualizer",
    description:
      "An interactive web application to visualize sorting algorithms with real-time animations and step-by-step execution. Built to strengthen algorithmic intuition and provide an educational experience.",
    image: "/project1.jpg",
    live: "#",
    source: "#",
  },
  {
    title: "Scalable Backend API",
    description:
      "Designed and implemented a RESTful backend service with authentication, database modeling, and optimized query performance for production-level scalability.",
    image: "/project1.jpg",
    live: "#",
    source: "#",
  },
  {
    title: "Quantitative Analysis Tool",
    description:
      "A data-driven analytics dashboard built to explore financial datasets and simulate trading strategies using statistical modeling.",
    image: "/project1.jpg",
    live: "#",
    source: "#",
  },
  {
    title: "Quantitative Analysis Tool",
    description:
      "A data-driven analytics dashboard built to explore financial datasets and simulate trading strategies using statistical modeling.",
    image: "/project1.jpg",
    live: "#",
    source: "#",
  },
  {
    title: "Quantitative Analysis Tool",
    description:
      "A data-driven analytics dashboard built to explore financial datasets and simulate trading strategies using statistical modeling.",
    image: "/project1.jpg",
    live: "#",
    source: "#",
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