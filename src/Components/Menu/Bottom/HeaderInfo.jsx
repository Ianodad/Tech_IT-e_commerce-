import React from 'react';
import '../../StylesCommon/responsive.css';
import '../../StylesCommon/ui.css';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import SearchBar from './SearchBar';
import UserInfo from './UserInfo';

const HeaderInfo = () => {
	return (
		<div>
			<section className="header-main" >
				<div className="container-fluid">
					<div className="row align-items-center">
						<Logo />
						<SearchBar />
						<UserInfo />
					</div>
				</div>
			</section>
		</div>
	);
};

export default HeaderInfo;
