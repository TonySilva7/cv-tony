import emailjs from 'emailjs-com';
import { BaseSyntheticEvent, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { mailToken } from '../../api';
import { WrapContact, WrapForm } from './styles';

function SendMail() {
	async function sendEmail(event: BaseSyntheticEvent) {
		event.preventDefault();

		await emailjs
			.sendForm('service_gmail', 'cv-template', event.target, `${mailToken}`)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		event.target.reset();

		// document.getElementById('msg-email').innerHTML = 'Mensagem enviada :)';
	}

	return (
		<form onSubmit={ sendEmail }>
			<label htmlFor='name'> Nome: </label>
			<input type='text' id='name' name='name' placeholder='Nome...' />

			<label htmlFor='email'> E-mail: </label>
			<input type='mail' id='email' name='email' placeholder='Email...' />

			<label htmlFor='subject'> Título: </label>
			<input type='text' id='subject' name='subject' placeholder='Assunto...' />

			<label htmlFor='message'> Mensagem: </label>
			<textarea id='message' name='message' placeholder='Mensagem...' />

			<button type='submit'>Enviar</button>
		</form>
	);
}

interface propsTop {
	isContactTop: boolean;
}

function Contact(props: propsTop) {
	const [margin, setMargin] = useState<number>(250);
	const [opc, setOpc] = useState<number>(0);

	useEffect(() => {
		if (props.isContactTop) {
			setMargin(0);
			setOpc(1);
		}
	}, [props.isContactTop]);

	return (
		<WrapContact id='contact'>
			<h1>CONTATO</h1>
			<WrapForm id='contact-form' margin={ margin } opacity={ opc }>
				<address>
					<div>
						<a
							href='https://wa.me/5543988631067?text=Oi Tony, vi seu CV...'
							target='_blank'
							rel='noreferrer'
						>
							<FaWhatsapp size={ 30 } />
							<p><strong>(43)</strong> 9 8863 - 1067</p>
						</a>
					</div>

					<div>
						<a href='mailto:tony.deve7oper@gmail.com?subject=Recrutamento&body=Opaaa, Olá Tony,'>
							<IoMailOutline size={ 30 } />
							<p>tony.deve7oper@gmail.com</p>
						</a>
					</div>
				</address>

				<SendMail />
			</WrapForm>
		</WrapContact>
	);
}

export default Contact;
