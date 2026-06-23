import "./Work.css";

const workData = [
  // {
  //   company: "Tech Innovations Lab",
  //   role: "Software Developer Intern",
  //   duration: "May 2025 – Present",
  //   logo: "/company1.png",
  //   points: [
  //     "Developed modular web components using React and modern JavaScript.",
  //     "Optimized application performance and reduced page load time by improving API handling.",
  //   ],
  // },
  // {
  //   company: "Data Systems Inc.",
  //   role: "Backend Developer Intern",
  //   duration: "Jan 2025 – Apr 2025",
  //   logo: "/company2.jpg",
  //   points: [
  //     "Built RESTful backend APIs supporting scalable data processing workflows.",
  //     "Improved database query efficiency leading to faster response times.",
  //   ],
  // },
  // {
  //   company: "NextGen Software",
  //   role: "Software Engineering Intern",
  //   duration: "Jun 2024 – Dec 2024",
  //   logo: "/company3.png",
  //   points: [
  //     "Implemented core backend services for internal developer tools.",
  //     "Collaborated with engineering teams to enhance system reliability and maintainability.",
  //   ],
  // },
  // {
  //   company: "Algorithmic Research Lab",
  //   role: "Research Assistant",
  //   duration: "Jan 2024 – May 2024",
  //   logo: "/company4.jpg",
  //   points: [
  //     "Worked on algorithm optimization and computational efficiency experiments.",
  //     "Developed scripts for data analysis and performance benchmarking.",
  //   ],
  // },
];

export default function Work() {
  return (
    <section className="work-section">
      <div className="work-wrapper">

        <div className="work-header">
          <div className="work-accent"></div>
          <h2>Selected Work Experience</h2>
        </div>

        <p className="work-sub">
          You can find the complete list of my experiences on{" "}
          <a
            href="https://www.linkedin.com/in/shivank-kumar-a498ba321"
            target="_blank"
            rel="noopener noreferrer"
            className="work-link"
          >
            LinkedIn
          </a>.
        </p>

        {workData.map((job, index) => (
          <div className="work-item" key={index}>
            <div className="work-logo-container">
              <img
                src={job.logo}
                alt={job.company}
                className="work-logo"
              />
            </div>

            <div className="work-details">
              <h3>{job.company}</h3>
              <h4>{job.role}</h4>
              <p className="work-duration">{job.duration}</p>

              <ul>
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}