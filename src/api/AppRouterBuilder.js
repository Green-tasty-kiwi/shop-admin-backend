const express = require('express');

const UsersRouterBuilder = require('./users/UsersRouterBuilder');
const ProductsRouterBuilder = require('./products/ProductsRouterBuilder');
const OrdersRouterBuilder = require('./orders/OrdersRouterBuilder');
const CustomersRouterBuilder = require('./customers/CustomersRouterBuilder');

module.exports = class AppRouterBuilder {
    constructor({
        usersController,
        productsController,
        ordersController,
        customersController,
    }) {
        this._usersController = usersController;
        this._productsController = productsController;
        this._ordersController = ordersController;
        this._customersController = customersController;
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
            .use(
                '/api/customers',
                new CustomersRouterBuilder({
                    customersController: this._customersController
                }).build()
            )

        return router;
    }
};
