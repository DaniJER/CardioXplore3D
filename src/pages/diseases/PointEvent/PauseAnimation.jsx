// AnimationController.jsx
import { useEffect, useState } from "react";

const PAnimation = ({ modelRef }) => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleAnimation = () => {
    if (!modelRef.current) return;
    if (isPaused) {
      modelRef.current.resume?.();
    } else {
      modelRef.current.pause?.();
    }
    setIsPaused(!isPaused);
  };

  // Escuchar tecla "P"
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === "p") {
        toggleAnimation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPaused]);

  return (
    <button className="model-button" onClick={toggleAnimation}>
      {isPaused ? "▶️ Reanudar" : "⏸️ Pausar"}
    </button>
  );
};

export default PAnimation;
