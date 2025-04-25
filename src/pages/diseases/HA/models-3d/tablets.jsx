import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Tablets(props) {
  const { nodes, materials } = useGLTF('/models-3d/HA/tablets.glb');

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tablets.geometry}
        material={materials.TabletsMaterial}
      />
    </group>
  );
}

useGLTF.preload('/models-3d/HA/tablets.glb');
