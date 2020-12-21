module.exports = class OrderProduct extends require('sequelize').Model {
    static init(sequelize, Sequelize) {
        return super.init(
            {
                id: {
                    type: Sequelize.INTEGER,
                    primaryKey: true,
                    allowNull: false,
                    autoIncrement: true,
                    unique: true,
                },

                orderId: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },

                name: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },

                description: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },

                price: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                quantity: {
                    type: Sequelize.INTEGER,
                },
                image: {
                    type: Sequelize.STRING,
                },
            },
            {
                tableName: 'order_products',
                paranoid: true,
                timestamps: true,
                sequelize,
            }
        );
    }

    static associate(models) {
        OrderProduct.belongsTo(models.OrderModel, {
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
            foreignKey: 'order_id',
            as: 'order',
        });
        OrderProduct.hasOne(models.ProductModel, {
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
            foreignKey: 'order_product_id',
            as: 'product',
        });
    };
};
