// const db = require('./Config/db');
import db from './Config/db';

module.exports = class TasksService {
  getAllTasks() {
    return new Promise((resolve, reject) =>
      db.query('SELECT * FROM tasks', (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
    );
  }
};
export default tasksService;
