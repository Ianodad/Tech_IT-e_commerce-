import React, { Component } from 'react';
import { getProducts } from '/home/renegade/Documents/My Projects/React/tech_it/src/Services/ProductService.js';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import ProductDetails from './ProductDetails';
import Pagination from '../Pagination';
import { paginate } from '../Util/Paginate';

class Products extends Component {
	state = {
		products: [],
		pageSize: 9,
		currentPage: 1
	};

	componentDidMount() {
		this.setState({ products: getProducts() });
	}
	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};
	render() {
		const { length: count } = this.state.products;
		const { products: allProducts, pageSize, currentPage } = this.state;

		const products = paginate(allProducts, currentPage, pageSize);

		console.log(products);
		return (
			<div className="container m-auto">
				<ProductDetails className="mx-auto" products={products} />
				<Pagination
					productsCount={count}
					pageSize={pageSize}
					currentPage={currentPage}
					onPageChange={this.handlePageChange}
				/>
			</div>
		);
	}
}

export default Products;
