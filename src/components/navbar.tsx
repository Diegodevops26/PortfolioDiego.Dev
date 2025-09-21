import React, { useState } from "react";
import "../style.css";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a href="#" className="logo">Diego.Dev</a>

            {/* Ícone do menu hambúrguer */}
            <div
                className={`hamburger ${isMenuOpen ? "active" : ""}`}
                id="hamburger-menu"
                onClick={toggleMenu}
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            {/* Menu de navegação */}
            <ul className={isMenuOpen ? "show-mobile-menu" : ""}>
                <li className="active"><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#sobre" onClick={toggleMenu}>Sobre</a></li>
                <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
                <li><a href="#servicos" onClick={toggleMenu}>Serviços</a></li>
                <li><a href="#contato" onClick={toggleMenu}>Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
