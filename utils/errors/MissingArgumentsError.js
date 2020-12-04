const AppError = require('./AppError');

class MissingArgumentsError extends AppError {
    constructor(args = []) {
        super({
            name: 'MissingArgumentsError',
            code: 'MISSING_ARGUMENTS',
            message: `"${args.join('", "')}" argument(s) is required`
        });
    }
}

module.exports = MissingArgumentsError;
