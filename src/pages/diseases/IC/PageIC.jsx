import React from "react";
import Prevention from "../sections/Prevention";
import Symptoms from "../sections/Symptoms";
import Treatments from "../sections/Treatments";
import { Consequence } from "./models-3d/Consequence";
import { Pills } from "./models-3d/Pills";
import { Exercice } from "./models-3d/Exercice";
import "./pageIC.css";

const PageIC = () => {
  return (
    <div className="page-container">
      <Symptoms
        title="Síntomas"
        description="es una condición en la que el corazón no puede bombear sangre de manera eficiente para satisfacer las necesidades del cuerpo. Esto puede ocurrir cuando el músculo cardíaco se debilita o se vuelve demasiado rígido, afectando su capacidad para llenarse o expulsar sangre adecuadamente.:"
        lastDescription="Puede afectar al lado izquierdo, derecho o ambos lados del corazón. También se desarrolla de forma crónica (progresiva con el tiempo) o de manera aguda (repentina). En la forma crónica, el deterioro de la función cardíaca ocurre gradualmente, lo que permite que el cuerpo se adapte parcialmente a los cambios, mientras que en la forma aguda, el fallo cardíaco se presenta de manera súbita, generalmente como consecuencia de un evento grave como un infarto o una alteración estructural repentina."
        items={[
          {
            title: "Dificultad para respirar",
            description: "Sensación de ahogo al hacer esfuerzo o al estar acostado"
          },
          {
            title: "Fatiga constante",
            description: "Cansancio extremo incluso con actividades leves"
          },
          {
            title: "Hinchazón en piernas y tobillos",
            description: "Acumulación de líquidos por mala circulación"
          },
          {
            title: "Latidos irregulares y rápidos",
            description: "Palpitaciones o sensación de que el corazón se acelera o salta"
          }
        ]}
        //Modelo 3D
        Model3D={Consequence}
        scale={3.5}
        position={[0, -0.5, 0]}
        rotation={[0, 1.55, 0]}
        rotationSpeed={0}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -0.45, 0]}
        //Luces Directas
        ambientIntensity={1.5}
        enableDirectionalLight={true}
        directionalIntensity={10}
        directionalPosition={[5, 5, 10]}
        //Luces Spot
        enableSpotLight={false}
        spotIntensity={10}
        spotPosition={[10, 15, 10]}
        //Luces Punto
        enablePointLight={false}
        pointIntensity={10}
        pointPosition={[0, 5, 0]}
        //Eventos
        onTurn={false}
        onAnimation={true}
        //Entorno
        enableGym={true}
        enableHospital={false}
        heightEnvironment={14}
        radiusEnvironment={50}
        scaleEnvironment={50}
        //Texto3D
        texts="Insuficiencia Cardíaca"
        textsPosition={[0, 3, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[2, 2, 2]}
        // Texto2D
        miniText="Ambiente de cancha gimnasia"
      />
      <Treatments
        title="Tratamiento"
        description="El tratamiento de la insuficiencia cardíaca se basa en aliviar los síntomas y mejorar la función del corazón. Se utilizan medicamentos como los inhibidores de la enzima convertidora de angiotensina (IECA), los betabloqueantes y los diuréticos, que ayudan a reducir la presión arterial, mejorar la circulación y eliminar el exceso de líquidos. Además, en algunos casos, se requieren dispositivos como marcapasos o desfibriladores para regular el ritmo cardíaco. Los cambios en el estilo de vida, como una dieta baja en sodio, ejercicio moderado y el control de enfermedades como la hipertensión, son fundamentales. En casos graves, el trasplante de corazón puede ser necesario. La clave del tratamiento es una combinación de medicamentos, control de comorbilidades y ajustes en el estilo de vida."
        items={[
          {
            title: "Tratamiento farmacológico:",
            description:
              "Administración de medicamentos como diuréticos, betabloqueantes o inhibidores de la ECA para mejorar la función cardíaca y controlar los síntomas.",
          },
          {
            title: "Control de la presión arterial",
            description:
              "Medir de manera constante los niveles de presión arterial, ya sea en el hogar o en las consultas médicas, para mantenerlos dentro de los rangos recomendados.",
          },
          {
            title: "Manejo del estrés",
            description:
              "racticar técnicas de relajación como yoga, meditación o respiración profunda para reducir la tensión y mejorar el bienestar general.",
          },
          {
            title: "Reducción del estrés",
            description:
              "Aplicar técnicas de relajación como yoga, meditación o respiración profunda.",
          },
          {
            title: "uso de suplementos",
            description:
              "Incorporación de suplementos como potasio o magnesio bajo la supervisión de un médico, para garantizar el equilibrio adecuado de electrolitos.",
          },
        ]}
        //Modelo 3D
        Model3D={Pills}
        scale={0.25}
        position={[0, 0, 0]}
        rotation={[0.8, 0, 0]}
        rotationSpeed={0.01}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -2, 0]}
        planoRotacion={[-Math.PI / 2, 0, 0]}
        //Luces Direct
        ambientIntensity={1.5}
        enableDirectionalLight={true}
        directionalIntensity={10}
        directionalPosition={[5, 5, 10]}
        //Luces Spot
        enableSpotLight={false}
        spotIntensity={10}
        spotPosition={[10, 15, 10]}
        //Luces Punto
        enablePointLight={false}
        pointIntensity={10}
        pointPosition={[0, 5, 0]}
        //Eventos
        onTurn={true}
        onAnimation={false}
        //Entorno
        enableGym={false}
        enableHospital={true}
        heightEnvironment={800}
        radiusEnvironment={1000}
        scaleEnvironment={400}
        //Texto3D
        texts="Tratamiento"
        textsPosition={[0, 2.8, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[2, 2, 2]}
        // Texto2D
        miniText="Ambiente de quirofano"
      />
      <Prevention
        title="Prevención y cuidados"
        description="La prevención de la insuficiencia cardíaca se basa en controlar los factores de riesgo antes de que la enfermedad se desarrolle. Mantener la presión arterial dentro de los límites normales, llevar una dieta baja en sodio, grasas saturadas y colesterol, y realizar ejercicio físico regular son fundamentales para mantener la salud del corazón. Además, es crucial evitar el consumo excesivo de alcohol y tabaco, que dañan tanto el corazón como los vasos sanguíneos. El control de enfermedades crónicas como la diabetes, la obesidad y el colesterol alto también juega un papel clave en la prevención. Adoptar estos hábitos no solo mejora la salud cardiovascular, sino que reduce significativamente el riesgo de insuficiencia cardíaca.:"
        lastDescription="Recuerda que incorporar pequeños cambios en tu rutina diaria puede tener un gran impacto en tu salud cardiovascular. La prevención no solo mejora tu calidad de vida, sino que también te protege de complicaciones futuras. ¡Tu corazón te lo agradecerá!"
        items={[
          {
            title: "Control de presión arterial",
            description: "Mantén tu presión en niveles saludables con chequeos regulares y siguiendo las indicaciones médicas."
          },
          {
            title: "Dieta saludable",
            description: "Opta por alimentos bajos en sodio, grasas saturadas y colesterol para cuidar tu corazón."
          },
          {
            title: "Ejercicio regular",
            description: "Realiza actividad física moderada al menos 30 minutos al día, la mayoría de los días de la semana."
          },
          {
            title: "Monitoreo constante",
            description: "Controla tus niveles de glucosa, colesterol y peso para detectar riesgos a tiempo."
          },
          {
            title: "Evitar alcohol y tabaco",
            description: "Reducir o eliminar su consumo protege el corazón y mejora tu salud general."
          }
        ]}
        //Modelo 3D
        Model3D={Exercice}
        scale={3}
        position={[0, -3, 0]}
        rotation={[0.1, 0, 0]}
        rotationSpeed={0}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -2.99, 0]}
        //Luces Direct
        ambientIntensity={1.5}
        enableDirectionalLight={true}
        directionalIntensity={10}
        directionalPosition={[5, 5, 10]}
        //Luces Spot
        enableSpotLight={false}
        spotIntensity={10}
        spotPosition={[10, 15, 10]}
        //Luces Punto
        enablePointLight={false}
        pointIntensity={10}
        pointPosition={[0, 5, 0]}
        //Eventos
        onTurn={false}
        onAnimation={true}
        //Entorno
        enableGym={true}
        enableHospital={false}
        heightEnvironment={14}
        radiusEnvironment={50}
        scaleEnvironment={50}
        //Texto3D
        texts="Prevención"
        textsPosition={[0, 3.15, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[2, 2, 2]}
        // Texto2D
        miniText="Ambiente de cancha gimnasia"
      />
    </div>
  );
};

export default PageIC;
