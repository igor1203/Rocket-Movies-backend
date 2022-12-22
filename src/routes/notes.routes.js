<<<<<<< HEAD
const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router()

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

=======
const { Router } = require("express");

const NotesController = require("../controllers/NotesController");

const notesRoutes = Router()

const notesController = new NotesController();

notesRoutes.get("/", notesController.index);
notesRoutes.post("/:user_id", notesController.create);
notesRoutes.get("/:id", notesController.show);
notesRoutes.delete("/:id", notesController.delete);

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = notesRoutes;