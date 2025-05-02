import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Consequence(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/IC/ArmorConsequence.glb')
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
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Ch22_Body"
            geometry={nodes.Ch22_Body.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Body.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Ch22_Eyelashes"
            geometry={nodes.Ch22_Eyelashes.geometry}
            material={materials.Ch22_hair}
            skeleton={nodes.Ch22_Eyelashes.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Ch22_Hair"
            geometry={nodes.Ch22_Hair.geometry}
            material={materials.Ch22_hair}
            skeleton={nodes.Ch22_Hair.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Ch22_Pants"
            geometry={nodes.Ch22_Pants.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Pants.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Ch22_Shirt"
            geometry={nodes.Ch22_Shirt.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Shirt.skeleton}
            castShadow
            receiveShadow
          />
          <skinnedMesh
            name="Ch22_Sneakers"
            geometry={nodes.Ch22_Sneakers.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Sneakers.skeleton}
            castShadow
            receiveShadow
          />
          <primitive object={nodes.mixamorig2Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/IC/ArmorConsequence.glb')
