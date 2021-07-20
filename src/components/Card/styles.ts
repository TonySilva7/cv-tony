import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	align-items: flex-start;
	position: relative;

	& > div {
		width: 350px;
		/* border: solid 1px greenyellow; */

		header {
			border: solid 1.5px var(--light-color);
			width: 100%;

			box-sizing: border-box;
			padding: 0 10px;

			h1 {
				color: var(--gray-color);
				font-size: 1.2rem;
				line-height: 0.7;
				font-weight: normal;
			}

			h2 {
				line-height: 0.7;
				color: var(--light-color);
				font-size: 1.1rem;
			}
		}

		footer {
			box-sizing: border-box;
			color: var(--dark-color);
			background-color: var(--light-color);
			opacity: 90%;
			width: 100%;
			padding: 10px;
			border-radius: 0 0 10px 10px;

			p > strong {
				margin-right: 5px;
			}

			ul {
				padding-inline-start: 12px;
				li {
					list-style-type: none;

					strong {
						color: var(--primary-color);
					}
				}
			}
		}
	}

	& > span {
		border-top: 15px solid transparent;
		border-bottom: 15px solid transparent;
		display: block;
		margin-top: 20px;
	}

	& > span:first-child {
		border-right: 15px solid var(--light-color);
	}

	& > span:last-child {
		border-left: 15px solid var(--light-color);
	}
`;
