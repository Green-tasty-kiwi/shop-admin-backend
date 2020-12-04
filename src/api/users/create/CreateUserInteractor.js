const { AlreadyExistsError } = require('../../../../utils/errors/AlreadyExistsError');

module.exports = class CreateUserInteractor {
    constructor({
        responder,
        usersGateway,
        responseBuilder,
    }) {
        this._responder = responder;
        this._usersGateway = usersGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {

        const existUser = await this._usersGateway.findOne({
            phone: request.phone,
        });

        if (existUser) {
            this._responder.respondFailure(new AlreadyExistsError('User already exist'));
            return;
        }


        const user = await this._usersGateway.create({
            firstName: request.firstName,
            lastName: request.lastName,
            phone: request.phone,
            city: request.city,
            address: request.address,
            house: request.house,
            appartment: request.appartment,
        });

        const response = this._responseBuilder.build(user);

        this._responder.respondSuccess(response);
    }
};