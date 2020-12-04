const ApiError = require('./ApiError');
const HttpStatusCode = require('../constants/HttpStatusCode');

class NotFoundError extends ApiError {
    /** @param {string} [customMessage] */
    constructor(customMessage) {
        super({
            code: 'NOT_FOUND',
            message: customMessage || 'Resource not found',
            httpStatus: HttpStatusCode.NOT_FOUND
        });
    }
}

module.exports = NotFoundError;
