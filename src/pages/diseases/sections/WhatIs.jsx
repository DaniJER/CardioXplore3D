import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sintomas from "../../../assets/Sintomas.svg";
import Tratamiento from "../../../assets/Tratamiento.svg";
import Prevencion from "../../../assets/Prevencion.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import SpaceTurn from "../PointEvent/Space-turn";
import PAnimation from "../PointEvent/P-animation";
import { useRef, useState } from "react";
import "./whatIs.css";

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

  // Función para hacer scroll suave a la sección deseada
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="whatIs-container">
      {/* Sección del Modelo 3D */}
      <div className="model-container-whatIs">

        {/* Botónes de control */}
        <div className="model-controls">
          {onAnimation && <PAnimation modelRef={modelRef} />}
          {onTurn && <SpaceTurn onToggle={setIsRotating} />}
        </div>

        <Canvas shadows>
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
          />

          {/* Modelo 3D animado */}
          <OrbitControls />
          <AnimatedModelWrapper rotationSpeed={rotationSpeed} isRotating={isRotating}>
            <Model3D ref={modelRef} scale={scale} position={position} rotation={rotation} />
          </AnimatedModelWrapper>
        </Canvas>
      </div>

      {/* Sección de Texto */}
      <div className="text-container">
        <h1 className="main-title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
        <p className="description-whatIs">{description}</p>

        {/* Iconos */}
        <div className="icons-container">
          <button className="icon-button" onClick={() => scrollToSection("symptoms")}>
            <img src={Sintomas} alt="Icono Sintomas" className="icon-img" />
          </button>
          <button className="icon-button" onClick={() => scrollToSection("treatments")}>
            <img src={Tratamiento} alt="Icono Tratamiento" className="icon-img" />
          </button>
          <button className="icon-button" onClick={() => scrollToSection("prevention")}>
            <img src={Prevencion} alt="Icono Prevencion" className="icon-img" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatIs;
