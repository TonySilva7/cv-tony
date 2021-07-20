import React, { useLayoutEffect, useState } from 'react';
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
				myOpacity={myOpacity}
				myMarginTop={myMarginTop}
				myScale={myScale}>
				<div>
					<img src={Img} alt='Imagem do Tony' />
				</div>
				<main>
					<div></div>
					<article>
						<p>
							Sou graduado em Análise e Desenvolvimento de Sistemas e graduado
							também em Marketing. Embora tenha trabalhado muitos anos na área
							de educação musical.
						</p>
						<p>
							Sou apaixonado por conhecimento, tecnologia e inovação, por isso
							há quase 4 anos decidi mudar completamente de profissão e explorar
							essa área que tem crescido bastante nos últimos anos — tecnologia.
						</p>
						<p>
							Aprendi a cultivar bons relacionamentos e respeitar as pessoas,
							valorizando-as pelo ser humano que são. Trabalho em equipe e me
							adapto bem às rápidas mudanças, “mergulho de cabeça” em tudo o que
							faço. Em menos de um minutinho de leitura você encontrará mais
							detalhes abaixo. Aguardo seu contato e ótima leitura!
						</p>
					</article>
				</main>
			</WrapSection>
		</WrapContainer>
	);
}
export default About;
