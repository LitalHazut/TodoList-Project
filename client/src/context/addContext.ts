import { useTodosContext } from '../context/todoContext';
import { createTask } from '../tasks-service';

export const useAddTask = (setNewTask: (newTask: string) => void) => {
  const { tasks, setTasks } = useTodosContext();
  return (newTask: string) => {
    let id = tasks.length + 1;
    let newEntry = { id, name: newTask, isCompleted: false };
    createTask(newEntry)
      .then(() => setTasks([...tasks, newEntry]))
      .catch((e) => {
        alert('oh no i failed!!');
      });
    setNewTask('');
  };
};
