import { useTodosContext } from '../context/todoContext';
import { createTask } from '../tasks-service';
import { v4 as uuid } from 'uuid';
export const useAddTask = (setNewTask: (newTask: string) => void) => {
  const { tasks, setTasks } = useTodosContext();
  return (newTask: string) => {
    const unique_id = uuid();
    let id = parseInt(unique_id);
    let newEntry = {id, name: newTask, isCompleted: false };
    createTask(newEntry)
      .then(() => setTasks([...tasks, newEntry]))
      .catch((e) => {
        alert('oh no i failed!!');
      });
    setNewTask('');
  };
};
