const TasksService = require('./tasksService');
const express = require('express');
const db = require('./Config/db');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const taskService = new TasksService();

// Route to get all posts
app.get('/api/get', async (req, res) => {
  res.send({ tasks: await taskService.getAllTasks() });
});

app.post('/api/post', (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const isCompleted = req.body.isCompleted;
  var sql = `INSERT INTO tasks(name,isCompleted) VALUES ("${name}", "${false}")`;
  debugger;
  db.query(sql, function (err, result) {
    debugger;
    if (err) throw err;
    console.log('record inserted');
    req.flash('success', 'Data added successfully!');
    res.redirect('/');
  });
});

app.delete('/api/delete', (req, res) => {
  var task = { id: req.params.id };
  db.query(
    'DELETE FROM tasks WHERE id = ' + req.params.id,
    task,
    function (err, result) {
      if (err) {
        req.flash('error', err);
        res.redirect('/');
      } else {
        req.flash('success', 'Data removed :' + req.params.id);
        res.redirect('/');
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
