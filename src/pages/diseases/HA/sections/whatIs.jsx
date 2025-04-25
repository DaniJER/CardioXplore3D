import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Heart } from "../models-3d/heart";

const WhatIs = () => {

    return (
        <>
            <div>
                <h1>WhatIs</h1>
            </div>
            
            <Canvas>
                <OrbitControls />
                <ambientLight intensity={1.5} />
                <directionalLight position={[5, 5, 10]} intensity={2} />
                <Heart scale={4} position={[0, 0, 0]} rotation={[0, 0, 0]} />
            </Canvas>
        </>
    );
};

export default WhatIs;