import React, { useState, useEffect } from 'react';
import { TodoContextType, ITask } from '../types';
import {
  deleteTaskFromDb,
  fetchTasks,
  updateTaskOnDb,
} from '../tasks-service';

export const TodoContext = React.createContext<TodoContextType>(
  {} as TodoContextType
);

interface TodoContextProviderProps {
  children: React.ReactNode;
}

export const useTodosContext = () =>
  React.useContext(TodoContext) as TodoContextType;

export const TodoContextProvider = (props: TodoContextProviderProps) => {
  const [updateData, setUpdateData] = React.useState<ITask | null>(null);
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    fetchTasks()
      .then((data) => {
        setTasks(data.data.tasks);
      })
      .catch((e) => {
        return e;
      });
  }, []);


  const markDone = (t: ITask) => {
    const updatedTask = { ...t };
    updatedTask.isCompleted = !updatedTask.isCompleted;
    let newTask = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    updateTaskOnDb(updatedTask)
    .then(() => setTasks(newTask))
    .catch((e) => {
        alert('oh no i failed!!');
      });
    
  };

  const deleteTask = (id: number) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    deleteTaskFromDb(id)
    .then(() => setTasks(newTasks))
    .catch((e) => {
        alert('oh no i failed!!');
      });
  };

  const cancelUpdate = () => {
    setUpdateData(null);
  };

  const changeTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newId = updateData?.id ?? 0;
    const task: ITask = {
      id: newId,
      name: e.target.value,
      isCompleted: updateData?.isCompleted || false,
    };
    setUpdateData(task);
  };

  const updateTask = (task: ITask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === updateData?.id) {
        return {
          ...task,
          name: updateData.name,
          isCompleted: updateData.isCompleted,
        };
      } else {
        return task;
      }
    });
    updateTaskOnDb(task)
    .then(() =>setTasks(updatedTasks))
    .catch((e) => {
        alert('oh no i failed!!');
      });
    setUpdateData(null);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        setTasks,
        markDone,
        deleteTask,
        setUpdateData,
        changeTask,
        // addTask,
        updateData,
        updateTask,
        cancelUpdate,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
