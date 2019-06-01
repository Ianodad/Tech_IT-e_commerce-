import React from 'react';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import { Link } from 'react-router-dom';

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
							<li className="nav-item dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
									USD
								</a>
								<ul className="dropdown-menu small">
									<li>
										<a className="dropdown-item" href="#">
											EUR
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											AED
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											RUBL
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
									Language
								</a>
								<ul className="dropdown-menu small">
									<li>
										<a className="dropdown-item" href="#">
											English
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Arabic
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Russian
										</a>
									</li>
								</ul>
							</li>
						</ul>
						<ul className="navbar-nav">
							<li>
								<Link href="/account" className="nav-link">
									My Account
								</Link>
							</li>
							<li>
								<Link href="/wishlist" className="nav-link">
									Wishlist
								</Link>
							</li>
							<li>
								<Link href="/chart" className="nav-link">
									Checkout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default TopNavbar;
