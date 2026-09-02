import { useGLTF } from "@react-three/drei";

function WaterfallMap() {
  const { scene } = useGLTF(
    "/assets/waterfall/scene.gltf"
  );

  return (
    <primitive
      object={scene}
      scale={4}
      position={[0, 0, 0]}
    />
  );
}

export default WaterfallMap;