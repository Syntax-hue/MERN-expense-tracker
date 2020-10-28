const express = require("express");

require("dotenv").config({ path: "../.env" });
require("./db")();

const app = express();

app.use(express.json());
app.use("/api/v1/", require("./modules"));

module.exports = app;
