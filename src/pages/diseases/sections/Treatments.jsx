import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tratamiento from "../../../assets/Tratamiento.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import PAnimation from "../PointEvent/P-animation";
import SpaceTurn from "../PointEvent/Space-turn";
import { useRef, useState } from "react";
import InfoButton from "../PointEvent/InfoButton";
import "../Elements3D/buttons.css";
import "./treatments.css";
import DoubleClickLightToggle from "../PointEvent/DoubleClick";
import RightClickColorToggle from "../PointEvent/RightClick";

const Treatments = ({
  title = "Tratamiento",
  description,
  items = [],
  // Modelo 3D
  Model3D,
  scale,
  position,
  rotation,
  rotationSpeed,
  // Plano
  mostrarPlano,
  planoPosicion,
  planoRotacion = [-Math.PI / 2, 0, 0],
  planoEscala = [30, 30],
  // Luces
  ambientIntensity = 1.5,
  directionalIntensity = 2,
  directionalPosition = [5, 5, 10],
  spotIntensity = 2,
  spotPosition = [10, 15, 10],
  pointIntensity = 2,
  pointPosition = [0, 5, 0],
  enableDirectionalLight = true,
  enablePointLight,
  enableSpotLight,
  // Eventos
  onTurn = true,
  onAnimation = false,
}) => {
  const modelRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

  const { lightType, handleDoubleClick } = DoubleClickLightToggle();
  const { lightColor, handleRightClick } = RightClickColorToggle();

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
          {/* Botones de control */}
          <div className="model-controls">
            {onAnimation && <PAnimation modelRef={modelRef} />}
            {onTurn && <SpaceTurn onToggle={setIsRotating} />}
            <InfoButton />
          </div>
          {/* Canvas de Three.js */}
          <Canvas
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleRightClick}
            shadows>

            {/* <Texts texts={title} />
            <Buttons3D text={"Botón 3D"} /> */}

            {/* Plano invisible que recibe la sombra */}
            <mesh
              receiveShadow
              rotation={planoRotacion}
              position={planoPosicion}
            >
              <planeGeometry args={planoEscala} />
              <shadowMaterial transparent opacity={0.2} />
            </mesh>

            {/* Plano visible si se indica */}
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
              lightColor={lightColor}
              lightType={lightType}
            />

            {/* Modelo 3D animado */}
            <OrbitControls />
            <AnimatedModelWrapper rotationSpeed={rotationSpeed} isRotating={isRotating}>
              <Model3D ref={modelRef} scale={scale} position={position} rotation={rotation} />
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