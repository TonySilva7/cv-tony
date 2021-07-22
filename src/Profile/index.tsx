import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience/';
import Graduation from '../components/Graduation';
import Skills from '../components/Skills/Skills';
import { WrapMain } from './styles';

function Profile() {
	return (
		<WrapMain>
			<About />
			<Experience />
			<Graduation />
			<Skills />
			<Contact />
		</WrapMain>
	);
}

export default Profile;
