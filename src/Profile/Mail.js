import React from "react";
import emailjs from "emailjs-com";
import {mailToken} from "../api";


function Mail() {

    let thanksMail = ""

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_gmail', 'cv-template', e.target, `${mailToken}`)
            .then((result) => {
                console.log(result.text);
                if(result.text === "ok") {
                    thanksMail =  "Mensagem enviada!";
                } else {
                    thanksMail = "Algo deu errado!"
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div className="container">
            <form onSubmit={sendEmail}>
                <label htmlFor="name"> Nome: </label>
                <input type="text" id="name" name="name" placeholder="Seu nome..."/>

                <label htmlFor="email"> E-mail: </label>
                <input type="text" id="email" name="email" placeholder="Seu email..."/>

                <label htmlFor="subject"> Título: </label>
                <input type="text" id="subject" name="subject" placeholder="Assunto..."/>

                <label htmlFor="message"> Mensagem: </label>
                <textarea id="message" name="message" placeholder="Escreva aqui sua mensagem..." className="textArea"></textarea>

                <input type="submit" value="Enviar"/>
            </form>
            <h4>{`${thanksMail}`}</h4>
        </div>
    );
}

export default Mail;