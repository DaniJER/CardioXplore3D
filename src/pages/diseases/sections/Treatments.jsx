import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Tratamiento from "../../../assets/Tratamiento.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import PauseAnimation from "../PointEvent/PauseAnimation";
import SpaceTurn from "../PointEvent/SpaceTurn";
import { useEffect, useRef, useState } from "react";
import InfoButton from "../PointEvent/InfoButton";
import "../Elements3D/buttons.css";
import "./treatments.css";
import DoubleClickLightToggle from "../PointEvent/DoubleClick";
import RightClickColorToggle from "../PointEvent/RightClick";
import Staging from "../environment/environment";
import Texts from "../Elements3D/Texts";
import EnvironmentSky from "../environment/environmentSky";
import Toque from "../../../assets/Toque.svg";

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
  // Entorno
  enableGym,
  enableHospital,
  heightEnvironment = 60,
  radiusEnvironment = 100,
  scaleEnvironment = 60,
  // Texto3D
  texts,
  textsPosition = [0, 0, 0],
  textsRotation = [0, 0, 0],
  textsScale = [1, 1, 1],
  // Texto2D
  miniText
}) => {
  const modelRef = useRef();
  const [isActive, setIsActive] = useState(false)
  const [isRotating, setIsRotating] = useState(true);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const { lightType, handleDoubleClick } = DoubleClickLightToggle();
  const { lightColor, handleRightClick } = RightClickColorToggle();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsActive(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

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

          {/* Overlay de interacción */}
          {!isActive && (
            <div className="interaction-overlay" onClick={() => setIsActive(true)}>
              <img src={Toque} className="icon-img" alt="Click para interactuar" />
              <p>Click para interactuar</p>
            </div>
          )}

          <div className="model-title">
            <h3>{miniText}</h3>
          </div>

          {/* Botones de control */}
          <div className="model-controls">

            {onAnimation && <PauseAnimation modelRef={modelRef} />}
            {onTurn && <SpaceTurn onToggle={setIsRotating} />}
            <InfoButton
              showModal={showInfoModal}
              setShowModal={setShowInfoModal}
            />
          </div>
          {/* Canvas de Three.js */}
          <Canvas
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleRightClick}
            shadows>

            <Texts
              texts={texts}
              position={textsPosition}
              rotation={textsRotation}
              scale={textsScale}
              visible={!showInfoModal}
            />
            {/* <Buttons3D text={"Botón 3D"} /> */}

            {/* Environment de partículas */}
            <EnvironmentSky count={180} radius={40} />

            {/* Malla invisible que detecta el primer click */}
            {!isActive && (
              <mesh
                onPointerDown={() => setIsActive(true)}
              ></mesh>
            )}

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
              lightColor={lightColor}
              lightType={lightType}
            />

            {/* Entorno */}
            <Staging
              enableGym={enableGym}
              enableHospital={enableHospital}
              height={heightEnvironment}
              radius={radiusEnvironment}
              scale={scaleEnvironment}
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
