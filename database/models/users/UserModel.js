module.exports = class User extends require('sequelize').Model {
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
                email: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false,
                },
                password: {
                    type: Sequelize.STRING,
                    unique: true,
                    allowNull: false,
                },

                role: {
                    type: Sequelize.ENUM('customer', 'admin'),
                },
            },
            {
                tableName: 'users',
                paranoid: true,
                timestamps: true,
                sequelize,
                underscored: true,
            }
        );
    }
};
