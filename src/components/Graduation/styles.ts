import styled from 'styled-components';
// import '../../styles/gradientSvg.svg';

export const WrapContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-top: 70px;

	& > h1 {
		text-align: justify;
		color: var(--primary-color);
		font-size: 1.5em;
	}

	& > a {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 2rem;
		height: 44px;
		width: 177px;
		transition: var(--slow-animate);

		span {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 30%;
			height: 100%;
			border-radius: 7px 0 0 7px;
			background: var(--gradient-gray);

			svg {
				stroke: var(--primary-color);
				height: 1.7rem;
				width: 1.7rem;
				transition: var(--slow-animate);
				path {
					transition: var(--slow-animate);
				}
			}
		}

		h1 {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 0.9rem;
			background: var(--degrade);
			border-radius: 0 7px 7px 0;
			color: var(--light-color);
			padding: 0 7px;
			height: 100%;
			width: 70%;
		}

		&:hover {
			transform: scale(1.1);

			span {
				svg {
					transform: scale(1.2);
					path {
						stroke: var(--secondary-color);
						fill: #c3505090;
					}
				}
			}
		}
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
	align-items: center;
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
		margin-block-start: 0em;

		li {
			padding-bottom: 0.2rem;
			strong {
				margin-right: 7px;

				span {
					color: var(--primary-color);
				}
			}
		}
	}
`;
