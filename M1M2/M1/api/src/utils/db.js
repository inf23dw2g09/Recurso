'use strict';

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'Pokemon_db_M1', // Make sure this is the correct host name
  user: 'Pokemon',
  password: 'Pokemon',
  database: 'pokemon',
  port: 3306
});

connection.connect(function (err) {
  if (err) {
    console.log('Error on database connection.');
    throw err;
  }
  console.log('Database connection active.');
});

module.exports = connection;
