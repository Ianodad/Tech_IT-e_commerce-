import React from 'react';
import '../../StylesCommon/responsive.css';
import '../../StylesCommon/ui.css';
import { Link } from 'react-router-dom';

function NavLinks() {
	return (
		<div>
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
	);
}

export default NavLinks;
