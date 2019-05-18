"use strict";

const HttpError = require("simplified-http-errors").HttpError;

exports.root = async function (req, res) {
    res.send("Hello world!");
}