module.exports = class HttpResponder {
    /**
     * @param {import('express').Response} response 
     */
    constructor(response) {
        this._response = response;
    }

    respondSuccess(data) {
        this._response
            .status(200)
            .json(data);
    }

    respondFailure(error) {
        this._response
            .status(error.httpStatus)
            .json({
                message: error.message,
                code: error.code
            })
    }
}