<<<<<<< HEAD
const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router()

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update); 

=======
const { Router } = require("express");

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router()

const usersController = new UsersController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/:id", usersController.update); 

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = usersRoutes;