import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Heart(props) {

  const { nodes, materials } = useGLTF('/models-3d/EC/modelado-de-corazon.glb')
    // console.log(materials)
  return (
     <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials['Material.001']}
        rotation={[0.013, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/EC/modelado-de-corazon.glb')