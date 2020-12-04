const ApiError = require('./ApiError');
const HttpStatusCode = require('../constants/HttpStatusCode');

class NotAllowedError extends ApiError {
    /** @param {string} [customMessage] */
    constructor(customMessage) {
        super({
            code: 'NOT_ALLOWED',
            message: customMessage || 'This action is forbidden',
            httpStatus: HttpStatusCode.FORBIDDEN
        });
    }
}

module.exports = NotAllowedError;
