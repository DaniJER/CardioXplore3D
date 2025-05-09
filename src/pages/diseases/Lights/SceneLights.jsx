import { OrbitControls } from "@react-three/drei";

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
}) => {
    return (
        <>
            {/* Luz ambiental */}
            {enableAmbientLight && (
                <ambientLight intensity={ambientIntensity} />
            )}

            {/* Luz direccional */}
            {enableDirectionalLight && (
                <directionalLight
                    position={directionalPosition}
                    intensity={directionalIntensity}
                    castShadow
                />
            )}

            {/* Luz puntual */}
            {enablePointLight && (
                <pointLight
                    position={pointPosition}
                    intensity={pointIntensity}
                    decay={2}
                    distance={10}
                    castShadow
                />
            )}

            {/* Luz tipo foco */}
            {enableSpotLight && (
                <spotLight
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
