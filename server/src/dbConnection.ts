import mysql from 'mysql';

const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todolist',
});

export default dbConnection;
