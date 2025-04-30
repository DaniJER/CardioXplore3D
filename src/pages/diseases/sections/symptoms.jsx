import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sintomas from "../../../assets/Sintomas.svg";
import './Symptoms.css';

const Symptoms = ({
  title = "Síntomas",
  description,
  lastDescription,
  items = [],
  Model3D,
  scale,
  position,
  rotation,
}) => {
  return (
    <section className="symptoms-container" id="symptoms">
      
      {/* Título e Icono */}
      <div className="title-icon">
        <h1>{title}</h1>
        <img src={Sintomas} alt="Ícono corazón" className="icon-img" />
      </div>

      {/* Primer párrafo */}
      <p className="description-symptoms">{description}</p>

      {/* Contenido principal */}
      <div className="content-section-symptoms">
        {/* Lista de síntomas */}
        <ul className="symptoms-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Imagen animada o modelo 3D */}
        <div className="model-container-symptoms">
          <Canvas>
            <OrbitControls />
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 10]} intensity={2} />
            <Model3D scale={scale} position={position} rotation={rotation} />
          </Canvas>
        </div>
      </div>

      {/* Último párrafo */}
      <p className="last-description-symptoms">{lastDescription}</p>
    </section>
  );
};

export default Symptoms;
