import { useNavigate } from 'react-router-dom';
import './Footer.css';


function FooterPage() {
  const navigate = useNavigate();

  return (
    <div className="footer-page">
      {/* Encabezado */}
      <header className="header">
        <h1>CardioXplore3D</h1>
        <p>Conozca más sobre CardioXplore3D</p>
        <button className="header-button">
          Click aquí para conocer más sobre nosotros
        </button>
      </header>

      {/* Bienvenida y presentación */}
      <section className="section intro-section">
        <div className="intro-block">
          <div className="intro-text left-text">
            <h2>Bienvenido a CardioXplore3D</h2>
            <h4>
              Salud Cardiovascular en 3D: Aprende Sobre las Enfermedades del Corazón.
            </h4>
            <p>
              Bienvenido a nuestra plataforma interactiva 
              desarrollada por estudiantes de la Universidad del Valle, 
              como parte de la clase de Proyecto Integrador. Nuestro objetivo es
              proporcionar información detallada sobre las enfermedades del 
              corazón, sus síntomas y cuidados, utilizando tecnología 3D para una
              experiencia visual e inmersiva.
            </p>
          </div>
          <img
            src=""
            alt="Dolor en el pecho"
            className="intro-image"
          />
        </div>

        <div className="intro-block">
          <img
            src=""
            alt="Corazón con arterias"
            className="intro-image"
          />
          <div className="intro-text right-text">
            <p>
              Este es un modelo 3D del corazón humano. 
              Aquí puedes observar cómo funciona y explorarlo 
              desde cualquier ángulo. Si tienes alguna duda, 
              puedes consultar las descripciones en nuestra página.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="section contact">
        <h2 className="contact-title">Contact me</h2>
        <p className="contact-subtitle">Este contacto es para una consulta más personalizada</p>
        <form className="contact-form">
          <div className="name-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <textarea placeholder="Your message" rows="4"></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>

      {/* Botón de emergencia */}
      <section className="section emergency">
        <button className="emergency-button">
          BOTÓN PARA LLAMADA DE EMERGENCIA
        </button>
        <p className="emergency-text">
          Solo pulsa este botón si necesitas información urgente.
        </p>
      </section>

      {/* Botón de regreso */}
      <footer className="back-footer">
        <button onClick={() => navigate('/')}>
          Volver al Inicio
        </button>
      </footer>
    </div>
  );
}

export default FooterPage; 