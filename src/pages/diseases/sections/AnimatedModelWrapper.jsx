import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const AnimatedModelWrapper = ({ children, rotationSpeed, isRotating = true }) => {
  const groupRef = useRef();

  useFrame(() => {
    if (isRotating && groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed;
    }
  });

  return <group ref={groupRef}>{children}</group>;
};

export default AnimatedModelWrapper;