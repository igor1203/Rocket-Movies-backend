<<<<<<< HEAD
const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router()

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);

=======
const { Router } = require("express");

const TagsController = require("../controllers/TagsController");

const tagsRoutes = Router()

const tagsController = new TagsController();

tagsRoutes.get("/:user_id", tagsController.index);

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = tagsRoutes;