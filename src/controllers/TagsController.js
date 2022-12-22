<<<<<<< HEAD
const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const {user_id} = request.params;

    const tags = await knex("movie_tags")
    .where({ user_id })

    return response.json(tags);
  }
}

=======
const knex = require("../database/knex");

class TagsController {
  async index(request, response) {
    const {user_id} = request.params;

    const tags = await knex("movie_tags")
    .where({ user_id })

    return response.json(tags);
  }
}

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = TagsController;