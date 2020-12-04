const AppError = require('./AppError');
const HttpStatusCode = require('../constants/HttpStatusCode');

class ApiError extends AppError {
    /**
     * @param {object} [params]
     * @param {string} [params.code]
     * @param {number} [params.httpStatus]
     * @param {string} [params.message]
     */
    constructor({ code, httpStatus, message } = {}) {
        super({
            name: 'ApiError',
            code,
            message
        });

        this.httpStatus = httpStatus || HttpStatusCode.INTERNAL_SERVER_ERROR;
    }
}

module.exports = ApiError;
