import React from "react";
import "./styles.css"
import {ReactComponent as LinkedInIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'

function Footer() {

	return(
		<footer className="main-footer">
			By Tony | tony.deve7oper@gmail.com
			<div className="footer-icons">
				<a href="https://www.linkedin.com/in/tony-sz-silva" target="_new">
					<LinkedInIcon/>
				</a>
				<a href="http://www.instagram.com/tony.sz.silva" target="_new">
					<InstagramIcon/>
				</a>
			</div>
		</footer>
	)
}

export default Footer;