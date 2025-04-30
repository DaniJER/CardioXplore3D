import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Artery(props) {
  const { nodes, materials } = useGLTF("/models-3d/EAC/obstructed-artery.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesh_0001.geometry}
        material={materials["Material_0.001"]}
      />
    </group>
  );
}

useGLTF.preload("/obstructed-artery.glb");
