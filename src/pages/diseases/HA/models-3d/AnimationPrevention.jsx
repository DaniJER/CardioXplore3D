import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function ModelPrevention(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/HA/model-animation-run.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // Si hay alguna animación, reproduce la primera disponible
    if (actions && Object.keys(actions).length > 0) {
      const firstActionName = Object.keys(actions)[0]
      actions[firstActionName]?.play()
    }
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Body.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Bottoms"
            geometry={nodes.Bottoms.geometry}
            material={materials.BottomMaterial}
            skeleton={nodes.Bottoms.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Eyes"
            geometry={nodes.Eyes.geometry}
            material={materials.BodyMaterial}
            skeleton={nodes.Eyes.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Hair"
            geometry={nodes.Hair.geometry}
            material={materials.HairMaterial}
            skeleton={nodes.Hair.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Shoes"
            geometry={nodes.Shoes.geometry}
            material={materials.ShoesMaterial}
            skeleton={nodes.Shoes.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Top"
            geometry={nodes.Top.geometry}
            material={materials.TopMaterial}
            skeleton={nodes.Top.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/HA/model-animation-run.glb')