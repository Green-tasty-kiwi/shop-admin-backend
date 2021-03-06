module.exports = class ProductResponseBuilder {
    build(product) {
        return {
            name: product.name,
            description: product.description,
            price: product.price,
            status: product.status,
            quantity: product.quantity,
            image: `http://localhost:4000/static/${product.id}/${product.image}`,
            id: product.id,
        };
    }
};
