import React from "react";
import "../style.css";

const Services = () => {
    return (
        <section className="servicos" id="servicos">
            <h2>Meus Serviços</h2>
            <div className="servicos-grid">
                <div className="servico">
                    <i className='bx bx-code-alt'></i>
                    <h3>Desenvolvimento Web</h3>
                    <p>Criação de sites responsivos...</p>
                </div>
                <div className="servico">
                    <i className='bx bx-paint'></i>
                    <h3>UI/UX Design</h3>
                    <p>Desenvolvimento de interfaces...</p>
                </div>
                <div className="servico">
                    <i className='bx bx-server'></i>
                    <h3>Back-end</h3>
                    <p>Desenvolvimento de APIs...</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
