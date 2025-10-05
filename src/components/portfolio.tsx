import React from "react";
import "../style.css";

// --- DADOS DOS PROJETOS ---
// Manter os dados aqui facilita a adição de novos projetos no futuro.
const projectData = [
    {
        image: "/Painel Controle.png",
        alt: "Preview do SistemaAgro 1.0",
        title: "SistemaAgro 1.0",
        description: "Sistema desenvolvido para a gestão de recursos agrícolas no município de Novo Oriente de Minas, utilizando Node.js, React.js e MySQL.",
        githubUrl: "https://github.com/Diegodevops26/Sistema-Integrado-de-Gest-o-para-Secretaria-de-Agricultura",
    },
    {
        image: "/aluroni.png",
        alt: "Preview do projeto Aluroni",
        title: "Aluroni",
        description: "Desenvolvimento de um cardápio digital para o restaurante fictício Aluroni, focando em componentização e boas práticas com React e TypeScript.",
        githubUrl: "https://github.com/Diegodevops26/Aluroni",
    },
    {
        image: "/paises do mundo.png",
        alt: "Preview do projeto Países do Mundo",
        title: "Países do Mundo",
        description: "Exibe uma lista de países com bandeiras e nomes. Ao clicar, mostra detalhes em uma nova rota. Projeto construído com Next.js para explorar rotas dinâmicas.",
        githubUrl: "https://github.com/Diegodevops26/mp-lista-de-paises-next",
    },
    // Adicione mais projetos aqui no futuro!
    // {
    //     image: "/imagem-novo-projeto.png",
    //     alt: "Descrição da imagem",
    //     title: "Novo Projeto",
    //     description: "Descrição do novo projeto.",
    //     githubUrl: "https://github.com/seu-usuario/seu-repo",
    // }
];

const Portfolio = () => {
    return (
        <section className="portfolio" id="portfolio">
            <div className="portfolio-header">
                <h2>Meu Portfólio</h2>
                <p>Aqui estão alguns dos projetos em que trabalhei recentemente.</p>
            </div>
            <div className="portfolio-grid">
                {/* Mapeia o array de dados para renderizar cada card de projeto */}
                {projectData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <img src={project.image} alt={project.alt} className="project-image" />
                        </div>
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <a
                                href={project.githubUrl}
                                className="btn-github"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ver no GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
