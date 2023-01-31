const express = require("express");

// let mysql = require('mysql');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Lital7699!!' , 
//   database : 'todolist'
// });

const PORT = process.env.PORT || 3001;

const app = express();

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');
// });