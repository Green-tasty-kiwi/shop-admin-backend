const ApiError = require('./ApiError');
const HttpStatusCode = require('../constants/HttpStatusCode');

/** @final */
class AlreadyExistsError extends ApiError {
    /** @param {string} [customMessage] */
    constructor(customMessage) {
        super({
            code: 'ALREADY_EXISTS',
            message: customMessage || 'This resource already exists',
            httpStatus: HttpStatusCode.CONFLICT
        });
    }
}

module.exports = AlreadyExistsError;
