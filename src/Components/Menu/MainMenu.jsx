import React from 'react';
import '../../responsive.css';
import '../../ui.css';
import { Link } from 'react-router-dom';
import TopNavbar from 'Top/TopNavbar';
import HeaderInfo from 'Bottom/HeaderInfo.jsx';

const MainMenu = () => {
	return (
		<header className="section-header">
			<TopNavbar />
			<HeaderInfo />
		</header>
	);
};

export default MainMenu;
