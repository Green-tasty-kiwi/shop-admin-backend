module.exports = class UpdateProductRequest {
    constructor(request) {
        this._productId = request.params.productId;
        this._name = request.body.name;
        this._description = request.body.description;
        this._price = request.body.price;
        this._status = request.body.status;
        this._quantity = request.body.quantity;
        this._image = request.file.filename;
        this._metaDescription = request.body.metaDescription;
        this._metaKeys = request.body.metaKeys;
        this._metaHeaders = request.body.metaHeaders;
    }

    get name() {
        return this._name
    }

    get productId() {
        return this._productId
    }

    get description() {
        return this._description
    }

    get price() {
        return this._price
    }

    get status() {
        return this._status
    }

    get quantity() {
        return this._quantity
    }

    get image() {
        return this._image
    }

    get metaDescription() {
        return this._metaDescription
    }

    get metaKeys() {
        return this._metaKeys
    }

    get metaHeaders() {
        return this._metaHeaders
    }
}
