import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function ChestPain(props) {
  const { nodes, materials } = useGLTF("/models-3d/EAC/chest-pain.glb");
  return (
    <group {...props} dispose={null}>
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
