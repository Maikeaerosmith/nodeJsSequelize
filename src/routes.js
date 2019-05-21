const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");

//GET/POST/PUT/DELETE
routes.post("/user", UserController.create);
routes.get("/user", UserController.allUsers);
routes.get("/user/:id", UserController.userById);
routes.put("/user/:id", UserController.editUser);
routes.delete("/user/:id", UserController.deleteUser);

module.exports = routes;
