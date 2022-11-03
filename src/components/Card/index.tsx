import { useRef } from 'react';
import { Container } from './styles';

interface dataCard {
	company: string;
	period: string;
	position: string;
	desc: string[];
	employer?: string;
	arrow?: boolean;
	opacity: number;
	margin: number;
	scale: number;
	id: string;
}

export default function Card(info: dataCard) {
	const sectionRef = useRef<HTMLMetaElement>(null);

	return (
		<Container
			ref={ sectionRef }
			opacity={ info.opacity }
			scale={ info.scale }
			margin={ info.margin }
			id={ info.id }
		>
			{ info.arrow && <span></span> }
			<bdo></bdo>
			<div>
				<header>
					<h1>Empresa:</h1>
					<h2>{ info.company }</h2>
				</header>
				<footer>
					<em>{ info.period }</em>
					<p>
						<strong>Cargo:</strong>
						{ info.position }
					</p>
					<div>
						<strong>Responsabilidades: </strong>
						<ul>
							{ info.desc.map((elem) => (
								<li key={ elem }>
									<strong>&rsaquo;</strong> { elem }
								</li>
							)) }
						</ul>
					</div>
					{/* <p>
						<strong>Empregador:</strong>
						{ info.employer }
					</p> */}
				</footer>
			</div>
			{ !info.arrow && <span></span> }
		</Container>
	);
}
