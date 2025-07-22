import { useState } from "react";

// alternar el tipo de luz al hacer doble clic
const DoubleClickLightToggle = () => {
  const [lightType, setLightType] = useState("directional");

  const handleDoubleClick = () => {
    setLightType((prev) => {
      if (prev === "directional") return "point";
      if (prev === "point") return "spot";
      return "directional";
    });
  };

  return { lightType, handleDoubleClick };
};

export default DoubleClickLightToggle;