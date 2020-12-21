module.exports = class CustomersGateway {

    constructor({ database }) {
        this._customersModel = database.CustomerModel;
    }

    async findAll({ page = 0, perPage = 10 }) {
        return await this._customersModel.findAndCountAll({
            offset: page * perPage,
            limit: perPage,
        });

    }

    findOne({ phone }) {
        return this._customersModel.findOne({
            where: { phone }
        })
    }

    findById(id) {
        return this._customersModel.findByPk(id)
    }

    create(values) {
        return this._customersModel.create(values)
    }

    update({ values, id }) {
        return this._customersModel.update(values, {
            where: { id }
        })
    }

};
