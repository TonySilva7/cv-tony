import { Link } from 'react-router-dom';
import { Link as LRS } from 'react-scroll';
import styled from 'styled-components';

export const NavContainer = styled.nav<{
	justify: string;
	display: string;
	width: number;
	height: number;
	isClicked: boolean;
}>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${(props) => props.justify};
	position: fixed;

	height: 70px;
	width: 100%;
	top: 0;
	background-color: rgba(40, 46, 49, 0.95);
	border-bottom: solid 1px rgba(246, 106, 85, 0.36);
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.2);

	opacity: 99%;
	z-index: 2;

	ul {
		display: flex;
		width: 31rem;
		justify-content: flex-end;
		margin-right: 40px;
	}

	ul > li {
		display: flex;
		align-items: center;
		justify-content: center;
		list-style: none;
		position: relative;
		height: 27px;
		padding: 0 7px;
		color: var(--light-color);
	}

	& > a:nth-of-type(1) {
		display: flex;
		align-self: center;
		transition: var(--slow-animate);
		color: var(--primary-color);

		& > picture {
			margin-left: 40px;
			svg {
				transition: all 600ms cubic-bezier(0.18, 0.89, 0.32, 1.28);
				fill: var(--secondary-color);
			}
			svg:hover {
				fill: url(#my-red-gradient-hover);
			}
		}

		&:hover {
			transform: scale(1.2);
			color: var(--light-color);
			& > svg {
				transform: rotate(-90deg);
			}
		}

		& > svg {
			margin-right: 10px;
			fill: #6ab982;
			transition: all 0.3s ease;
		}

		strong {
			margin-right: 7px;
		}
	}

	/********** RESPONSIVIDADE *****************/
	@media screen and (max-width: 767px) {
		flex-direction: column;
		height: ${(props) => props.height}vh;
		width: ${(props) => props.width}rem;
		background: rgba(250, 250, 250, 0.96);
		background: ${(props) => (props.isClicked ? 'rgba(250, 250, 250, 0.96)' : 'none')};
		align-self: flex-start;
		align-items: flex-start;
		justify-content: flex-start;
		border-radius: 0 7px 7px 0;
		overflow: hidden;
		transition: all 300ms ease;
		border-bottom: none;
		box-shadow: none;

		& > a:nth-of-type(1) {
			display: ${(props) => props.display};
			padding: 0;
			align-self: unset;
			margin-left: 1.6rem;
			margin-top: 1rem;

			svg {
				fill: #fff;
			}

			picture {
				margin: 0;
			}
		}

		ul {
			display: ${(props) => props.display};
			flex-direction: column;
			align-items: flex-start;
			padding: 0 1rem;
			width: 70%;
			margin: 0;
			margin-top: 1rem;

			li {
				color: #444;
			}
		}
	}
	@media screen and (min-width: 767px) and (max-width: 1023px) {
	}
`;

export const LinkScroll = styled(LRS)`
	/* margin-right: 20px; */
	cursor: pointer;
	/* border-bottom: solid 0 var(--primary-color); */
	transition: all 0.2s ease;

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0.1rem;
		background: var(--secondary-color);
		transition: all 0.3s ease;
	}

	&:hover::after {
		width: 77%;
		left: 12%;
	}
`;

export const LinkTo = styled(Link)`
	picture > img {
		height: 2rem;
		width: 2rem;
		margin-left: 40px;
	}
`;

export const HamburgerMenu = styled.div<{ isClicked: boolean }>`
	display: none;

	@media screen and (max-width: 767px) {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 50px;
		margin-top: 1rem;
		margin-left: 1rem;

		& > div {
			display: block;
			position: relative;

			height: 100%;
			width: 100%;

			& > span {
				display: flex;
				position: absolute;
				height: 5px;
				width: 33px;
				background-color: ${(props) => (props.isClicked ? '#444' : '#fff')};
				border-radius: 2px;
				margin-left: 0.4rem;
				transition: var(--fast-animate);
			}

			& > span:nth-child(1) {
				top: ${(props) => (props.isClicked ? 1.3 : 0.5)}rem;
				transform: rotate(${(props) => (props.isClicked ? -45 : 0)}deg);
			}

			& > span:nth-child(2) {
				top: 1.3rem;
				opacity: ${(props) => (props.isClicked ? 0 : 1)};
			}

			& > span:nth-child(3) {
				top: 2.1rem;
				top: 1.3rem;
				transform: rotate(45deg);
				top: ${(props) => (props.isClicked ? 1.3 : 2.1)}rem;
				transform: rotate(${(props) => (props.isClicked ? 45 : 0)}deg);
			}
		}
	}
`;
