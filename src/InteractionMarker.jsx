import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function InteractionMarker({ position, scale = 0.2 }) {
  const groupRef = useRef(null);
  const hoverRef = useRef(null);

  const { scene } = useGLTF(
    "/assets/markers/ender-star/scene.gltf"
  );

  // =====================================================
  // CENTER THE MODEL
  // =====================================================

  const model = useMemo(() => {
  const clone = scene.clone(true);

  // Create a pivot for the model
  const pivot = new THREE.Group();

  // Add the imported model to the pivot
  pivot.add(clone);

  // Calculate the model's bounding box
  const box = new THREE.Box3().setFromObject(clone);
  const center = new THREE.Vector3();

  box.getCenter(center);

  // Convert the center into the clone's local coordinates
  const localCenter = clone.worldToLocal(center.clone());

  // Move model so its visual center is exactly at pivot origin
  clone.position.sub(localCenter);

  return pivot;
}, [scene]);

  // =====================================================
  // ANIMATION
  // =====================================================

  useFrame((state, delta) => {
  if (!groupRef.current || !hoverRef.current) return;

  // Floating up and down
  hoverRef.current.position.y =
    Math.sin(state.clock.elapsedTime * 1.5) * 0.08;

  // Rotate around its own vertical axis
  hoverRef.current.rotation.y += delta * 1.5;
});

  // =====================================================
  // MARKER
  // =====================================================

  return (
    <group
      ref={groupRef}
      position={position}
    >
      <group ref={hoverRef}>
        <primitive
          object={model}
          scale={scale}
          rotation={[ 0, 0, 0]}
        />
      </group>
    </group>
  );
}

// Preload marker
useGLTF.preload(
  "/assets/markers/ender-star/scene.gltf"
);

export default InteractionMarker;