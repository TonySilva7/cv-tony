import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';
import { FooterContainer, IconContainer } from './styles';

function Footer() {
	const location = useLocation();

	const isProfile: boolean = location.pathname === '/profile';

	return (
		<FooterContainer myPosition={isProfile ? 'relative' : 'fixed'}>
			<div>
				By Tony |{' '}
				<a href='mailto:tony.deve7oper@email.com?subject=Contato&body=Seu texto aqui...'>
					tony.deve7oper@gmail.com
				</a>
			</div>
			<IconContainer myDisplay={isProfile ? 'flex' : 'none'}>
				<a href='https://www.linkedin.com/in/tony-sz-silva' target='_new'>
					<FaLinkedinIn size={24} />
				</a>
				<a href='https://github.com/TonySilva7' target='_new'>
					<FaGithub size={24} />
				</a>
			</IconContainer>
		</FooterContainer>
	);
}

export default Footer;
