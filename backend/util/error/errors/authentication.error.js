/**
 * Created by kyle on 6/4/16.
 */

'use strict'
var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.
 */
class AuthenticationError extends BaseError{

    constructor(message) {
        super(message);
    }

};

module.exports = AuthenticationError;