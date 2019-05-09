import React from 'react';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';

const MainMenu = () => {
	return (
		<header className="section-header">
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
								<a href="#" className="nav-link">
									My Account
								</a>
							</li>
							<li>
								<a href="#" className="nav-link">
									Wishlist
								</a>
							</li>
							<li>
								<a href="#" className="nav-link">
									Checkout
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<section className="header-main">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-2 col-sm-6">
							<div className="brand-wrap">
								<img className="logo" src="images/logo-dark.png" />
								<h2 className="logo-text">LOGO</h2>
							</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<form action="#">
								<div className="input-group w-100">
									<select className="custom-select" name="category_name">
										<option value>All type</option>
										<option value="codex">Special</option>
										<option value="comments">Only best</option>
										<option value="content">Latest</option>
									</select>
									<input
										type="text"
										className="form-control"
										style={{ width: '60%' }}
										placeholder="Search"
									/>
									<div className="input-group-append">
										<button className="btn btn-primary" type="submit">
											<i className="fa fa-search" />
										</button>
									</div>
								</div>
							</form>
						</div>
						<div className="col-md-4 col-sm-6">
							<div className="d-flex justify-content-end">
								<div className="widget-header">
									<small className="title text-muted">Welcome guest!</small>
									<div>
										<a href="#">Sign in</a> <span className="dark-transp"> | </span>
										<a href="#"> Register</a>
									</div>
								</div>
								<a href="#" className="widget-header border-left pl-3 ml-3">
									<div className="icontext">
										<div className="icon-wrap icon-sm round border">
											<i className="fa fa-shopping-cart" />
										</div>
									</div>
									<span className="badge badge-pill badge-danger notify">0</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</header>
	);
};

export default MainMenu;
