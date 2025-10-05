import React, { useState, useEffect } from "react";
import "../style.css";
import 'boxicons/css/boxicons.min.css';

const Home = () => {
    // Lógica para o efeito de digitação
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const toRotate = ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Data Explorer'];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
        }
    }

    return (
        <section className="home" id="home">
            <div className="home-info">
                <h1>Diego Santos</h1>
                
                {/* O h2 agora renderiza o texto do nosso Hook */}
                <h2>{text}<span className="blinking-cursor">|</span></h2>

                <p>
                    Transformando ideias em realidade digital. Crio interfaces web modernas e responsivas que proporcionam experiências de usuário memoráveis.
                </p>

                <div className="btn-sci">
                    <a href="https://drive.google.com/file/d/1Y4mzNiebI169DR34hh9YUoonzExcVvqN/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">
                        Download CV <i className='bx bx-download'></i>
                    </a>
                    <div className="sci">
                        {/* Mantemos as melhorias nos ícones */}
                        <a href="https://github.com/Diegodevops26" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-github bx-tada-hover'></i>
                        </a>
                        <a href="https://www.instagram.com/diego_santos.dev/" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-instagram bx-tada-hover'></i>
                        </a>
                        <a href="https://twitter.com/DiegoSantosDev" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-twitter bx-tada-hover'></i>
                        </a>
                        <a href="https://www.linkedin.com/in/diego-santos-83b109157/" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-linkedin bx-tada-hover'></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="home-img">
                <div className="img-box">
                    <div className="img-item">
                        <img src="/DiegoDev.jpg" alt="Foto de Diego Santos em seu ambiente de trabalho" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
