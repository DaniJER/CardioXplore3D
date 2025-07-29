import React, { useRef } from "react";
import { PositionalAudio, useGLTF } from "@react-three/drei";

export function ChestPain(props) {
  const { nodes, materials } = useGLTF("/models-3d/EAC/chest-pain.glb");
  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <PositionalAudio
        ref={audioRef}
        url={props.Audio}
        distance={5}
        loop={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ChestPain.geometry}
        material={materials["Material_0.001"]}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/EAC/chest-pain.glb");
