import "./Skills.css";

const skillsData = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  },

  {
    title: "Frontend",
    skills: ["HTML", "CSS", "ReactJS"],
  },

  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },

  {
    title: "Databases",
    skills: ["MySQL"],
  },

  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "VS Code"],
  },

  {
    title: "Computer Science",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOPs",
      "DBMS",
      "Operating Systems",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">

      <div className="skills-wrapper">

        {/* HEADER */}
        <div className="skills-header">
          <div className="skills-accent"></div>
          <h2>Technical Skills</h2>
        </div>

        <p className="skills-sub">
          Technologies, tools, and computer science fundamentals
          I use to build scalable software systems.
        </p>

        {/* SKILLS GRID */}
        <div className="skills-grid">

          {skillsData.map((category, index) => (
            <div className="skill-card" key={index}>

              <h3>{category.title}</h3>

              <div className="skill-tags">

                {category.skills.map((skill, i) => (
                  <span key={i}>
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

          {/* CURRENTLY LEARNING */}
          <div className="skill-card">

            <h3>Currently Learning</h3>

            <div className="skill-tags">

              <span>Machine Learning</span>
              <span>Distributed Systems</span>
              <span>System Design</span>

            </div>

          </div>

          {/* CODING PROFILES */}
          <div className="skill-card">

            <h3>Coding Profiles</h3>

            <div className="coding-profiles">

              <a
                href="https://github.com/Sapphire14S"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
              >
                Codeforces
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}