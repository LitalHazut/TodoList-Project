import React, { useState, useEffect } from 'react';
import { TodoContextType, ITask } from '../types';
import {
  createTask,
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

  const addTask: TodoContextType['addTask'] = (newTask: string) => {
    let id = tasks.length + 1;
    let newEntry = { id, name: newTask, isCompleted: false };
    createTask(newEntry)
      .then(() => setTasks([...tasks, newEntry]))
      .catch((e) => {
        alert('oh no i failed!!');
      });
  };

  const markDone = (t: ITask) => {
    const updatedTask = { ...t };
    updatedTask.isCompleted = !updatedTask.isCompleted;
    let newTask = tasks.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(newTask);
    updateTaskOnDb(updatedTask);
  };

  //Delete task
  const deleteTask = (id: number) => {
    let newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    deleteTaskFromDb(id);
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData(null);
  };

  // Change task for update
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
    setTasks(updatedTasks);
    updateTaskOnDb(task);
    setUpdateData(null);
  };

  return (
    <TodoContext.Provider
      value={{
        tasks,
        markDone,
        deleteTask,
        setUpdateData,
        changeTask,
        addTask,
        updateData,
        updateTask,
        cancelUpdate,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
