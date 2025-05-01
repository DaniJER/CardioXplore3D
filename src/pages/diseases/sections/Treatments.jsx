import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tratamiento from "../../../assets/Tratamiento.svg";
import "./treatments.css";
import AnimatedModelWrapper from "./AnimatedModelWrapper ";

const Treatments = ({
  title = "Tratamiento",
  description,
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
    <section className="treatments-container" id="treatments">
      {/* Título + Ícono */}
      <div className="title-icon">
        <h1>{title}</h1>
        <img src={Tratamiento} alt="Ícono Tratamiento" className="icon-img" />
      </div>

      {/* Descripción */}
      <p className="description">{description}</p>

      {/* Contenido principal */}
      <div className="content-section-treatments">
        {/* Modelo 3D */}
        <div className="model-container-treatments">
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

        {/* Lista de tratamientos */}
        <ul className="treatments-list">
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.title}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Treatments;
