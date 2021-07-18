import React from 'react';
import ImgBrushes from './icon-brushes.png';
import ImgCamera from './icon-camera.png';
import { ReactComponent as DownIcon } from './icon-down.svg';
import ImgLcd from './icon-lcd.png';
import TonyCv from './tonyCV.pdf';

function Formation() {
	return (
		<>
			<div className='about-content' id='formation'>
				<h1 className='container-title'>FORMAÇÃO</h1>
				<section className='container-description'>
					<span className='formation-container'>
						<img
							src={ImgBrushes}
							alt='Imagem do perfil'
							className='icon-formation'
						/>
						<h3>ENSINO MÉDIO</h3>
						<article>
							<p>
								<strong>Instituição</strong>: Dairce Pedrosa Torres{' '}
							</p>
							<p>
								<strong>Nível</strong>: Ensino Médio{' '}
							</p>
							<p>
								<strong>Conclusão</strong>: 1998{' '}
							</p>
						</article>
					</span>

					<span className='formation-container container-marketing'>
						<img
							src={ImgCamera}
							alt='Imagem do perfil'
							className='icon-formation'
						/>
						<h3>MARKETING</h3>
						<article>
							<p>
								<strong>Instituição</strong>: UNINTER{' '}
							</p>
							<p>
								<strong>Nível</strong>: Graduação{' '}
							</p>
							<p>
								<strong>Conclusão</strong>: 2018, Nov
							</p>
						</article>
					</span>

					<span className='formation-container'>
						<img
							src={ImgLcd}
							alt='Imagem do perfil'
							className='icon-formation'
						/>
						<h3>ANAL. E DES. DE SISTEMAS</h3>
						<article>
							<p>
								<strong>Instituição</strong>: UNINTER{' '}
							</p>
							<p>
								<strong>Nível</strong>: Graduação{' '}
							</p>
							<p>
								<strong>Conclusão</strong>: Ago, 2021{' '}
							</p>
						</article>
					</span>
				</section>
				<div className='container-down'>
					<DownIcon className='icon-down' />
					<a
						href={TonyCv}
						target='_blank'
						rel='noreferrer'
						className='btn-down'
						download='CV - José Antonio S da Silva.pdf'>
						DOWNLOAD CV
					</a>
				</div>
			</div>
		</>
	);
}

export default Formation;
