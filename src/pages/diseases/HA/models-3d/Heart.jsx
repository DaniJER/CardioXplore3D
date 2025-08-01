import React, { useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'

export function Heart(props) {
  const { nodes, materials } = useGLTF('/models-3d/HA/heart.glb')
  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);

    // Detener despues de 5 segundos
    setTimeout(() => {
      audioRef.current?.stop();
    }, 5000);
  };

  return (
    <group {...props} dispose={null} onClick={handleClick}>
      <PositionalAudio
        ref={audioRef}
        url={props.Audio}
        distance={5}
        loop={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials.HeartMaterial}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/HA/heart.glb')