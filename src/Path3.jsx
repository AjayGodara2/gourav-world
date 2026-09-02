import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Path3({ onReady }) {
  const { scene } = useGLTF(
    "/assets/models/path3.glb"
  );

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

  if (onReady && meshes.length > 0) {
    onReady(meshes);
  }

  return (
    <primitive
      object={scene}
      position={[-0.216, -0.02, -6.697]}
      scale={4}
      color={"red"}
    />
  );
}

useGLTF.preload(
  "/assets/models/path3.glb"
);

export default Path3;