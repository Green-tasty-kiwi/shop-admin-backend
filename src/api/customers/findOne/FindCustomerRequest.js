module.exports = class FindCustomerRequest {
    construtor(request) {
        this._customerId = request.params.customerId;
    }

    get customerId() {
        return this._customerId;
    }
}