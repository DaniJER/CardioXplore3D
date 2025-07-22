import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Heart(props) {

  const { nodes, materials } = useGLTF('/models-3d/EC/modelado-de-corazon.glb')
    console.log(materials)
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials.Materialheart}
        rotation={[0.013, 0, 0]}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[0.086, 0, 0]}
        scale={0.075}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere001.geometry}
        material={nodes.Icosphere001.material}
        position={[-0.091, -0.099, 0.101]}
        scale={0.06}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart_Domain.geometry}
        material={materials.Material}
        position={[0, -0.018, 0]}
        scale={[0.345, 0.767, 0.285]}
      /> */}
    </group>
  )
}

useGLTF.preload('/models-3d/EC/modelado-de-corazon.glb')