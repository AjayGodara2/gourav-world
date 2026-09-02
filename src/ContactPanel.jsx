import "./ContactPanel.css";
import contactData from "./data/contactData";

function ContactPanel({ onClose }) {
  return (
    <div className="contact-overlay">
      <div className="contact-panel">

        {/* HEADER */}
        <div className="contact-header">
          <div className="contact-title">
            ✦ CONTACT ✦
          </div>

          <button
            className="contact-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* MAIN CONTENT */}
        <div className="contact-main">

          {/* INTRO */}
          <div className="game-box contact-intro-box">

            <div className="game-box-title">
              📜 LET'S CONNECT
            </div>

            <div className="contact-intro-content">

              <div className="contact-intro-icon">
                ✉
              </div>

              <div>
                <h2>
                  READY FOR THE NEXT QUEST?
                </h2>

                <p>
                  {contactData.message}
                </p>
              </div>

            </div>

          </div>


          {/* CONTACT OPTIONS */}
          <div className="contact-grid">

            {/* EMAIL */}
            <div className="game-box contact-card">

              <div className="game-box-title">
                ✉ EMAIL
              </div>

              <div className="contact-card-content">

                <div className="contact-icon">
                  ✉
                </div>

                <div className="contact-value">
                  {contactData.email}
                </div>

                <a
                  className="contact-button"
                  href={`mailto:${contactData.email}`}
                >
                  OPEN
                </a>

              </div>

            </div>


            {/* GITHUB */}
            <div className="game-box contact-card">

              <div className="game-box-title">
                ⚒ GITHUB
              </div>

              <div className="contact-card-content">

                <div className="contact-icon">
                  ◆
                </div>

                <div className="contact-value">
                  GitHub Profile
                </div>

                <a
                  className="contact-button"
                  href={contactData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN
                </a>

              </div>

            </div>


            {/* LINKEDIN */}
            <div className="game-box contact-card">

              <div className="game-box-title">
                💼 LINKEDIN
              </div>

              <div className="contact-card-content">

                <div className="contact-icon">
                  ◆
                </div>

                <div className="contact-value">
                  LinkedIn Profile
                </div>

                <a
                  className="contact-button"
                  href={contactData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  OPEN
                </a>

              </div>

            </div>


            {/* PORTFOLIO */}
            <div className="game-box contact-card">

              <div className="game-box-title">
                🌐 PORTFOLIO
              </div>

              <div className="contact-card-content">

                <div className="contact-icon">
                  ✦
                </div>

                <div className="contact-value">
                  {contactData.portfolio}
                </div>

                {contactData.portfolio !== "Coming soon" && (
                  <a
                    className="contact-button"
                    href={contactData.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OPEN
                  </a>
                )}

              </div>

            </div>

          </div>

        </div>


        {/* FOOTER */}
        <div className="contact-footer">
          ✦ KEEP EXPLORING • KEEP BUILDING • KEEP CONNECTING ✦
        </div>

      </div>
    </div>
  );
}

export default ContactPanel;