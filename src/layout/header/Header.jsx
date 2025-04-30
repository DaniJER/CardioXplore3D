import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className={`custom-header ${isHome ? "transparent-header" : ""}`}>
      <div className="logo-container">
        <Link to="/">
          <img
            src="/img/Logo.png"
            alt="Logo de CardioXplore3D"
            className="logo"
          />
        </Link>
      </div>

      <nav className="nav-menu">
        <a onClick={() => navigate("/")}>Inicio</a>
        <a onClick={() => navigate("/enfermedades")}>Enfermedades</a>
        <a onClick={() => navigate("/quiz")}>Quiz</a>
        <a onClick={() => navigate("/nosotros")}>Nosotros</a>
        <button className="login-button" onClick={() => navigate("/login")}>
          Login
        </button>
      </nav>
    </header>
  );
}

export default Header;
