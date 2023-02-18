'use strict';
exports.__esModule = true;
var mysql = require('mysql');
// const mysql = require('mysql');
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  credentials: true,
  password: 'password',
  database: 'todolist',
});
module.exports = db;
