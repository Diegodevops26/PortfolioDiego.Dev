import React from "react";
import "../style.css";

// Dados dos serviços centralizados para fácil manutenção
const servicesData = [
    {
        iconClass: 'bx bx-code-alt',
        title: 'Desenvolvimento Web',
        description: 'Criação de sites e aplicações web responsivas e otimizadas, utilizando as tecnologias mais modernas do mercado para garantir performance e uma ótima experiência ao usuário.'
    },
    {
        iconClass: 'bx bx-paint',
        title: 'UI/UX Design',
        description: 'Desenho de interfaces intuitivas e atraentes, focadas na jornada do usuário. Crio protótipos e wireframes que resolvem problemas reais e encantam os clientes.'
    },
    {
        iconClass: 'bx bxl-nodejs', // Ícone mais específico para back-end (exemplo com Node.js)
        title: 'Desenvolvimento Back-end',
        description: 'Construção da lógica de servidor, APIs RESTful e gerenciamento de bancos de dados. Garanto sistemas robustos, seguros e escaláveis para suportar sua aplicação.'
    }
];

const Services = () => {
    return (
        <section className="servicos" id="servicos">
            <div className="service-header">
                <h2>Meus Serviços</h2>
                <p>Soluções que eu ofereço para transformar suas ideias em realidade.</p>
            </div>
            <div className="servicos-grid">
                {/* Mapeia o array de dados para renderizar cada card de serviço */}
                {servicesData.map((service, index) => (
                    <div className="service-card" key={index}>
                        <i className={`service-icon ${service.iconClass}`}></i>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
