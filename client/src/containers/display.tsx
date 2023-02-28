import * as React from 'react';
import { TodoContextType } from '../types';
import { TodoContext } from '../context/todoContext';
import TaskList from '../components/taskList';
import AddTaskForm from '../components/addTaskForm';
import UpdateForm from '../components/updateForm';

const Display = () => {
  const {
    tasks,
    markDone,
    deleteTask,
    setUpdateData,
    addTask,
    updateData,
  }: TodoContextType = React.useContext(TodoContext)!;
  return (
    <>
      {updateData && updateData.name ? <UpdateForm /> : <AddTaskForm />}

      {tasks && tasks.length ? '' : 'No Tasks ...'}
      <TaskList
        toDo={tasks}
        markDone={markDone}
        deleteTask={deleteTask}
        setUpdateData={setUpdateData}
      />
    </>
  );
};
export default Display;
