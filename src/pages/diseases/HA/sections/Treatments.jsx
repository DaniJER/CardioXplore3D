import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Tablets } from "../models-3d/Tablets";

const Treatments = () => {
  return (
    <>
      <div>
        <h1>Treatments</h1>
      </div>

      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 10]} intensity={2} />
        <Tablets scale={0.5} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </Canvas>
    </>
  );
};

export default Treatments;
