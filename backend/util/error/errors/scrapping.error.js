/**
 * Created by kyle on 28/4/16.
 */

'use strict'
var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.
 */
class ScrappingError extends BaseError{

    constructor(message, url) {
        super(message);
        this.url = url;
    }
};

module.exports = ScrappingError;