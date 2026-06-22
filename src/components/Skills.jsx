import "./Skills.css";

const skillsData = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "SQL"],
  },

  {
    title: "Achievements",
    skills: [
      "Rank ~644 among 28,000+ participants in CF Round 1062 (Div. 4)",
      "CF Max Rating: 1154"
    ],
  },

  {
    title: "Development",
    skills: ["HTML", "CSS", "ReactJS", "Node.js", "Express.js", "REST APIs"],
  },

  {
    title: "Computer Science & Mathematics",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOPs",
      "DBMS",
      "Operating Systems",
      "Discrete Mathematics",
      "Probability & Statistics",
      "Linear Algebra",
      "Calculus",
      "Optimization Techniques"
    ],
  },
  
  {
    title: "Databases",
    skills: ["MySQL"],
  },

  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Linux", "VS Code", "LaTeX"],
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

              <span>Artificial Intelligence</span>
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
                href="https://leetcode.com/u/Quartz14S/"
                target="_blank"
                rel="noreferrer"
              >
                LeetCode
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}