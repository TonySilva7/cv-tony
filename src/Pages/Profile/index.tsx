import { useLayoutEffect, useState } from 'react';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Experience from '../../components/Experience';
import Graduation from '../../components/Graduation';
import Skills from '../../components/Skills/Skills';

import { WrapMain } from './styles';

function Profile() {
	//.......................................

	const myHeight: number = window.screen.height;
	const topWindow = Math.round(myHeight / 1.2);

	const [isFaamaTop, setIsFaamaTop] = useState<boolean>(false);
	const [isIataiTop, setIsIataiTop] = useState<boolean>(false);
	const [isDevLifeTop, setIsDevLifeTop] = useState<boolean>(false);

	const [isShoolTop, setIsShoolTop] = useState<boolean>(false);

	const [isSkillsTop, setIsSkillsTop] = useState<boolean>(false);

	const [isContactTop, setIsContactTop] = useState<boolean>(false);

	useLayoutEffect(() => {
		function handleScroll() {
			// Experience
			const faama = document.getElementById('faama');
			const topF = faama !== null && faama.getBoundingClientRect().top;
			const topFaama = topF && Math.round(topF - 200);

			const iatai = document.getElementById('iatai');
			const topI = iatai !== null && iatai.getBoundingClientRect().top;
			const topIatai = topI && Math.round(topI - 200);

			const devLife = document.getElementById('devLife');
			const topD = devLife !== null && devLife.getBoundingClientRect().top;
			const topDevLife = topD && Math.round(topD - 200);

			// Graduation
			const school = document.getElementById('school');
			const topS = school !== null && school.getBoundingClientRect().top;
			const topSchool = topS && Math.round(topS);

			// Skills
			const skills = document.getElementById('cards-skills');
			const topSk = skills !== null && skills.getBoundingClientRect().top;
			const topSkills = topSk && Math.round(topSk);

			// Contact
			const contact = document.getElementById('contact-form');
			const topC = contact !== null && contact.getBoundingClientRect().top;
			const topContact = topC && Math.round(topC + 200); // <<<< atenção

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

			// Skills
			if (topSkills <= topWindow) {
				setIsSkillsTop(true);
			}

			// Contact
			if (topContact <= topWindow) {
				setIsContactTop(true);
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
				isFaamaTop={ isFaamaTop }
				isIataiTop={ isIataiTop }
				isDevLifeTop={ isDevLifeTop }
			/>
			<Graduation isTop={ isShoolTop } />
			<Skills isSkillsTop={ isSkillsTop } />
			<Contact isContactTop={ isContactTop } />
		</WrapMain>
	);
}

export default Profile;
