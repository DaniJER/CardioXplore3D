import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AnimatedModelWrapper = ({ children, rotationSpeed }) => {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += rotationSpeed;
    }
  });

  return <group ref={ref}>{children}</group>;
};

export default AnimatedModelWrapper;