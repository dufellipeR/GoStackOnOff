const express = require("express");
const SessionController = require("../controllers/SessionController");

const routes = express.Router();

routes.route("/").get().post(SessionController.store);

module.exports = routes;
