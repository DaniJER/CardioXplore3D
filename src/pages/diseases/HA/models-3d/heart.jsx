import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Heart(props) {
  const { nodes, materials } = useGLTF('/models-3d/HA/heart.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials.HeartMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/HA/heart.glb')