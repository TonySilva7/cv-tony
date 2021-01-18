import Img from "../Profile/perfil.png";
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
					<p className="description-text">
						O comportamento do D. n. minor provavelmente não diferiu muito do comportamento do emu do
						continente. As aves se reuniam em bandos para forragear e durante o período de reprodução.
						Alimentavam-se de frutas, grama e algas marinhas. Corriam rapidamente e se defendiam com chutes.
						O ninho era raso e feito com folhas mortas e musgo. Eram postos de sete a nove ovos, os quais
						eram incubados por ambos os pais.
					</p>
				</article>
			</section>
		</div>
		</>
	)
}
export default About;