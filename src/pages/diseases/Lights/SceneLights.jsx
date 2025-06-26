import { DirectionalLightHelper, PointLightHelper, SpotLightHelper } from "three";
import { OrbitControls, useHelper } from "@react-three/drei";
import { useRef } from "react";

const SceneLights = ({
    //Luces
    ambientIntensity,
    //direccional
    directionalIntensity,
    directionalPosition,
    //spot
    spotIntensity,
    spotPosition,
    //punto
    pointIntensity,
    pointPosition,
    //Activar luces
    enableAmbientLight = true,
    enableDirectionalLight = true,
    enablePointLight,
    enableSpotLight,
    enableOrbit = true,
    lightType = "directional",
    lightColor = "white",
}) => {
    const directionalRef = useRef();
    const pointRef = useRef();
    const spotRef = useRef();

    // Helpers
    useHelper(directionalRef, DirectionalLightHelper, 1);
    useHelper(pointRef, PointLightHelper, 0.5);
    useHelper(spotRef, SpotLightHelper, 1);

    return (
        <>
            {/* Luz ambiental */}
            {enableAmbientLight && (
                <ambientLight intensity={ambientIntensity} />
            )}

            {/* Luz direccional */}
            {lightType === "directional" && (
                <directionalLight
                    // ref={directionalRef}
                    color={lightColor}
                    position={directionalPosition}
                    intensity={directionalIntensity}
                    castShadow
                />
            )}

            {/* Luz puntual */}
            {lightType === "point" && (
                <pointLight
                    // ref={pointRef}
                    color={lightColor}
                    position={pointPosition}
                    intensity={pointIntensity}
                    decay={2}
                    distance={10}
                    castShadow
                />
            )}

            {/* Luz tipo foco */}
            {lightType === "spot" && (
                <spotLight
                    // ref={spotRef}
                    color={lightColor}
                    position={spotPosition}
                    intensity={spotIntensity}
                    angle={0.3}
                    penumbra={0.2}
                    castShadow
                />
            )}

            {/* Control de cámara orbital */}
            {enableOrbit && <OrbitControls />}
        </>
    );
};

export default SceneLights;