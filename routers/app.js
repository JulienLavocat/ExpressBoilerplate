"use strict";

const router = require("express").Router();
const controller = require("../controllers/app");
const middlewares = require("../middlewares/");

router.get("/", middlewares.auth, controller.root);

module.exports = router;

