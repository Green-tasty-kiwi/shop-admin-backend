module.exports = class CreateUserRequest {
    constructor(request) {
        this._firstName = request.body.firstName;
        this._lastName = request.body.lastName;
        this._phone = request.body.phone;
        this._city = request.body.city;
        this._address = request.body.address;
        this._house = request.body.house;
        this._appartment = request.body.appartment;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get phone() {
        return this._phone;
    }

    get city() {
        return this._city;
    }

    get address() {
        return this._address;
    }

    get house() {
        return this._house;
    }

    get appartment() {
        return this._appartment;
    }
};
