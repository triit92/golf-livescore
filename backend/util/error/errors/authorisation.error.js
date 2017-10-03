/**
 * Created by kyle on 25/4/16.
 */

'use strict'

var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.
 */
class AuthorisationError extends BaseError{

    constructor(message) {
        super(message);
    }

};

module.exports = AuthorisationError;