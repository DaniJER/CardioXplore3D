import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Prevencion from "../../../assets/Prevencion.svg";
import "./prevention.css";
import AnimatedModelWrapper from "./AnimatedModelWrapper ";

const Prevention = ({
  title = "Prevención y cuidados",
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
    <section className="prevention-container" id="prevention">
      {/* Título + Icono */}
      <div className="title-icon">
        <h1>{title}</h1>
        <img src={Prevencion} alt="Icono prevención" className="icon-img" />
      </div>

      {/* Descripción inicial */}
      <p className="description">{description}</p>

      {/* Contenido principal */}
      <div className="content-section-prevention">
        {/* Lista de cuidados */}
        <ul className="care-list">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Modelo 3D */}
        <div className="model-container">
          <Canvas shadows>
            {/* Plano invisible para recibir sombra */}
            <mesh
              receiveShadow
              rotation={planoRotacion}
              position={planoPosicion}
            >
              <planeGeometry args={planoEscala} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>

            {/* Plano visible */}
            {mostrarPlano && (
              <mesh
                rotation={planoRotacion}
                position={planoPosicion}
              >
                <planeGeometry args={planoEscala} />
                <meshStandardMaterial color="#e0e0e0" />
              </mesh>
            )}
            
            <OrbitControls />
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 5, 10]} intensity={2} castShadow />
            <AnimatedModelWrapper rotationSpeed={rotationSpeed}>
              <Model3D scale={scale} position={position} rotation={rotation} />
            </AnimatedModelWrapper>
          </Canvas>
        </div>
      </div>

      {/* Última descripción */}
      {lastDescription && <p className="description">{lastDescription}</p>}
    </section>
  );
};

export default Prevention;
