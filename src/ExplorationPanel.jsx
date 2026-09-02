import "./ExplorationPanel.css";

function ExplorationPanel({ onClose }) {
  return (
    <div className="exploration-overlay">
      <div className="exploration-panel">

        {/* TOP */}
        <div className="exploration-top">
          <button
            className="exploration-back"
            onClick={onClose}
          >
            ← BACK
          </button>

          <button
            className="exploration-close"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        {/* HEADER */}
        <div className="exploration-header">
          <div className="exploration-icon">
            🔬
          </div>

          <div>
            <h1>EXPLORATION LAB</h1>

            <p>
              Ideas I'm exploring beyond my current projects.
            </p>

            <div className="exploration-divider" />
          </div>

          <div className="exploration-note">
            Same mind...
            <br />
            new worlds...
            <br />
            :)
          </div>
        </div>

        {/* CONTENT */}
        <div className="exploration-grid">

          {/* CURRENTLY EXPLORING */}
          <section className="exploration-card exploring-card">
            <div className="exploration-card-heading">
              <span className="exploration-card-icon">
                🔭
              </span>

              <div>
                <h2>1. CURRENTLY<br />EXPLORING</h2>

                <p>
                  Technologies and domains
                  I'm diving deeper into.
                </p>
              </div>
            </div>

            <div className="exploration-items">

              <ExplorationItem
                icon="🧠"
                title="AI / ML"
                text="Exploring intelligent systems, machine learning and how AI can solve real-world problems."
              />

              <ExplorationItem
                icon="◇"
                title="3D Web & Graphics"
                text="Building immersive 3D experiences with Three.js, React Three Fiber and WebGL."
              />

              <ExplorationItem
                icon="🎮"
                title="Interactive Experiences"
                text="Creating engaging interfaces that feel more like experiences than traditional websites."
              />

              <ExplorationItem
                icon="▣"
                title="Backend & Systems"
                text="Learning scalable backend architecture, databases and system design concepts."
              />

            </div>
          </section>

          {/* IDEAS */}
          <section className="exploration-card ideas-card">
            <div className="exploration-card-heading">
              <span className="exploration-card-icon">
                💡
              </span>

              <div>
                <h2>2. IDEAS I'M<br />THINKING ABOUT</h2>

                <p>
                  Concepts that excite me and
                  that I want to build someday.
                </p>
              </div>
            </div>

            <div className="exploration-items">

              <ExplorationItem
                icon="🧠"
                title="AI × Operating Systems"
                text="An AI deeply integrated into the OS — understanding context across applications while keeping privacy and control in the user's hands."
              />

              <ExplorationItem
                icon="🌍"
                title="Digital Worlds"
                text="Persistent 3D environments where people can explore, collaborate and create together."
              />

              <ExplorationItem
                icon="◈"
                title="Natural Interfaces"
                text="Exploring voice, gesture and spatial interactions for more human and intuitive computing."
              />

            </div>
          </section>

          {/* EXPERIMENTS */}
          <section className="exploration-card experiments-card">
            <div className="exploration-card-heading">
              <span className="exploration-card-icon">
                🧪
              </span>

              <div>
                <h2>3. EXPERIMENTS &<br />PROTOTYPES</h2>

                <p>
                  Small experiments and prototypes
                  I'm working on to learn and test ideas.
                </p>
              </div>
            </div>

            <div className="exploration-items">

              <ExplorationItem
                icon="🌐"
                title="3D Portfolio Concepts"
                text="Exploring new ways to present portfolios as interactive 3D worlds — like this one!"
              />

              <ExplorationItem
                icon="🤖"
                title="AI Assistant Prototypes"
                text="Building small AI assistants to understand how context-aware systems can be useful."
              />

              <ExplorationItem
                icon="⚒"
                title="Creative Tools"
                text="Making tools that help with creativity, productivity and turning ideas into reality."
              />

            </div>

            <div className="exploration-experiment-footer">
              ⚒ Experiment. Fail. Learn. Repeat.
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <div className="exploration-quote">
          <span>“</span>

          I don't have all the answers yet.
          But I'm curious enough to keep exploring.

          <span>”</span>
        </div>

      </div>
    </div>
  );
}

function ExplorationItem({ icon, title, text }) {
  return (
    <div className="exploration-item">

      <div className="exploration-item-icon">
        {icon}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

    </div>
  );
}

export default ExplorationPanel;