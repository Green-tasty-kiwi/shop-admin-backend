module.exports = class FindProductRequest {
    constructor(request) {
        this._productId = request.params.productId;
    }

    get productId() {
        return this._productId;
    }
}