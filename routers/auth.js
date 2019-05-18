"use strict";

const router = require("express").Router();
const controller = require("../controllers/auth");
const Validator = require("express-json-validator-middleware").Validator;
const schemas = require("../schemas");

const validate = new Validator().validate;

router.post("/register", validate({body: schemas.base}), controller.register);

module.exports = router;