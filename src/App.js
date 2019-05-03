import Products from './Components/Product/Products';
import MainMenu from './Components/Menu/MainMenu';
import React from 'react';

const App = () => {
	return (
		<main className="container-fluid">
			<MainMenu />

			<Products />
		</main>
	);
};

export default App;
