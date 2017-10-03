/**
 * Created by kyle on 6/4/16.
 */

'use strict'
var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.
 */
class ObjectExistedError extends BaseError{

    constructor(message, field_name, value) {
        super(message);
        this.field_name = field_name;
        this.value = value;
    }
};

module.exports = ObjectExistedError;