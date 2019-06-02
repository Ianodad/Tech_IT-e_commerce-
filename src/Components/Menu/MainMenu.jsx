import React from 'react';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import { Link } from 'react-router-dom';
import TopNavbar from './Top/TopNavbar';
import HeaderInfo from './Bottom/HeaderInfo';

const MainMenu = () => {
	return (
		<header className="section-header">
			<TopNavbar />
			<HeaderInfo />
		</header>
	);
};

export default MainMenu;
