import * as React from 'react';
import { TodoContextType, ITask } from '../types';
import { TodoContext } from '../context/todoContext';
import TaskList from '../Components/taskList';
import AddTaskForm from '../Components/AddTaskForm';
import UpdateForm from '../Components/UpdateForm';
const Display = () => {
  const {
    toDo,
    markDone,
    deleteTask,
    setUpdateData,
    addTask,
    newTask,
    setNewTask,
    updateData,
    changeTask,
    updateTask,
    cancelUpdate,
  } = React.useContext(TodoContext) as TodoContextType;
  return (
    <>
      {updateData && updateData.name ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AddTaskForm
          addTask={addTask}
          newTask={newTask}
          setNewTask={setNewTask}
        />
      )}

      {toDo && toDo.length ? '' : 'No Tasks ...'}
      <TaskList
        toDo={toDo}
        markDone={markDone}
        deleteTask={deleteTask}
        setUpdateData={setUpdateData}
      />
    </>
  );
};
export default Display;
