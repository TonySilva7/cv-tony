import React from "react";
import "./styles.css"
import Footer from "../Footer";
import NavProfile from "../Nav-profile";
import About from "./About";
import Experience from "./Experience";
import Formation from "./Formation";
import Skills from "./Skills";
import Contact from "./Contact";

function Profile() {
	return (
		<>
			<NavProfile />
			<div className="about-container">
				<About />
				<Experience />
				<Formation />
				<Skills />
				<Contact />
			</div>
			<Footer />
		</>
	)
}

export default Profile;