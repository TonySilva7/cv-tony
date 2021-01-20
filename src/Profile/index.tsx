import React from "react";
import "./styles.css"
import Footer from "../Footer";
import NavProfile from "../Nav-profile";
import About from "./About";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Habilidades from "./Habilidades";
import Contato from "./Contato";

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