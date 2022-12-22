<<<<<<< HEAD
const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development);

=======
const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development);

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = connection;