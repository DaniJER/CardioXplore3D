import { Html } from "@react-three/drei";
import "./Texts.css";

const Texts = ({ texts }) => {
    return (
        <Html
            className="texts-3D"
            center
            position={[0, 0, 0]}
            distanceFactor={5}
            transform
        >
            <h1> {texts} </h1>
        </Html>
    );
};

export default Texts;