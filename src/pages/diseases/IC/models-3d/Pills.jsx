import React, { useRef } from 'react'
import { PositionalAudio, useGLTF } from '@react-three/drei'

export function Pills(props) {
  const { nodes, materials } = useGLTF('/models-3d/IC/PillsTreatment.glb')
  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);
  };

  return (
    <group {...props} dispose={null}>
      <group position={[-2.3, 0.915, -7.157]} rotation={[0, -1.571, 0]} scale={1.125} onClick={handleClick}>
        <PositionalAudio
          ref={audioRef}
          url={props.Audio}
          distance={5}
          loop={false}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.ClearPlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.ClearPlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.ClearPlastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.ClearPlastic}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.ClearPlastic}
        position={[0.203, 0, 0]}
        scale={0.64}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_15.geometry}
        material={materials['Plastico_transparente.001']}
        position={[4.678, 0.915, -7.123]}
        rotation={[0, -1.571, 0]}
        scale={1.125}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_17.geometry}
        material={materials.pastilla}
        position={[2.589, 0.915, -7.094]}
        rotation={[0, 1.571, 0]}
        scale={1.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.pastilla}
        position={[-4.346, 0.915, -7.179]}
        rotation={[0, 1.571, 0]}
        scale={1.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.papel_aluminio}
        position={[0, -0.085, 0]}
      />
    </group>
  )
}

useGLTF.preload('models-3d/IC/PillsTreatment.glb')