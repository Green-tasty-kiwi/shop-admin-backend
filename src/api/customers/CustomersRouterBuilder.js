const express = require('express');

module.exports = class CustomersRouterBuilder {

    constructor({
        customersController
    }) {
        this._customersController = customersController;
    }

    build() {
        const router = express.Router();

        router
            .post('/', (...args) => this._customersController.create(...args))
            .get('/', (...args) => this._customersController.findCustomers(...args))
            .get('/:customerId', (...args) => this._customersController.findCustomer(...args))

        return router;
    }
}