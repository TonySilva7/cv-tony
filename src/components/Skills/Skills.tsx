import React, { ReactChild, ReactChildren, useEffect, useState } from 'react';
import {
	FaClipboardList,
	FaDatabase,
	FaLanguage,
	FaLaptopCode,
	FaPalette,
	FaServer,
	FaSitemap,
	FaToolbox,
} from 'react-icons/fa';
import { GrayGradient } from '../../styles/gradientSvg';
import { ContentCards, WrapCards, WrapSkills } from './styles';

const frontend = {
	title: 'FRONT END',
	desc: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
};

const backend = {
	title: 'BACK END',
	desc: ['Java', 'Node', 'PHP', 'UML'],
};

const dataBases = {
	title: 'DATA BASES',
	desc: ['MySQL', 'PostgresSQL', 'MongoDB'],
};

const webDesign = {
	title: 'WEB DESIGN',
	desc: ['Figma', 'Photoshop', 'Ilustrator'],
};

const language = {
	title: 'IDIOMAS',
	desc: ['Inglês (intermediário)', 'Espanhol (intermediário)'],
};

const methodos = {
	title: 'PADRÕES E MÉTODOS',
	desc: ['POO', 'Prog. Funcional', 'SOLID', 'SCRUM'],
};

const frameworks = {
	title: 'FRAMEWORKS',
	desc: ['SpringBoot', 'ReactJS', 'NextJS', 'Symfony', 'Bootstrap'],
};

const others = {
	title: 'OUTROS',
	desc: [
		'Git & GitHub',
		'Docker & Docker Compose',
		'Redux & Redux Saga',
		'Firebase',
		'Styled Components',
	],
};
interface DataCards {
	children: ReactChild | ReactChildren;
	title: string;
	desc: string[];
	opacScale: number;
	delay: number;
}

const Cards = ({ ...props }: DataCards) => {
	return (
		<ContentCards opacScale={props.opacScale} delay={props.delay}>
			<h1>{props.title}</h1>

			<GrayGradient />
			{props.children}

			<ul>
				{props.desc.map((elem) => (
					<li key={elem}>
						<strong>&rsaquo;</strong> {elem}
					</li>
				))}
			</ul>
		</ContentCards>
	);
};

interface PropsSkills {
	isSkillsTop: boolean;
}

function Skills(props: PropsSkills) {
	const [opacScale, setOpacScale] = useState<number>(0);

	useEffect(() => {
		if (props.isSkillsTop) {
			setOpacScale(1);
		}
	}, [props.isSkillsTop]);

	return (
		<WrapSkills id='skills'>
			<h1>HABILIDADES</h1>

			<WrapCards id='cards-skills'>
				<Cards title={frontend.title} desc={frontend.desc} opacScale={opacScale} delay={0}>
					<FaLaptopCode size={50} />
				</Cards>

				<Cards title={backend.title} desc={backend.desc} opacScale={opacScale} delay={250}>
					<FaServer size={45} />
				</Cards>

				<Cards
					title={frameworks.title}
					desc={frameworks.desc}
					opacScale={opacScale}
					delay={250 * 2}
				>
					<FaToolbox size={50} />
				</Cards>

				<Cards title={others.title} desc={others.desc} opacScale={opacScale} delay={250 * 3}>
					<FaClipboardList size={50} />
				</Cards>

				<Cards title={dataBases.title} desc={dataBases.desc} opacScale={opacScale} delay={250 * 4}>
					<FaDatabase size={50} />
				</Cards>

				<Cards title={webDesign.title} desc={webDesign.desc} opacScale={opacScale} delay={250 * 5}>
					<FaPalette size={50} />
				</Cards>

				<Cards title={methodos.title} desc={methodos.desc} opacScale={opacScale} delay={250 * 6}>
					<FaSitemap size={50} />
				</Cards>

				<Cards title={language.title} desc={language.desc} opacScale={opacScale} delay={250 * 7}>
					<FaLanguage size={50} />
				</Cards>
			</WrapCards>
		</WrapSkills>
	);
}

export default Skills;
