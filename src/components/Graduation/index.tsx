import React, { ReactChild, ReactChildren } from 'react';
import { FaChartLine, FaCode, FaSchool } from 'react-icons/fa';
import tonyCv from '../../assets/files/tonyCV.pdf';
import RedGradient from '../../styles/gradientSvg';
import { MediaContent, WrapContainer, WrapMedia } from './styles';

interface MediaProps {
	title: string;
	desc: string[];
	children: ReactChild | ReactChildren;
}

const school = {
	title: 'ENSINO MÉDIO',
	desc: ['Dairce Pedrosa Torres', 'Ensino Médio', '1998, Dez'],
};
const marketing = {
	title: 'MARKETING',
	desc: ['UNINTER', 'Graduação', 'Nov, 2018'],
};
const dev = {
	title: 'ANAL. E DES. DE SISTEMAS',
	desc: ['UNINTER', 'Graduação', 'Ago, 2021'],
};

//------------------------------------
function Courses(props: MediaProps) {
	return (
		<MediaContent>
			{props.children}

			<h1>{props.title}</h1>

			<ul>
				<li>
					<strong>
						<span>&rsaquo;</span> Instituição:
					</strong>
					{props.desc[0]}
				</li>

				<li>
					<strong>
						<span>&rsaquo;</span> Nível:
					</strong>
					{props.desc[1]}
				</li>

				<li>
					<strong>
						<span>&rsaquo;</span> Conclusão:
					</strong>
					{props.desc[2]}
				</li>
			</ul>
		</MediaContent>
	);
}

// -------------------------------------
function Graduation() {
	return (
		<WrapContainer>
			<h1>FORMAÇÃO</h1>
			<RedGradient />
			<WrapMedia>
				<Courses title={school.title} desc={school.desc}>
					<FaSchool size={45} />
				</Courses>
				<Courses title={marketing.title} desc={marketing.desc}>
					<FaChartLine size={45} />
				</Courses>
				<Courses title={dev.title} desc={dev.desc}>
					<FaCode size={45} />
				</Courses>
			</WrapMedia>
			<a
				href={tonyCv}
				target='_blank'
				rel='noreferrer'
				className='btn-down'
				download='CV - José Antonio S da Silva.pdf'
			>
				DOWNLOAD CV
			</a>
		</WrapContainer>
	);
}

export default Graduation;
