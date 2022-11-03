import styled from 'styled-components';

export const WrapExp = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 70px;

	& > div[id='divider'] {
		display: flex;
		width: 100%;
		height: 0.1rem;
		background: #444;
		margin: 0  0 2rem 0;
	}

	& > h1 {
		text-align: justify;
		color: var(--primary-color);
	}

	& > div {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		min-width: 55rem;

		@media screen and (max-width: 767px) {
			width: 100%;
		}
		@media screen and (min-width: 768px) and (max-width: 1023px) {
			width: 100%;
		}
		@media screen and (min-width: 1024px) and (max-width: 1079px) {
			width: 82%;
		}
		@media screen and (min-width: 1080px) {
			width: 64%;
		}

		& > aside {
			display: flex;
			flex-direction: column;
			width: 100%;

			& > section {
				display: flex;
			}

			& > section:nth-of-type(1) {
				align-self: flex-start;
			}

			& > section:nth-of-type(2) {
				align-self: flex-end;
				margin-top: 7rem;
			}
			& > section:nth-of-type(3) {
				align-self: flex-start;
				margin-top: 7rem;
			}
		}
	}

	// -------- Tablets ----------------
	@media screen and (min-width: 768px) and (max-width: 1023px) {
		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;

			& > aside {
				padding: 0 12px;
				z-index: 1;
			}
		}
	}

	// -------- Mobile ----------------
	@media screen and (max-width: 767px) {
		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
			position: relative;

			& > aside {
				z-index: 1;
				padding: 0 12px;
			}

			& > aside {
				& > section:nth-of-type(1) {
					margin-top: 8rem;
					align-self: unset;
				}

				& > section:nth-of-type(2) {
					margin-top: 10rem;
					align-self: unset;
				}

				& > section:nth-of-type(3) {
					margin-top: 13rem;
					align-self: unset;
				}
			}
		}
	}
`;
