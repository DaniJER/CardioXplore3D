import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Consequence(props) {
  const { nodes, materials } = useGLTF("/models-3d/IC/ArmorConsequence.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Treatment.geometry}
        material={materials.Material_0}
      />
    </group>
  );
}

useGLTF.preload("/models-3d/IC/ArmorConsequence.glb");
