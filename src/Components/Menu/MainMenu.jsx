import React from 'react';
import './MainMenu.css';

const MainMenu = () => {
	return (
		<section className="header-main">
			<div className="container-fluid">
				<div className="d-flex row align-items-center ">
					<div className="col-lg-5-24 col-sm-5 col-4 col-md-2">
						<div className="brand-wrap">
							<img className="logo" src="images/logo-dark.png" alt='logo' />
							<h2 className="logo-text">LOGO</h2>
						</div>
					</div>
					<div className="col-lg-13-24 col-sm-12 order-3 order-lg-2 col-md-6">
						<form action="#">
							<div className="input-group w-100">
								<select className="custom-select" name="category_name">
									<option value="">All type</option>
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
					<div className="col-lg-6-24 col-sm-7 col-8  order-2  order-lg-3 col-md-4">
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
	);
};

export default MainMenu;
