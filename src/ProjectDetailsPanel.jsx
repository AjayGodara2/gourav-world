import { useState } from "react";
import "./ProjectsPanel.css";

function ProjectDetailsPanel({
  project,
  onBack,
  onClose,
}) {
  const [activeImage, setActiveImage] = useState(0);

  const hasScreenshots =
    project.screenshots &&
    project.screenshots.length > 0;

  return (
    <div className="projects-overlay">

      <div className="project-details-panel">

        {/* ================================= */}
        {/* TOP BAR */}
        {/* ================================= */}

        <div className="project-details-top">

          <button
            className="project-back-button"
            onClick={onBack}
          >
            ← BACK TO PROJECTS
          </button>

          <button
            className="projects-close"
            onClick={onClose}
          >
            ×
          </button>

        </div>


        {/* ================================= */}
        {/* TITLE */}
        {/* ================================= */}

        <div className="project-details-header">

          <h1>
            {project.title}
          </h1>

          <div
            className={`project-status ${
              project.status === "completed"
                ? "completed"
                : "progress"
            }`}
          >
            {project.status === "completed"
              ? "✓ COMPLETED"
              : "⚒ IN PROGRESS"}
          </div>

        </div>


        {/* ================================= */}
        {/* META */}
        {/* ================================= */}

        {(project.completedDate ||
          project.category ||
          project.type) && (

          <div className="project-meta">

            {project.completedDate && (
              <div className="project-meta-item">
                <span>▣</span>
                <div>
                  <small>COMPLETED</small>
                  <strong>
                    {project.completedDate}
                  </strong>
                </div>
              </div>
            )}

            {project.category && (
              <div className="project-meta-item">
                <span>◆</span>
                <div>
                  <small>CATEGORY</small>
                  <strong>
                    {project.category}
                  </strong>
                </div>
              </div>
            )}

            {project.type && (
              <div className="project-meta-item">
                <span>◇</span>
                <div>
                  <small>TYPE</small>
                  <strong>
                    {project.type}
                  </strong>
                </div>
              </div>
            )}

          </div>
        )}


        {/* ================================= */}
        {/* MAIN CONTENT */}
        {/* ================================= */}

        <div className="project-details-main">

          {/* GALLERY */}

          <div className="project-gallery">

            <div className="project-main-image">

              {hasScreenshots ? (

                <img
                  src={project.screenshots[activeImage]}
                  alt={`${project.title} screenshot`}
                />

              ) : (

                <div className="project-gallery-placeholder">
                  PROJECT SCREENSHOT
                </div>

              )}

            </div>


            {hasScreenshots && (

              <div className="project-thumbnails">

                {project.screenshots.map(
                  (image, index) => (

                    <button
                      key={image}
                      className={
                        activeImage === index
                          ? "thumbnail active"
                          : "thumbnail"
                      }
                      onClick={() =>
                        setActiveImage(index)
                      }
                    >

                      <img
                        src={image}
                        alt=""
                      />

                    </button>

                  )
                )}

              </div>

            )}

          </div>


          {/* ABOUT */}

          <div className="project-description">

            <h2>
              ▣ ABOUT THE PROJECT
            </h2>

            <p>
              {project.description}
            </p>


            {/* QUICK LINKS */}

            {(project.github ||
              project.liveDemo ||
              project.documentation) && (

              <div className="project-links">

                <h2>
                  🔗 QUICK LINKS
                </h2>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ◉ GitHub Repository ↗
                  </a>
                )}

                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ◈ Live Demo ↗
                  </a>
                )}

                {project.documentation && (
                  <a
                    href={project.documentation}
                    target="_blank"
                    rel="noreferrer"
                  >
                    ▤ Documentation ↗
                  </a>
                )}

              </div>

            )}

          </div>

        </div>


        {/* ================================= */}
        {/* LOWER INFORMATION */}
        {/* ================================= */}

        <div className="project-details-lower">


          {/* FEATURES */}

          <div className="project-info-box">

            <h2>
              ⭐ KEY FEATURES
            </h2>

            {project.features?.length > 0 ? (

              <ul>

                {project.features.map(
                  (feature, index) => (

                    <li key={index}>
                      ◆ {feature}
                    </li>

                  )
                )}

              </ul>

            ) : (

              <p className="empty-info">
                Features will be added here.
              </p>

            )}

          </div>


          {/* TECH STACK */}

          <div className="project-info-box">

            <h2>
              ⚙ TECH STACK
            </h2>

            {project.techStack?.length > 0 ? (

              <div className="tech-stack">

                {project.techStack.map(
                  (tech, index) => (

                    <div
                      className="tech-item"
                      key={index}
                    >
                      {tech}
                    </div>

                  )
                )}

              </div>

            ) : (

              <p className="empty-info">
                Tech stack will be added here.
              </p>

            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProjectDetailsPanel;