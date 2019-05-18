"use strict";

const HttpError = require("simplified-http-errors").HttpError;

exports.root = async function (req, res) {

    if(req.query.throwError)
        throw new HttpError("aborted", "User requested an error", {hereAreTheDetails: "The cake is a lie."});

    res.send("Hello world!");
}