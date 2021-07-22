import React, { ReactChild, ReactChildren } from 'react';
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
import { ContentCards, WrapCards, WrapContainer } from './styles';

interface dataCards {
	children: ReactChild | ReactChildren;
	title: string;
	desc: string[];
}

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

const Cards = ({ ...props }: dataCards) => {
	return (
		<ContentCards>
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

function Skills() {
	return (
		<WrapContainer id='skills'>
			<h1>HABILIDADES</h1>

			<WrapCards>
				<Cards title={frontend.title} desc={frontend.desc}>
					<FaLaptopCode size={50} />
				</Cards>
				<Cards title={backend.title} desc={backend.desc}>
					<FaServer size={50} />
				</Cards>
				<Cards title={frameworks.title} desc={frameworks.desc}>
					<FaToolbox size={50} />
				</Cards>
				<Cards title={dataBases.title} desc={dataBases.desc}>
					<FaDatabase size={50} />
				</Cards>
				<Cards title={webDesign.title} desc={webDesign.desc}>
					<FaPalette size={50} />
				</Cards>
				<Cards title={git.title} desc={git.desc}>
					<FaCodeBranch size={50} />
				</Cards>
				<Cards title={methodos.title} desc={methodos.desc}>
					<FaTachometerAlt size={50} />
				</Cards>
				<Cards title={language.title} desc={language.desc}>
					<FaLanguage size={50} />
				</Cards>
			</WrapCards>
		</WrapContainer>
	);
}

export default Skills;
