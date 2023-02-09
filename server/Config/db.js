const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  credentials: true,
  password: 'password',
  database: 'todolist',
});

module.exports = db;
