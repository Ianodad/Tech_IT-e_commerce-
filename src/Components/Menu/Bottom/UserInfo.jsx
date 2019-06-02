import React from 'react';
import '../../StylesCommon/responsive.css';
import '../../StylesCommon/ui.css';
import { Link } from 'react-router-dom';

function UserInfo() {
	return (
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
	);
}

export default UserInfo;
