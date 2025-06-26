import './Footer.css';
import { useNavigate } from 'react-router-dom';

function FooterPage() {
  const navigate = useNavigate();

  return (
    // inicio footer
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column brand">
          <h3>
            <button className="home" onClick={() => navigate('/')}>CardioXplore3D</button>
          </h3>
        </div>

        <div className="footer-column">
          <h4>Secciones</h4>
          <ul>
            <li><button className="footer-link" onClick={() => navigate('/')}>Inicio</button></li>
            <li><button className="footer-link" onClick={() => navigate('/enfermedades')}>Enfermedades</button></li>
            <li><button className="footer-link" onClick={() => navigate('/quiz')}>Quiz</button></li>
            <li><button className="footer-link" onClick={() => navigate('/nosotros')}>Nosotros</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Soporte</h4>
          <ul>
            <li><button className="footer-link" onClick={() => navigate('/contacto')}>Contacto</button></li>
            <li><button className="footer-link" onClick={() => navigate('/ayuda')}>Ayuda</button></li>
            <li><button className="footer-link" onClick={() => navigate('/terminos')}>Términos</button></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Redes</h4>
          <ul>
            <li>
              <a className="footer-link" href="https://github.com/DaniJER/CardioXplore3D" target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
            <li>
              <a className="footer-link" href="https://github.com/DaniJER/CardioXplore3D" target="_blank" rel="noopener noreferrer">YouTube</a>
            </li>
            <li>
              <a className="footer-link" href="https://github.com/DaniJER/CardioXplore3D" target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    // fin footer
  );
}

export default FooterPage;
