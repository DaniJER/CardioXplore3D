import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import { useGLTF, useAnimations, PositionalAudio } from '@react-three/drei'
import * as THREE from 'three'

export const WomanFall = forwardRef((props, ref) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models-3d/EC/womanFall.glb')
  const { actions } = useAnimations(animations, group)
  const firstAction = useRef(null)
  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);
  };

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const name = Object.keys(actions)[0]
      const action = actions[name]

      // console.log('First action name:', name)
      // console.log('First action:', action)
      // console.log('NODES:', nodes)

      action.reset()
      action.setLoop(THREE.LoopRepeat, Infinity)
      action.clampWhenFinished = false
      action.enabled = true
      action.play()

      firstAction.current = action
    }
  }, [actions])

  useImperativeHandle(ref, () => ({
    play: () => firstAction.current?.play(),
    pause: () => {
      if (firstAction.current) firstAction.current.paused = true
    },
    resume: () => {
      if (firstAction.current) firstAction.current.paused = false
    },
    isPaused: () => firstAction.current?.paused ?? false
  }))

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <PositionalAudio
        ref={audioRef}
        url={props.Audio}
        distance={5}
        loop={false}
      />
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <skinnedMesh
            name="Ch21_Body"
            geometry={nodes.Ch21_Body.geometry}
            material={materials.Ch21_body}
            skeleton={nodes.Ch21_Body.skeleton}
          />
          <skinnedMesh
            name="Ch21_Eyelashes"
            geometry={nodes.Ch21_Eyelasshes.geometry}
            material={materials.Ch21_hair}
            skeleton={nodes.Ch21_Eyelasshes.skeleton}
          />
          <skinnedMesh
            name="Ch21_Hair"
            geometry={nodes.Ch21_Hair.geometry}
            material={materials.Ch21_hair}
            skeleton={nodes.Ch21_Hair.skeleton}
          />
          <skinnedMesh
            name="Ch21_Pants"
            geometry={nodes.Ch21_Pants.geometry}
            material={materials.Ch21_body}
            skeleton={nodes.Ch21_Pants.skeleton}
          />
          <skinnedMesh
            name="Ch21_Shirt"
            geometry={nodes.Ch21_Shirt.geometry}
            material={materials.Ch21_body}
            skeleton={nodes.Ch21_Shirt.skeleton}
          />
          <skinnedMesh
            name="Ch21_Shoes"
            geometry={nodes.Ch21_Shoes.geometry}
            material={materials.Ch21_body}
            skeleton={nodes.Ch21_Shoes.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  )
})

useGLTF.preload('/models-3d/EC/womanFall.glb')
