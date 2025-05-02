import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Exercice(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models-3d/IC/ArmorExercise.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
 
    if (actions && Object.keys(actions).length > 0) {
      const firstActionName = Object.keys(actions)[0]
      actions[firstActionName]?.play()
    }
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="BodyArmorExercise" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Ch22_Body"
            geometry={nodes.Ch22_Body.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Body.skeleton}
          />
          <skinnedMesh
            name="Ch22_Eyelashes"
            geometry={nodes.Ch22_Eyelashes.geometry}
            material={materials.Ch22_hair}
            skeleton={nodes.Ch22_Eyelashes.skeleton}
          />
          <skinnedMesh
            name="Ch22_Hair"
            geometry={nodes.Ch22_Hair.geometry}
            material={materials.Ch22_hair}
            skeleton={nodes.Ch22_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch22_Pants"
            geometry={nodes.Ch22_Pants.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch22_Shirt"
            geometry={nodes.Ch22_Shirt.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch22_Sneakers"
            geometry={nodes.Ch22_Sneakers.geometry}
            material={materials.Ch22_body}
            skeleton={nodes.Ch22_Sneakers.skeleton}
          />
          <primitive object={nodes.mixamorig2Hips} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models-3d/IC/ArmorExercise.glb')