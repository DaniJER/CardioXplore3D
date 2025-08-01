import React, { useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'

export function Heart(props) {

  const { nodes, materials } = useGLTF('/models-3d/EC/modelado-de-corazon.glb')
  // console.log(materials)
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Heart.geometry}
        material={materials['Material.001']}
        rotation={[0.013, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models-3d/EC/modelado-de-corazon.glb')