import { useEffect, useState } from "react";

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
      {isActive ? "🌀 Girando" : "⏹️ Pausado"}
    </button>
  );
};

export default SpaceTurn;