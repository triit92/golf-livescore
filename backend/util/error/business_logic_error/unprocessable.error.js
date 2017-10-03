/**
 * Created by kyle on 28/4/16.
 */

'use strict'
var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.

 */
class UnprocessableError extends BaseError{

    constructor(message, field, value) {
        super(message);
        this.field_name = field;
        this.value = value;
    }
};

module.exports = UnprocessableError;