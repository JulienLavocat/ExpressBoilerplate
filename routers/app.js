"use strict";

const router = require("express").Router();
const controller = require("../controllers/app");

router.get("/", controller.root);

module.exports = router;

