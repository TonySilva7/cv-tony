import styled from 'styled-components';

export const WrapContainer = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export const WrapPresentation = styled.div<{
	myMargin: number;
	myOpacity: number;
}>`
	transition: all 800ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
	margin-right: ${(props) => `${props.myMargin}px`};
	opacity: ${(props) => `${props.myOpacity}%`};

	h1 {
		font-weight: bold;
		font-size: 55px;
		line-height: 58px;
		letter-spacing: -0.015em;
		color: var(--light-color);
		margin-bottom: 40px;
	}

	h3 {
		font-weight: normal;
		font-size: 24px;
		line-height: 33px;
		letter-spacing: -0.015em;
		color: rgb(154, 154, 154);
		margin-bottom: 30px;
		margin-right: 30px;
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		transition: all 500ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

		border-radius: 50px;
		height: 50px;
		width: 150px;
		font-weight: bold;
		font-size: 24px;
		color: #ffffff;
		margin-bottom: 50px;
		cursor: pointer;
		background: linear-gradient(
			196deg,
			rgb(218 92 92) 0%,
			rgba(170, 67, 67, 1) 100%
		);

		&::before {
			display: flex;
			align-items: center;
			justify-content: center;

			position: absolute;
			content: 'Claro!';

			font-weight: bold;
			font-size: 24px;
			color: rgba(170, 67, 67, 1);

			width: 0px;
			height: 50px;
			top: 0px;
			left: 0px;
			opacity: 0;

			border-radius: 50px;
			border-radius: 50px;
			background: linear-gradient(
				196deg,
				rgb(244, 244, 244) 0%,
				rgba(154, 154, 154, 1) 100%
			);
			transition: all 300ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
		}

		&:hover::before {
			width: 100%;
			opacity: 100%;
		}
	}
`;

export const WrapPicture = styled.picture<{ myOpacity: number }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: center;

	transition: all 800ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
	opacity: ${(props) => `${props.myOpacity}%`};

	img {
		height: 20rem;
		width: 20rem;
		border: 2px solid var(--primary-color);
		border-radius: 100%;
		box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);
		/* display: inline-block; */
	}

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 5rem;
		height: auto;
		margin-top: 7px;

		a > svg {
			height: 2rem;
			width: 2rem;
			fill: #c35050;
			transition: all 0.2s cubic-bezier(0.28, 1.01, 0.59, 1.66);
		}

		a:first-child > svg {
			&:hover {
				transform: rotate(10deg) scale(1.2);
				fill: var(--light-color);
			}
		}

		a:last-child > svg {
			&:hover {
				transform: rotate(-10deg) scale(1.2);
				fill: var(--light-color);
			}
		}
	}
`;
