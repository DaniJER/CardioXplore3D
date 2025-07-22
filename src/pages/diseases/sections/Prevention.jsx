import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Prevencion from "../../../assets/Prevencion.svg";
import AnimatedModelWrapper from "./AnimatedModelWrapper";
import SceneLights from "../Lights/SceneLights";
import { useRef, useState } from "react";
import "./prevention.css";
import InfoButton from "../PointEvent/InfoButton";
import "../Elements3D/buttons.css";
import DoubleClickLightToggle from "../PointEvent/DoubleClick";
import RightClickColorToggle from "../PointEvent/RightClick";
import PauseAnimation from "../PointEvent/PauseAnimation";
import SpaceTurn from "../PointEvent/SpaceTurn";
import Staging from "../environment/environment";
import Texts from "../Elements3D/Texts";
import EnvironmentSky from "../environment/environmentSky";

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
  //Texto3D
  texts,
  textsPosition = [0, 0, 0],
  textsRotation = [0, 0, 0],
  textsScale = [1, 1, 1],
  //Texto2D
  miniText
}) => {
  const modelRef = useRef();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfoModal, setShowInfoModal] = useState(false);

  const { lightType, handleDoubleClick } = DoubleClickLightToggle();
  const { lightColor, handleRightClick } = RightClickColorToggle();

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
            <li key={index}>
              {typeof item === 'string' ? (
                // Si es string, renderizar como texto normal
                item
              ) : (
                // Si es objeto, renderizar título en negrilla y descripción
                <>
                  <strong>{item.title}</strong>
                  {item.description && (
                    <>: {item.description}</>
                  )}
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Modelo 3D */}
        <div className="model-container-prevention">

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
            {/* <Buttons3D text={"Botón 3D"} position={textsPosition} rotation={textsRotation} scale={textsScale} /> */}

            {/* Environment de partículas */}
            <EnvironmentSky count={180} radius={40} />

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
      </div>

      {/* Última descripción */}
      {lastDescription && <p className="description">{lastDescription}</p>}
    </section>
  );
};

export default Prevention;
