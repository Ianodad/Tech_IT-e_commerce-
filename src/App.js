import Products from './Components/Product/Products';
import MainMenu from './Components/Menu/MainMenu';
import React from 'react';
import Home from './Components/Home/Home';
import { Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
	return (
		<main className="container-fluid">
			<MainMenu />
			<div className="content">
				<Home />
				<Products />
			</div>
		</main>
	);
};

export default App;
