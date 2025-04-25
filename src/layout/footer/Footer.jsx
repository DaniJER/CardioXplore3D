import { useNavigate } from 'react-router-dom';
import './Footer.css';


function FooterPage() {
  const navigate = useNavigate();

  return (
    <div className="footer-page">
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