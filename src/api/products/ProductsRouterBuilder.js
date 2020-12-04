const express = require('express');
const uploadImageMiddleware = require('../../middleware/uploadImageMiddleware')

module.exports = class ProductsRouterBuilder {

    constructor({
        productsController
    }) {
        this._productsController = productsController;
    }

    build() {
        const router = express.Router();

        router
            .post('/', uploadImageMiddleware(), (...args) => this._productsController.create(...args))
            .get('/', (...args) => this._productsController.findProducts(...args))
            .get('/:productId', (...args) => this._productsController.findProduct(...args))

        return router;
    }
}