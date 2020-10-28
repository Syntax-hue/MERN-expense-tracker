const express = require("express");
const morgan = require("morgan");

require("dotenv").config({ path: "../.env" });
require("./db")();

const app = express();

app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/", require("./modules"));

module.exports = app;
