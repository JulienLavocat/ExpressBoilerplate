"use strict";

const HttpError = require("simplified-http-errors").HttpError;
const JsonError = require("express-json-validator-middleware").ValidationError;

module.exports = (error, req, res, next) => {

    if (error instanceof JsonError)
        error = transformJsonError(error);
    
    if (error instanceof HttpError) {
        const status = error.httpStatus;
        const body = {
            error: error.toJSON()
        };
        return res.status(status).send(body);
    }

    console.error(error);
    //TODO: log it in sentry
    return unknowError(res, new HttpError("internal", "Unkonw error occured, please report it", error.message));
}

function transformJsonError(err) {

    const msgs = [];

    err.validationErrors.body.forEach(element => {
        msgs.push({
            field: element.dataPath.substring(1),
            error: element.message
        });
    });

    return new HttpError("invalid-argument", "Invalid paylaod", msgs);
}

function unknowError(res, error) {
    const status = error.httpStatus;
    const body = {
        error: error.toJSON()
    };
    return res.status(status).send(body);
}