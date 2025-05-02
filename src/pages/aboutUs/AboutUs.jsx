import "./aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <title>Sobre nosotros</title>
      <h1>Sobre nosotros</h1>
      <section>
        <div className="aboutUs-block">
          <img
            src="public/img/univalle.jpg"
            alt="sobre nosotros"
            className="aboutUs-image"
          />
          <br></br>
          <p className="aboutUs-text">
            Somos un grupo de estudiantes de sexto semestre del programa de
            Tecnología en Desarrollo de Software de la Universidad del Valle,
            comprometidos con la innovación, el aprendizaje práctico y el uso de
            la tecnología para resolver desafíos del mundo real. Este proyecto
            nace como parte de la asignatura Proyecto Integrador I, en la que
            buscamos aplicar los conocimientos adquiridos durante nuestra
            formación académica en el diseño, desarrollo e implementación de una
            aplicación interactiva con tecnología 3D. Nuestro objetivo principal
            es ofrecer una experiencia digital envolvente y educativa, que
            demuestre no solo nuestro dominio técnico en áreas como
            programación, diseño de interfaces, bases de datos y modelado 3D,
            sino también nuestra capacidad de trabajo en equipo, investigación y
            solución de problemas reales mediante software. creatividad y
            dedicación.
          </p>
        </div>
      </section>
    </>
  );
};
export default AboutUs;
