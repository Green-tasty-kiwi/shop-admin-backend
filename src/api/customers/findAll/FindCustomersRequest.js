module.exports = class FindCustomersRequest {
    costructor(request) {
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