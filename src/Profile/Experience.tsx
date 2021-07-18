import React from 'react';

function Experience() {
	return (
		<>
			<div className='about-content' id='experience'>
				<h1 className='container-title'>EXPERIÊNCIA</h1>
				<section className='container-description cont-desc-timeline'>
					<div className='main-timeline-container'>
						<div className='content-cards'>
							<div className='card-timeline-1'>
								<div className='container-header-card container-header-card-1'>
									<div className='title-card title-card-1'>
										<h6>Empresa:</h6>
										<h4>DEVLIFE/Freelancer</h4>
									</div>
									<div className='triangulo-para-direita triangulo-para-direita-1 triangulo-para-cima'></div>
								</div>
								<div className='description-card-L description-card-01'>
									<article className='description-content'>
										<small>
											<i>Fevereiro de 2019 - Julho 2021</i>
										</small>
										<p>
											<strong>Cargo:</strong> Developer
										</p>
										<p>
											<strong>Responsabilidades:</strong>
											<br /> - Desenvolvimento de WebApps,
											<br /> - Desenvolvimento de API’s Rest,
											<br /> - WebDesigner.
										</p>
										<p>
											<strong>Empregador:</strong> Freelancer/DevLife
										</p>
									</article>
								</div>
							</div>
							<div className='year-container year-container-left'>
								<div className='rotated-half-circle-01'></div>
								<div className='year-1 year'>
									<h3 className='year-content'>2021</h3>
								</div>
							</div>
						</div>

						<div className='content-cards content-cards-direita'>
							<div className='card-timeline-2'>
								<div className='container-header-card'>
									<div className='triangulo-para-esquerda triangulo-para-esquerda-2 triangulo-para-cima'></div>
									<div className='title-card title-card-2'>
										<h6>Empresa:</h6>
										<h4>FACULDADE ADV. DA AMAZÔNIA</h4>
									</div>
								</div>
								<div className='description-card-R description-card-02'>
									<article className='description-content'>
										<small>
											<i>Agosto de 2011 - Agosto de 2018</i>
										</small>
										<p>
											<strong>Cargo:</strong> Diretor da Escola de Música |
											Auxiliar de Marketing
											<br />
										</p>
										<p>
											<strong>Responsabilidades:</strong> Atuava como Diretor da
											escola de música, regente do coral universitário,
											coordenando as aulas, atividades e eventos, inclusive do
											campus. Acumulava também a função de assistente de
											marketing no primeiro ano, cooperando na manutenção do
											site, na dinâmica das redes sociais e edição de material
											gráfico e mídias.
										</p>
										<p>
											<strong>Empregador:</strong> Valdmiro Laurindo/ Belém - PA
										</p>
									</article>
								</div>
							</div>
							<div className='year-container year-container-right'>
								<div className='rotated-half-circle-02'></div>
								<div className='year-2 year'>
									<h3 className='year-content'>2018</h3>
								</div>
							</div>
						</div>

						<div className='content-cards'>
							<div className='card-timeline-3'>
								<div className='container-header-card container-header-card-1'>
									<div className='title-card title-card-3'>
										<h6>Empresa:</h6>
										<h4>COLÉGIO IATAI</h4>
									</div>
									<div className='triangulo-para-direita triangulo-para-direita-3 triangulo-para-cima'></div>
								</div>
								<div className='description-card-L description-card-03'>
									<article className='description-content'>
										<small>
											<i>Fevereiro 2007 - junho de 2011</i>
										</small>
										<p>
											<strong>Cargo:</strong> Gestão de Marketing | Coordenador
											da Escola de Música
										</p>
										<strong>Responsabilidades:</strong> Fidelizar alunos e
										conquistar novos. Por meios de estratégias, encantar os
										alunos quanto ao relacionamento dos mesmos com a
										instituição, com a promoção de eventos, administração do
										site, redes sociais, além de dirigir as atividades da escola
										de música.
										<p>
											<strong>Empregador:</strong> Rozivaldo Neto / Uruará - PA
										</p>
									</article>
								</div>
							</div>
							<div className='year-container year-container-left'>
								<div className='rotated-half-circle-03'></div>
								<div className='year-3 year'>
									<h3 className='year-content'>2011</h3>
								</div>
							</div>
						</div>
					</div>
					<div className='line'></div>
				</section>
			</div>
		</>
	);
}

export default Experience;
