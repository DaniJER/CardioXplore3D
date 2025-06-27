import { Environment } from "@react-three/drei";

const Staging = ({
    enableGym,
    enableHospital,
    height,
    radius,
    scale
}) => {
    let file = null;

    console.log("Props received:", { enableGym, enableHospital }); // Debug

    if (enableGym) {
        file = "/environment/hdris/gym/gym-2k.hdr";
    } else if (enableHospital) {
        file = "/environment/hdris/hospital/hospital-2k.hdr";
    }

    console.log("Staging Environment Loaded", file);

    // Si no hay archivo, no renderizar Environment
    if (!file) {
        return null;
    }

    return (
        <Environment
            files={file}
            ground={{
                height,
                radius,
                scale,
            }}
        />
    );
};

export default Staging;