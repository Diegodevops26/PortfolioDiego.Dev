import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../style.css";

const Contact = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formRef.current) {
            emailjs
                .sendForm(
                    "service_dnayrrk", // ID do seu serviço
                    "template_372kv8e", // ID do seu template
                    formRef.current,
                    "IHNv_we_TZuXaXcU2" // sua public key
                )
                .then(
                    () => {
                        alert("Mensagem enviada com sucesso!");
                        formRef.current?.reset();
                    },
                    (error) => {
                        console.error("Erro ao enviar:", error.text);
                        alert("Ocorreu um erro ao enviar. Tente novamente.");
                    }
                );
        }
    };

    return (
        <section className="contato" id="contato">
            <h2>Entre em Contato</h2>
            <form ref={formRef} onSubmit={sendEmail}>
                <input type="text" name="user_name" placeholder="Seu Nome" required />
                <input type="email" name="user_email" placeholder="Seu E-mail" required />
                <textarea name="message" placeholder="Sua Mensagem" required></textarea>
                <button type="submit" className="btn">Enviar</button>
            </form>
        </section>
    );

};

export default Contact;
