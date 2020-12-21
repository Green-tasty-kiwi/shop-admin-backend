const express = require('express');
const path = require('path');
const app = express();
const { AppPort } = require('./config/app')
const cors = require('cors');
const bodyParser = require('body-parser')

const AppRouterBuilder = require('./src/api/AppRouterBuilder');

const UsersGateway = require('./src/api/users/UsersGateway');
const ProductsGateway = require('./src/api/products/ProductsGateway');
const OrdersGateway = require('./src/api/orders/OrdersGateway');
const CustomersGateway = require('./src/api/customers/CustomersGateway');
const OrderProductsGateway = require('./src/api/orders/OrderProductsGateway');

const UsersController = require('./src/api/users/UsersController');
const ProductsController = require('./src/api/products/ProductsController');
const OrdersController = require('./src/api/orders/OrdersController');
const CustomersController = require('./src/api/customers/CustomersController');

const database = require('./database');

const appRouterBuiler = new AppRouterBuilder({
    usersController: new UsersController({
        usersGateway: new UsersGateway({ database })
    }),
    productsController: new ProductsController({
        productsGateway: new ProductsGateway({ database })
    }),
    ordersController: new OrdersController({
        ordersGateway: new OrdersGateway({ database }),
        productsGateway: new ProductsGateway({ database }),
        customersGateway: new CustomersGateway({ database }),
        orderProductsGateway: new OrderProductsGateway({ database }),
    }),
    customersController: new CustomersController({
        customersGateway: new CustomersGateway({ database })
    }),
})

app.use(cors({
    origin: (origin, callback) => {
        callback(null, true);
    },
    credentials: true,
    exposedHeaders: ['X-Pagination', 'Authorization']
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    appRouterBuiler.build()
);

app.use('/static', express.static(path.join(__dirname, 'storage/products')));

(async () => {
    await database.sequelize
        .authenticate();
    await database.sequelize.sync();
    app.listen(AppPort, () => {
        console.log(`Application listen on ${AppPort} port.`);
    });
})()