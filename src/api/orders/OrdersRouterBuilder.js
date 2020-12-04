const express = require('express');

module.exports = class OrdersRouterBuilder {

    constructor({
        ordersController
    }) {
        this._ordersController = ordersController;
    }

    build() {
        const router = express.Router();

        router
            .post('/', (...args) => this._ordersController.create(...args))
            .get('/', (...args) => this._ordersController.findOrders(...args))
            .get('/:orderId', (...args) => this._ordersController.findOrder(...args))

        return router;
    }
}