const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    port : 5432,
    user : 'postgres',
    password : '123456',
    database : 'usuarios_query_builder'
  }
});

module.exports = knex;