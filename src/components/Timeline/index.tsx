import React from 'react';
import { WrapCircle, WrapLine, WrapTimeLine } from './styles';

interface contentCircle {
	content: string;
	rotate: number;
}

export function Circle(params: contentCircle) {
	return (
		<WrapCircle myRotate={params.rotate}>
			<div></div>
			<div>
				<h1>{params.content}</h1>
			</div>
		</WrapCircle>
	);
}

export function Line(/*params:type*/) {
	return <WrapLine />;
}

export default function Timeline(/*info: dataCard*/) {
	return (
		<WrapTimeLine>
			<Line />
			<Circle content='2021' rotate={98} />
			<Circle content='2018' rotate={-98} />
			<Circle content='2011' rotate={98} />
		</WrapTimeLine>
	);
}
