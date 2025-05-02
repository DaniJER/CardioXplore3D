import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Wine(props) {
  const { nodes, materials } = useGLTF('/models-3d/IC/WineRenderr.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.068, 0.113, -0.334]} scale={1.08}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro.geometry}
          material={materials.WineColorBottle}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro_1.geometry}
          material={materials.WineColorCork}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WineBrandSticker.geometry}
        material={materials.WinerColorStiker}
        position={[-0.066, -0.781, 0.801]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WineContenido.geometry}
        material={materials.WineColorContent}
        position={[-0.068, -1.646, -0.334]}
      />
    </group>
  )
}

useGLTF.preload('models-3d/IC/WineRenderr.glb')


