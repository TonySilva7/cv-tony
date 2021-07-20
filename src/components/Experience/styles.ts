import styled from 'styled-components';

export const WrapExp = styled.article<{
	opcDL: number;
	mrgDL: number;
	sclDL: number;

	opcFA: number;
	mrgFA: number;
	sclFA: number;

	opcIT: number;
	mrgIT: number;
	sclIT: number;
}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	width: 100%;

	& > h1 {
		text-align: justify;
		color: #f66a55;
		transition: all 300ms ease;
	}

	& > div {
		display: flex;
		border-top: solid 1px #444;
		padding-top: 20px;

		& > aside:first-child {
			& > section:first-child {
				transition: var(--slow-animate);
				opacity: ${(props) => `${props.opcDL}%`};
				margin-right: ${(props) => `-${props.mrgDL}px`};
				transform: scaleY(${(props) => `${props.sclDL}`});
			}

			& > section:last-child {
				margin-top: 365px;

				transition: var(--slow-animate);
				opacity: ${(props) => `${props.opcIT}%`};
				margin-right: ${(props) => `-${props.mrgIT}px`};
				transform: scaleY(${(props) => `${props.sclIT}`});
			}
		}

		& > aside:last-child {
			& > section:last-child {
				margin-top: 350px;

				transition: var(--slow-animate);
				opacity: ${(props) => `${props.opcFA}%`};
				margin-right: ${(props) => `-${props.mrgFA}px`};
				transform: scaleY(${(props) => `${props.sclFA}`});
			}
		}
	}
`;
