import "./AboutPanel.css";
import aboutData from "./data/aboutData";

function AboutPanel({ onClose }) {
  return (
    <div className="about-overlay">
      <div className="about-panel">

        {/* HEADER */}
        <div className="about-header">
          <div className="about-title">
            ✦ ABOUT ME ✦
          </div>

          <button
            className="about-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="about-main">

          {/* LEFT COLUMN */}
          <div className="about-column about-left-column">

            {/* ABOUT ME */}
            <div className="game-box about-bio-box">
              <div className="game-box-title">
                📜 ABOUT ME
              </div>

              <div className="bio-content">
                <h2>HEY, I'M {aboutData.name}!</h2>

                {aboutData.bio.map((line, index) => (
                  line === "" ? (
                    <div
                      className="bio-space"
                      key={index}
                    />
                  ) : (
                    <p key={index}>
                      {line}
                    </p>
                  )
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="game-box education-box">
              <div className="game-box-title">
                🎓 EDUCATION
              </div>

              <div className="education-content">
                <div className="education-icon">
                  🎓
                </div>

                <div>
                  <strong>
                    {aboutData.education.degree}
                  </strong>

                  <div className="education-university">
                    {aboutData.education.university}
                  </div>

                  <span className="education-year">
                    {aboutData.education.duration}
                  </span>
                </div>
              </div>
            </div>

          </div>


          {/* CENTER COLUMN */}
          <div className="about-column about-center-column">

            {/* PROFILE */}
            <div className="game-box profile-box">

              <div className="game-box-title">
                👤 PROFILE
              </div>

              <div className="profile-content">

                <div className="photo-frame">
                  <div className="photo-placeholder">
                    <img
                      src="/assets/photo/pic.png"
                      alt="Gourav"
                      className="profile-photo"
                    />
                  </div>
                </div>

                <div className="profile-name">
                  {aboutData.name}
                </div>

                <div className="profile-role">
                  COMPUTER SCIENCE STUDENT
                </div>

              </div>

            </div>


            {/* CURRENT QUEST */}
            <div className="game-box quest-box">

              <div className="game-box-title">
                🚩 CURRENT QUEST
              </div>

              <div className="quest-content">

                <div className="quest-text">
                  <strong>
                    Explore → Learn → Build
                  </strong>

                  <span>
                    Keep discovering what comes next.
                  </span>
                </div>

                <div className="quest-icon">
                  ✦
                </div>

              </div>

            </div>

          </div>


          {/* RIGHT COLUMN */}
          <div className="about-column about-right-column">

            {/* CURRENTLY EXPLORING */}
            <div className="game-box exploring-box">

              <div className="game-box-title">
                🧭 CURRENTLY EXPLORING
              </div>

              <div className="exploring-list">
                {aboutData.exploring.map((item, index) => (
                  <div
                    className="exploring-item"
                    key={item}
                  >
                    <span className="item-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>


            {/* THINGS I'VE BEEN BUILDING */}
            <div className="game-box building-box">

              <div className="game-box-title">
                ⚒ THINGS I'VE BEEN BUILDING
              </div>

              <div className="building-grid">
                {aboutData.building.map((item) => (
                  <div
                    className="building-item"
                    key={item}
                  >
                    <span>◆</span>
                    {item}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>


        {/* TECHNOLOGIES */}
        <div className="technology-section">

          <div className="game-box tech-box">

            <div className="game-box-title">
              ⚙ TECHNOLOGIES & TOOLS
            </div>

            <div className="tech-grid">
              {aboutData.technologies.map((tech) => (
                <div
                  className="tech-item"
                  key={tech}
                >
                  {tech}
                </div>
              ))}
            </div>

          </div>

        </div>


        {/* FOOTER */}
        <div className="about-footer">
          ✦ KEEP EXPLORING • KEEP BUILDING • KEEP GROWING ✦
        </div>

      </div>
    </div>
  );
}

export default AboutPanel;