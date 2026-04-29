import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BS Computer Science</h4>
                <h5>COMSATS University Islamabad</h5>
              </div>
              <h3>2027</h3>
            </div>
            <p>
              In progress undergraduate degree with a focus on core computer
              science principles, data structures, and secure systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Academic & Personal Projects</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed QRONOS, an encrypted file-sharing system using Python,
              and several automated system utilities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Personal Projects</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Building web applications including a Stock Market Analysis
              platform and management systems using modern tech stacks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
