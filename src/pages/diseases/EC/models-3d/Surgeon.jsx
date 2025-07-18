import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Surgeon(props) {
  const { nodes, materials } = useGLTF('/models-3d/EC//surgeon.glb');
  // console.log(materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['15775_NoveltyBust_Surgeon_v1'].geometry}
        material={nodes['15775_NoveltyBust_Surgeon_v1'].material}
        scale={0.1}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/EC/surgeon.glb')