import React, { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { useGLTF, useAnimations, PositionalAudio } from '@react-three/drei';

export const ModelPrevention = forwardRef((props, ref, Audio) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/HA/model-animation-run.glb');
  const { actions } = useAnimations(animations, group);
  const firstAction = useRef(null);
  const audioRef = useRef();

  const handleClick = () => {
    audioRef.current?.play();
    audioRef.current.volume = (10);

    //Detener despues de 6 segundos
    setTimeout(() => {
      audioRef.current?.stop();
    }, 6000);
  };

  // Configuración inicial de la animación
  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      const name = Object.keys(actions)[0];
      firstAction.current = actions[name];
      firstAction.current.play(); // Reproduce la animación inicial
    }
  }, [actions]);

  // Métodos expuestos al componente padre
  useImperativeHandle(ref, () => ({
    play: () => firstAction.current?.play(),
    pause: () => {
      if (firstAction.current) firstAction.current.paused = true;
    },
    resume: () => {
      if (firstAction.current) firstAction.current.paused = false;
    },
    isPaused: () => firstAction.current?.paused ?? false,
  }));

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <PositionalAudio
        ref={audioRef}
        url={props.Audio}
        distance={5}
        loop={false}
      />
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
          {/* Hips */}
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
});

// Precarga del modelo GLTF
useGLTF.preload('/models-3d/HA/model-animation-run.glb');