module.exports = class FindUserRequest {
    construtor(request) {
        this._userId = request.params.userId;
    }

    get userId() {
        return this._userId;
    }
}