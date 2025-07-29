import Prevention from "../sections/Prevention";
import Symptoms from "../sections/Symptoms";
import Treatments from "../sections/Treatments";
import WhatIs from "../sections/WhatIs";
import { ModelPrevention } from "./models-3d/AnimationPrevention";
import { ModelSymptom } from "./models-3d/AnimationSymptom";
import { Heart } from "./models-3d/Heart";
import { Tablets } from "./models-3d/Tablets";
import "./PageHA.css";

const PageHA = () => {
  return (
    <div className="page-container">
      <WhatIs
        title="Hipertensión arterial"
        subtitle="Una enfermedad silenciosa"
        description="La hipertensión arterial (HTA) es una enfermedad crónica caracterizada por un aumento persistente de la presión arterial en las arterias. Es conocida como la 'enfermedad silenciosa' porque a menudo no presenta síntomas evidentes, pero puede tener graves consecuencias para la salud si no se controla adecuadamente."
        //Modelo 3D
        Model3D={Heart}
        scale={4.4}
        position={[0, -0.5, 0]}
        rotation={[0, 0, 0]}
        rotationSpeed={0.01}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -2.8, 0]}
        planoRotacion={[-Math.PI / 2, 0, 0]}
        planoEscala={[30, 30]}
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
        onTurn={true}
        onAnimation={false}
        //Entorno
        enableGym={false}
        enableHospital={true}
        heightEnvironment={60}
        radiusEnvironment={100}
        scaleEnvironment={60}
        //Texto3D
        texts={`Hipertension\n    Arterial`}
        textsPosition={[-2.1, 3, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[0.5, 0.5, 0.5]}
        //MiniTexto2D
        miniText="Ambiente de quirofano"
        //Audio
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
      <Symptoms
        title="Síntomas"
        description="La hipertensión arterial, conocida como el 'asesino silencioso', es una condición que puede permanecer oculta durante años sin manifestar síntomas claros. A pesar de esta aparente ausencia de señales, el daño a los órganos vitales como el corazón, los riñones y el cerebro puede ser progresivo y severo. Detectarla a tiempo es fundamental para prevenir complicaciones graves. Aunque la mayoría de las personas no sienten molestias específicas, en algunos casos se pueden presentar síntomas como:"
        lastDescription="Es importante destacar que la aparición de estos síntomas suele indicar que la presión arterial ya ha alcanzado niveles peligrosamente altos. Sin embargo, estos signos no son exclusivos de la hipertensión y pueden deberse a otras condiciones médicas. Por ello, es fundamental realizar chequeos médicos periódicos, incluso en ausencia de síntomas, para garantizar un diagnóstico temprano y un tratamiento adecuado."
        items={[
          {
            title: "Dolores de cabeza",
            description: "Especialmente al despertar, relacionados con presión elevada.",
          },
          {
            title: "Mareos",
            description: "Sensación de inestabilidad o desvanecimiento.",
          },
          {
            title: "Fatiga",
            description: "Cansancio persistente, incluso sin esfuerzo físico intenso.",
          },
          {
            title: "Visión borrosa",
            description: "Dificultad para enfocar o ver con claridad.",
          },
          {
            title: "Dificultad para respirar",
            description: "Sensación de ahogo, sobre todo al realizar esfuerzo o al estar acostado.",
          },
        ]}
        //Modelo 3D
        Model3D={ModelSymptom}
        scale={0.024}
        position={[0, -2.5, 0]}
        rotation={[0, 0, 0]}
        rotationSpeed={0}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -2.99, 0]}
        planoRotacion={[-Math.PI / 2, 0, 0]}
        planoEscala={[30, 30]}
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
        texts="Sintomas"
        textsPosition={[-2, 2.8, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[0.6, 0.6, 0.6]}
        //MiniTexto2D
        miniText="Ambiente de cancha gimnasia"
        //Audio
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
      <Treatments
        title="Tratamiento"
        description="El tratamiento de la hipertensión arterial combina modificaciones en el estilo de vida con terapias farmacológicas específicas, adaptadas a cada paciente. Seguir las indicaciones médicas es esencial para mantener la presión arterial bajo control y prevenir complicaciones graves como enfermedades cardíacas, accidentes cerebrovasculares o daño renal."
        items={[
          {
            title: "Cambios en el estilo de vida",
            description:
              "Mejorar la dieta, hacer ejercicio y reducir el consumo de sal y alcohol.",
          },
          {
            title: "Medicamentos",
            description:
              "Uso de fármacos como diuréticos, betabloqueantes o inhibidores de la ECA.",
          },
          {
            title: "Monitoreo de presión",
            description:
              "Controlar regularmente los niveles de presión arterial en casa o en consulta.",
          },
          {
            title: "Reducción del estrés",
            description:
              "Aplicar técnicas de relajación como yoga, meditación o respiración profunda.",
          },
          {
            title: "Suplementos",
            description:
              "Uso de suplementos como potasio o magnesio, siempre con supervisión médica.",
          },
        ]}
        //Modelo 3D
        Model3D={Tablets}
        scale={0.78}
        position={[0, -1.8, 0]}
        rotation={[0, 0, 0]}
        rotationSpeed={0.01}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -2.5, 0]}
        planoRotacion={[-Math.PI / 2, 0, 0]}
        planoEscala={[30, 30]}
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
        textsPosition={[-2.46, 2.75, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[0.6, 0.6, 0.6]}
        //MiniTexto2D
        miniText="Ambiente de quirofano"
        //Audio
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
      <Prevention
        title="Prevención y cuidados"
        description="Prevenir la hipertensión arterial es posible mediante la adopción de hábitos de vida saludables y el monitoreo regular de la presión arterial. Una detección temprana y una intervención adecuada pueden marcar una gran diferencia en la salud a largo plazo. A continuación, te compartimos algunas recomendaciones esenciales:"
        lastDescription="Recuerda que incorporar pequeños cambios en tu rutina diaria puede tener un gran impacto en tu salud cardiovascular. La prevención no solo mejora tu calidad de vida, sino que también te protege de complicaciones futuras. ¡Tu corazón te lo agradecerá!"
        items={[
          {
            title: "Mantener un peso saludable",
            description: "Ayuda a reducir la presión arterial y el riesgo de enfermedades cardíacas."
          },
          {
            title: "Seguir una dieta equilibrada",
            description: "Incluye frutas, verduras, granos integrales y menos sal en tus comidas."
          },
          {
            title: "Realizar actividad física regularmente",
            description: "Caminar, nadar o montar bici ayuda a mantener el corazón fuerte."
          },
          {
            title: "Limitar el consumo de alcohol y tabaco",
            description: "Evita dañar los vasos sanguíneos y aumentar la presión arterial."
          },
          {
            title: "Controlar el estrés",
            description: "Practica técnicas de relajación como respiración profunda o meditación."
          }
        ]}
        //Modelo 3D
        Model3D={ModelPrevention}
        scale={0.0235}
        position={[0, -2.66, 0]}
        rotation={[0, 0, 0]}
        rotationSpeed={0.01}
        //Plano
        mostrarPlano={false}
        planoPosicion={[0, -2.87, 0]}
        planoRotacion={[-Math.PI / 2, 0, 0]}
        planoEscala={[30, 30]}
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
        onTurn={true}
        onAnimation={true}
        //Entorno
        enableGym={true}
        enableHospital={false}
        heightEnvironment={14}
        radiusEnvironment={50}
        scaleEnvironment={50}
        //Texto3D
        texts="Prevencion"
        textsPosition={[-2.2, 2.7, 0]}
        textsRotation={[0, 0, 0]}
        textsScale={[0.6, 0.6, 0.6]}
        //MiniTexto2D
        miniText="Ambiente de cancha gimnasia"
        //Audio
        AudioModelo="/sounds/HA/HurtPrueba.mp3"
      />
    </div>
  );
};

export default PageHA;
