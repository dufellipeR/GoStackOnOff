const express = require("express");
const UserController = require("../controllers/UserController");

const routes = express.Router();

routes.route("/").get(UserController.index).post(UserController.store);

routes
  .route("/:_id")
  .get(UserController.show)
  .put(UserController.update)
  .delete(UserController.delete);

module.exports = routes;
