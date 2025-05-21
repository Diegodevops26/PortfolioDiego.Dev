import React, { useState } from "react"; // Import useState hook
import "../style.css";

const Navbar = () => {
    // State to manage the mobile menu's open/closed status
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to toggle the menu state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <a href="#" className="logo">Diego.Dev</a>

            {/* Hamburger menu icon */}
            <div
                className={`hamburger ${isMenuOpen ? 'active' : ''}`} // Add 'active' class when menu is open
                id="hamburger-menu"
                onClick={toggleMenu} // Attach click handler
            >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <ul className={isMenuOpen ? 'show-mobile-menu' : ''}> {/* Add 'show-mobile-menu' class when open */}
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
