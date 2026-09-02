import { useState } from "react";
import "./AchievementsPanel.css";

const certificates = [
  {
    id: "react",
    title: "REACTJS",
    provider: "Infosys Springboard",
    date: "Feb 04, 2026",
    icon: "⚛",
    className: "react-card",
    image: "/assets/certificates/react.png",
  },
  {
    id: "ai",
    title: "INTRODUCTION TO AI",
    provider: "Infosys Springboard",
    date: "Apr 07, 2026",
    icon: "✦",
    className: "ai-card",
    image: "/assets/certificates/ai.png",
  },
  {
    id: "cyber",
    title: "CYBER SMART",
    provider: "WNS Cares Foundation",
    date: "Jul 25, 2026",
    icon: "🛡",
    className: "cyber-card",
    image: "/assets/certificates/cyber.png",
  },
];

function AchievementsPanel({ onClose }) {
  const [selectedCertificate, setSelectedCertificate] =
    useState(null);

  return (
    <div className="achievements-overlay">

      <div className="achievements-panel">

        {/* HEADER */}
        <div className="achievements-header">

          <div className="achievement-trophy">
            🏆
          </div>

          <div className="achievements-title">
            ✦ ACHIEVEMENTS & CERTIFICATES ✦
          </div>

          <button
            className="achievements-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        {/* SECTION HEADER */}
        <div className="achievement-section-title">
          🏆 &nbsp; ACHIEVEMENTS UNLOCKED ({certificates.length})
        </div>


        {/* CARDS */}
        <div className="certificate-grid">

          {certificates.map((certificate) => (

            <div
              className={`certificate-card ${certificate.className}`}
              key={certificate.id}
            >

              {/* IMAGE */}
              <div className="certificate-image-wrapper">

                <div className="certificate-tag">
                  CERTIFICATE
                </div>

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                />

              </div>


              {/* INFO */}
              <div className="certificate-info">

                <div className="certificate-heading">

                  <div className="certificate-icon">
                    {certificate.icon}
                  </div>

                  <div>

                    <div className="certificate-title">
                      {certificate.title}
                    </div>

                    <div className="certificate-provider">
                      {certificate.provider}
                    </div>

                  </div>

                </div>


                <div className="certificate-divider" />


                <div className="certificate-date">
                  📅 &nbsp; {certificate.date}
                </div>


                <button
                  className="view-certificate"
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                >
                  VIEW CERTIFICATE
                  <span>›</span>
                </button>

              </div>

            </div>

          ))}

        </div>


        {/* FOOTER */}
        <div className="achievements-footer">
          ✦ &nbsp; KEEP LEARNING. KEEP BUILDING. KEEP ACHIEVING. &nbsp; ✦
        </div>


        {/* FULL CERTIFICATE VIEWER */}
        {selectedCertificate && (

          <div
            className="certificate-viewer"
            onClick={() => setSelectedCertificate(null)}
          >

            <div
              className="certificate-viewer-content"
              onClick={(event) => event.stopPropagation()}
            >

              <button
                className="certificate-viewer-close"
                onClick={() => setSelectedCertificate(null)}
              >
                ×
              </button>

              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="certificate-full-image"
              />

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default AchievementsPanel;