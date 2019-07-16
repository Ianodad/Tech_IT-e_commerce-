import React from 'react';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import { categoryFilter } from '../Util/CategoryFilter';

function CategoryList(props) {
	const { categories, products, onProductSelect, selectedCategory } = props;
	return (
		<div className="card">
			<article className="card-group-item">
				<header className="card-header">
					<h6 className="title">Category </h6>
				</header>
				<div className="filter-content">
					<div className="list-group list-group-flush">
						{categories.map((category) => (
							<div
								className={
									category._id === selectedCategory._id ? 'list-group-item active' : 'list-group-item'
								}
								onClick={() => onProductSelect(category)}
							>
								{category.category}
								<span className="float-right badge badge-secondary round">
									{categoryFilter(products, category)}
								</span>
							</div>
						))}
					</div>
				</div>
			</article>
		</div>
	);
}

export default CategoryList;
