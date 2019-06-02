import React from 'react';

function NavCurrency() {
	return (
		<div>
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
		</div>
	);
}

export default NavCurrency;
