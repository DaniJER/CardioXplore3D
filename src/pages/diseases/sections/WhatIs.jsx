import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Sintomas from "../../../assets/Sintomas.svg";
import Tratamiento from "../../../assets/Tratamiento.svg";
import Prevencion from "../../../assets/Prevencion.svg";
import "./whatIs.css";
import AnimatedModelWrapper from "./AnimatedModelWrapper ";

const WhatIs = ({
  title,
  subtitle,
  description,
  Model3D,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationSpeed
}) => {
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
        <Canvas>
          <OrbitControls />
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 10]} intensity={2} />
          <AnimatedModelWrapper rotationSpeed={rotationSpeed}>
            <Model3D scale={scale} position={position} rotation={rotation} />
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
  );
};

export default WhatIs;
