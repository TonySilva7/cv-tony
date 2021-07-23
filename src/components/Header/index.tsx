import React from 'react';
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import RedGradient, { GrayGradient } from '../../styles/gradientSvg';
import { LinkScroll, LinkTo, NavContainer } from './styles';
import './styles.css';

function NavProfile() {
	const location = useLocation();
	const isHome: boolean = location.pathname === '/';

	return (
		<NavContainer justify={isHome ? 'center' : 'space-between'}>
			{isHome ? (
				<a
					href='https://wa.me/5581993235866?text=Oi...'
					target='_blank'
					rel='noreferrer'
				>
					<FaWhatsapp size={28} />
					<strong>(81) 9 9323 - 5866</strong>
				</a>
			) : (
				<>
					<LinkTo to='/'>
						<picture>
							<RedGradient />
							<GrayGradient />
							<FaHome size={32} />
							{/* <img src={ImgHome} alt='imagem' /> */}
						</picture>
					</LinkTo>
					<ul>
						<li>
							<LinkScroll
								activeClass='active'
								to='about'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
							>
								SOBRE
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								activeClass='active'
								to='experience'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
							>
								EXPERIÊNCIA
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								activeClass='active'
								to='formation'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
							>
								FORMAÇÃO
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								activeClass='active'
								to='skills'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
							>
								HABILIDADES
							</LinkScroll>
						</li>
						<li>
							<LinkScroll
								activeClass='active'
								to='contact'
								spy={true}
								smooth={true}
								offset={-70}
								duration={1000}
							>
								CONTATO
							</LinkScroll>
						</li>
					</ul>
				</>
			)}
			{/* <Active ref={divRef} /> */}
		</NavContainer>
	);
}

export default NavProfile;
