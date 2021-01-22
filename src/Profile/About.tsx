import Img from "./perfil.png";
import React from "react";

function About() {

	return (
		<>
		<div className="about-content" id="sobre">
			<h1 className="container-title">SOBRE</h1>
			<section className="container-description">
				<div className="content-icon">
					<img src={Img} alt="Imagem do perfil"/>
				</div>
				<article className="content-article">
					<div className="triangulo-para-esquerda triangulo-para-esquerda-0"></div>
					<p className="description-text">
						Sempre tive garra para buscar a realização de meus objetivos.
						Com motivação, expandi meu conhecimento, minha experiência e
						cultivei relacionamentos sólidos, com respeito, bom humor e honestidade.
						Com a experiência que consegui e algumas habilidades, estou confiante nas ideias
						criativas e soluções de sucesso que eu trago para o meu trabalho, lançando mão
						da ética, trabalho em equipe e inovação. Explore meu site para ler mais informações
						sobre mim e entre em contato caso tenha qualquer dúvida.
					</p>
				</article>
			</section>
		</div>
		</>
	)
}
export default About;