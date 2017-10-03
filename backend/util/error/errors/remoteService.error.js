/**
 * Created by kyle on 17/5/16.
 */


'use strict'
var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.
 */
class RemoteServiceError extends BaseError{

    constructor(message) {
        super(message);
    }
};

module.exports = RemoteServiceError;