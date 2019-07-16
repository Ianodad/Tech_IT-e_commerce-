export function categoryFilter(products, category) {
	// console.log(products)
	console.log(category._id)
	const filteredCategory = category._id ? products.filter((p) => p.category._id === category._id) : products;
	return filteredCategory.length;
}