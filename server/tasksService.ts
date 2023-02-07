module.exports = class TasksService {
  getAllTasks() {
    db.query('SELECT * FROM tasks', (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

const main = async () => {
  const callMethod = await getAllTasks();
  console.log('result', a);
};

main();
