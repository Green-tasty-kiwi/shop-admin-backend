const { AlreadyExistsError } = require('../../../../utils/errors/AlreadyExistsError');

module.exports = class CreateCustomerInteractor {
    constructor({
        responder,
        customersGateway,
        responseBuilder,
    }) {
        this._responder = responder;
        this._customersGateway = customersGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {

        const existCustomer = await this._customersGateway.findOne({
            phone: request.phone,
        });

        if (existCustomer) {
            this._responder.respondFailure(new AlreadyExistsError('Customer already exist'));
            return;
        }


        const customer = await this._customersGateway.create({
            firstName: request.firstName,
            lastName: request.lastName,
            phone: request.phone,
            city: request.city,
            address: request.address,
            house: request.house,
            appartment: request.appartment,
        });

        const response = this._responseBuilder.build(customer);

        this._responder.respondSuccess(response);
    }
};