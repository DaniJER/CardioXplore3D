import React, { useState } from 'react';
import "./aboutUs.css";

const AboutUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Logica para enviar los datos del formulario
    alert('Formulario enviado con éxito');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

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
      <section className="section contact">
        <h2 className="contact-title">¿Tiene preguntas?</h2>
        <p className="contact-subtitle">
          Déjenos saber si tiene dudas u opiniones acerca de nuestro sitio web.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="name-fields">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Nombres"
              required
              autoComplete="given-name"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Apellidos"
              required
              autoComplete="family-name"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ejemplo@gmail.com"
            required
            autoComplete="email"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ingrese un mensaje"
            rows="4"
            required
          />
          <button type="submit">Enviar</button>
        </form>
      </section>
    </>
  );
};

export default AboutUs;