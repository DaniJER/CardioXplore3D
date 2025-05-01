import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pills(props) {
  const { nodes, materials } = useGLTF("/models-3d/IC/PillsTreatment.glb");
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

useGLTF.preload("/models-3d/IC/PillsTreatment.glb");
