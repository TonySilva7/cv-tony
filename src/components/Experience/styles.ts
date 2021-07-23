import styled from 'styled-components';

export const WrapExp = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;
	width: 100%;

	& > h1 {
		text-align: justify;
		color: var(--primary-color);
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

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
		& > div {
			display: flex;
			flex-direction: column;
			align-items: center;
			position: relative;

			& > aside {
				/* position: absolute; */
				z-index: 1;
			}

			& > aside:first-child {
				& > section:first-child {
					margin-top: 5rem;
				}

				& > section:last-child {
					margin-top: 0;
				}
			}

			& > aside:last-child {
				& > section:last-child {
					margin-top: 0;
				}
			}
		}
	}
	// -------- Tablets ----------------
	@media screen and (min-width: 768px) and (max-width: 1023) {
	}
`;
