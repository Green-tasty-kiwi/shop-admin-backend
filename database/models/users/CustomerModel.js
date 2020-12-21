module.exports = class Customer extends require('sequelize').Model {
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

                firstName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                lastName: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                phone: {
                    type: Sequelize.INTEGER,
                    unique: true,
                    allowNull: false,
                },
                city: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                address: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                house: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
                appartment: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                tableName: 'customers',
                paranoid: true,
                timestamps: true,
                sequelize,
                underscored: true,
            }
        );
    }

    static associate(models) {
        Customer.hasMany(models.OrderModel, {
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
            foreignKey: 'order_id',
            as: 'order',
        });
    };
