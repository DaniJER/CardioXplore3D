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
      <section className="section intro-section">
        <div className="banner-block">
          <img
            src="./img/Banner.png"
            alt="Banner de presentación"
            className="banner-image"
          />
          <div className="banner-content">
            <h1>CardioXplore3D</h1>
            <p>
              Aprende sobre las enfermedades del corazón con visualizaciones
              interactivas en 3D
            </p>
            <button onClick={manejarScroll} className="banner-button">
              ¡Empecemos!
            </button>
          </div>
          <div className="banner-content" id="inicio">
          <h1>CardioXplore3D</h1>
          <p>Conozca más sobre CardioXplore3D</p>
          <button className="banner-button">
            Click aquí para conocer más sobre nosotros
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
              A lo largo de la pagina podras conocer distintas enfermedades
              relacionadas con el corazón, cuales son sus sintomas, tratamientos
              y prevenciones. Podras ver y manipular modelos en 3D los cuales
              harán una experiencia más educativa e interactiva.
            </p>
          </div>
        </div>
      </section>
      {/* Formulario de contacto */}
      <section className="section contact">
        <h2 className="contact-title">¿Tiene preguntas?</h2>
        <p className="contact-subtitle">
          Dejenos saber si tiene dudas u opiniones a cerca de nuestro sitio web.
        </p>
        <form className="contact-form">
          <div className="name-fields">
            <input type="text" placeholder="nombres" />
            <input type="text" placeholder="apellidos" />
          </div>
          <input type="email" placeholder="ejemplo@gmail.com" />
          <textarea placeholder="Ingrese un mensaje" rows="4"></textarea>
          <button type="submit">Enviar</button>
        </form>
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
