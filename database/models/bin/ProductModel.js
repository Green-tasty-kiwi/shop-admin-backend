module.exports = class Product extends require('sequelize').Model {
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

                name: {
                    type: Sequelize.STRING,
                    unique: true,
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
                meta_headers: {
                    type: Sequelize.STRING,
                },
                meta_description: {
                    type: Sequelize.STRING,
                },
                meta_keys: {
                    type: Sequelize.STRING,
                },
                status: {
                    type: Sequelize.ENUM('enabled', 'in_stock', 'disabled'),
                    defaultValue: 'enabled',
                },
            },
            {
                tableName: 'products',
                paranoid: true,
                timestamps: true,
                sequelize,
                underscored: true,
            }
        );
    }
    isInStock() {
        return this.status === 'in_stock';
    }
    isDisabled() {
        return this.status === 'disabled';
    }
    static associate(models) {
        Product.belongsTo(models.CategoryModel, {
            onDelete: 'NO ACTION',
            onUpdate: 'NO ACTION',
            foreignKey: 'category_id',
            as: 'category',
        });
    };
};
