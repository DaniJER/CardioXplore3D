import React, { useState } from "react";
import "./diseases.css";
import { Link } from "react-router-dom";

const datos = [
  {
    id: 1,
    nombre: "Hipertension Arterial",
    descripcion: "La presión sanguínea se elevada de forma persistente.",
    imagen: "/img-diseases/Heart-HA.png",
  },
  {
    id: 2,
    nombre: "Enfermedad 2",
    descripcion: "Pequeña descripción",
    imagen: "/img-diseases/prueba.png",
  },
  {
    id: 3,
    nombre: "Enfermedad Arterial Coronaria",
    descripcion:
      "Acumulación de placa en las arterias que suministran sangre al corazón",
    imagen: "/img-diseases/artery.png",
  },
  {
    id: 4,
    nombre: "Enfermedad 4",
    descripcion: "Pequeña descripción",
    imagen: "/img-diseases/prueba.png",
  },
];

const Diseases = () => {
  const [index, setIndex] = useState(0);

  //Logica para el coverflow
  const next = () => {
    setIndex((prev) => (prev + 1) % datos.length);
  };

  const back = () => {
    setIndex((prev) => (prev - 1 + datos.length) % datos.length);
  };

  return (
    <div className="coverflow-contenedor">
      <h2>Enfermedades</h2>
      <div className="coverflow">
        <button className="flecha" onClick={back}>
          ⟨
        </button>

        <div className="cards">
          {/* Mapeo de los datos para crear las cartas */}
          {datos.map((item, i) => {
            let clase = "card";
            let buttonAction = null;
            let linkClass = "";

            // Se asigna una clase diferente a cada carta dependiendo de su posición: left, active o right
            if (i === index) {
              clase += " active";
            } else if (i === (index - 1 + datos.length) % datos.length) {
              clase += " left";
              buttonAction = back;
              linkClass = "saber-mas";
            } else if (i === (index + 1) % datos.length) {
              clase += " right";
              buttonAction = next;
              linkClass = "saber-mas";
            }

            return (
              // Botones con imagen y texto
              <button key={item.id} className={clase} onClick={buttonAction}>
                <img src={item.imagen} alt={item.nombre} />
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
                {/* Enlace a la página de la enfermedad dependiendo de los datos */}
                <Link to={`/enfermedades/${item.id}`} className={linkClass}>
                  Saber más
                </Link>
              </button>
            );
          })}
        </div>

        <button className="flecha" onClick={next}>
          ⟩
        </button>
      </div>
    </div>
  );
};

export default Diseases;
