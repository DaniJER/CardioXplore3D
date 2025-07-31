import { useEffect, useState } from "react";
import PauseGiro from "../../../assets/pausa-giro.svg";
import ReanudarGiro from "../../../assets/giro.svg";

const SpaceTurn = ({ onToggle }) => {
  const [isActive, setIsActive] = useState(true);

  const toggleRotation = () => {
    const newState = !isActive;
    setIsActive(newState);
    if (onToggle) onToggle(newState);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault(); // evitar scroll
        toggleRotation();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive]);

  return (
    <button className="model-button" onClick={toggleRotation}>
      {isActive ?
        <img src={PauseGiro} className="icon-controls" />
        :
        <img src={ReanudarGiro} className="icon-controls" />}
    </button>
  );
};

export default SpaceTurn;