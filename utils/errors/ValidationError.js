const ApiError = require('./ApiError');
const HttpStatusCode = require('../constants/HttpStatusCode');

class ValidationError extends ApiError {
    /**
     * @param {string[] | object} errors List of errors in a format:  ['event.name.isRequired']
     */
    constructor(customMessage) {
        super({
            code: 'NOT_ALLOWED',
            message: customMessage || 'This action is forbidden',
            httpStatus: HttpStatusCode.UNPROCESSABLE_ENTITY
        });
    }
}

module.exports = ValidationError;
