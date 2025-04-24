import { useNavigate } from 'react-router-dom';
import './Header.css';


function Header() {
  const navigate = useNavigate();

  return (
    <header className="custom-header">
      <div className="logo-container">
        <img
          src="/path-to-your-heart-logo.png"
          alt="Logo de CardioXplore3D"
          className="logo"
        />
      </div>
      <nav className="nav-menu">
        <a onClick={() => navigate('/')}>Inicio</a>
        <a onClick={() => navigate('/enfermedades')}>Enfermedades</a>
        <a onClick={() => navigate('/quiz')}>Quiz</a>
        <button className="login-button" onClick={() => navigate('/login')}>
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;  