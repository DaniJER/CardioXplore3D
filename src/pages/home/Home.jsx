import React from "react";
import "./home.css";

const Home = () => {
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
          <div className="banner-content" id="inicio">
          <h1>CardioXplore3D</h1>
          <p>Conozca más sobre CardioXplore3D</p>
          <button className="banner-button">
            Click aquí para conocer más sobre nosotros
          </button>
        </div>

        </div>
        <div className="intro-block">
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
              Este es un modelo 3D del corazón humano. Aquí puedes observar cómo
              funciona y explorarlo desde cualquier ángulo. Si tienes alguna
              duda, puedes consultar las descripciones en nuestra página.
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
