import { ReactChild, ReactChildren, useEffect, useState } from 'react';
import { BiCode, BiRocket } from 'react-icons/bi';
import { BsStack } from 'react-icons/bs';
import { DiJavascript1 } from 'react-icons/di';
import {
	FaClipboardList,
	FaCode, FaDatabase,
	FaLanguage,
	FaLaptopCode,
	FaObjectGroup,
	FaPalette,
	FaServer,
	FaSitemap,
	FaToolbox
} from 'react-icons/fa';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { SiAdobe, SiAmazonaws, SiAntdesign, SiBitbucket, SiChakraui, SiCss3, SiDart, SiDocker, SiExpress, SiFastapi, SiFigma, SiFirebase, SiFlutter, SiGit, SiGithub, SiGitlab, SiGoogletranslate, SiHtml5, SiJirasoftware, SiMariadb, SiMaterialui, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiRedux, SiReduxsaga, SiTrello, SiTypescript } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { GrayGradient } from '../../styles/gradientSvg';
import { ContentCards, WrapCards, WrapSkills } from './styles';

const frontend = {
	title: 'FRONT END',
	desc: ['JavaScript', 'TypeScript', 'Dart', 'Redux', 'StyledComponents', 'Material-UI', 'Chakra-UI', 'Ant Design', 'HTML', 'CSS'],
};

const backend = {
	title: 'BACK END',
	desc: ['Python', 'FastAPI', 'Node', 'Express', 'Docker', 'Docker Compose', 'AWS', 'UML', 'Keycloak'],
};

const dataBases = {
	title: 'DATA BASES',
	desc: ['MySQL', 'MariaDB', 'PostgresSQL', 'MongoDB'],
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
	desc: ['POO', 'Prog. Funcional', 'SOLID', 'SCRUM', 'Clean Code', 'TDD', 'Design Patterns'],
};

const frameworks = {
	title: 'FRAMEWORKS',
	desc: ['FastAPI', 'Express', 'ReactJS', 'NextJS', 'Flutter'],
};

const others = {
	title: 'OUTROS',
	desc: [
		'Git',
		'GitHub',
		'GitLab',
		'BitBucket',
		'Jira',
		'Trello',
		'Redux + Saga',
		'Firebase',
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
	const setLogByLang = (lang: string) => {
		switch (lang) {
			case 'JavaScript':
				return <DiJavascript1 size={ 22 } color='yellow' />;
			case 'TypeScript':
				return <SiTypescript size={ 20 } color='#3178c6' />;
			case 'Dart':
				return <SiDart size={ 20 } color='#2cb7f6' />;
			case 'Redux':
				return <SiRedux size={ 20 } color='#ba8fff' />;
			case 'StyledComponents':
				// return <SiStyledcomponents size={ 24 } color='#f3ca63' />;
				// make return unicode this emoji: 
				return <span style={ { fontSize: '1.2rem', margin: '0 0.5rem 0 0' } } role='img' aria-label='Styled Components'>💅</span>;
			case 'Material-UI':
				return <SiMaterialui size={ 20 } color='#0081cb' />;
			case 'Chakra-UI':
				return <SiChakraui size={ 20 } color='#319795' />;
			case 'Ant Design':
				return <SiAntdesign size={ 20 } color='#1890ff' />;
			case 'HTML':
				return <SiHtml5 size={ 20 } color='#f06529' />;
			case 'CSS':
				return <SiCss3 size={ 20 } color='#2965f1' />;
			case 'Python':
				return <SiPython size={ 20 } color='yellow' />;
			case 'FastAPI':
				return <SiFastapi size={ 20 } color='#00c7b7' />;
			case 'Node':
				return <SiNodedotjs size={ 20 } color='#3c873a' />;
			case 'Express':
				return <SiExpress size={ 20 } color='#000' />;
			case 'Docker':
				return <SiDocker size={ 20 } color='#2496ed' />;
			case 'Docker Compose':
				return <SiDocker size={ 20 } color='#2496ed' />;
			case 'AWS':
				return <SiAmazonaws size={ 20 } color='#ff9900' />;
			case 'UML':
				return <FaSitemap size={ 20 } color='#0081cb' />;
			case 'Keycloak':
				return <BiCode size={ 20 } color='#0081cb' />;
			case 'ReactJS':
				return <SiReact size={ 20 } color='#61dafb' />;
			case 'NextJS':
				return <SiNextdotjs size={ 20 } color='#000' />;
			case 'Flutter':
				return <SiFlutter size={ 20 } color='#2cb7f6' />;
			case 'Git':
				return <SiGit size={ 20 } color='#f05032' />;
			case 'GitHub':
				return <SiGithub size={ 20 } color='#8b76f2' />;
			case 'GitLab':
				return <SiGitlab size={ 20 } color='#fca326' />;
			case 'BitBucket':
				return <SiBitbucket size={ 20 } color='#0052cc' />;
			case 'Redux + Saga':
				return <SiReduxsaga size={ 20 } color='#ba8fff' />;
			case 'Firebase':
				return <SiFirebase size={ 20 } color='#ffca28' />;
			case 'Jira':
				return <SiJirasoftware size={ 20 } color='#0052cc' />;
			case 'Trello':
				return <SiTrello size={ 20 } color='#0079bf' />;
			case 'MySQL':
				return <SiMysql size={ 20 } color='#00758f' />;
			case 'MariaDB':
				return <SiMariadb size={ 20 } color='grey' />;
			case 'PostgresSQL':
				return <SiPostgresql size={ 20 } color='#336791' />;
			case 'MongoDB':
				return <SiMongodb size={ 20 } color='#47a248' />;
			case 'Figma':
				return <SiFigma size={ 20 } color='#f24e1e' />;
			case 'Photoshop':
				return <SiAdobe size={ 20 } color='#31a8ff' />;
			case 'Ilustrator':
				return <SiAdobe size={ 20 } color='#ff9a00' />;
			case 'POO':
				return <FaObjectGroup size={ 20 } color='#3178c6' />;
			case 'Prog. Funcional':
				return <FaCode size={ 20 } color='#3178c6' />;
			case 'SOLID':
				return <BsStack size={ 20 } color='#3178c6' />;
			case 'SCRUM':
				return <BiRocket size={ 20 } color='#3178c6' />;
			case 'Clean Code':
				return <MdOutlineCleaningServices size={ 20 } color='#3178c6' />;
			case 'TDD':
				return <VscTasklist size={ 20 } color='#3178c6' />;
			case 'Design Patterns':
				return <BsStack size={ 20 } color='#3178c6' />;
			case 'Inglês (intermediário)':
				return <SiGoogletranslate size={ 20 } color='#3178c6' />;
			case 'Espanhol (intermediário)':
				return <SiGoogletranslate size={ 20 } color='#3178c6' />;


			default:
				break;
		}
	}

	return (
		<ContentCards opacScale={ props.opacScale } delay={ props.delay }>
			<h1>{ props.title }</h1>

			<GrayGradient />
			{ props.children }

			<ul>
				{ props.desc.map((elem) => (
					<li key={ elem }>
						<strong>&rsaquo;</strong>
						{ setLogByLang(elem) }
						{ elem }
					</li>
				)) }
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
				<Cards title={ frontend.title } desc={ frontend.desc } opacScale={ opacScale } delay={ 0 }>
					<FaLaptopCode size={ 50 } />
				</Cards>

				<Cards title={ backend.title } desc={ backend.desc } opacScale={ opacScale } delay={ 250 }>
					<FaServer size={ 45 } />
				</Cards>

				<Cards
					title={ frameworks.title }
					desc={ frameworks.desc }
					opacScale={ opacScale }
					delay={ 250 * 2 }
				>
					<FaToolbox size={ 50 } />
				</Cards>

				<Cards title={ others.title } desc={ others.desc } opacScale={ opacScale } delay={ 250 * 3 }>
					<FaClipboardList size={ 50 } />
				</Cards>

				<Cards title={ dataBases.title } desc={ dataBases.desc } opacScale={ opacScale } delay={ 250 * 4 }>
					<FaDatabase size={ 50 } />
				</Cards>

				<Cards title={ webDesign.title } desc={ webDesign.desc } opacScale={ opacScale } delay={ 250 * 5 }>
					<FaPalette size={ 50 } />
				</Cards>

				<Cards title={ methodos.title } desc={ methodos.desc } opacScale={ opacScale } delay={ 250 * 6 }>
					<FaSitemap size={ 50 } />
				</Cards>

				<Cards title={ language.title } desc={ language.desc } opacScale={ opacScale } delay={ 250 * 7 }>
					<FaLanguage size={ 50 } />
				</Cards>
			</WrapCards>
		</WrapSkills>
	);
}

export default Skills;
