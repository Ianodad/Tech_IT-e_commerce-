import React, { Component } from 'react';
import { getProducts } from '/home/renegade/Documents/My Projects/React/tech_it/src/Services/ProductService.js';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import ProductDetails from './ProductDetails';
import Pagination from '../Pagination';

class Products extends Component {
	state = {
		products: [],
		pageSize: 9
	};

	componentDidMount() {
		this.setState({ products: getProducts() });
	}
	render() {
		const { length: count } = this.state.products;
		const { products, pageSize } = this.state;

		console.log(products);
		return (
			<div className="container m-auto">
				<ProductDetails className="mx-auto" products={products} />
				<Pagination productsCount={count} pageSize={pageSize} />
			</div>
		);
	}
}

export default Products;
