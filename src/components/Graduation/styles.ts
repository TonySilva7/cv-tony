import styled from 'styled-components';
// import '../../styles/gradientSvg.svg';

export const WrapContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin-top: 70px;

	& > h1 {
		text-align: justify;
		color: var(--primary-color);
		font-size: 1.5em;
	}
`;

export const WrapMedia = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border-top: solid 1px #444;
`;

export const MediaContent = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	margin-top: 20px;

	& > svg {
		fill: url(#my-red-gradient);
	}

	h1 {
		color: var(--gray-color);
	}

	ul {
		list-style: none;
		padding-inline-start: 0px;
		color: var(--light-color);

		li > strong {
			margin-right: 7px;

			span {
				color: var(--primary-color);
			}
		}
	}
`;
