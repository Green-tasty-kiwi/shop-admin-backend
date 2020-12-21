
const CreateCustomerInteractor = require('./create/CreateCustomerInteractor');
const CreateCustomerRequest = require('./create/CreateCustomerRequest');

const FindCustomersInterator = require('./findAll/FindCustomersInterator');
const FindCustomersRequest = require('./findAll/FindCustomersRequest');

const FindCustomerInterator = require('./findOne/FindCustomerInterator');
const FindCustomerRequest = require('./findOne/FindCustomerRequest');

const CustomerResponseBuilder = require('./CustomerResponseBuilder');
const HttpResponder = require('../../core/HttpResponder');

module.exports = class CustomersController {

    constructor({ customersGateway }) {
        this._customersGateway = customersGateway;
    }

    create(request, response, next) {
        new CreateCustomerInteractor({
            responder: new HttpResponder(response),
            customersGateway: this._customersGateway,
            responseBuilder: new CustomerResponseBuilder(),
        }).execute(new CreateCustomerRequest(request));
    }

    findCustomers(request, response, next) {
        new FindCustomersInterator({
            responder: new HttpResponder(response),
            customersGateway: this._customersGateway,
            responseBuilder: new CustomerResponseBuilder(),
        }).execute(new FindCustomersRequest(request));
    }

    findCustomer(request, response, next) {
        new FindCustomerInterator({
            responder: new HttpResponder(response),
            customersGateway: this._customersGateway,
            responseBuilder: new CustomerResponseBuilder(),
        }).execute(new FindCustomerRequest(request));
    }
}