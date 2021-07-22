import { Link } from 'react-router-dom';
import { Link as LRS } from 'react-scroll';
import styled from 'styled-components';

export const NavContainer = styled.nav<{ justify: string }>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: ${(props) => `${props.justify}`};
	position: fixed;

	height: 70px;
	width: 100%;
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
				fill: url(#my-red-gradient);
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
	@media screen and (max-device-width: 480px) {
		.menu-container {
			margin: 0;
			display: none;
		}
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

// export const Active = styled.div`
// 	color: var(--primary-color);
// 	position: absolute;
// 	z-index: -100;
// `;

// export const afterOpen = 'after-open';
// export const Active = styled(LRS).attrs({
// 	activeClass: afterOpen,
// })`
// 	.${afterOpen} {
// 		border-bottom: solid 1px yellowgreen;
// 	}
// `;
