import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Prevencion from "../../../assets/Prevencion.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import { useRef, useState } from "react";
import "./prevention.css";
import PAnimation from "../PointEvent/P-animation";
import SpaceTurn from "../PointEvent/Space-turn";

const Prevention = ({
  title = "Prevención y cuidados",
  description,
  lastDescription,
  items = [],
  //Modelo 3D
  Model3D,
  scale,
  position,
  rotation,
  rotationSpeed,
  //Plano
  mostrarPlano,
  planoPosicion,
  planoRotacion = [-Math.PI / 2, 0, 0],
  planoEscala = [30, 30],
  //Luces
  ambientIntensity = 1.5,
  directionalIntensity = 2,
  directionalPosition = [5, 5, 10],
  spotIntensity = 1,
  spotPosition = [10, 15, 10],
  pointIntensity = 0.5,
  pointPosition = [0, 5, 0],
  enableDirectionalLight = true,
  enablePointLight,
  enableSpotLight,
  //Eventos
  onTurn = true,
  onAnimation = false,
}) => {
  const modelRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

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
        <div className="model-container-prevention">
          {/* Botones de control */}
          <div className="model-controls">
          {onAnimation && <PAnimation modelRef={modelRef} />}
          {onTurn && <SpaceTurn onToggle={setIsRotating} />}
          </div>

          <Canvas shadows>
            {/* Plano invisible para sombras */}
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

            {/* Luces reutilizables */}
            <SceneLights
              ambientIntensity={ambientIntensity}
              directionalIntensity={directionalIntensity}
              directionalPosition={directionalPosition}
              spotIntensity={spotIntensity}
              spotPosition={spotPosition}
              pointIntensity={pointIntensity}
              pointPosition={pointPosition}
              enableDirectionalLight={enableDirectionalLight}
              enablePointLight={enablePointLight}
              enableSpotLight={enableSpotLight}
            />

            {/* Modelo 3D animado */}
            <OrbitControls />
            <AnimatedModelWrapper rotationSpeed={rotationSpeed} isRotating={isRotating}>
              <Model3D ref={modelRef} scale={scale} position={position} rotation={rotation} />
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