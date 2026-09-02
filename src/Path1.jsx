import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Path1({ onReady }) {
  const { scene } = useGLTF("/assets/models/path1.glb");

  // =========================================
  // PREPARE PATH MESH
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

  // Give the meshes to Player
  if (onReady && meshes.length > 0) {
    onReady(meshes);
  }

  return (
    <primitive
      object={scene}
      position={[-0.1, 0.01, 14.21]}
      scale={4}
    />
  );
}

useGLTF.preload("/assets/models/path1.glb");

export default Path1;