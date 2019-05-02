import React, { Component } from 'react';
import { getProducts } from '/home/renegade/Documents/My Projects/React/tech_it/src/Services/ProductService.js';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import ProductDetails from './ProductDetails';

class Products extends Component {
	state = { products: [] };

	componentDidMount() {
		this.setState({ products: getProducts() });
	}
	render() {
		console.log(this.state.products);
		return (
			<div className="container m-auto">
				<ProductDetails className="mx-auto" products={this.state.products} />
			</div>
		);
	}
}

export default Products;
