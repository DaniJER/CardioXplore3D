import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Training(props) {
  const { nodes, materials } = useGLTF("/models-3d/EAC/training.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Training.geometry}
        material={materials.Material_0}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/EAC/training.glb");
