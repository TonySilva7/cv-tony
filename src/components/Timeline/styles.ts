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

export const WrapCircle = styled.span<{ rotate: number; scale: number }>`
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

		transform: rotate(${(props) => `${props.rotate}deg`})
			scale(${(props) => props.scale}); //<<<<
		/* transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28); */
		transition: var(--slow-animate);

		top: 0;
		width: 70px;
		height: 70px;
		border-radius: 50%;
		border: 5px solid var(--primary-color);
		border-bottom-color: transparent;
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
		background-color: var(--primary-color);

		transition: var(--slow-animate);
		transform: scale(${(props) => props.scale}); // <<<<<;

		h1 {
			font-size: 1.3rem;
			color: var(--light-color);
		}
	}
`;

export const WrapLine = styled.div<{ height: number }>`
	display: flex;
	position: absolute;
	transition: all 1s cubic-bezier(0.18, 0.89, 0.32, 1.28);

	/* height: 100%; */
	height: ${(props) => `${props.height}%`};
	width: 7px;
	background: linear-gradient(262deg, #f5f5f5 0%, #656565);
`;
