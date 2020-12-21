const express = require('express');
const createUploadFileMiddleware = require('../../middleware/uploadImageMiddleware')

module.exports = class ProductsRouterBuilder {

    constructor({
        productsController
    }) {
        this._productsController = productsController;
    }

    build() {
        const router = express.Router();

        router
            .post('/', createUploadFileMiddleware(), (...args) => this._productsController.create(...args))
            .get('/', (...args) => this._productsController.findProducts(...args))
            .post('/:productId', createUploadFileMiddleware(), (...args) => this._productsController.updateProduct(...args))
            .get('/:productId', (...args) => this._productsController.findProduct(...args))

        return router;
    }
}