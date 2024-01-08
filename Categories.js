export function filterProductsByCategory(products, category) {
    if(!Array.isArray(products) || !category || typeof category !== 'string') {
        console.error('invalid data or category.')
        return [];
    }

    return products.filter(product => product.category.toLowerCase() === category.toLowerCase()); 
}