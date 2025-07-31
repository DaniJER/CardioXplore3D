import { useState } from "react";

const COLORS = ["white", "#FFD700", "#00FFFF", "#FF69B4", "#90EE90"]; 
// blanco, dorado, cyan, rosa, verde claro

const RightClickColorToggle = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const currentColor = COLORS[colorIndex];

  const handleRightClick = (e) => {
    e.preventDefault(); // evitar menú contextual del navegador
    setColorIndex((prev) => (prev + 1) % COLORS.length);
  };

  return { lightColor: currentColor, handleRightClick };
};

export default RightClickColorToggle;