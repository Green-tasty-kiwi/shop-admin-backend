module.exports = class FindUsersInterator {
    constructor({ responder, usersGateway, responseBuilder }) {
        this._responder = responder;
        this._usersGateway = usersGateway;
        this._responseBuilder = responseBuilder;
    }

    async execute(request) {
        const { rows, count } = await this._usersGateway.findAll({
            page: request.page,
            perPage: request.perPage,
        });

        const users = [];

        for (const user of rows) {
            users.push(this._responseBuilder.build(user))
        }

        const response = {
            rows: users,
            count,
        };

        this._responder.respondSuccess(response);
    }
}