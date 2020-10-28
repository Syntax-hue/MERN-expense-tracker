const router = require("express").Router();
const controller = require("./transactions.controller");

router
  .get("/", controller.getAll)
  .post("/", controller.create)
  .get("/:id", controller.getOne)
  .patch("/:id", controller.update)
  .delete("/:id", controller.delete);

module.exports = router;
