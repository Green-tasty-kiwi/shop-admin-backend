module.exports = class CreateOrderInteractor {
    constructor({
        responder,
        ordersGateway,
        orderProductsGateway,
        customersGateway,
        responseBuilder,
        productsGateway,
    }) {
        this._responder = responder;
        this._ordersGateway = ordersGateway;
        this._responseBuilder = responseBuilder;
        this._orderProductsGateway = orderProductsGateway;
        this._customersGateway = customersGateway;
        this._productsGateway = productsGateway;
    }

    async execute(request) {

        let customer = await this._customersGateway.findOne(request.phone);

        if (!customer) {
            customer = await this._customersGateway.create({
                firstName: request.firstName,
                lastName: request.lastName,
                phone: request.phone,
                city: request.city,
                address: request.address,
                appartment: request.appartment,
                house: request.house,
            });
        }

        const order = await this._ordersGateway.create({
            status: 'new',
            customerId: customer.id,
        });

        for (let productId of request.productsID) {
            let product = await this._productsGateway.findById(productId);
            await this._orderProductsGateway.create({
                orderId: order.id,
                image: product.image,
                name: product.name,
                description: product.description,
                price: product.price,
                status: product.status,
                quantity: product.quantity
            });
        }

        this._responder.respondSuccess();
    }
};