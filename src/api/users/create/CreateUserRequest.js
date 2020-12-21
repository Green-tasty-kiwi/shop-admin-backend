module.exports = class CreateUserRequest {
    constructor(request) {
        this._firstName = request.body.firstName;
        this._lastName = request.body.lastName;
        this._email = request.body.email;
        this._password = request.body.password;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get email() {
        return this._email;
    }

    get password() {
        return this._password;
    }
};
