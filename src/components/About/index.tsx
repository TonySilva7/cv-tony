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
							Sou graduado em Análise e Desenvolvimento de Sistemas,
							Marketing e atualmente concluindo MBA em Engenharia de Software pela UTFPR - Paraná.
							Atuo com desenvolvimento de sistemas web, mobile e API's.
						</p>
						<p>
							Sou apaixonado por conhecimento, tecnologia e inovação, por isso
							há muito tempo decidi mudar completamente de carreira, (sim, eu era professor de música em uma faculdade &#128512;) e explorar
							essa área que tem crescido exponencialmente nos últimos anos — tecnologia.
						</p>
						<p>
							Aprendi a cultivar bons relacionamentos e respeitar as pessoas,
							valorizando-as pelo ser humano que são. Trabalho muito bem em equipe e liderança, também sou capaz de me
							adaptar à rápidas mudanças e gosto de um bom desafio. Em menos de um minutinho de leitura você encontrará mais
							detalhes abaixo. Aguardo seu contato e até breve!
						</p>
					</article>
				</main>
			</WrapSection>
		</WrapContainer>
	);
}
export default About;
