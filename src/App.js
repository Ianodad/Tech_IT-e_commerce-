import Products from './Components/Product/Products';
import MainMenu from './Components/Menu/MainMenu';
import React from 'react';
import Home from './Components/Home/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProductView from './Components/Product/ProductView';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';

const App = () => {
	return (
		<main className="container-fluid">
			<MainMenu />
			<div className="content">
				<Switch>
					<Route path="/products/:_id" component={ProductView} />
					<Route path="/products" exact render={(props) => <Products sortBy="newest" {...props} />} />
					<Route path="/cart" component={Products} />
					<Route path="/not-found" component={NotFound} />
					<Route path="/login" component={Login} />
					<Route path="/" exact component={Home} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
		</main>
	);
};

export default App;
