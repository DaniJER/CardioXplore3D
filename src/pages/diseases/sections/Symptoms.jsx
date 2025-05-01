import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sintomas from "../../../assets/Sintomas.svg";
import "./symptoms.css";
import AnimatedModelWrapper from "./AnimatedModelWrapper ";

const Symptoms = ({
  title = "Síntomas",
  description,
  lastDescription,
  items = [],
  Model3D,
  scale,
  position,
  rotation,
  rotationSpeed,
  mostrarPlano,
  planoPosicion,
  planoRotacion = [-Math.PI / 2, 0, 0],
  planoEscala = [30, 30],
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
          <Canvas shadows>
            {/* Plano invisible que recibe la sombra */}
            <mesh receiveShadow rotation={planoRotacion} position={planoPosicion}>
              <planeGeometry args={planoEscala} />
              <shadowMaterial transparent opacity={0.2} />
              {mostrarPlano ? <meshStandardMaterial color="#e0e0e0" /> : null}
            </mesh>

            <OrbitControls />
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 10]} intensity={2} castShadow />
            <AnimatedModelWrapper rotationSpeed={rotationSpeed}>
              <Model3D scale={scale} position={position} rotation={rotation} />
            </AnimatedModelWrapper>
          </Canvas>
        </div>
      </div>

      {/* Último párrafo */}
      <p className="last-description-symptoms">{lastDescription}</p>
    </section>
  );
};

export default Symptoms;
