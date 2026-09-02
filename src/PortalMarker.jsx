import { useGLTF } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function PortalMarker({
  position,
  scale = 0.05,
  offset = [0, 0, 0],
  rotation = [0, 0, 0],
}) {
  const groupRef = useRef();

  const { scene } = useGLTF(
    "/assets/markers/portal/scene.gltf"
  );

  

  const model = useMemo(() => {
    const clone = scene.clone(true);

    // Make sure the portal is visible
    clone.traverse((child) => {
      if (child.isMesh) {
        child.visible = true;
        child.frustumCulled = false;
      }
    });

    // Center the model so it rotates around itself
    const box = new THREE.Box3().setFromObject(clone);
    const center = new THREE.Vector3();

    box.getCenter(center);

    clone.position.sub(center);

    return clone;
  }, [scene]);

  return (
  <group
    ref={groupRef}
    position={position}
    rotation={rotation}
  >
    <primitive
      object={model}
      position={offset}
      scale={scale}
    />
  </group>
);
}

useGLTF.preload(
  "/assets/markers/portal/scene.gltf"
);

export default PortalMarker;