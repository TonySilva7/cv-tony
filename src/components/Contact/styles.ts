import styled from 'styled-components';

export const WrapContact = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;

	h1 {
		color: var(--primary-color);
	}
`;

export const WrapForm = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: inherit;
	padding-top: 2rem;

	border-top: solid 1px #444;

	address {
		/* border: solid 1px greenyellow; */

		display: flex;
		align-items: center;
		justify-content: space-around;
		width: 50%;
		margin-bottom: 1.2rem;

		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;

			svg {
				stroke: var(--primary-color);
				fill: var(--primary-color);
				margin-bottom: 5px;
			}

			a {
				color: var(--light-color);
				font-style: normal;
			}
		}
	}

	form {
		/* border: solid 1px greenyellow; */

		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		width: 50%;

		label {
			color: var(--gray-color);
			margin-bottom: 0.5rem;
			font-weight: bold;
		}

		input {
			box-sizing: border-box;
			font-size: 1rem;
			height: 2.5rem;
			width: 100%;
			margin-bottom: 1.1rem;
			border-radius: 5px;
			outline: none;
			border: none;
			padding: 0 0.7rem;
			color: #444;
			box-shadow: inset 2px 2px 8px 2px #2c34364a;

			&:focus {
				border: solid 1px var(--primary-color);
			}
		}

		textarea {
			box-sizing: border-box;
			height: 7rem;
			width: 100%;
			resize: none;
			padding: 0.7rem 0.7rem;
			margin-bottom: 1rem;
			font-family: 'Open Sans', sans-serif;
			font-size: 1.1rem;
			border-radius: 5px;
			box-shadow: inset 2px 2px 8px 2px #2c34364a;

			&:focus {
				border: solid 1px var(--primary-color);
				outline: none;
			}
		}

		button {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;

			border: none;
			border-radius: 50px;
			height: 50px;
			width: 140px;
			font-weight: bold;
			font-size: 1.3rem;
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
				font-size: 1.3rem;
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
	}
`;
