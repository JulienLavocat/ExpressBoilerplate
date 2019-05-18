"use strict";

const app = require("express")();
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

require("express-async-errors");

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use(require("./routers"));

app.use(require("./errorHandler"));

app.listen(80, () => {
    console.log("Listening on 80"); 
});
