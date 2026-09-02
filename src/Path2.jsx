import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Path2({ onReady }) {
  const { scene } = useGLTF(
    "/assets/models/path2.glb"
  );

  // =========================================
  // PREPARE PATH 2 MESH
  // =========================================

  const meshes = [];

  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.side = THREE.DoubleSide;
      child.material.needsUpdate = true;

      child.visible = false;
      child.frustumCulled = false;

      meshes.push(child);
    }
  });

  // Give Path 2 meshes to Player
  if (onReady && meshes.length > 0) {
    onReady(meshes);
  }

  return (
    <primitive
      object={scene}
      position={[4.42, -0.01, 6.61]}
      scale={4}
    />
  );
}

useGLTF.preload(
  "/assets/models/path2.glb"
);

export default Path2;