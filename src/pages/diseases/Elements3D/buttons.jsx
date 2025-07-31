import { Html } from "@react-three/drei";
import "./buttons.css";

const Buttons3D = ({text}) => {
    return (
        <Html
            className="texts"
            center
            position={[0, 0, 0]}
            distanceFactor={5}
            transform
        >
            <button
                className="model-button"
                onClick={() => {
                    console.log("Botón 3D presionado");
                }}
                aria-label="Botón 3D"
            >
                {text}
            </button>
        </Html>
    );
};

export default Buttons3D;