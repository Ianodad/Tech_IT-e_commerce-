import React from 'react';
import Currency from 'react-currency-formatter';

const ProductDetails = (props) => {
	const { products } = props;
	return (
		<div className="ui cards d-flex flex-wrap ">
			{products.map((product) => (
				<div className="card" key={product._id}>
					<div className="image">
						<img src={product.image} alt={product.description} />
					</div>
					<div className="content">
						<a href="#" className="header">
							{product.productName}
						</a>

						<div className="meta">
							<span className="date">
								Rating:
								<div className="ui star outline icon rating" data-rating="4" />
							</span>
						</div>
					</div>
					<div className="extra content">
						<div className="header">
							<p>
								<Currency quantity={product.price} currency="KES"/>
							</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductDetails;
