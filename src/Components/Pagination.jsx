import React from 'react';
import _ from 'lodash';
import ProTypes from 'prop-types';

const Pagination = (props) => {
    const { productsCount, pageSize, currentPage, onPageChange } = props;
    
    // This takes the number of product per page the divide with number of product to get 
    // the pages needed
	const pagesCount = Math.ceil(productsCount / pageSize);

    // If the number of product cant fit one page or less return no pages
    if (pagesCount === 1)return null
    // creates a list of numbers from range 1 to n pages count+1 will be use to render pagination
	const pages = _.range(1, pagesCount + 1);
	return (
		<nav>
			<ul className="pagination">
				{pages.map((page) => (
					<li key={page} className={page === currentPage ? 'page-item active': 'page-item'}>
						<a className="page-link" onClick={()=> onPageChange(page)}>{page}</a>
					</li>
				))}
			</ul>
		</nav>
	);
};
Pagination.propTypes = {
	productsCount: ProTypes.number.isRequired,
	pageSize: ProTypes.number.isRequired
};

export default Pagination;
