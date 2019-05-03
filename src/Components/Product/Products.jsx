import React, { Component } from 'react';
// Get JSON from services
import { getProducts } from '/home/renegade/Documents/My Projects/React/tech_it/src/Services/ProductService.js';
import { getCategories } from '/home/renegade/Documents/My Projects/React/tech_it/src/Services/CategoryService.js';

import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import ProductDetails from './ProductDetails';
import Pagination from '../Pagination';
import { paginate } from '../Util/Paginate';
import CategoryList from '../Lists/CategoryList';

class Products extends Component {
	state = {
		products: [],
		pageSize: 4,
		currentPage: 1,
		categories: [],
		selectedCategory: ''
	};

	componentDidMount() {
		const categories = [ { category: 'All Categories' }, ...getCategories() ];
		this.setState({ products: getProducts(), categories });
	}
	handlePageChange = (page) => {
		this.setState({ currentPage: page });
	};

	handleCategoryChange = (category) => {
		this.setState({ selectedCategory: category, currentPage: 1 });
	};
	render() {
		const { length: count } = this.state.products;
		const { products: allProducts, pageSize, currentPage, categories, selectedCategory } = this.state;

		const filteredProducts =
			selectedCategory && selectedCategory._id
				? allProducts.filter((p) => p.category === selectedCategory.category)
				: allProducts;
		const products = paginate(filteredProducts, currentPage, pageSize);

		if (count === 0) return <p>There are no products in the database.</p>;

		return (
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-2" />
					<div className="col-md-2">
						<CategoryList
							categories={categories}
							products={allProducts}
							onProductSelect={this.handleCategoryChange}
							selectedCategory={this.state.selectedCategory}
						/>
					</div>
					<div className="col-md-6 col-sm-3">
						<p>Showing {filteredProducts.length} products in the database</p>
						<ProductDetails products={products} />
						<Pagination
							className="my-4"
							productsCount={filteredProducts.length}
							pageSize={pageSize}
							currentPage={currentPage}
							onPageChange={this.handlePageChange}
						/>
					</div>
					<div className="col-md-2" />
				</div>
			</div>
		);
	}
}

export default Products;
