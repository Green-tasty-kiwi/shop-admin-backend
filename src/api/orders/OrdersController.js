
const CreateOrderInteractor = require('./create/CreateOrderInteractor');
const CreateOrderRequest = require('./create/CreateOrderRequest');

const FindOrdersInteractor = require('./findAll/FindOrdersInteractor');
const FindOrdersRequest = require('./findAll/FindOrdersRequest');

const FindOrderInteractor = require('./findOne/FindOrderInteractor');
const FindOrderRequest = require('./findOne/FindOrderRequest');

const OrderResponseBuilder = require('./OrderResponseBuilder');
const HttpResponder = require('../../core/HttpResponder');

module.exports = class OrdersController {

    constructor({
        ordersGateway,
        orderProductsGateway,
        customersGateway,
        productsGateway,
    }) {
        this._ordersGateway = ordersGateway;
        this._orderProductsGateway = orderProductsGateway;
        this._customersGateway = customersGateway;
        this._productsGateway = productsGateway;
    }

    create(request, response, next) {
        new CreateOrderInteractor({
            responder: new HttpResponder(response),
            ordersGateway: this._ordersGateway,
            orderProductsGateway: this._orderProductsGateway,
            customersGateway: this._customersGateway,
            responseBuilder: new OrderResponseBuilder(),
        }).execute(new CreateOrderRequest(request));
    }

    findOrders(request, response, next) {
        new FindOrdersInteractor({
            responder: new HttpResponder(response),
            ordersGateway: this._ordersGateway,
            responseBuilder: new OrderResponseBuilder(),
        }).execute(new FindOrdersRequest(request));
    }

    findOrder(request, response, next) {
        new FindOrderInteractor({
            responder: new HttpResponder(response),
            ordersGateway: this._ordersGateway,
            responseBuilder: new OrderResponseBuilder(),
        }).execute(new FindOrderRequest(request));
    }
}