import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { Physics } from "@react-three/rapier";

import InteractionSystem from "./InteractionSystem";
import Path1 from "./Path1";
import Path2 from "./Path2";
import Path3 from "./Path3";



import AboutPanel from "./AboutPanel";
import AchievementsPanel from "./AchievementsPanel";
import ProjectsPanel from "./ProjectsPanel";
import ExplorationPanel from "./ExplorationPanel";
import ContactPanel from "./ContactPanel";

import WaterfallMap from "./WaterfallMap";
import Player from "./Player";
import ControlsPanel from "./ControlsPanel";

import DebugSystem from "./debug/DebugSystem";

import "./App.css";

function App() {
  const [nearbyInteraction, setNearbyInteraction] =
    useState(null);

  // =========================================
  // PLAYER REF
  // =========================================


  // =========================================
  // WALKABLE PATH MESHES
  // =========================================
  const [freeMove, setFreeMove] = useState(false);
  const walkableMeshes = useRef([]);

  const [aboutOpen, setAboutOpen] = useState(false);
  const [achievementsOpen, setAchievementsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [explorationOpen, setExplorationOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  

  const playerBodyRef = useRef(null);

  const handleTeleport = (point) => {
  if (!playerBodyRef.current) return;

  playerBodyRef.current.setNextKinematicTranslation({
    x: point[0],
    y: point[1],
    z: point[2],
  });
};

  const handlePathReady = (meshes) => {
  walkableMeshes.current = meshes;
};

const handlePath2Ready = (meshes) => {
  walkableMeshes.current = [
    ...walkableMeshes.current,
    ...meshes,
  ];
};


const handlePath3Ready = (meshes) => {
  walkableMeshes.current = [
    ...walkableMeshes.current,
    ...meshes,
  ];
};

  return (
    <div className="game">

      {/* =========================================
          INTERACTION MESSAGE
      ========================================= */}

      {/* =========================================
    INTERACTION MESSAGE
========================================= */}

{nearbyInteraction === "about" && (
  <div className="interaction">
    Press E — About Me
  </div>
)}

{nearbyInteraction === "achievements" && (
  <div className="interaction">
    Press E — Achievements & Certificates
  </div>
)}

{nearbyInteraction === "projects" && (
  <div className="interaction">
    Press E — Projects
  </div>
)}

{nearbyInteraction === "exploration" && (
  <div className="interaction">
    Press E — Exploration
  </div>
)}

{nearbyInteraction === "contact" && (
  <div className="interaction">
    Press E — Contact
  </div>
)}



{nearbyInteraction === "path2" && (
  <div className="interaction">
    Press E — Explore Further
  </div>
)}

{nearbyInteraction === "path1" && (
  <div className="interaction">
    Press E — Visit Projects
  </div>
)}

{nearbyInteraction === "path3" && (
  <div className="interaction">
    Press E — Head to Contact
  </div>
)}



      <Canvas
        camera={{
          position: [0, 5, 10],
          fov: 60,
        }}
        gl={{
          antialias: true,
        }}
      >

        <color
          attach="background"
          args={["#87CEEB"]}
        />

        <ambientLight intensity={1} />

        <directionalLight
          position={[10, 30, 10]}
          intensity={2}
          castShadow
        />

        <Suspense fallback={null}>

          <Physics gravity={[0, -9.81, 0]}>

            {/* =====================================
                MAIN WORLD
            ===================================== */}

            <WaterfallMap />

            {/* =====================================
                WALKABLE BLENDER PATH
            ===================================== */}

            <Path1
              onReady={handlePathReady}
            />

            <Path2 
            onReady={handlePath2Ready}
             />

             <Path3
  onReady={handlePath3Ready}
/>

            {/* =====================================
                INTERACTION MARKERS
            ===================================== */}

            <InteractionSystem />

            {/* =====================================
                PLAYER
            ===================================== */}

            <Player
  onNearbyInteraction={setNearbyInteraction}
  walkableMeshes={walkableMeshes}
  playerBodyRef={playerBodyRef}
  freeMove={freeMove}
  onTeleport={handleTeleport}
  onOpenAbout={() => setAboutOpen(true)}
  onOpenAchievements={() => setAchievementsOpen(true)}
   onOpenProjects={() => setProjectsOpen(true)}
   onOpenExploration={() => setExplorationOpen(true)}
   onOpenContact={() => setContactOpen(true)}
/>

          </Physics>

        </Suspense>

        {/* =========================================
            DEBUG SYSTEM
        ========================================= */}

        <DebugSystem
          playerRef={playerBodyRef}
          onFreeMoveChange={setFreeMove}
        />

      </Canvas>
      <ControlsPanel />
      {aboutOpen && (
  <AboutPanel
    onClose={() => setAboutOpen(false)}
  />
)}

{achievementsOpen && (
  <AchievementsPanel
    onClose={() => setAchievementsOpen(false)}
  />
)}

{projectsOpen && (
  <ProjectsPanel
    onClose={() => setProjectsOpen(false)}
  />
)}

{explorationOpen && (
  <ExplorationPanel
    onClose={() => setExplorationOpen(false)}
  />
)}

{contactOpen && (
  <ContactPanel
    onClose={() => setContactOpen(false)}
  />
)}

    </div>
  );
}

export default App;