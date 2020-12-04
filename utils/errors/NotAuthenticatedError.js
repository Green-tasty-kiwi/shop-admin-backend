
const ApiError = require('./ApiError');
const HttpStatusCode = require('../constants/HttpStatusCode');

class NotAuthenticatedError extends ApiError {
    /** @param {string} [customMessage] */
    constructor(customMessage) {
        super({
            code: 'NOT_AUTHENTICATED',
            message: customMessage || 'You are not authenticated',
            httpStatus: HttpStatusCode.UNAUTHORIZED
        });
    }
}

module.exports = NotAuthenticatedError;
