import React from "react";
import Prevention from "../sections/Prevention";
import Symptoms from "../sections/Symptoms";
import Treatments from "../sections/Treatments";
import WhatIs from "../sections/WhatIs";
import { Artery } from "./models-3d/Artery";
import { ChestPain } from "../EAC/models-3d/ChestPain";
import { Angioplasty } from "../EAC/models-3d/Angioplasty";
import { Training } from "../EAC/models-3d/Training";
import "./pageEAC.css/";

const PageEAC = () => {
  return (
    <div className="page-container">
      <WhatIs
        title="Enfermedad Arterial Coronaria"
        subtitle="El tipo más común de enfermedad cardiaca"
        description="La EAC ocurre cuando las arterias que suministran la sangre al músculo cardíaco se endurecen y se estrechan. Esto se debe a la acumulación de colesterol y otros materiales llamados placa en la capa interna de las paredes de la arteria. Esta acumulación se llama arterioesclerosis. A medida que esta avanza, fluye menos sangre a través de las arterias. Como consecuencia, el músculo cardíaco no puede recibir la sangre o el oxígeno que necesita. Eso puede conducir a dolor en el pecho (angina) o a un infarto. La mayoría de los infartos ocurren cuando un coágulo súbitamente interrumpe el suministro de sangre al corazón, causando un daño cardíaco permanente."
        Model3D={Artery}
        scale={2.45}
        position={[0, 0, 0]}
        rotation={[2.45, 2.45, 2.45]}
        rotationSpeed={1}
      />
      <Symptoms
        title="Síntomas"
        description="
                Los síntomas de la enfermedad de las arterias coronarias se producen cuando el corazón no recibe suficiente sangre rica en oxígeno. Una arteria coronaria completamente bloqueada causará un ataque cardíaco. Los síntomas frecuentes de un ataque cardíaco incluyen:"
        lastDescription="El dolor en el pecho, denominado angina. Puede hacerte sentir constricción, presión, pesadez, opresión o dolor en el pecho. Es posible que se sienta como si alguien se sentara sobre tu pecho. Este dolor suele afectar la zona media o izquierda del pecho. El ejercicio o las emociones fuertes pueden desencadenar la angina de pecho. Existen diferentes tipos de angina. El tipo depende de la causa y de si el reposo o el medicamento alivian los síntomas. En algunas personas, especialmente en las mujeres, el dolor puede ser breve o agudo y se siente en el cuello, el brazo o la espalda.
                Falta de aire. Puedes sentir que no puedes respirar.
                Fatiga. Si el corazón no puede bombear suficiente sangre para satisfacer las necesidades del cuerpo, puedes sentirte inusualmente cansado."
        items={[
          "Dolor en el pecho que puede sentirse como presión, opresión, constricción o dolor.",
          "Dolor o molestia que se disemina a los hombros, brazos, espalda, cuello, mandíbula, dientes",
          "Sudor frío",
          "Fatiga",
          "Acidez estomacal",
          "Aturdimiento o mareos repentinos",
          "Falta de aire",
        ]}
        Model3D={ChestPain}
        scale={4.45}
        position={[0, -2.55, 0]}
        rotation={[0, 0, 0]}
      />
      <Treatments
        title="Tratamiento"
        description="La angioplastia coronaria es un procedimiento para abrir los vasos sanguíneos obstruidos del corazón. La angioplastia coronaria trata los vasos, llamados arterias coronarias, que llevan la sangre a los músculos del corazón. Un globo pequeño en una sonda estrecha, llamado catéter, se utiliza para ampliar una arteria obstruida y mejorar el flujo sanguíneo.
        La angioplastia a menudo va seguida de la colocación de un pequeño tubo de malla de alambre llamado estent. El estent ayuda a mantener la arteria abierta y disminuir las posibilidades de que la arteria se vuelva a estrechar. La mayoría de los estents están recubiertos con medicamentos que ayudan a mantener la arteria abierta.
        Es recomendable adoptar las siguientes medidas y tratamientos despues de una intervencion como la angioplastia:"
        items={[
          {
            title: "Antiagregantes plaquetarios",
            description:
              "Para prevenir la formación de coágulos en el stent, se pueden recetar medicamentos como aspirina en dosis baja y clopidogrel, o alternativamente prasugrel o ticagrelor. ",
          },
          {
            title:
              "Programa de educación, asesoramiento y entrenamiento físico",
            description:
              "Este programa ayuda a los pacientes a mejorar su salud cardiovascular, a comprender mejor su condición y a llevar un estilo de vida más saludable. ",
          },
          {
            title: "Cambios en el estilo de vida",
            description:
              "Se recomienda seguir una dieta saludable, hacer ejercicio regularmente y evitar el tabaco. ",
          },
          {
            title: "Monitoreo médico",
            description:
              "Es importante realizar un seguimiento con el médico para evaluar el progreso de la recuperación y ajustar el tratamiento según sea necesario. ",
          },
        ]}
        Model3D={Angioplasty}
        scale={3.45}
        position={[0, 0, 0]}
        rotation={[0, 1, 1]}
      />
      <Prevention
        title="Prevención y cuidados"
        description="Puedes ayudar a prevenir las enfermedades cardíacas siguiendo un estilo de vida saludable para el corazón. Aquí te mostramos algunas estrategias que te ayudarán a prevenir este tipo de enfermedades y así tener un corazón sano:"
        lastDescription="Recuerda preservar la disciplina al momento de realizar estas actividades. La clave pare tener un corazón sano es hacer cada actividad conscientemente."
        items={[
          "Limitar el consumo de alcohol y tabaco.",
          "Hacer ejercicio y/o deporte.",
          "Comer menos alimentos no saludables o con mucha grasa.",
          "Mantener un peso adecuado.",
          "Evitar el estrés.",
          "Meditación activa y pasiva.",
          "Cambiar rutinas y habitos perjudiciales.",
        ]}
        Model3D={Training}
        scale={3.45}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </div>
  );
};

export default PageEAC;
