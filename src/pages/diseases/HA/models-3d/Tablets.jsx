import React, { useRef } from 'react';
import { PositionalAudio, useGLTF } from '@react-three/drei';

export function Tablets(props) {
  const { nodes, materials } = useGLTF('/models-3d/HA/tablets.glb');

  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);

    //Detener despues de 7 segundos
    setTimeout(() => {
      audioRef.current?.stop();
    }, 7000);
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
        geometry={nodes.Tablets.geometry}
        material={materials.TabletsMaterial}
      />
    </group>
  );
}

useGLTF.preload('/models-3d/HA/tablets.glb');
