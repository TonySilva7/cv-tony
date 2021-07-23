import styled from 'styled-components';

export const WrapSkills = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 70px;

	& > h1 {
		font-size: 1.5rem;
		color: var(--primary-color);
	}
`;

export const WrapCards = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	flex-wrap: wrap;

	border-top: solid 1px #444;
`;

export const ContentCards = styled.section<{
	opacScale: number;
	delay: number;
}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 15rem;

	transition: var(--slow-animate) ${(props) => props.delay}ms;
	transform: scale(${(props) => props.opacScale});

	margin-right: 1rem;

	& > h1 {
		color: var(--gray-color);
	}

	& > svg {
		fill: url(#my-red-gradient);
	}

	& > ul {
		padding-inline-start: 0px;
		margin-block-start: 0.7em;

		li {
			list-style: none;
			color: var(--light-color);
			padding-bottom: 0.2rem;

			strong {
				color: var(--primary-color);
				margin-right: 5px;
			}
		}
	}
`;
