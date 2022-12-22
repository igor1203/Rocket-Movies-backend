<<<<<<< HEAD
const sqliteConnection = require("../../sqlite");

const createUsers = require("./createUsers");

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
}

=======
const sqliteConnection = require("../../sqlite");

const createUsers = require("./createUsers");

async function migrationsRun(){
  const schemas = [
    createUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error));
}

>>>>>>> 3125b3a91bf4b598579f28cd797620bb6e8e6d4a
module.exports = migrationsRun;