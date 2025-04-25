import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ModelPrevention } from "../models-3d/animation-prevention";


const Prevention = () => {

  return (
    <>
      <div>
        <h1>Prevention</h1>
      </div>

      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 10]} intensity={2} />
        <ModelPrevention scale={0.015} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </Canvas>
    </>
  );
};

export default Prevention;
