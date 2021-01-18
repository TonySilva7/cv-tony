import React from "react";
import "./styles.css"
import Footer from "../Footer";
import NavProfile from "../Nav-profile";
import About from "../Home/About";
import Experiencia from "../Home/Experiencia";
import Formacao from "../Home/Formacao";
import Habilidades from "../Home/Habilidades";
import Contato from "../Home/Contato";

function Profile() {
	return (
		<>
			<NavProfile />
			<div className="about-container">
				<About />
				<Experiencia />
				<Formacao />
				<Habilidades />
				<Contato />
			</div>
			<Footer />
		</>
	)
}

export default Profile;