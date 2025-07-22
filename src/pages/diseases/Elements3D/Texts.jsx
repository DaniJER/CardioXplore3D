import { Html } from "@react-three/drei";
import "./Texts.css";

const Texts = ({
    texts,
    position = [0, 0, 0],
    rotation = [0, 0, 0],
    scale = [1, 1, 1],
    distanceFactor = 5,
    visible = true
}) => {
    if (!visible) return null;
    return (
        <Html
            className="texts-3D"
            center
            position={position}
            rotation={rotation}
            scale={scale}
            distanceFactor={distanceFactor}
            transform
        >
            <h1> {texts} </h1>
        </Html>
    );
};

export default Texts;