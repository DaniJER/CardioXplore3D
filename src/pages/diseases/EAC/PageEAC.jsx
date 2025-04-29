import React from "react";
import "./pageEAC.css";
import Prevention from "../sections/prevention";
import Symptoms from "../sections/symptoms";
import Treatments from "../sections/treatments";
import WhatIs from "../sections/whatIs";
import { Artery } from "../EAC/models-3d/Artery";
import { ChestPain } from "../EAC/models-3d/ChestPain";
import { Angioplasty } from "../EAC/models-3d/Angioplasty";
import { Training } from "../EAC/models-3d/Training";

const PageEAC = () => {
  return (
    <div className="page-container">
      <WhatIs
        title="Hipertensión arterial"
        subtitle="Una enfermedad silenciosa"
        description="La hipertensión arterial (HTA) es una enfermedad crónica caracterizada por un aumento persistente de la presión arterial en las arterias. Es conocida como la 'enfermedad silenciosa' porque a menudo no presenta síntomas evidentes, pero puede tener graves consecuencias para la salud si no se controla adecuadamente."
        Model3D={Artery}
        scale={5.45}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
      <Symptoms
        title="Síntomas"
        description="La hipertensión arterial, conocida como el 'asesino silencioso', es una condición que puede permanecer oculta durante años sin manifestar síntomas claros. A pesar de esta aparente ausencia de señales, el daño a los órganos vitales como el corazón, los riñones y el cerebro puede ser progresivo y severo. Detectarla a tiempo es fundamental para prevenir complicaciones graves. Aunque la mayoría de las personas no sienten molestias específicas, en algunos casos se pueden presentar síntomas como:"
        lastDescription="Es importante destacar que la aparición de estos síntomas suele indicar que la presión arterial ya ha alcanzado niveles peligrosamente altos. Sin embargo, estos signos no son exclusivos de la hipertensión y pueden deberse a otras condiciones médicas. Por ello, es fundamental realizar chequeos médicos periódicos, incluso en ausencia de síntomas, para garantizar un diagnóstico temprano y un tratamiento adecuado."
        items={[
          "Dolores de cabeza",
          "Mareos",
          "Fatiga",
          "Visión borrosa",
          "Dificultad para respirar",
        ]}
        Model3D={ChestPain}
        scale={0.028}
        position={[0, -2.8, 0]}
        rotation={[0, 0, 0]}
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
        Model3D={Angioplasty}
        scale={0.78}
        position={[0, -1.8, 0]}
        rotation={[0, 0, 0]}
      />
      <Prevention
        title="Prevención y cuidados"
        description="Prevenir la hipertensión arterial es posible mediante la adopción de hábitos de vida saludables y el monitoreo regular de la presión arterial. Una detección temprana y una intervención adecuada pueden marcar una gran diferencia en la salud a largo plazo. A continuación, te compartimos algunas recomendaciones esenciales:"
        lastDescription="Recuerda que incorporar pequeños cambios en tu rutina diaria puede tener un gran impacto en tu salud cardiovascular. La prevención no solo mejora tu calidad de vida, sino que también te protege de complicaciones futuras. ¡Tu corazón te lo agradecerá!"
        items={[
          "Mantener un peso saludable",
          "Seguir una dieta equilibrada",
          "Realizar actividad física regularmente",
          "Limitar el consumo de alcohol y tabaco",
          "Controlar el estrés",
        ]}
        Model3D={Training}
        scale={0.03}
        position={[0, -3, 0]}
        rotation={[0, 0, 0]}
      />
    </div>
  );
};

export default PageEAC;
