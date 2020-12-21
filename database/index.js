const { Sequelize } = require('sequelize');

const models = {
    ProductModel: require('./models/bin/ProductModel.js'),
    CategoryModel: require('./models/bin/CategoryModel'),
    CustomerModel: require('./models/users/CustomerModel'),
    UserModel: require('./models/users/UserModel'),
    OrderProductsModel: require('./models/bin/OrderProductsModel'),
    OrderModel: require('./models/bin/OrderModel'),
};
const sequelize = new Sequelize('shop_db', 'apple', '123456', {
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    operatorsAliases: Sequelize.Op,
});

// MUST INIT BEFORE MAKE ASSOCIATIONS
Object.values(models).forEach((model) => model.init(sequelize, Sequelize));

Object.values(models)
    .filter(({ associate }) => typeof associate === 'function')
    .forEach((model) => model.associate(models));

const database = {
    ...models,
    sequelize,
};

module.exports = database;
