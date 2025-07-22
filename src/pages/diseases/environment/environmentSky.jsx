import React, { useRef, useMemo, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

const ParticleField = ({ count = 50, radius = 30 }) => {
  const mesh = useRef();
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - 2 * Math.random());
      const theta = 2 * Math.PI * Math.random();
      const r = radius * (0.7 + 0.3 * Math.random());
      arr.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return arr;
  }, [count, radius]);

  // Cada partícula tiene su propio estado de opacidad y objetivo
  const [opacities, setOpacities] = useState(() =>
    Array(count).fill(0)
  );
  const [targets, setTargets] = useState(() =>
    Array(count).fill(0)
  );

  // Cambia el objetivo de opacidad cada segundo (fade in/out aleatorio)
  useEffect(() => {
    const interval = setInterval(() => {
      setTargets(
        Array(count)
          .fill(0)
          .map(() => (Math.random() > 0.5 ? 1 : 0))
      );
    }, 500);
    return () => clearInterval(interval);
  }, [count]);

  // Animación de opacidad suave en cada frame
  useFrame(() => {
    setOpacities((prev) =>
      prev.map((opacity, i) => {
        const target = targets[i];
        const speed = 0.04; // velocidad de fade
        if (opacity < target) {
          return Math.min(opacity + speed, target);
        } else if (opacity > target) {
          return Math.max(opacity - speed, target);
        }
        return opacity;
      })
    );
    if (mesh.current) {
      mesh.current.rotation.y += 0.0007;
    }
  });

  return (
    <group ref={mesh}>
      {particles.map((pos, i) =>
        opacities[i] > 0.01 ? (
          <mesh key={i} position={pos}>
            <sphereGeometry args={[0.23, 7.5, 7.5]} />
            <meshStandardMaterial
              color="#b3e0ff"
              emissive="#fff"
              emissiveIntensity={1.2}
              transparent
              opacity={opacities[i]}
            />
          </mesh>
        ) : null
      )}
    </group>
  );
};

const EnvironmentSky = ({ count = 200, radius = 30 }) => (
  <>
    {/* Luz ambiental suave */}
    <ambientLight intensity={0.7} />
    {/* Luz direccional para resaltar partículas */}
    <directionalLight position={[10, 20, 10]} intensity={1.2} />
    {/* Fondo de color cielo */}
    <color attach="background" args={["#e3f6ff"]} />
    {/* Campo de partículas destellantes */}
    <ParticleField count={count} radius={radius} />
  </>
);

export default EnvironmentSky;