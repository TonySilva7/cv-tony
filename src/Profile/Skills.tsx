import React from "react";
import ImgFront from './icon-frontend.png';
import ImgBack from './icon-backend.png';
import ImgWeb from './icon-webdesign.png';
import ImgVideo from './icon-makemove.png';
import ImgAudio from './icon-audioedition.png';
import ImgScrum from './icon-scrum.png';
import ImgGit from './icon-git.png';
import ImgLang from './icon-language.png';

function Skills() {

	return (
		<>
		<div className="about-content" id="skills">
			<h1 className="container-title">HABILIDADES</h1>

			<section className="container-description cont-desc-skill cont-desc-skill-mob">
				<span className="skill-container">
					<img src={ImgFront} alt="Imagem do perfil" className="icon-skill"/>
					<h3>FRONT END</h3>
					<article>
						<p><strong>HTML & CSS</strong>: (FlexBox, Grid) </p>
						<p><strong>JavaScript</strong></p>
						<p><strong>Bootstrap</strong></p>
						<p><strong>JQuery</strong></p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgBack} alt="Imagem do perfil" className="icon-skill"/>
					<h3>BACK END</h3>
					<article>
						<p><strong>UML</strong></p>
						<p><strong>Java</strong> | Spring Boot </p>
						<p><strong>Node</strong> | Angular </p>
						<p><strong>PHP</strong> | Symfony </p>
						<p><strong>MySQL</strong></p>
						<p><strong>PostgreSQL</strong></p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgWeb} alt="Imagem do perfil" className="icon-skill"/>
					<h3>WEB DESIGN</h3>
					<article>
						<p><strong>Photoshop</strong>: Adobe </p>
						<p><strong>Ilustrator</strong>: Adobe </p>
						<p><strong>Figma</strong></p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgGit} alt="Imagem do perfil" className="icon-skill"/>
					<h3>GIT</h3>
					<article>
						<p><strong>Git Hub</strong></p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgScrum} alt="Imagem do perfil" className="icon-skill"/>
					<h3>AGILE METHOD.</h3>
					<article>
						<p><strong>Scrum</strong></p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgLang} alt="Imagem do perfil" className="icon-skill"/>
					<h3>IDIOMAS</h3>
					<article>
						<p><strong>Inglês</strong>: intermediário</p>
						<p><strong>Espanhol</strong>: intermediário</p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgVideo} alt="Imagem do perfil" className="icon-skill"/>
					<h3>MAKE MOVIE</h3>
					<article>
						<p><strong>Premiere</strong>: Adobe </p>
						<p><strong>Final Cut</strong>: Apple </p>
						<p><strong>After Effects</strong>: Adobe </p>
						<p><strong>Motion</strong>: Apple </p>
						<p><strong>Cinema 4d</strong></p>
					</article>
				</span>

				<span className="skill-container">
					<img src={ImgAudio} alt="Imagem do perfil" className="icon-skill"/>
					<h3>AUDIO EDITION</h3>
					<article>
						<p><strong>Pro Tools</strong></p>
						<p><strong>Logic</strong>: Apple </p>
						<p><strong>Audition</strong>: Adobe</p>
					</article>
				</span>

			</section>

		</div>
		</>
	)
}
export default Skills;