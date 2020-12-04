module.exports = class ProductsGateway {

    constructor({ database }) {
        this._productsModel = database.ProductsModel;
    }

    async findAll({ page = 0, perPage = 10 }) {
        return await this._productsModel.findAndCountAll({
            offset: page * perPage,
            limit: perPage,
        });

    }

    findById(id) {
        return this._productsModel.findByPk(id)
    }

    create(values) {
        return this._productsModel.create(values)
    }

    update({ values, id }) {
        return this._productsModel.update(values, {
            where: { id }
        })
    }

};
