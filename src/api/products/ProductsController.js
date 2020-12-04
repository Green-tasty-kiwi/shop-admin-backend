
const CreateProductInteractor = require('./create/CreateProductInteractor');
const CreateProductRequest = require('./create/CreateProductRequest');

const FindProductsInteractor = require('./findAll/FindProductsInteractor');
const FindProductsRequest = require('./findAll/FindProductsRequest');

const FindProductInteractor = require('./findOne/FindProductInteractor');
const FindProductRequest = require('./findOne/FindProductRequest');

const ProductResponseBuilder = require('./ProductResponseBuilder');
const HttpResponder = require('../../core/HttpResponder');

module.exports = class ProductsController {

    constructor({ ProductsGateway }) {
        this._productsGateway = productsGateway;
    }

    create(request, response, next) {
        new CreateProductInteractor({
            responder: new HttpResponder(response),
            productsGateway: this._productsGateway,
            responseBuilder: new ProductResponseBuilder(),
        }).execute(new CreateProductRequest(request));
    }

    findProducts(request, response, next) {
        new FindProductsInteractor({
            responder: new HttpResponder(response),
            productsGateway: this._productsGateway,
            responseBuilder: new ProductResponseBuilder(),
        }).execute(new FindProductsRequest(request));
    }

    findProduct(request, response, next) {
        new FindProductInteractor({
            responder: new HttpResponder(response),
            productsGateway: this._productsGateway,
            responseBuilder: new ProductResponseBuilder(),
        }).execute(new FindProductRequest(request));
    }
}