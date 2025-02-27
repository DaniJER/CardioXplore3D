import {NavLinks} from "./react-router";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <nav>
                <NavLinks to="/" end>
                    inicio
                </NavLinks>
                <NavLinks to="quiz" end>
                    Quiz
                </NavLinks>
            </nav>
        </header>
        
    );
};

export default Header;  