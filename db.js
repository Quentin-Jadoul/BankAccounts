// db.js
const mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  port: 3305,
  user: "root",
  password: "root",
});

function executeQuery(query, callback) {
  db.connect(function(err) {
      if (err) throw err;
      // console.log("Connected!");
      db.query(query, function(err, result) {
          if (err) throw err;
          callback(result);
      });
    });

}

executeQuery("CREATE DATABASE IF NOT EXISTS notesapp;", function(result) {
  // console.log(result);
});

db.query("USE notesapp;", function(err, result) {
  if (err) throw err;
  // console.log("Using SchoolApp database.");
});

db.query("CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255),  password VARCHAR(255),role VARCHAR(255));", function(err, result) {
  if (err) throw err;
  // console.log("Teachers table created successfully.");
});

db.query("CREATE TABLE IF NOT EXISTS notes (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255),  body VARCHAR(255),access VARCHAR(255));", function(err, result) {
  if (err) throw err;
  // console.log("Teachers table created successfully.");
});


module.exports = db;
