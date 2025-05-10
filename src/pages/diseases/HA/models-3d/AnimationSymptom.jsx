import React, { useEffect, useImperativeHandle, useRef, forwardRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export const ModelSymptom = forwardRef((props, ref) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/HA/model-animation-symptom.glb');
  const { actions } = useAnimations(animations, group);
  const firstAction = useRef(null);

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
  );
});

useGLTF.preload('/models-3d/HA/model-animation-symptom.glb');