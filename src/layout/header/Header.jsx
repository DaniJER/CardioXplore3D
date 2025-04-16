import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/" end>
                    inicio
                </NavLink>
                <NavLink to="quiz" end>
                    Quiz
                </NavLink>
            </nav>
        </header>
        
    );
};

export default Header;  