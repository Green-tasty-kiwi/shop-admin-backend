const fs = require('fs').promises;
const path = require('path');

module.exports = class UpdateProductInteractor {
    constructor({
        responder,
        productsGateway,
        responseBuilder,
    }) {
        this._responder = responder;
        this._productsGateway = productsGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {

        const checkProduct = await this._productsGateway.findById(request.productId)

        if (request.image && checkProduct.image) {
            fs.unlink(path.join(__dirname,
                '../../../../',
                `/storage/products/${checkProduct.id}/${checkProduct.image}`))
        };

        const product = await this._productsGateway.updateOne({ id: request.productId }, {
            name: request.name,
            description: request.description,
            price: request.price,
            status: request.status,
            quantity: request.quantity,
            image: request.image,
            metaDescription: request.metaDescription,
            metaKeys: request.metaKeys,
            metaHeaders: request.metaHeaders,
        });

        if (product.image) {

            const dir = path.join(__dirname, '../../../../', `/tmp/images/${product.image}`);

            await fs.mkdir(path.join(__dirname,
                '../../../../',
                `/storage/products/${product.id}/`),
                { recursive: true });

            await fs.rename(
                dir,
                path.join(__dirname,
                    '../../../../',
                    `/storage/products/${product.id}/${product.image}`)
            )
        }

        const response = this._responseBuilder.build(product);

        this._responder.respondSuccess(response);
    }
};