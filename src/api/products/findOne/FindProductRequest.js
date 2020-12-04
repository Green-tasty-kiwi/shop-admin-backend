module.exports = class FindProductRequest {
    construtor(request) {
        this._productId = request.params.productId;
    }

    get productId() {
        return this._productId;
    }
}