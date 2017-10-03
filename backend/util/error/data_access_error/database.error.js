/**
 * Created by kyle on 6/4/16.
 */

'use strict'
var BaseError = require('../base.error');

/**
 *
 * @param message: string - created by developer when throwing the error.
 * @param query: string - sql query
 * @param values: [
 *      value: any primitive - to replace its placeholder in query
 * ]
 */
 class DatabaseError extends BaseError{

    constructor(message) {
        super(message);
    }
};

module.exports = DatabaseError;