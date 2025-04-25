
import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ModelSymptom(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/HA/model-animation-symptom.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
          />
          <skinnedMesh
            name="Bottoms"
            geometry={nodes.Bottoms.geometry}
            material={materials.BottomMaterial}
            skeleton={nodes.Bottoms.skeleton}
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Eyes.skeleton}
          />
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials.HairMaterial}
            skeleton={nodes.Hair.skeleton}
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={materials.ShoesMaterial}
            skeleton={nodes.Shoes.skeleton}
          />
          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.TopMaterial}
            skeleton={nodes.Top.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/HA/model-animation-symptom.glb')