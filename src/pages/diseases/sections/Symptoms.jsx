import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sintomas from "../../../assets/Sintomas.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import PauseAnimation from "../PointEvent/PauseAnimation";
import SpaceTurn from "../PointEvent/SpaceTurn";
import { useRef, useState } from "react";
import InfoButton from "../PointEvent/InfoButton";
import "../Elements3D/buttons.css";
import "./symptoms.css";
import DoubleClickLightToggle from "../PointEvent/DoubleClick";
import RightClickColorToggle from "../PointEvent/RightClick";

const Symptoms = ({
  title = "Síntomas",
  description,
  lastDescription,
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
  enableOrbit = true,
  // Eventos
  onTurn = true,
  onAnimation = false,
}) => {
  const modelRef = useRef();
  const [isRotating, setIsRotating] = useState(true);

  const { lightType, handleDoubleClick } = DoubleClickLightToggle();
  const { lightColor, handleRightClick } = RightClickColorToggle();

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

        {/* Modelo 3D */}
        <div className="model-container-symptoms">
          {/* Botónes de control */}
          <div className="model-controls">
            {onAnimation && <PauseAnimation modelRef={modelRef} />}
            {onTurn && <SpaceTurn onToggle={setIsRotating} />}
            <InfoButton />
          </div>

          <Canvas
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleRightClick}
            shadows>

            {/* <Texts texts={title} />
            <Buttons3D text={"Botón 3D"} /> */}

            {/* Plano invisible para sombra */}
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
              <mesh rotation={planoRotacion} position={planoPosicion}>
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
              enableOrbit={enableOrbit}
              lightColor={lightColor}
              lightType={lightType}
            />

            {/* Modelo 3D animado */}
            <OrbitControls />
            <AnimatedModelWrapper
              rotationSpeed={rotationSpeed}
              isRotating={isRotating}
            >
              <Model3D
                ref={modelRef}
                scale={scale}
                position={position}
                rotation={rotation}
              />
            </AnimatedModelWrapper>
          </Canvas>
        </div>
      </div>

      {/* Último párrafo */}
      {lastDescription && (
        <p className="last-description-symptoms">{lastDescription}</p>
      )}
    </section>
  );
};

export default Symptoms;
