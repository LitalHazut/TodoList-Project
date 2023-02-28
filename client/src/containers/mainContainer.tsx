import { useTodosContext } from '../context/todoContext';
import TaskList from '../components/taskList';
import AddTaskForm from '../components/addTaskForm';
import UpdateForm from '../components/updateForm';

const Display = () => {
  const { tasks,updateData} = useTodosContext();
  return (
    <>
      {updateData && updateData.name ? <UpdateForm /> : <AddTaskForm />}
      {tasks && tasks.length ? '' : 'No Tasks ...'}
      <TaskList/>
    </>
  );
};
export default Display;
