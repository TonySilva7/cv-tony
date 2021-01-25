import Img from "./perfil.png";
import React from "react";

function About() {

	return (
		<>
		<div className="about-content" id="about">
			<h1 className="container-title">SOBRE</h1>
			<section className="container-description">
				<div className="content-icon">
					<img src={Img} alt="Imagem do perfil"/>
				</div>
				<article className="content-article">
					<div className="triangulo-para-esquerda triangulo-para-esquerda-0 triangulo-para-cima"></div>
					<div className="description-text">
						<p >
							Sou graduado em Análise e Desenvolvimento de Sistemas e graduado também em Marketing.
							Embora tenha trabalhado muitos anos na área de educação musical.
						</p>
						<p>
							Sou apaixonado por conhecimento, tecnologia e inovação, por isso há quase 4 anos
							decidi mudar completamente de profissão e explorar essa área que tem crescido
							bastante nos últimos anos — tecnologia.
						</p>
						<p>
							Aprendi a cultivar bons relacionamentos e respeitar as pessoas,
							valorizando-as pelo ser humano que são. Trabalho em equipe e
							me adapto bem às rápidas mudanças, “mergulho de cabeça” em tudo o que faço.
							Em menos de um minutinho de leitura você encontrará mais detalhes abaixo.
							Aguardo seu contato e ótima leitura!
						</p>
					</div>
				</article>
			</section>
		</div>
		</>
	)
}
export default About;