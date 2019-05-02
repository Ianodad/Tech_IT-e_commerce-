import React from 'react';

const ProductDetails = (props) => {
	const { products } = props;
	return (
		<div className="ui cards d-flex flex-wrap ">
			{products.map((product) => (
				<div className="card" key={product._id}>
					<div className="image">
						<img src={product.image} />
					</div>
					<div className="content">
						<a className="header">{product.productName}</a>
						<div className="meta">
							<span className="date">
								Rating:
								<div className="ui star outline icon rating" data-rating="4" />
							</span>
						</div>
						<div className="description">Kristy is an art director living in New York.</div>
					</div>
					<div className="extra content">
						<div className="header">
							<p>Ksh {product.price}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductDetails;
