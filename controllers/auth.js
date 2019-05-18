"use strict";

const HttpError = require("simplified-http-errors").HttpError;

exports.register = async function (req, res) {
    res.send({registered: true});
}