import React, { useLayoutEffect, useState } from 'react';
import Card from '../Card';
import Timeline from '../Timeline';
import { WrapExp } from './styles';

interface propsTop {
	isFaamaTop: boolean;
	isIataiTop: boolean;
	isDevLifeTop: boolean;
}

function Experience(props: propsTop) {
	const [lineHeight, setTLine] = useState<number>(0);

	const [rotateDL, setRotateDL] = useState<number>(-98);
	const [rotateFA, setRotateFA] = useState<number>(98);
	const [rotateIT, setRotateIT] = useState<number>(-98);

	const [opcDL, setOpcDL] = useState<number>(0);
	const [mrgDL, setMrgDL] = useState<number>(100);
	const [sclDL, setSclDL] = useState<number>(0);

	const [opcFA, setMyOpcFA] = useState<number>(0);
	const [mrgFA, setMrgFA] = useState<number>(-100);
	const [sclFA, setSclFA] = useState<number>(0);

	const [opcIT, setMyOpcIT] = useState<number>(0);
	const [mrgIT, setMrgIT] = useState<number>(100);
	const [sclIT, setSclIT] = useState<number>(0);

	//.......................................
	const myHeight: number = window.screen.height;
	const topWindow = Math.round(myHeight / 1.2);

	useLayoutEffect(() => {
		if (props.isDevLifeTop) {
			setOpcDL(100);
			setMrgDL(0);
			setSclDL(1);

			setRotateDL(98);
			setTLine(33.33);
		}
		if (props.isFaamaTop) {
			setMyOpcFA(100);
			setMrgFA(0);
			setSclFA(1);

			setRotateFA(-98);
			setTLine(33.33 * 2);
		}
		if (props.isIataiTop) {
			setMyOpcIT(100);
			setMrgIT(0);
			setSclIT(1);

			setRotateIT(98);
			setTLine(33.33 * 3);
		}
	}, [props.isDevLifeTop, props.isFaamaTop, props.isIataiTop, topWindow]);
	//.......................................

	const devLife = {
		company: 'DEVLIFE/Freelancer',
		period: 'Fevereiro de 2019 - Julho 2021',
		position: 'Developer',
		desc: [
			'Desenvolvimento de WebApps,',
			'Desenvolvimento de API’s Rest,',
			'WebDesigner.',
		],
		employer: 'Freelancer/DevLife - Recife',
		arrow: true,
	};

	const faama = {
		company: 'FACULDADE ADV. DA AMAZÔNIA',
		period: 'Agosto de 2011 - Agosto de 2018',
		position: 'Diretor da Escola de Música | Auxiliar de Marketing',
		desc: [
			'Assistente de marketing no primeiro ano, cooperando na manutenção do site, na dinâmica das redes sociais.',
			'Administrar a escola de música, reger o coral universitário, coordenar as aulas, atividades e eventos,',
		],
		employer: 'Valdmiro Laurindo - Belém',
		arrow: true,
	};

	const college = {
		company: 'COLÉGIO ADVENTISTA',
		period: 'Fevereiro 2007 - junho de 2011',
		position: 'Marketing',
		desc: [
			'Fidelizar alunos e conquistar novos,',
			'Gerenciar o relacionamento dos alunos com a instituição,',
			'Promoção de eventos, administração do site, redes sociais,',
		],
		employer: 'Rozivaldo Neto - Uruará',
		arrow: true,
	};

	return (
		<WrapExp id='experience'>
			<h1>EXPERIÊNCIA</h1>
			<div>
				<aside>
					<Card
						company={devLife.company}
						period={devLife.period}
						position={devLife.position}
						desc={devLife.desc}
						employer={devLife.employer}
						opacity={opcDL}
						margin={mrgDL}
						scale={sclDL}
						id='devLife'
					/>
					<Card
						company={faama.company}
						period={faama.period}
						position={faama.position}
						desc={faama.desc}
						employer={faama.employer}
						arrow
						opacity={opcFA}
						margin={mrgFA}
						scale={sclFA}
						id='faama'
					/>
					<Card
						company={college.company}
						period={college.period}
						position={college.position}
						desc={college.desc}
						employer={college.employer}
						opacity={opcIT}
						margin={mrgIT}
						scale={sclIT}
						id='iatai'
					/>
				</aside>

				<Timeline
					rotateDL={rotateDL}
					rotateFA={rotateFA}
					rotateIT={rotateIT}
					scaleDL={sclDL}
					scaleFA={sclFA}
					scaleIT={sclIT}
					lineHeight={lineHeight}
				/>
			</div>
		</WrapExp>
	);
}

export default Experience;
