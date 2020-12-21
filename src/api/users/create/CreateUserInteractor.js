const { AlreadyExistsError } = require('../../../../utils/errors');
const bcrypt = require('bcrypt');
const saltRounds = 10;
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
            email: request.email,
        });

        if (existUser) {
            this._responder.respondFailure(new AlreadyExistsError('User already exist'));
            return;
        }

        const password = request.password;

        const user = await this._usersGateway.create({
            firstName: request.firstName,
            lastName: request.lastName,
            email: request.email,
            password: bcrypt.hashSync(password, saltRounds)
        });

        const response = this._responseBuilder.build(user);

        this._responder.respondSuccess(response);
    }
};