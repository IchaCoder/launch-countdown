/** @format */

import React from "react";
import fb from "./images/icon-facebook.svg";
import pinterest from "./images/icon-pinterest.svg";
import ig from "./images/icon-instagram.svg";

const Footer = () => {
	return (
		<footer>
			<img className="social" src={fb} alt="facebook" />
			<img className="social" src={pinterest} alt="pinterest" />
			<img className="social" src={ig} alt="instagram" />
		</footer>
	);
};

export default Footer;
