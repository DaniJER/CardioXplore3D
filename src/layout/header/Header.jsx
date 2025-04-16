import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/" end>
                    inicio
                </NavLink>
                <NavLink to="/quiz" end>
                    Quiz
                </NavLink>
                <NavLink to="/enfermedades" end>
                    Enfermedades
                </NavLink>
                <NavLink to="/login" end>
                    Login
                </NavLink>
            </nav>
        </header>

    );
};

export default Header;  