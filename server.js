const express = require('express');
const app = express();
const { AppPort } = require('./config/app')

const AppRouterBuilder = require('./src/api/AppRouterBuilder');

const UsersGateway = require('./src/api/users/UsersGateway');
const ProductsGateway = require('./src/api/products/ProductsGateway');
const OrdersGateway = require('./src/api/orders/OrdersGateway');

const UsersController = require('./src/api/users/UsersController');
const ProductsController = require('./src/api/products/ProductsController');
const OrdersController = require('./src/api/orders/OrdersController');

const database = [];

const appRouterBuiler = new AppRouterBuilder({
    usersController: new UsersController({
        usersGateway: new UsersGateway({ database })
    }),
    productsController: new ProductsController({
        productsGateway: new ProductsGateway({ database })
    }),
    ordersController: new OrdersController({
        ordersGateway: new OrdersGateway({ database })
    })
})

app.use(
    appRouterBuiler.build()
)
app.listen(AppPort, () => {
    console.log(`Application listen on ${AppPort} port.`);
});