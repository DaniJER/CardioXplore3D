import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Jeringa(props) {
  const { nodes, materials } = useGLTF('/models-3d/Quiz/Jeringa.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]} scale={0.003}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials['Material #106']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials['Material #104']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo.geometry}
        material={materials['Material #271']}
        position={[0, 0, 0]}
        scale={0.003}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/Quiz/Jeringa.glb')