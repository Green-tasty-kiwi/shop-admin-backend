
const CreateUserInteractor = require('./create/CreateUserInteractor');
const CreateUserRequest = require('./create/CreateUserRequest');

const FindUsersInterator = require('./findAll/FindUsersInterator');
const FindUsersRequest = require('./findAll/FindUsersRequest');

const FindUserInterator = require('./findOne/FindUserInterator');
const FindUserRequest = require('./findOne/FindUserRequest');

const UserResponseBuilder = require('./UserResponseBuilder');
const HttpResponder = require('../../core/HttpResponder');

module.exports = class UsersController {

    constructor({ usersGateway }) {
        this._usersGateway = usersGateway;
    }

    create(request, response, next) {
        new CreateUserInteractor({
            responder: new HttpResponder(response),
            usersGateway: this._usersGateway,
            responseBuilder: new UserResponseBuilder(),
        }).execute(new CreateUserRequest(request));
    }

    findUsers(request, response, next) {
        new FindUsersInterator({
            responder: new HttpResponder(response),
            usersGateway: this._usersGateway,
            responseBuilder: new UserResponseBuilder(),
        }).execute(new FindUsersRequest(request));
    }

    findUser(request, response, next) {
        new FindUserInterator({
            responder: new HttpResponder(response),
            usersGateway: this._usersGateway,
            responseBuilder: new UserResponseBuilder(),
        }).execute(new FindUserRequest(request));
    }
}