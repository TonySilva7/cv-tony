import { useLayoutEffect, useState } from 'react';
import Img from '../../assets/img/profile2.png';
import { WrapContainer, WrapSection } from './styles';

function About() {
	const [myOpacity, setMyOpacity] = useState<number>(0);
	const [myMarginTop, setMarginTop] = useState<number>(-200);
	const [myScale, setMyScale] = useState<number>(0.5);

	useLayoutEffect(() => {
		setMyOpacity(100);
		setMarginTop(12);
		setMyScale(1);
	}, []);

	return (
		<WrapContainer id='about'>
			<h1>SOBRE</h1>
			<WrapSection
				myOpacity={ myOpacity }
				myMarginTop={ myMarginTop }
				myScale={ myScale }>
				<div>
					<img src={ Img } alt='Imagem do Tony' />
				</div>
				<main>
					<div></div>
					<article>
						<p>
							Olá! Me chamo Tony, sou formado em Análise e Desenvolvimento de Sistemas e com um MBA em Engenharia de Software pela renomada Universidade Tecnológica Federal do Paraná.
						</p>
						<p>
							Com experiência sólida em tecnologias front-end como ReactJS, NextJS, TypeScript, JS, Redux, entre outros, crio experiências digitais excepcionais, garantindo a compatibilidade e acessibilidade em diferentes dispositivos.
						</p>
						<p>
							Minha abordagem se baseia em metodologias ágeis, facilitando a colaboração em equipe e liderança quando necessário. Tenho habilidades em integração e entrega contínua, garantindo a qualidade do software em todos os estágios.
						</p>
						<p>
							Minhas habilidades vão além do front-end, pois atuo também no back-end e desenvolvimento mobile. Acredito também na importância das relações interpessoais no ambiente profissional, valorizando a colaboração e o respeito mútuo. Mantenho-me atualizado com as últimas tendências para trazer inovação aos projetos.
						</p>
						<p>
						Seja para um projeto desafiador ou para discutir ideias inovadoras, estou ansioso para trocar experiências e contribuir. Entre em contato e vamos construir algo incrível juntos. Até breve!"
						</p>
					</article>
				</main>
			</WrapSection>
		</WrapContainer>
	);
}
export default About;
