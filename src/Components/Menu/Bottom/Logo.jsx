import React from 'react';
import '../../StylesCommon/responsive.css';
import '../../StylesCommon/ui.css';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<div className="col-md-2 col-sm-6">
			<Link to="/">
				<div className="brand-wrap">
					<img className="logo" src="images/logo-dark.png" />
					<h2 className="logo-text">LOGO</h2>
				</div>
			</Link>
		</div>
	);
}

export default Logo;
