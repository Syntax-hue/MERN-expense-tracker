const express = require("express");
const path = require("path");
const morgan = require("morgan");

require("dotenv").config({ path: "../.env" });
require("./db")();

const app = express();

app.use(express.json());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use("/api/v1/", require("./modules"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

module.exports = app;
