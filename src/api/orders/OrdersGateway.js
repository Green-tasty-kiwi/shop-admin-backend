module.exports = class OrdersGateway {
    constructor({ database }) {
        this._ordersModel = database.OrdersModel;
    }

    async findAll({ page = 0, perPage = 10 }) {
        return await this._ordersModel.findAndCountAll({
            offset: page * perPage,
            limit: perPage,
        });

    }

    findById(id) {
        return this._ordersModel.findByPk(id)
    }

    create(values) {
        return this._ordersModel.create(values)
    }

    update({ values, id }) {
        return this._ordersModel.update(values, {
            where: { id }
        })
    }
}