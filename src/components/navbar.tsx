import React from "react";
import "../style.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="logo">Diego.Dev</a>
            <ul>
                <li className="active"><a href="#home">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
