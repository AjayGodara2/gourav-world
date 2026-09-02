import { useMemo } from "react";
import InteractionMarker from "./InteractionMarker";
import PortalMarker from "./PortalMarker";

function InteractionSystem() {
  const interactions = useMemo(
    () => [
      // =========================================
      // ABOUT ME
      // =========================================
      {
        id: "about",
        name: "About Me",
        position: [4.1, 4.98, 16.9],
        radius: 1.5,
      },

      // =========================================
      // ACHIEVEMENTS + CERTIFICATES
      // =========================================
      {
  id: "achievements",
  name: "Achievements & Certificates",
  position: [-2.054, 5.1, 15.514],
  radius: 1.5,
},

      // =========================================
      // PROJECTS
      // =========================================
      {
        id: "projects",
        name: "Projects",
        position: [-4.290, 6.1, 13.595], 
        radius: 1.5,
      },

      // =========================================
      // RESUME
      // =========================================
      {
  id: "exploration",
  name: "Exploration",
  position: [4.489, 6.552, 6.000],
  radius: 1.5,
},

      // =========================================
      // CONTACT
      // =========================================
      {
  id: "contact",
  name: "Contact",
  position: [-0.324, 10.541, -1.731],
  radius: 1.5,
},
    ],
    []
  );

  return (
    <group>

      {/* ABOUT ME */}
      <InteractionMarker
        position={interactions[0].position}
      />

      {/* ACHIEVEMENTS + CERTIFICATES */}
      <InteractionMarker
        position={interactions[1].position}
      />

      {/* PROJECTS */}
      <InteractionMarker
        position={interactions[2].position}
      />

      {/* RESUME */}
      <InteractionMarker
        position={interactions[3].position}
      />

      {/* CONTACT */}
<InteractionMarker
  position={interactions[4].position}
/>

      {/* PATH 1 → PATH 2 */}
      <PortalMarker
        position={[-4.694, 5.937, 11.792]}
        scale={0.05}
        offset={[0, 0.25, -0.25]}
      />

      {/* PATH 2 → PATH 1 */}
      <PortalMarker
        position={[4.264, 6.279, 8.968]}
        scale={0.05}
        offset={[0, 0, 0.12]}
      />

      {/* PATH 2 → PATH 3 */}

<PortalMarker
  position={[1.603, 6.543, 6.611]}
   rotation={[0, -Math.PI / 2, 0]}
  scale={0.05}
/>

{/* PATH 3 → PATH 2 */}
<PortalMarker
  position={[2.187, 10.341, -2.115]}
  scale={0.05}
/>


    </group>
  );
}

export default InteractionSystem;