import React from "react";
import Mail from "./Mail";
import ImgPhone from "./icon-phone.png";
import ImgMail from "./icon-envelope.png";

function Contact() {

	return (
		<>

			<div className="about-content" id="contact">
				<h1 className="container-title">CONTATO</h1>
				<section className="container-description container-form-email">
					<h1> Envie-me uma mensagem </h1>
					<div className="container-contact">
						<span className="contact-content">
							<img src={ImgPhone} alt="Imagem do perfil" className="icon-contact"/>
							<h4>Tel. | Wpp</h4>
							<article>
								<p><strong>(61)</strong> 9 8283 - 4615</p>
							</article>
						</span>

						<span className="contact-content">
							<img src={ImgMail} alt="Imagem do perfil" className="icon-contact"/>
							<h4>Email</h4>
							<article>
								<p>tony.deve7oper@gmail.com</p>
							</article>
						</span>
					</div>

					<Mail/>

				</section>
			</div>
		</>
	)
}

export default Contact;