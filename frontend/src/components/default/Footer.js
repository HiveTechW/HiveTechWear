import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/images/icons8-facebook-150.svg";
import InstagramIcon from "../../assets/images/icons8-instagram-150.svg";
import { getUser } from "../../reducks/users/selectors";

const Footer = () => {
	const selector = useSelector((state) => state);
	const user = getUser(selector);
	const token = user ? user.token : null;

	return (
		<footer className="footer">
			<div className="footer-main">
				<div className="footer-container">
					<h2>Shop and Learn</h2>
					<div className="footer-content">
						{token ? (
							<Link to="/">Item lists</Link>
						) : (
							<>
								<Link to="/sign-up">Sign up</Link>
								<Link to="/sign-in">Sign in</Link>
							</>
						)}
					</div>
				</div>
			</div>

			<hr className="line" />
			<p className="copyright">
				Copyright © 2021 HIVE techwear. All rights reserved. Privacy Policy|Term of Use Sales
				Policy|Legal|Site|Map
			</p>
		</footer>
	);
};

export default Footer;
