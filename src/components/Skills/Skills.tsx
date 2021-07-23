import React, { ReactChild, ReactChildren, useEffect, useState } from 'react';
import {
	FaCodeBranch,
	FaDatabase,
	FaLanguage,
	FaLaptopCode,
	FaPalette,
	FaServer,
	FaTachometerAlt,
	FaToolbox,
} from 'react-icons/fa';
import { GrayGradient } from '../../styles/gradientSvg';
import { ContentCards, WrapCards, WrapSkills } from './styles';

const frontend = {
	title: 'FRONT END',
	desc: ['HTML & CSS', 'TypeScript', 'JavaScript'],
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

const git = {
	title: 'VERSIONAMENTO',
	desc: ['GIT', 'GitHub'],
};

const language = {
	title: 'IDIOMAS',
	desc: ['Inglês (intermediário)', 'Espanhol (intermediário)'],
};

const methodos = {
	title: 'MÉTODOS ÁGEIS',
	desc: ['SCRUM'],
};

const frameworks = {
	title: 'FRAMEWORKS',
	desc: ['SpringBoot', 'ReactJS', 'Express', 'Symfony', 'Bootstrap'],
};
interface dataCards {
	children: ReactChild | ReactChildren;
	title: string;
	desc: string[];
	opacScale: number;
	delay: number;
}

const Cards = ({ ...props }: dataCards) => {
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

interface propsSkills {
	isSkillsTop: boolean;
}

function Skills(props: propsSkills) {
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
				<Cards
					title={frontend.title}
					desc={frontend.desc}
					opacScale={opacScale}
					delay={0}
				>
					<FaLaptopCode size={50} />
				</Cards>
				<Cards
					title={backend.title}
					desc={backend.desc}
					opacScale={opacScale}
					delay={250}
				>
					<FaServer size={50} />
				</Cards>
				<Cards
					title={frameworks.title}
					desc={frameworks.desc}
					opacScale={opacScale}
					delay={250 * 2}
				>
					<FaToolbox size={50} />
				</Cards>
				<Cards
					title={dataBases.title}
					desc={dataBases.desc}
					opacScale={opacScale}
					delay={250 * 3}
				>
					<FaDatabase size={50} />
				</Cards>
				<Cards
					title={webDesign.title}
					desc={webDesign.desc}
					opacScale={opacScale}
					delay={250 * 4}
				>
					<FaPalette size={50} />
				</Cards>
				<Cards
					title={git.title}
					desc={git.desc}
					opacScale={opacScale}
					delay={250 * 5}
				>
					<FaCodeBranch size={50} />
				</Cards>
				<Cards
					title={methodos.title}
					desc={methodos.desc}
					opacScale={opacScale}
					delay={250 * 6}
				>
					<FaTachometerAlt size={50} />
				</Cards>
				<Cards
					title={language.title}
					desc={language.desc}
					opacScale={opacScale}
					delay={250 * 7}
				>
					<FaLanguage size={50} />
				</Cards>
			</WrapCards>
		</WrapSkills>
	);
}

export default Skills;
