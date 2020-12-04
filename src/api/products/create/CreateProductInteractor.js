module.exports = class CreateProductInteractor {
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

        const product = await this._productsGateway.create({
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

        const response = this._responseBuilder.build(product);

        this._responder.respondSuccess(response);
    }
};