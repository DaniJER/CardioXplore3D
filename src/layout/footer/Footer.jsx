import './Footer.css';

function FooterPage() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand">
          <h3>CardioXplore3D</h3>
        </div>

        <div className="footer-column">
          <h4>Secciones</h4>
          <ul>
            <li>Inicio</li>
            <li>Enfermedades</li>
            <li>Quiz</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Soporte</h4>
          <ul>
            <li>Contacto</li>
            <li>Ayuda</li>
            <li>Términos</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Redes</h4>
          <ul>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

    </footer>
  );
}

export default FooterPage;
