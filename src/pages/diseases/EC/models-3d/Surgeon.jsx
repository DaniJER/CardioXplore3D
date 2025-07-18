import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Surgeon(props) {
  const { nodes, materials } = useGLTF('/models-3d/EC//surgeon.glb');
  // console.log(materials);
  return (
      <group {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="Surgeon"
          castShadow
          receiveShadow
          geometry={nodes.Surgeon.geometry}
          material={materials.surgeonMaterial}
          scale={0.1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/EC/surgeon.glb')