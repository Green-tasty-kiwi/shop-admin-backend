module.exports = class FindCustomersInterator {
    constructor({ responder, customersGateway, responseBuilder }) {
        this._responder = responder;
        this._customersGateway = customersGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {
        const { rows, count } = await this._customersGateway.findAll({
            page: request.page,
            perPage: request.perPage,
        });

        const customers = [];

        for (const customer of rows) {
            customers.push(this._responseBuilder.build(customer))
        }

        const response = {
            rows: customers,
            count,
        };

        this._responder.respondSuccess(response);
    }
}