import { ReactChild, ReactChildren, useEffect, useState } from 'react';
import { FaChartLine, FaCode } from 'react-icons/fa';
import { IoCloudDownloadOutline } from 'react-icons/io5';
import { MdSchool } from 'react-icons/md';
import tonyCv from '../../assets/files/tonyCV.pdf';
import RedGradient from '../../styles/gradientSvg';
import { MediaContent, WrapContainer, WrapMedia } from './styles';

interface MediaProps {
	id: string;
	title: string;
	desc: string[];
	children: ReactChild | ReactChildren;
	opcScl: number;
	margin: number;
}

const school = {
	title: 'ENSINO MÉDIO',
	desc: ['Dairce Pedrosa Torres', 'Ensino Médio', 'Concluído'],
};
const marketing = {
	title: 'MARKETING',
	desc: ['UNINTER', 'Graduação', 'Formado'],
};
const dev = {
	title: 'ANAL. E DES. DE SISTEMAS',
	desc: ['UNINTER', 'Graduação', 'Formado'],
};
const mba = {
	title: 'MBA em ENGENHARIA DE SOFTWARE',
	desc: ['UTFPR', 'Pós-Graduação', 'Formando'],
};

//------------------------------------
function Courses(props: MediaProps) {
	return (
		<MediaContent id={ props.id } opcScl={ props.opcScl } margin={ props.margin }>
			{ props.children }

			<h1>{ props.title }</h1>

			<ul>
				<li>
					<strong>
						<span>&rsaquo;</span> Instituição:
					</strong>
					{ props.desc[0] }
				</li>

				<li>
					<strong>
						<span>&rsaquo;</span> Nível:
					</strong>
					{ props.desc[1] }
				</li>

				<li>
					<strong>
						<span>&rsaquo;</span> Status:
					</strong>
					{ props.desc[2] }
				</li>
			</ul>
		</MediaContent>
	);
}

// -------------------------------------

interface propsTop {
	isTop?: boolean;
}

function Graduation(props: propsTop) {
	const [opacScale, setOpacScale] = useState<number>(0);
	const [margin, setMargin] = useState<number>(500);

	useEffect(() => {
		if (props.isTop) {
			setOpacScale(1);
			setMargin(0);
		}
	}, [props.isTop]);

	return (
		<WrapContainer id='formation'>
			<h1>FORMAÇÃO</h1>
			<RedGradient />
			<WrapMedia>
				<Courses
					id='school'
					title={ school.title }
					desc={ school.desc }
					opcScl={ opacScale }
					margin={ -margin }
				>
					<MdSchool size={ 45 } />
				</Courses>

				<Courses
					id='marketing'
					title={ marketing.title }
					desc={ marketing.desc }
					opcScl={ opacScale }
					margin={ 0 }
				>
					<FaChartLine size={ 45 } />
				</Courses>

				<Courses
					id='dev'
					title={ dev.title }
					desc={ dev.desc }
					opcScl={ opacScale }
					margin={ margin }
				>
					<FaCode size={ 45 } />
				</Courses>

				<Courses
					id='mba'
					title={ mba.title }
					desc={ mba.desc }
					opcScl={ opacScale }
					margin={ margin }
				>
					<FaCode size={ 45 } />
				</Courses>

			</WrapMedia>
			<a
				href={ tonyCv }
				target='_blank'
				rel='noreferrer'
				className='btn-down'
				download='CV - José Antonio S da Silva.pdf'
			>
				<span>
					<IoCloudDownloadOutline size={ 24 } />
				</span>
				<h1>DOWNLOAD CV</h1>
			</a>
		</WrapContainer>
	);
}

export default Graduation;
