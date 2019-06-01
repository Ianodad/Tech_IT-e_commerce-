import React from 'react';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import { Link } from 'react-router-dom';

const HeaderInfo = () => {
	return (
		<div>
			<section className="header-main">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-md-2 col-sm-6">
							<Link to="/">
								<div className="brand-wrap">
									<img className="logo" src="images/logo-dark.png" />
									<h2 className="logo-text">LOGO</h2>
								</div>
							</Link>
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
										<Link to="/login">Sign in</Link> <span className="dark-transp"> | </span>
										<Link href="register"> Register</Link>
									</div>
								</div>
								<a href="#" className="widget-header border-left pl-3 ml-3">
									<div className="icontext">
										<div className="icon-wrap icon-sm round border">
											<Link to="/cart">
												<i className="fa fa-shopping-cart" />
											</Link>
										</div>
									</div>
									<span className="badge badge-pill badge-danger notify">0</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeaderInfo;
