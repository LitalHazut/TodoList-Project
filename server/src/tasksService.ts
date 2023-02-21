import dbConnection from './dbConnection';

class TasksService {
  getAllTasks() {
    return new Promise((resolve, reject) =>
    dbConnection.query('SELECT * FROM tasks', (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
    );
  }

  addTask(name: string, isCompleted: boolean) {
    const sql = 'INSERT INTO tasks(name,isCompleted) VALUES (?, ?)';
    const values = [name, isCompleted];
    return new Promise((resolve, reject) =>
    dbConnection.query(sql, values, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
    );
  }
}
export default TasksService;
