module.exports = class FindUsersInterator {
    constructor({ responder, usersGateway, responseBuilder }) {
        this._responder = responder;
        this._usersGateway = usersGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {
        const user = await this._usersGateway.findById({
            id: request.userId
        });

        const response = this._responseBuilder.build(user)

        this._responder.respondSuccess(response);
    }
}