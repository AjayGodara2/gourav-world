import { useMemo } from "react";

// =====================================================
// WALKABLE PATH
// =====================================================
//
// These boxes define WHERE the player is allowed to walk.
//
// position = [X, Y, Z]
// size     = [width, height, depth]
//
// The player can move freely inside these areas.
// =====================================================

export const PATH_POINTS = [
  // ===================================================
  // BUILDING 1 / STARTING AREA
  // ===================================================

  {
    name: "START",
    position: [4.15, 4.58, 17],
    size: [2, 0.2, 2],
  },

  {
    name: "P2",
    position: [2.65, 4.58, 17],
    size: [1, 0.2, 1],
  },

  {
    name: "P3",
    position: [2.5, 4.58, 15.9],
    size: [0.7, 0.2, 1.2],
  },

  {
    name: "P4",
    position: [2, 4.58, 15.7],
    size: [0.3, 0.2, 0.7],
  },

  // ===================================================
  // BRIDGE
  // ===================================================

  {
    name: "P5",
    position: [1.76, 4.6, 15.5],
    size: [8, 0.2, 0.5],
  },

  {
    name: "P6",
    position: [0.5, 4.65, 15.5],
    size: [2.73, 0.2, 0.5],
  },

  {
    name: "P7",
    position: [0.8, 4.69, 15.5],
    size: [1.6, 0.2, 0.5],
  },

  {
    name: "P8",
    position: [0.9, 4.74, 15.5],
    size: [1.5, 0.2, 0.5],
  },

  // ===================================================
  // BUILDING 2
  // ===================================================

  {
    name: "START2",
    position: [-2.5, 4.59, 15.5],
    size: [2, 0.2, 2],
  },
];


// =====================================================
// PATH VISUALIZATION
// =====================================================

function PathSystem() {
  const markers = useMemo(() => PATH_POINTS, []);

  return (
    <group>
      {markers.map((marker) => (
        <mesh
          key={marker.name}
          position={marker.position}
        >
          <boxGeometry args={marker.size} />

          <meshBasicMaterial
            color="#ff69b4"
            transparent
            opacity={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

export default PathSystem;