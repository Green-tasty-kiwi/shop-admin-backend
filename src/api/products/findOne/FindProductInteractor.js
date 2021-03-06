const { NotFoundError } = require('../../../../utils/errors')
module.exports = class FindProductsInterator {
    constructor({ responder, productsGateway, responseBuilder }) {
        this._responder = responder;
        this._productsGateway = productsGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {
        const product = await this._productsGateway.findById(request.productId);

        if (!product) {
            this._responder.respondFailure(new NotFoundError('Product is not found'));
            return;
        }

        const response = this._responseBuilder.build(product)

        this._responder.respondSuccess(response);
    }
}