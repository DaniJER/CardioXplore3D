import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ModelSymptom } from "../models-3d/animation-symptom";


const Symptoms = () => {

  return (
    <>
      <div>
        <h1>Symptoms</h1>
      </div>

      <Canvas>
        <OrbitControls />
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 10]} intensity={2} />
        <ModelSymptom scale={0.015} position={[0, 0, 0]} rotation={[0, 0, 0]} />
      </Canvas>
    </>
  );
};

export default Symptoms;
