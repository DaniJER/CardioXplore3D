import React, { useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'

export function Surgeon(props) {
  const { nodes, materials } = useGLTF('/models-3d/EC//surgeon.glb');
  // console.log(materials);
  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <PositionalAudio
        ref={audioRef}
        url={props.Audio}
        distance={5}
        loop={false}
      />
      <group name="Scene">
        <mesh
          name="Surgeon"
          castShadow
          receiveShadow
          geometry={nodes.Surgeon.geometry}
          material={materials.surgeonMaterial}
          scale={0.1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models-3d/EC/surgeon.glb')