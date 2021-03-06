module.exports = class FindProductsRequest {
    constructor(request) {
        this._page = request.query.page;
        this._perPage = request.query.perPage;
    }

    get page() {
        return this._page;
    }

    get perPage() {
        return this._perPage;
    }
}