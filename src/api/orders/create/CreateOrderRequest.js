module.exports = class CreateProductRequest {
    constructor(request) {
        this._firstName = request.body.firstName;
        this._lastName = request.body.lastName;
        this._phone = request.body.phone;
        this._city = request.body.city;
        this._address = request.body.address;
        this._appartment = request.body.appartment;
        this._house = request.body.house;
        this._productsId = request.body.productsId;
    }

    get firstName() {
        return this._firstName
    }

    get lastName() {
        return this._lastName
    }

    get phone() {
        return this._phone
    }

    get city() {
        return this._city
    }

    get address() {
        return this._address
    }

    get appartment() {
        return this._appartment
    }

    get house() {
        return this._house
    }

    get productsId() {
        return this._productsId
    }

}
