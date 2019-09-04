import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import '../css/home.css';

class Home extends Component {
	render() {
		return (
			<div className="container-fluid">
				<section id="intro" className="section-intro bg-secondary pt-5 landing">
					<div className="container">
						<div className="row d-flex " style={{ minHeight: '700px'}}>	
							<div className="col-sm-6 d-flex align-items-center">
								<header className="intro-wrap text-white">
									<h2 className="display-3"> Amazing place for hero title </h2>
									<p className="lead">
										Bootstrap ecommerce is more then template - also framework. <br /> It is modern
										and fully customizable websites, WebApp and Mobile template for Your Project
									</p>
									<Link to="/products">
										<a href="#" className="btn btn-warning">
											VIEW PRODUCTS
										</a>
									</Link>
								</header>
							</div>
							<div className="col-sm-6 text-right">
								<img
									src=""
									className="img-fluid my-5"
									width={900}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
