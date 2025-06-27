import React from 'react';
import Prevention from "../sections/Prevention";
import Symptoms from "../sections/Symptoms";
import Treatments from "../sections/Treatments";
import WhatIs from "../sections/WhatIs";
import "./PageEC.css"

import { Heart } from "./models-3d/Heart";
import { Surgeon } from "./models-3d/Surgeon";


const PageEC = () => {
  return (
    <div className="page-container">
      <WhatIs
        title="Comunicación interventricular"
        subtitle="Defecto del tabique ventricular"
        description="La comunicación interventricular (CIV) es un tipo de cardiopatía congénita, es decir, una malformación del corazón presente desde el nacimiento. Consiste en la existencia de un orificio anormal en el tabique interventricular, la pared muscular que separa los dos ventrículos (cavidades inferiores del corazón).
          
          Este orificio permite que la sangre rica en oxígeno que debería salir hacia el cuerpo desde el ventrículo izquierdo se mezcle con sangre pobre en oxígeno del ventrículo derecho. Como resultado, una parte de la sangre vuelve a circular hacia los pulmones innecesariamente, lo que sobrecarga tanto al corazón como al sistema pulmonar."
        Model3D={Heart}
        scale={4.44}
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
      <Symptoms
        title="Causas, diagnóstico y Síntomas"
        description="La CIV puede presentarse de forma aislada o como parte de otras malformaciones cardíacas más complejas. Suele detectarse mediante ecocardiografía (ultrasonido del corazón), especialmente si el médico escucha un soplo cardíaco en el examen físico."
        lastDescription={"Los síntomas pueden variar según el tamaño del defecto y la cantidad de sangre que fluye a través de él. En algunos casos, los bebés pueden no presentar síntomas evidentes, mientras que en otros pueden experimentar dificultad para respirar, fatiga, retraso en el crecimiento y otros problemas relacionados con la circulación sanguínea."}
        items={[
          "Dificultad para respirar.",

          "Fatiga o sudoración al alimentarse (en bebés).",

          "Infecciones respiratorias frecuentes.",

          "Crecimiento deficiente.",

          "Soplo cardíaco audible con estetoscopio."
        ]}
        // Modelo 3D
        Model3D={Surgeon}
        scale={1.45}
        position={[0, -2.2, 0]}
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