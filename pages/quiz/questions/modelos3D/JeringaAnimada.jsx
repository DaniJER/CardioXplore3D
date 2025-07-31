import React, { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { Jeringa } from './Jeringa';
import * as THREE from 'three';

export function JeringaAnimada({ 
  targetPosition, 
  targetRotation, 
  isActive, 
  onAnimationComplete,
  fallInitiated = false,
  id
}) {
  const rigidBodyRef = useRef();
  const [phase, setPhase] = useState('approaching'); // 'approaching', 'attached', 'falling'
  const [startPosition] = useState(() => {
    // Calcular posición inicial a una distancia del objetivo
    const distance = 2;
    const direction = new THREE.Vector3(
      (Math.random() - 0.5) * 2,
      Math.random() * 0.5 + 0.5,
      (Math.random() - 0.5) * 2
    ).normalize();
    
    return [
      targetPosition[0] + direction.x * distance,
      targetPosition[1] + direction.y * distance,
      targetPosition[2] + direction.z * distance
    ];
  });

  const [currentPosition, setCurrentPosition] = useState(startPosition);
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    if (fallInitiated && phase === 'attached') {
      console.log(`Jeringa ${id} iniciando caída desde posición:`, currentPosition);
      setPhase('falling');
    }
  }, [fallInitiated, phase, id, currentPosition]);

  useFrame((state, delta) => {
    if (phase === 'approaching') {
      const newProgress = Math.min(animationProgress + delta * 1.2, 1);
      setAnimationProgress(newProgress);

      // Interpolación suave desde posición inicial hasta objetivo
      const t = 1 - Math.pow(1 - newProgress, 3); // Easing out cubic
      const newPos = [
        THREE.MathUtils.lerp(startPosition[0], targetPosition[0], t),
        THREE.MathUtils.lerp(startPosition[1], targetPosition[1], t),
        THREE.MathUtils.lerp(startPosition[2], targetPosition[2], t)
      ];
      
      setCurrentPosition(newPos);

      if (newProgress >= 1) {
        setPhase('attached');
        console.log(`Jeringa ${id} se adjuntó en posición:`, newPos);
        if (onAnimationComplete) {
          onAnimationComplete();
        }
      }
    }
  });

  // Si la jeringa está cayendo, usar RigidBody
  if (phase === 'falling') {
    return (
      <RigidBody
        ref={rigidBodyRef}
        type="dynamic"
        position={currentPosition}
        rotation={targetRotation}
        restitution={0.3}
        friction={0.8}
        mass={0.2}
      >
        <Jeringa scale={3} castShadow receiveShadow />
      </RigidBody>
    );
  }

  // Jeringa en movimiento o adjunta (sin físicas)
  return (
    <group position={currentPosition} rotation={targetRotation}>
      <Jeringa scale={3} castShadow receiveShadow />
    </group>
  );
}
