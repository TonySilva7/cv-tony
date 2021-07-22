import React from 'react';
import About from '../components/About';
import Experience from '../components/Experience/';
import Graduation from '../components/Graduation';
// import Contact from './Contact';
// import Formation from './Formation';
// import Skills from './Skills';
// import './styles.css';

function Profile() {
	return (
		<>
			<div>
				<About />
				<Experience />
				<Graduation />
				{/* <Formation /> */}
				{/* <Skills /> */}
				{/* <Contact /> */}
			</div>
		</>
	);
}

export default Profile;
