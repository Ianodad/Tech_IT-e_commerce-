import React from 'react';
import '../../StylesCommon/responsive.css';
import '../../StylesCommon/ui.css';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import NavLanguage from './NavLanguage';
import NavCurrency from './NavCurrency';

const TopNavbar = () => {
	return (
		<div>
			<nav className="navbar navbar-top navbar-expand-lg navbar-dark bg-secondary">
				<div className="container">
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarTop"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="navbarTop">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									<i className="fa fa-phone" /> Call us: 020 2366 455
								</a>
							</li>
							<NavCurrency/>
							<NavLanguage />
						</ul>
						<NavLinks />
					</div>
				</div>
			</nav>
		</div>
	);
};

export default TopNavbar;
