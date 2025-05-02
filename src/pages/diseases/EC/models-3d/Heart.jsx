import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Heart(props) {
  const { nodes, materials } = useGLTF('/models-3d/EC/modelado-de-corazon.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['tripo_node_a83665d0-932c-487c-96ab-e3ab1a1d35c8'].geometry}
        material={materials['tripo_material_a83665d0-932c-487c-96ab-e3ab1a1d35c8']}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/EC/modelado-de-corazon.glb')