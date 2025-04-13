import React from "react";
import "../style.css";

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <h2>Meu Portfólio</h2>
            <div className="portfolio-grid">
                <div className="projeto">
                    <img src="/Painel%20Controle.png" alt="SistemaAgro 1.0" />
                    <h3>SistemaAgro 1.0</h3>
                    <p>
                        Sistema desenvolvido para a gestão de recursos agrícolas no município de Novo Oriente de Minas,
                        utilizando Node.js, React.js e MySQL.
                    </p>
                    <a
                        href="https://github.com/Diegodevops26/Sistema-Integrado-de-Gest-o-para-Secretaria-de-Agricultura"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver no GitHub
                    </a>
                </div>

                <div className="projeto">
                    <img src="/aluroni.png" alt="Aluroni" />
                    <h3>Aluroni</h3>
                    <p>
                        Desenvolvimento de um sistema de gestão de conteúdo para a plataforma de cursos online Aluroni,
                        com React.js e Firebase.
                    </p>
                    <a
                        href="https://github.com/Diegodevops26/Aluroni"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver no GitHub
                    </a>
                </div>

                <div className="projeto">
                    <img src="/paises%20do%20mundo.png" alt="Países do Mundo" />
                    <h3>Países do Mundo</h3>
                    <p>
                        Exibe uma lista de países com bandeiras e nomes. Ao clicar, mostra detalhes em uma nova rota.
                    </p>
                    <a
                        href="https://github.com/Diegodevops26/mp-lista-de-paises-next"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver no GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
