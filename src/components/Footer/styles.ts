import styled from 'styled-components';

export const FooterContainer = styled.footer<{ myPosition: string }>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	bottom: 0;
	position: ${(props) => `${props.myPosition}`};
	padding-top: 15px;
	padding-bottom: 15px;
	height: 50px;
	background-color: var(--light-color);
	font-weight: normal;
	font-size: 12px;
	line-height: 16px;
	text-align: center;
	color: #3c3f41;
	width: 100%;
	z-index: 2;

	div > a {
		color: var(--primary-color);
	}
`;

export const IconContainer = styled.div<{ myDisplay: string }>`
	margin-top: 10px;
	display: ${(props) => `${props.myDisplay}`};
	justify-content: center;
	margin-right: 5px;

	& > a > svg {
		padding: 0 5px;
	}
`;
