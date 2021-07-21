import styled from 'styled-components';

export const WrapExp = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	width: 100%;

	& > h1 {
		text-align: justify;
		color: #f66a55;
		transition: all 300ms ease;
	}

	& > div {
		display: flex;
		border-top: solid 1px #444;
		padding-top: 20px;

		& > aside:first-child {
			& > section:first-child {
				/* transition: var(--slow-animate); */
			}

			& > section:last-child {
				margin-top: 365px;

				/* transition: var(--slow-animate); */
			}
		}

		& > aside:last-child {
			& > section:last-child {
				margin-top: 350px;

				/* transition: var(--slow-animate); */
			}
		}
	}
`;
