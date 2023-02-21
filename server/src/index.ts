import TasksService from './tasksService';
import express from 'express';
import dbConnection from './dbConnection';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const taskService = new TasksService();

// Route to get all posts
app.get('/api/get', async (req, res) => {
  res.send({ tasks: await taskService.getAllTasks() });
});

app.post('/api/post', async (req, res) => {
  const name = req.body.name;
  console.log(req.body.name);
  debugger;
  const isCompleted = false;
  debugger;
  res.send({ tasks: await taskService.addTask(name, isCompleted) });
});

app.delete('/delete/:id', async (req, res) => {
  var task = { id: req.params.id };
  return new Promise((resolve, reject) =>
  dbConnection.query(
      'DELETE FROM tasks WHERE id = ' + req.params.id,
      task,
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    )
  );
});

// app.put('/put/:id', (req, resp) => {
//   const data = [
//     req.body.name,
//     req.body.isCompleted,
//   ];
//   con.query(
//     'UPDATE tasks SET name = ?, isCompleted = ?, WHERE id = ?',
//     data,
//     (error, results, fields) => {
//       if (error) throw error;
//       resp.send(results);
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
