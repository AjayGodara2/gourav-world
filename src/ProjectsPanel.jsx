import { useState } from "react";
import projectsData from "./data/projectsData";
import ProjectDetailsPanel from "./ProjectDetailsPanel";
import "./ProjectsPanel.css";

function ProjectsPanel({ onClose }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const completedProjects = projectsData.filter(
    (project) => project.status === "completed"
  );

  const inProgressProjects = projectsData.filter(
    (project) => project.status === "progress"
  );

  if (selectedProject) {
    return (
      <ProjectDetailsPanel
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
        onClose={onClose}
      />
    );
  }

  return (
    <div className="projects-overlay">
      <div className="projects-panel">

        {/* HEADER */}
        <div className="projects-header">
          <div className="projects-title">
            ⚒ PROJECTS & BUILDS ⚒
          </div>

          <button
            className="projects-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* TAGLINE */}
        <div className="projects-tagline">
          🌱 SHOWCASING WHAT I'VE BUILT & WHAT I'M BUILDING
        </div>

        {/* COMPLETED */}
        <section className="projects-section">

          <div className="projects-section-title">
            ⭐ FEATURED PROJECTS
            <span>
              Completed projects I'm proud of
            </span>
          </div>

          <div className="projects-grid">
            {completedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

        </section>

        {/* IN PROGRESS */}
        <section className="projects-section">

          <div className="projects-section-title">
            ⚒ CURRENTLY BUILDING
            <span>
              Projects I'm actively working on
            </span>
          </div>

          <div className="projects-grid">
            {inProgressProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>

        </section>

        <div className="projects-footer">
          KEEP BUILDING. KEEP EXPLORING. KEEP CREATING.
        </div>

      </div>
    </div>
  );
}


function ProjectCard({ project, onClick }) {
  return (
    <div
      className="project-card"
      onClick={onClick}
    >

      <div className="project-image">
        {project.screenshots?.length > 0 ? (
          <img
            src={project.screenshots[0]}
            alt={project.title}
          />
        ) : (
          <div className="project-image-placeholder">
            ⚒
          </div>
        )}
      </div>

      <div className="project-card-content">

        <h3>{project.title}</h3>

        <div
          className={`project-status ${
            project.status === "completed"
              ? "completed"
              : "progress"
          }`}
        >
          {project.status === "completed" ? "✓" : "⚒"}{" "}
          {project.statusLabel}
        </div>

        <p>
          {project.description}
        </p>

        <button
          className="project-details-button"
          onClick={(event) => {
            event.stopPropagation();
            onClick();
          }}
        >
          VIEW DETAILS →
        </button>

      </div>

    </div>
  );
}

export default ProjectsPanel;