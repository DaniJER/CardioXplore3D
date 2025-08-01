import React from "react";
import Prevention from "../sections/Prevention";
import Symptoms from "../sections/Symptoms";
import Treatments from "../sections/Treatments";
import WhatIs from "../sections/WhatIs";
import "./PageEC.css"

import { Heart } from "./models-3d/Heart";
import { Surgeon } from "./models-3d/Surgeon";
import { WomanFall } from "./models-3d/WomanFall";


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
        // Texto3D
        texts="Comunicación Interventricular"
        textsPosition={[0, 2.6, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[1.5, 1.5, 1.5]}
        // Texto2D
        miniText="Ambiente de quirofano"
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
      <Symptoms
        title="Síntomas"
        description="La CIV puede presentarse de forma aislada o como parte de otras malformaciones cardíacas más complejas. Suele detectarse mediante ecocardiografía (ultrasonido del corazón), especialmente si el médico escucha un soplo cardíaco en el examen físico. Este tambien puede Surgir por situaciones aunque raras en adultos despues de sufrir de un Infarto agudo de miocardio (complicación en adultos mayores), Traumatismos cardíacos(Impactos fuertes que comprometan la integridad del organo) e Infecciones como endocarditis."
        lastDescription={"Los síntomas pueden variar según el tamaño del defecto y la cantidad de sangre que fluye a través de él. En algunos casos, los bebés pueden no presentar síntomas evidentes, mientras que en otros pueden experimentar dificultad para respirar, fatiga, retraso en el crecimiento y otros problemas relacionados con la circulación sanguínea."}
        items={[
          {
            title: "Dificultad para respirar",
            description: "Puede notarse durante el llanto, la alimentación o el sueño."
          },
          {
            title: "Fatiga o sudoración al alimentarse (en bebés)",
            description: "Señal de que el corazón trabaja más de lo normal."
          },
          {
            title: "Infecciones respiratorias frecuentes",
            description: "Mayor riesgo de resfriados, bronquitis o neumonía."
          },
          {
            title: "Crecimiento deficiente",
            description: "Aumento de peso lento o talla por debajo del promedio."
          },
          {
            title: "Soplo cardíaco audible con estetoscopio",
            description: "Ruido anormal que sugiere un flujo sanguíneo irregular en el corazón."
          }
        ]}
        // Modelo 3D
        Model3D={WomanFall}
        scale={2.50}
        position={[0, -2.2, 0]}
        rotation={[0, 0, 0]}
        rotationSpeed={0.01}
        mostrarPlano={false}
        planoPosicion={[0, -2.8, 0]}
        planoRotacion={[-Math.PI / 2, 0, 0]}
        planoEscala={[30, 30]}
        enableGym={true}
        enableHospital={false}
        heightEnvironment={60}
        radiusEnvironment={100}
        scaleEnvironment={60}
        // Texto3D
        texts="Síntomas"
        textsPosition={[0, 3, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[2, 2, 2]}
        onTurn={true}
        onAnimation={true}
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
      <Treatments
        title="Tratamiento Quirúrgico de la Comunicación Interventricular (CIV)"
        description="La cirugía es necesaria cuando el defecto es grande, produce síntomas graves o hay riesgo de daño pulmonar e insuficiencia cardíaca. El objetivo principal es cerrar la abertura en el tabique interventricular para restaurar el flujo sanguíneo normal. La CIV puede presentarse de forma aislada o como parte de otras malformaciones cardíacas más complejas. Suele detectarse mediante ecocardiografía (ultrasonido del corazón), especialmente si el médico escucha un soplo cardíaco en el examen físico."
        lastDescription={""}
        items={[
          {
            title: "Cirugía a corazón abierto",
            description: "Se realiza con el paciente conectado a una máquina de circulación extracorpórea. El cirujano accede al corazón, localiza el defecto y lo cierra con puntos o un parche (generalmente de pericardio o material sintético). Es el método más común en defectos grandes o múltiples."
          },
          {
            title: "Cierre percutáneo (cateterismo)",
            description: "Procedimiento mínimamente invasivo. Se introduce un catéter por la vena femoral hasta el corazón y se coloca un dispositivo oclusor que sella el defecto. Indicado solo en ciertos tipos de CIV pequeños o moderados, y en pacientes adecuados."
          }
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
        // Texto3D
        texts="Tratamiento"
        textsPosition={[0, 3, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[2, 2, 2]}
        // Texto2D
        miniText="Ambiente de quirofano"
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
      {/* <Prevention
        title="Prevención y cuidados"
        description="La comunicación interventricular (CIV) es una de las malformaciones cardíacas congénitas más frecuentes. Aunque en muchos casos no se puede evitar por completo, especialmente cuando se debe a factores genéticos o alteraciones del desarrollo fetal, sí es posible reducir el riesgo de su aparición mediante medidas preventivas adecuadas antes y durante el embarazo. Además, una vez diagnosticada, los cuidados adecuados pueden mejorar notablemente la calidad de vida del paciente, prevenir complicaciones y favorecer un desarrollo saludable. La CIV generalmente se origina durante las primeras semanas de gestación, cuando el corazón del feto está en pleno desarrollo. Por eso, es fundamental que las madres sigan ciertos cuidados antes y durante el embarazo para disminuir el riesgo de cardiopatías congénitas, incluyendo:"
        items={[
          {
            title: "Control prenatal riguroso:",
            description: "Es vital que la madre reciba atención médica regular durante el embarazo. Esto incluye ecografías, análisis de sangre y evaluación de posibles riesgos genéticos."
          },
          {
            title: "Buena alimentación y suplementación:",
            description: "Tomar ácido fólico antes de la concepción y durante las primeras semanas de embarazo ayuda a prevenir defectos del tubo neural y otras malformaciones congénitas, incluyendo las del corazón. Mantener una dieta equilibrada rica en vitaminas y minerales es esencial."
          },
          {
            title: "Evitar sustancias tóxicas",
            description: "El consumo de alcohol, tabaco, y drogas está directamente relacionado con mayores riesgos de malformaciones en el feto. Estas sustancias deben evitarse completamente durante el embarazo."
          },
          {
            title: "Control de enfermedades maternas:",
            description: "Enfermedades como la diabetes, hipertensión, o infecciones como la rubéola o toxoplasmosis pueden influir negativamente en el desarrollo fetal. Es crucial mantenerlas controladas con orientación médica. Las vacunas adecuadas antes del embarazo también son fundamentales."
          },
          {
            title: "Consejería genética",
            description: "En familias con antecedentes de cardiopatías congénitas, puede ser útil acudir a un genetista para conocer el riesgo de transmisión y explorar alternativas de monitoreo temprano durante el embarazo."
          }
        ]}
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
        // Texto3D
        texts="Tratamiento"
        textsPosition={[0, 3, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[2, 2, 2]}
      /> */}
    </div>
  );
};

export default PageEC;