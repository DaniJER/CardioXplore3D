import "./aboutUs.css";

const AboutUs = () => {
  return (
    <>
      <title>Sobre nosotros</title>
      <h1>Sobre nosotros</h1>
      <section>
        <div className="aboutUs-block">
          <img
            src="/img/univalle.jpg"
            alt="sobre nosotros"
            className="aboutUs-image"
          />
          <p className="aboutUs-text">
            Somos un grupo de estudiantes de sexto semestre de la Tecnología en
            Desarrollo de Software de la Universidad del Valle. Este sitio web
            es el resultado de nuestro proyecto final para la asignatura
            Proyecto Integrador, en el cual combinamos los conocimientos
            adquiridos a lo largo de la carrera. Nuestro objetivo con este
            trabajo es brindar una herramienta educativa e interactiva sobre
            enfermedades cardíacas, utilizando modelos en 3D para facilitar la
            comprensión visual de las afecciones más comunes del corazón. A
            través de esta plataforma, buscamos aportar valor tanto a
            estudiantes como a profesionales de la salud, integrando tecnología,
            diseño y funcionalidad con propósito.
          </p>
        </div>
      </section>
      <br /><br />

      <hr />
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
    </>
  );
};
export default AboutUs;
