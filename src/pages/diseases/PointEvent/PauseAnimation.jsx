// AnimationController.jsx
import Pause from "../../../assets/pause.svg";
import Reaundar from "../../../assets/reanudar.svg";
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
      {isPaused ?
        <img src={Reaundar} className="icon-controls" />
        :
        <img src={Pause} className="icon-controls" />}
    </button>
  );
};

export default PAnimation;
