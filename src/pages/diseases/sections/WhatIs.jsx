import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D } from "@react-three/drei";
import Sintomas from "../../../assets/Sintomas.svg";
import Tratamiento from "../../../assets/Tratamiento.svg";
import Prevencion from "../../../assets/Prevencion.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import SpaceTurn from "../PointEvent/SpaceTurn";
import PauseAnimation from "../PointEvent/PauseAnimation";
import { useEffect, useRef, useState } from "react";
import InfoButton from "../PointEvent/InfoButton";
import "../Elements3D/buttons.css";
import "./whatIs.css";
import DoubleClickLightToggle from "../PointEvent/DoubleClick";
import RightClickColorToggle from "../PointEvent/RightClick";
import Staging from "../environment/environment";
import Texts from "../Elements3D/Texts";
import EnvironmentSky from "../environment/environmentSky";
import Toque from "../../../assets/Toque.svg";

const WhatIs = ({
  title,
  subtitle,
  description,
  // Modelo 3D
  Model3D,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
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
  //Eventos
  onTurn = true,
  onAnimation = false,
  //Entorno
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

  // Función para hacer scroll suave a la sección deseada
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="whatIs-container">
      <div className="title">
        <h1 className="main-title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>

      <div className="whatIs">
        {/* Sección del Modelo 3D */}
        <div className="model-container-whatIs">

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

          {/* Botónes de control */}
          <div className="model-controls">
            {onAnimation && <PauseAnimation modelRef={modelRef} />}
            {onTurn && <SpaceTurn onToggle={setIsRotating} />}
            <InfoButton
              showModal={showInfoModal}
              setShowModal={setShowInfoModal}
            />
          </div>

          <Canvas
            onDoubleClick={handleDoubleClick}
            onContextMenu={handleRightClick}
            shadows>

            <Text3D
              font="/fonts/PIXELAND_Regular.json"
              position={textsPosition}
              rotation={textsRotation}
              scale={textsScale}
              bevelEnabled
              bevelThickness={0.2}
            >
              <meshStandardMaterial color={"rgba(247, 0, 255, 1)"} />
              {texts}
            </Text3D>
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
            <mesh receiveShadow rotation={planoRotacion} position={planoPosicion}>
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

        {/* Sección de Texto */}
        <div className="text-container">
          <h2 className="text-title"> ¿Que es?</h2>
          <p className="description-whatIs">{description}</p>

          {/* Iconos */}
          <div className="icons-container">
            <button
              className="icon-button"
              onClick={() => scrollToSection("symptoms")}
            >
              <img src={Sintomas} alt="Icono Sintomas" className="icon-img" />
            </button>
            <button
              className="icon-button"
              onClick={() => scrollToSection("treatments")}
            >
              <img
                src={Tratamiento}
                alt="Icono Tratamiento"
                className="icon-img"
              />
            </button>
            <button
              className="icon-button"
              onClick={() => scrollToSection("prevention")}
            >
              <img src={Prevencion} alt="Icono Prevencion" className="icon-img" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;