import styled from 'styled-components';

export const WrapContainer = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60px;

	h1 {
		text-align: justify;
		color: #f66a55;
	}
`;

export const WrapSection = styled.section<{
	myOpacity: number;
	myMarginTop: number;
	myScale: number;
}>`
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: center;
	padding: 10px 0;
	border-top: solid 1px #444;
	position: relative;
	height: auto;

	& > div {
		z-index: 1;
	}

	& > div > img {
		display: flex;
		height: 182px;
		width: 182px;

		border-radius: 50%;
		box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.45);
		border: solid 2px #f66a55;
	}

	& > main {
		display: flex;
		flex-direction: column;
		transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28);

		margin-top: ${(props) => `${props.myMarginTop}px`};
		transform: scaleX(${(props) => `${props.myScale}`});
		opacity: ${(props) => `${props.myOpacity}%`};

		align-items: center;
		justify-content: space-between;
		max-width: 90%;
		color: #e6e6e6;
		width: 600px;

		div {
			display: flex;
			position: relative;
			margin: 0 auto;
			width: 0;
			height: 0;

			border-left: 15px solid transparent;
			border-right: 15px solid transparent;
			border-bottom: 15px solid #f66a55;
		}

		article {
			display: block;

			line-height: 1.5;
			text-align: justify;
			padding: 0 16px;
			border-radius: 10px;
			box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.35);
			border: solid 1px #f66a55;
		}
	}
`;
