module.exports = class UsersGateway {

    constructor({ database }) {
        this._usersModel = database.UserModel;
    }

    async findAll({ page = 0, perPage = 10 }) {
        return await this._usersModel.findAndCountAll({
            offset: page * perPage,
            limit: perPage,
        });

    }

    findOne({ email }) {
        return this._usersModel.findOne({
            where: { email }
        })
    }

    findById(id) {
        return this._usersModel.findByPk(id)
    }

    create(values) {
        return this._usersModel.create(values)
    }

    update({ values, id }) {
        return this._usersModel.update(values, {
            where: { id }
        })
    }

};
