import { useRef } from "react";
import Flecha1 from "../../../../assets/FlechaUp.svg";
import Flecha2 from "../../../../assets/FlechaRight.svg";
import Flecha3 from "../../../../assets/FlechaDown.svg";
import Flecha4 from "../../../../assets/FlechaLeft.svg";
import "./MoveModel.css";

const flechas = {
  "1": Flecha1, // arriba
  "2": Flecha2, // derecha
  "3": Flecha3, // abajo
  "4": Flecha4, // izquierda
};

const ButtonPressed = (position) => {
  console.log("Botón presionado en la posición:", position);
};

const MoveModel = ({ modelRef, position }) => {
  const intervalRef = useRef(null);

  const handleMouseDown = () => {
    ButtonPressed(position);
    intervalRef.current = setInterval(() => {
      ButtonPressed(position);
    }, 200); // repite cada 200ms
  };

  const handleMouseUp = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <button
      className="quiz-model-button"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <img
        src={flechas[position]}
        className="icon-controls"
        alt="Flecha dirección"
      />
    </button>
  );
};

export default MoveModel;