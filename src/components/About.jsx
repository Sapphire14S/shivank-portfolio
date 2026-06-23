import "./About.css";

export default function About() {
  return (
    <section id="about" className="about-modern">
      <div className="about-card">

        {/* Header Row */}
        <div className="about-header">
          <div className="about-accent"></div>
          <h2>About Me</h2>
        </div>

        {/* Content */}
        <div className="about-content">

          <h3 className="about-heading">
            I'm a Computer Science undergrad with a strong interest in software engineering,
            scalable systems, and machine learning. I enjoy building reliable, high-performance
            software and tackling complex problems through strong algorithmic thinking, efficient system design, and clean, maintainable code.
          </h3>

          <p>
            My experience includes developing 
            <span className="highlight"> developing scalable, efficient software solutions and
            solving algorithmic challenges</span>, with a consistent focus on writing efficient, production-quality code.
            I'm particularly interested in
            <span className="highlight"> large-scale systems</span>,
            <span className="highlight"> distributed computing</span>, and designing software that remains efficient under
            <span className="highlight"> real-world constraints</span>.
          </p>

          <p>
            I'm actively seeking 
            <span className="highlight"> software engineering opportunities</span>—especially at 
            <span className="highlight"> leading technology companies</span> and
            <span className="highlight"> quantitative firms</span>—where I can contribute to solving challenging problems in large-scale
            infrastructure, data-intensive systems, and performance-critical applications.
          </p>

          <p>
            Outside of academics and development, I actively participate in
            <span className="highlight"> competitive programming</span>, enjoy tackling 
            <span className="highlight"> algorithmic challenges</span>, and
            continuously strengthen my analytical thinking and problem-solving abilities.
          </p>

          <p>
            In my free time, I enjoy reading about 
            <span className="highlight"> software architecture</span>,
            <span className="highlight"> distributed systems</span>, and 
            <span className="highlight"> emerging technologies </span>
            while exploring ideas that broaden my
            understanding of the tech ecosystem.
          </p>

        </div>
      </div>
    </section>
  );
}