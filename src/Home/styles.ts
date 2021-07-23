import styled from 'styled-components';

export const WrapContainer = styled.article`
	// -------- Computer ----------------
	display: flex;
	justify-content: center;
	align-items: center;

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
		flex-direction: column;
	}

	// -------- Tablets ----------------
	@media screen and (min-width: 768px) and (max-width: 1023) {
	}
`;

export const WrapPresentation = styled.div<{
	myMargin: number;
	myOpacity: number;
}>`
	// -------- Computer ----------------
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	transition: all 800ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
	transform: translateX(-${(props) => props.myMargin}px);
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
			transition: var(--fast-animate);
		}

		&:hover::before {
			width: 100%;
			opacity: 100%;
		}
	}

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
		align-items: center;
		justify-content: center;

		h1 {
			margin-top: 7rem;
			font-size: 2.5rem;
			line-height: 3rem;
			margin-bottom: 1rem;
		}

		h3 {
			margin-top: 0;
			text-align: center;
			line-height: 2rem;
		}
	}

	// -------- Tablets ----------------
	@media screen and (min-width: 768px) and (max-width: 1023) {
	}
`;

export const WrapPicture = styled.picture<{
	myMargin: number;
	myOpacity: number;
}>`
	// -------- Computer ----------------
	display: flex;
	flex-direction: column;
	align-items: center;
	align-self: center;

	transition: all 800ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
	opacity: ${(props) => `${props.myOpacity}%`};
	transform: translateX(${(props) => props.myMargin}px);

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
			transition: var(--fast-animate);
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

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
		align-items: center;
		justify-content: center;

		img {
			height: 60%;
			width: 60%;
		}

		div {
			margin-bottom: 8rem;
		}
	}

	// -------- Tablets ----------------
	@media screen and (min-width: 768px) and (max-width: 1023) {
	}
`;
