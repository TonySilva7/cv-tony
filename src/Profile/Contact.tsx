import React from 'react';
import ImgMail from './icon-envelope.png';
import ImgPhone from './icon-phone.png';
import Mail from './Mail';

function Contact() {
	return (
		<>
			<div className='about-content' id='contact'>
				<h1 className='container-title'>CONTATO</h1>
				<section className='container-description container-form-email'>
					<h1> Envie-me uma mensagem </h1>
					<div className='container-contact'>
						<span className='contact-content'>
							<img
								src={ImgPhone}
								alt='Imagem do perfil'
								className='icon-contact'
							/>
							<h4>Tel. | Wpp</h4>
							<article>
								<a href='tel:(81)99323-5866'>
									<strong>(81)</strong> 9 9323 - 5866
								</a>
							</article>
						</span>

						<span className='contact-content'>
							<img
								src={ImgMail}
								alt='Imagem do perfil'
								className='icon-contact'
							/>
							<h4>Email</h4>
							<article>
								<a href='mailto:tony.deve7oper@gmail.com?subject=Recrutamento&body=Opaaa, escreva seu texto aqui...'>
									tony.deve7oper@gmail.com
								</a>
							</article>
						</span>
					</div>

					<Mail />
				</section>
			</div>
		</>
	);
}

export default Contact;
