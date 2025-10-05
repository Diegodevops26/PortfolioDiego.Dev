import React from "react";
import "../style.css";

const About = () => {
    return (
        <section className="about" id="sobre">
            <div className="about-header">
                <h2>Sobre Mim</h2>
            </div>
            <div className="about-container">
                <div className="about-image">
                    {/* ATENÇÃO: Coloque o nome da sua foto aqui */}
                    <img src="/DiegoDev.jpg" alt="Foto de Diego Santos" />
                </div>
                <div className="about-content">
                    <h3>Desenvolvedor Frontend Apaixonado por Dados e Soluções de Impacto</h3>
                    <p>
                        Olá! Sou Diego Santos, um desenvolvedor com foco no ecossistema Frontend moderno. Minha paixão é criar soluções escaláveis e de alto impacto que contribuam para a transformação digital, combinando código limpo com interfaces intuitivas.
                    </p>
                    <p>
                        Minha curiosidade me levou além do Frontend, participando ativamente de projetos de análise de dados com Python e buscando uma especialização em Arquitetura de Software. Acredito que a combinação dessas áreas me permite construir produtos mais robustos e inteligentes.
                    </p>
                    
                    <h4>Principais Tecnologias:</h4>
                    <div className="skills-list">
                        <span>React.js</span>
                        <span>TypeScript</span>
                        <span>Node.js</span>
                        <span>Python</span>
                        <span>SQL</span>
                        <span>Next.js</span>
                        <span>Git</span>
                        <span>Docker</span>
                    </div>

                    <a href="#contato" className="btn-primary">Vamos Conversar</a>
                </div>
            </div>
        </section>
    );
};

export default About;

