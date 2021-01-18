import React from "react";
import "./styles.css";
import "../Footer/styles.css"
import {Link} from "react-router-dom";
import Img from "./perfil.png";
import Navbar from "../Navbar";
import {ReactComponent as YouTubeIcon} from "../Footer/youtube.svg";
import {ReactComponent as LinkedInIcon} from "../Footer/linkedin.svg";
import {ReactComponent as InstagramIcon} from "../Footer/instagram.svg";

function Home() {

	return (
		<>
			<Navbar/>
			<div className="div-home-container">
				<div className="div-home-content">
					<div className="home-presentation">

						<h1 className="home-title">
							Olá, <br/> Sou Tony! <br/>
						</h1>

						<h3 className="home-subtitle">
							Este é meu currículo! <br/> Vamos dar uma olhadinha!?
						</h3>

						<Link to="/profile" className="home-btn-profile">Vamos!</Link>

					</div>

					<div className="home-img">
						<img src={Img} alt="imagem"/>
						<div className="social-media-container">
							<a href="https://www.youtube.com/channel/UCBGR5w88kemCDyjfORFrZgQ"
							   target="_new" className="social-media-content">
								<YouTubeIcon/>
							</a>
							<a href="https://www.linkedin.com/in/tony-sz-silva"
							   target="_new" className="social-media-content">
								<LinkedInIcon/>
							</a>
							<a href="http://www.instagram.com/tony.sz.silva"
							   target="_new" className="social-media-content">
								<InstagramIcon/>
							</a>
						</div>

					</div>
				</div>

			</div>
		</>
	)

}

export default Home;