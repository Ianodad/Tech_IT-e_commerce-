import React, { Component } from 'react';
import '../StylesCommon/responsive.css';
import '../StylesCommon/ui.css';
import { getProduct } from '/home/renegade/Documents/My Projects/React/tech_it/src/Services/ProductService.js';
import ProductsCart from './ProductsCart';

class ProductsView extends Component {
	state = {
		product: {},
		cart: []
	};

	componentDidMount() {
		const product = getProduct(this.props.match.params._id);

		if (!product) return this.props.history.replace('/not-found');

		console.log(product);

		this.setState({
			product
		});
	}

	render() {
		const { imageLg, productName, price, description, quantity } = this.state.product;
		return (
			<div className="container">
				<div className="card">
					<div className="row no-gutters">
						<aside className="col-sm-5 border-right">
							<article className="gallery-wrap">
								<div className="img-big-wrap">
									<div>
										<a href="images/items/1.jpg" data-fancybox>
											<img src={imageLg} />
										</a>
									</div>
								</div>
								<div className="img-small-wrap">
									<div className="item-gallery">
										<img src="http://placehold.it/70x70" />
									</div>
									<div className="item-gallery">
										<img src="http://placehold.it/70x70" />
									</div>
									<div className="item-gallery">
										<img src="http://placehold.it/70x70" />
									</div>
									<div className="item-gallery">
										<img src="http://placehold.it/70x70" />
									</div>
								</div>
							</article>
						</aside>
						<aside className="col-sm-7">
							<article className="p-5">
								<h3 className="title mb-3">{productName}</h3>
								<div className="mb-3">
									<var className="price h3 text-warning">
										<span className="currency">KSh </span>
										<span className="num">{price}</span>
									</var>
								</div>
								<dl>
									<dt>Description</dt>
									<dd>{description}</dd>
								</dl>
								<dl className="row">
									<dt className="col-sm-3">Model#</dt>
									<dd className="col-sm-9">12345611</dd>
									<dt className="col-sm-3">Color</dt>
									<dd className="col-sm-9">Black and white </dd>
									<dt className="col-sm-3">Delivery</dt>
									<dd className="col-sm-9">Russia, USA, and Europe </dd>
								</dl>
								<div className="rating-wrap">
									<ul className="rating-stars">
										<li style={{ width: '80%' }} className="stars-active">
											<i className="fa fa-star" /> <i className="fa fa-star" />
											<i className="fa fa-star" /> <i className="fa fa-star" />
											<i className="fa fa-star" />
										</li>
										<li>
											<i className="fa fa-star" /> <i className="fa fa-star" />
											<i className="fa fa-star" /> <i className="fa fa-star" />
											<i className="fa fa-star" />
										</li>
									</ul>
									<div className="label-rating">132 reviews</div>
									<div className="label-rating">154 orders </div>
								</div>
								<hr />
								<div className="row">
									<div className="col-sm-5">
										<dl className="dlist-inline">
											<dt>Quantity: </dt>
											<dd>
												<select
													className="form-control form-control-sm"
													style={{ width: '70px' }}
												>
													<option> 1 </option>
													<option> 2 </option>
													<option> 3 </option>
												</select>
											</dd>
										</dl>
									</div>
									<div className="col-sm-7">
										<div className="call">
											<h2>{quantity} items in store</h2>
										</div>
									</div>
								</div>
								<hr />
								<a href="#" className="btn  btn-primary mr-2">
									Buy now
								</a>
								<a href="#" className="btn  btn-outline-primary ml-2">
									<i className="fa fa-shopping-cart" /> Add to cart
								</a>
							</article>
						</aside>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductsView;
