import React from "react";
import "./styles.css"
import {Link} from "react-router-dom";
import ImgHome from "./icon-home.png";

function NavProfile() {

	function removeClass(id: string) {
		const navClass = document.querySelectorAll('nav ul li a');
		// @ts-ignore
		navClass.forEach(e => {
			if (e.getAttribute('href') !== id) {
				e.removeAttribute('class');
			}

		})
	}

	function activeMenu(event: any) {
		event.preventDefault();
		const element = event.target;
		const id = element.getAttribute('href');
		removeClass(id);
		const classElm = element.classList;
		classElm.toggle('linkAtivo');
	}

	function scrollToIdOnClick(event: any) {
		event.preventDefault();
		const element = event.target;
		const id = element.getAttribute('href');
		const to = document.querySelector(id).offsetTop;

		// window.scroll({
		// 	top: to - 80,
		// 	behavior: 'smooth',
		// });
		smoothScrollTo(0, to - 70, 500);
	}

	/**
	 * Smooth scroll animation
	 * @param {int} endX: destination x coordinate
	 * @param {int} endY: destination y coordinate
	 * @param {int} duration: animation duration in ms
	 */
	function smoothScrollTo(endX: number, endY: number, duration: number) {
		const startX = window.scrollX || window.pageXOffset;
		const startY = window.scrollY || window.pageYOffset;
		const distanceX = endX - startX;
		const distanceY = endY - startY;
		const startTime = new Date().getTime();

		duration = typeof duration !== 'undefined' ? duration : 400;

		// Easing function
		const easeInOutQuart = (time: number, from: number, distance: number, duration: number) => {
			if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
			return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
		};

		const timer = setInterval(() => {
			const time = new Date().getTime() - startTime;
			const newX = easeInOutQuart(time, startX, distanceX, duration);
			const newY = easeInOutQuart(time, startY, distanceY, duration);
			if (time >= duration) {
				clearInterval(timer);
			}
			window.scroll(newX, newY);
		}, 1000 / 60); // 60 fps
	}

	return (
		<nav className="nav-container-profile">
			<Link to="/">
				<div className="logo-container-profile">
					<img src={ImgHome} alt="imagem" className="icon-home"/>
				</div>
			</Link>
			<ul className="menu-container" onClick={scrollToIdOnClick} >
				<li>
					<a href="#sobre" className="linkAtivo" onClick={activeMenu} > SOBRE </a>
					<a href="#experiencia" onClick={activeMenu}> EXPERIÊNCIA </a>
					<a href="#formacao" onClick={activeMenu}> FORMAÇÃO </a>
					<a href="#habilidades" onClick={activeMenu}> HABILIDADES </a>
					<a href="#contato" onClick={activeMenu}> CONTATO </a>
				</li>
			</ul>
		</nav>
	)
}

export default NavProfile;