import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Img from '../assets/img/profile1.png';
import { WrapContainer, WrapPicture, WrapPresentation } from './styles';

function Home() {
	const [myMargin, setMyMargin] = useState<number>(-700);
	const [myOpacity, setMyOpacity] = useState<number>(0);

	setTimeout(() => {
		setMyMargin(0);
		setMyOpacity(100);
	}, 1);

	return (
		<WrapContainer>
			<WrapPresentation myMargin={myMargin} myOpacity={myOpacity}>
				<h1>
					Olá, <br /> Sou Tony! <br />
				</h1>

				<h3>
					Seja bem vindo! <br /> Vamos dar uma olhadinha <br /> no meu perfil!?
				</h3>

				<Link to='/profile' className='home-btn-profile'>
					Vamos?
				</Link>
			</WrapPresentation>

			<WrapPicture myOpacity={myOpacity}>
				<img src={Img} alt='imagem' />
				<div>
					<a href='https://www.linkedin.com/in/tony-sz-silva' target='_new'>
						<FaLinkedin />
					</a>
					<a href='https://github.com/TonySilva7' target='_new'>
						<FaGithub />
					</a>
				</div>
			</WrapPicture>
		</WrapContainer>
	);
}

export default Home;
