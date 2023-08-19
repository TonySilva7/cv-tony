import { useLayoutEffect, useState } from 'react';
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

	const arpia = {
		company: 'ARPIA Tecnologia',
		period: 'Outubro de 2021 - Emprego atual',
		position: 'Analista/Desenvolvedor sênior',
		desc: ['Desenvolvimento de Sistemas/APIs', 'Sustentação de Aplicações'],
		arrow: true,
	};

	const devLife = {
		company: 'DEVLIFE/Freelancer',
		period: 'Novembro de 2018 - Agosto de 2021',
		position: 'Frontend/Backend Developer',
		desc: [
			'Desenvolvimento de WebApps,',
			'WebDesigner.',
		],
		arrow: true,
	};

	const faama = {
		company: 'COODESH',
		period: 'Setembro de 2021',
		position: 'Frontend Developer',
		desc: [
			'Desenvolvimento de sistemas web.',
		],
		arrow: true,
	};

	return (
		<WrapExp id='experience' >
			<h1>EXPERIÊNCIA</h1>
			<div id='divider' />
			<div>
				<aside>
					{/* Antigo DevLife */ }
					<Card
						company={ arpia.company }
						period={ arpia.period }
						position={ arpia.position }
						desc={ arpia.desc }
						opacity={ opcDL }
						margin={ mrgDL }
						scale={ sclDL }
						id='devLife'
					/>

					<Card
						company={ faama.company }
						period={ faama.period }
						position={ faama.position }
						desc={ faama.desc }
						arrow
						opacity={ opcIT }
						margin={ mrgIT }
						scale={ sclIT }
						id='iatai'
					/>

					<Card
						company={ devLife.company }
						period={ devLife.period }
						position={ devLife.position }
						desc={ devLife.desc }

						opacity={ opcFA }
						margin={ mrgFA }
						scale={ sclFA }
						id='faama'
					/>
				</aside>

				<Timeline
					rotateDL={ rotateDL }
					rotateFA={ rotateFA }
					rotateIT={ rotateIT }
					scaleDL={ sclDL }
					scaleFA={ sclFA }
					scaleIT={ sclIT }
					lineHeight={ lineHeight }
				/>
			</div>
		</WrapExp>
	);
}

export default Experience;
