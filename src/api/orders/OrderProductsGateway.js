module.exports = class OrderProductsGateway {
    constructor({ database }) {
        this._orderProductModel = database.OrderProductsModel;
    }

    async findAll({ page = 0, perPage = 10 }) {
        return await this._ordersModel.findAndCountAll({
            offset: page * perPage,
            limit: perPage,
        });

    }

    findById(id) {
        return this._OrderProductsModel.findByPk(id)
    }

    create(values) {
        return this._OrderProductsModel.create(values)
    }

    update({ values, id }) {
        return this._OrderProductsModel.update(values, {
            where: { id }
        })
    }
}