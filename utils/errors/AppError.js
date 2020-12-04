class AppError extends Error {
    /**
     * @param {object} [params]
     * @param {string} [params.name]
     * @param {string} [params.code]
     * @param {string} [params.message]
     */
    constructor({ name, code, message } = {}) {
        super();

        // https://github.com/babel/babel/issues/3083#issuecomment-315569824
        if (!(this instanceof AppError)) {
            // @ts-ignore
            this.constructor = AppError;
            // @ts-ignore
            this.__proto__ = AppError.prototype;
        }

        this.name = name || 'AppError';
        this.code = code || 'INTERNAL_ERROR';
        this.message = message || 'Internal server error';

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }

    toPlain() {
        return {
            name: this.name,
            code: this.code,
            message: this.message
        };
    }
}

module.exports = AppError;
