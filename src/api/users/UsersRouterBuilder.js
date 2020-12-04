const express = require('express');

module.exports = class UsersRouterBuilder {

    constructor({
        usersController
    }) {
        this._usersController = usersController;
    }

    build() {
        const router = express.Router();

        router
            .post('/', (...args) => this._usersController.create(...args))
            .get('/', (...args) => this._usersController.findUsers(...args))
            .get('/:userId', (...args) => this._usersController.findUser(...args))

        return router;
    }
}