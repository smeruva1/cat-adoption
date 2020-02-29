// Set up MySQL connection.
var mysql = require("mysql");

//load environment variables
require('dotenv').config();

//Create connection to DB
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_NAME
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
