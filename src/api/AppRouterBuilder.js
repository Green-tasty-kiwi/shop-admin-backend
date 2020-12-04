const express = require('express');

const UsersRouterBuilder = require('./users/UsersRouterBuilder');
const ProductsRouterBuilder = require('./products/ProductsRouterBuilder');
const OrdersRouterBuilder = require('./orders/OrdersRouterBuilder');

module.exports = class AppRouterBuilder {
    constructor({
        usersController,
        productsController,
        ordersRouterBuilder,
    }) {
        this._usersController = usersController;
        this._productsController = productsController;
    }

    build() {
        const router = express.Router();

        router
            .use(
                '/api/users',
                new UsersRouterBuilder({
                    usersController: this._usersController
                }).build()
            )
            .use(
                '/api/products',
                new ProductsRouterBuilder({
                    productsController: this._productsController
                }).build()
            )
            .use(
                '/api/orders',
                new OrdersRouterBuilder({
                    ordersController: this._ordersController
                }).build()
            )

        return router;
    }
};
