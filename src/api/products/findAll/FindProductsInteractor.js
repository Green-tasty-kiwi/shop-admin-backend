module.exports = class FindProductsInteractor {
    constructor({ responder, productsGateway, responseBuilder }) {
        this._responder = responder;
        this._productsGateway = productsGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {
        const { rows, count } = await this._productsGateway.findAll({
            page: request.page,
            perPage: request.perPage,
        });

        const products = [];

        for (const product of rows) {
            products.push(this._responseBuilder.build(product))
        }

        const response = {
            rows: products,
            count,
        };

        this._responder.respondSuccess(response);
    }
}