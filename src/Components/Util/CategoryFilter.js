export function categoryFilter(products, category) {
	// console.log(products)
	// console.log(category)
	const filteredCategory = category != 'All Categories' ? products.filter((p) => p.category === category) : products;
	return filteredCategory.length;
}
