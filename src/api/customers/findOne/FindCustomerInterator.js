module.exports = class FindCustomerInterator {
    constructor({ responder, customersGateway, responseBuilder }) {
        this._responder = responder;
        this._customersGateway = customersGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {
        const customer = await this._customersGateway.findById({
            id: request.customerId
        });

        const response = this._responseBuilder.build(customer)

        this._responder.respondSuccess(response);
    }
}