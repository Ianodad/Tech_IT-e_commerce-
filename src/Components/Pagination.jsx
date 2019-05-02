import React from 'react';
import _ from 'lodash';





const Pagination = (props) => {
    const {productsCount, pageSize }= props;
    const pagesCount = Math.ceil(productsCount / pageSize);

    const pages =_.range(1, pagesCount+1);
	return (
		<nav>
			<ul className="pagination">
            {pages.map(page=> 
				<li className="page-item">
					<a className="page-link">{page}</a>
				</li>            
             )}
			</ul>
		</nav>
	);
};
Pagination.propTypes = {
    
}

export default Pagination;
