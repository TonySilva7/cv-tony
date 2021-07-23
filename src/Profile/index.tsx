import React, { useLayoutEffect, useState } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience/';
import Graduation from '../components/Graduation';
import Skills from '../components/Skills/Skills';
import { WrapMain } from './styles';

function Profile() {
	//.......................................

	const myHeight: number = window.screen.height;
	const topWindow = Math.round(myHeight / 1.2);

	const [isShoolTop, setIsShoolTop] = useState<boolean>(false);

	const [isFaamaTop, setIsFaamaTop] = useState<boolean>(false);
	const [isIataiTop, setIsIataiTop] = useState<boolean>(false);
	const [isDevLifeTop, setIsDevLifeTop] = useState<boolean>(false);

	useLayoutEffect(() => {
		function handleScroll() {
			// Experience
			const faama = document.getElementById('faama');
			const topF = faama !== null && faama.getBoundingClientRect().top;
			const topFaama = topF && Math.round(topF);

			const iatai = document.getElementById('iatai');
			const topI = iatai !== null && iatai.getBoundingClientRect().top;
			const topIatai = topI && Math.round(topI);

			const devLife = document.getElementById('devLife');
			const topD = devLife !== null && devLife.getBoundingClientRect().top;
			const topDevLife = topD && Math.round(topD);

			// Graduation
			const school = document.getElementById('school');
			const topS = school !== null && school.getBoundingClientRect().top;
			const topSchool = topS && Math.round(topS);

			// Experience
			if (topFaama <= topWindow) {
				setIsFaamaTop(true);
			}
			if (topIatai <= topWindow) {
				setIsIataiTop(true);
			}
			if (topDevLife <= topWindow) {
				setIsDevLifeTop(true);
			}

			// Graduation
			if (topSchool <= topWindow) {
				setIsShoolTop(true);
			}
		}

		// evento
		window.onscroll = () => {
			handleScroll();
		};

		// umount
		return () => {
			window.onscroll = null;
		};
	}, [topWindow]);

	return (
		<WrapMain>
			<About />
			<Experience
				isFaamaTop={isFaamaTop}
				isIataiTop={isIataiTop}
				isDevLifeTop={isDevLifeTop}
			/>
			<Graduation isTop={isShoolTop} />
			<Skills />
			<Contact />
		</WrapMain>
	);
}

export default Profile;
