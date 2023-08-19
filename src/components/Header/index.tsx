import React, { useEffect, useState } from 'react';
import { FaHome, FaWhatsapp } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import RedGradient, { GrayGradient } from '../../styles/gradientSvg';
import { HamburgerMenu, LinkScroll, LinkTo, NavContainer } from './styles';
import './styles.css';

function NavProfile() {
	const location = useLocation();
	const isHome: boolean = location.pathname === '/';

	const [isChecked, setIsChecked] = useState<boolean>(false);
	const [width, seWidth] = useState<number>(4);
	const [height, setHeight] = useState<number>(8);

	useEffect(() => {
		function kkk() {
			if (isChecked) {
				seWidth(18);
				setHeight(100);
				console.log('clicou');
			} else {
				seWidth(4);
				setHeight(8);
			}
		}

		kkk();
	}, [isChecked]);

	function handleCheck() {
		setIsChecked(!isChecked);
	}

	return (
		<NavContainer
			justify={isHome ? 'center' : 'space-between'}
			display={isChecked ? 'flex' : 'none'}
			width={width}
			height={height}
			isClicked={isChecked}
			onClick={handleCheck}
		>
			{isHome ? (
				<a href='https://wa.me/5543988631067?text=Oi Tony, vi seu CV...' target='_blank' rel='noreferrer'>
					<FaWhatsapp size={28} />
					<strong>(43) 9 8863 - 1067</strong>
				</a>
			) : (
				<>
					<HamburgerMenu isClicked={isChecked}>
						<div>
							<span></span>
							<span></span>
							<span></span>
						</div>
					</HamburgerMenu>

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
