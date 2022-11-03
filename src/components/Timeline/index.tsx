import { WrapCircle, WrapLine, WrapTimeLine } from './styles';

interface contentTimeLine {
	rotateDL: number;
	rotateFA: number;
	rotateIT: number;
	scaleDL: number;
	scaleFA: number;
	scaleIT: number;
	lineHeight: number;
}
interface contentCircle {
	content: string;
	rotate: number;
	scale: number;
}

export function Circle({ ...props }: contentCircle) {
	return (
		<WrapCircle rotate={ props.rotate } scale={ props.scale }>
			<div></div>
			<div>
				<h1>{ props.content }</h1>
			</div>
		</WrapCircle>
	);
}

export function Line({ ...props }) {
	return <WrapLine height={ props.lineHeight } />;
}

export default function Timeline({ ...props }: contentTimeLine) {
	return (
		<WrapTimeLine>
			<Line lineHeight={ props.lineHeight } />

			<Circle content='2021' rotate={ props.rotateDL } scale={ props.scaleDL } />
			<Circle content='2021' rotate={ props.rotateIT } scale={ props.scaleIT } />
			<Circle content='2018' rotate={ props.rotateFA } scale={ props.scaleFA } />
		</WrapTimeLine>
	);
}
