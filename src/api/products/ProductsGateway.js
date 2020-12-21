module.exports = class ProductsGateway {

    constructor({ database }) {
        this._productsModel = database.ProductModel;
    }

    async findAll({ page = 0, perPage = 10 }) {
        return await this._productsModel.findAndCountAll({
            offset: page * perPage,
            limit: perPage,
        });

    }

    findOne({ name }) {
        return this._productsModel.findOne({
            where: { name }
        })
    }

    findById(id) {
        return this._productsModel.findByPk(id)
    }

    create(values) {
        return this._productsModel.create(values)
    }

    async updateOne({ id }, values) {
        await this._productsModel.update(values, {
            where: { id }
        })

        return this.findById(id);
    }

};
