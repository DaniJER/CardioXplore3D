import React from 'react';
// import Prevention from "../sections/Prevention";
// import Symptoms from "../sections/Symptoms";
// import Treatments from "../sections/Treatments";
import WhatIs from "../sections/WhatIs";
import "./PageEC.css"

import { Heart } from "./models-3d/Heart";


const PageEC = () => {
    return ( 
        <div className="page-container">
        <WhatIs
          title="Comunicación interventricular"
          subtitle="Defecto del tabique ventricular"
          description="La comunicación interventricular consiste en un orificio en el corazón. Es un problema cardíaco común presente al nacer (defecto cardíaco congénito). El orificio aparece en la pared que separa las cavidades inferiores del corazón (ventrículos)."
            Model3D={Heart}
            scale={5.45}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            rotationSpeed={0.01}
            mostrarPlano={false}
            planoPosicion={[0, -2.8, 0]}
            planoRotacion={[-Math.PI / 2, 0, 0]}
            planoEscala={[30, 30]}
            enableGym={false}
            enableHospital={true}
            heightEnvironment={60}
            radiusEnvironment={100}
            scaleEnvironment={60}
        />
      
      </div>
    );
};

export default PageEC;