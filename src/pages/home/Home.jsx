import React from "react";
import { useRef } from "react";
import "./home.css";

const Home = () => {
  const refContent = useRef(null);

  const manejarScroll = () => {
    if (refContent.current) {
      refContent.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Bienvenida y presentación */}
      <section className="section intro-section" id="inicio">
        <div className="banner-block">
          <img
            src="./img/Banner.png"
            alt="Banner de presentación"
            className="banner-image"
          />
          <div className="banner-content">
            <h1>CardioXplore3D</h1>
            <p style={{width: "500px", textAlign: "center"}}>
              Aprende sobre las enfermedades del corazón con visualizaciones
              interactivas en 3D
            </p>
            <button onClick={manejarScroll} className="banner-button">
              ¡Empecemos!
            </button>
          </div>
        </div>
        <div className="intro-block" ref={refContent}>
          <div className="intro-text left-text">
            <h2>Bienvenido a CardioXplore3D</h2>
            <h4>
              Salud Cardiovascular en 3D: Aprende Sobre las Enfermedades del
              Corazón.
            </h4>
            <p>
              Bienvenido a nuestra plataforma interactiva desarrollada por
              estudiantes de la Universidad del Valle, como parte de la clase de
              Proyecto Integrador. Nuestro objetivo es proporcionar información
              detallada sobre las enfermedades del corazón, sus síntomas y
              cuidados, utilizando tecnología 3D para una experiencia visual e
              inmersiva.
            </p>
          </div>
          <img
            src="./img/Dolor-en-el-pecho.png"
            alt="Dolor en el pecho"
            className="intro-image"
          />
        </div>

        <div className="intro-block">
          <img
            src="./img/Corazon.png"
            alt="Corazón con arterias"
            className="intro-image"
          />
          <div className="intro-text right-text">
            <p>
              A lo largo de la pagina podrás conocer distintas enfermedades
              relacionadas con el corazón, cuales son sus sintomas, tratamientos
              y prevenciones. Podras ver y manipular modelos en 3D los cuales
              harán una experiencia más educativa e interactiva.
            </p>
          </div>
        </div>
      </section>

      <button
        className="scroll"
        onClick={() => {
          const section = document.getElementById("inicio");
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        ↑
      </button>
    </>
  );
};

export default Home;
