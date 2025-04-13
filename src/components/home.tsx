import React from "react";
import "../style.css";
import 'boxicons/css/boxicons.min.css';

const Home = () => {
    return (
        <section className="home" id="home">
            <div className="home-info">
                <h1>Diego Santos</h1>
                <h2>Frontend Developer</h2>
                <p>Olá! 👋 Sou Diego Santos, estudante do 6º semestre de Análise e Desenvolvimento de Sistemas no IFNMG.
                    🚀 Apaixonado por tecnologia...</p>
                <div className="btn-sci">
                    <a href="https://drive.google.com/file/d/1Y4mzNiebI169DR34hh9YUoonzExcVvqN/view?usp=sharing" className="btn">Download CV</a>
                    <div className="sci">
                        <a href="https://github.com/Diegodevops26"><i className='bx bxl-github bx-tada'></i></a>
                        <a href="https://www.instagram.com/diego_santos.dev/"><i className='bx bxl-instagram bx-tada'></i></a>
                        <a href="https://twitter.com/DiegoSantosDev"><i className='bx bxl-twitter bx-tada'></i></a>
                        <a href="https://www.linkedin.com/in/diego-santos-83b109157/"><i className='bx bxl-linkedin bx-tada'></i> </a>
                    </div>
                </div>
            </div>
            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        <img src="../../public/63413446.jpg" alt="Minha imagem"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
