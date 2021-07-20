import styled from 'styled-components';

export const WrapTimeLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	height: 800px;
	position: relative;

	/* border: solid 1px greenyellow; // <<<<<<<<<<<<< */
`;

export const WrapCircle = styled.span<{ myRotate: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	margin-bottom: 20px;

	/* border: solid 1px #fff; */
	width: 75px;
	height: 75px;

	& > div:first-child {
		display: flex;
		position: absolute;
		top: 0;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		border: 5px solid #f66a55;
		border-bottom-color: transparent;
		transform: rotate(${(props) => `${props.myRotate}deg`}); // <<<<<
	}

	& > div:last-child {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		bottom: 5px;
		height: 60px;
		width: 60px;
		border-radius: 50%;
		background-color: #f66a55;

		h1 {
			font-size: 1.3rem;
			color: var(--light-color);
		}
	}
`;

export const WrapLine = styled.div`
	display: flex;
	position: absolute;
	height: 100%;
	width: 7px;
	background: linear-gradient(262deg, #f5f5f5 0%, #656565);
`;
