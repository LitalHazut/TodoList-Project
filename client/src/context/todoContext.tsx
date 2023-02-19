import React, { createContext, useState } from 'react';
import { TodoContextType, ITask } from '../types';

export const TodoContext = React.createContext<TodoContextType | null>(null);

interface TodoContextProviderProps {
  children: React.ReactNode;
}
export const TodoContextProvider = (props: TodoContextProviderProps) => {
  const [newTask, setNewTask] = React.useState('');
  const [updateData, setUpdateData] = React.useState<ITask | null>(null);
  const [toDo, setToDo] = useState<ITask[]>([
    {
      id: 1,
      name: 'Task1',
      isCompleted: false,
    },
    {
      id: 2,
      name: 'Task2',
      isCompleted: true,
    },
  ]);

  //Add task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, name: newTask, isCompleted: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
      console.log('addd');
    }
  };

  const markDone = (id: number) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setToDo(newTask);
  };

  //Delete task
  const deleteTask = (id: number) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
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

  const updateTask = (id: number) => {
    const updatedTasks = toDo.map((task) => {
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

    setToDo(updatedTasks);
  };

  return (
    <TodoContext.Provider
      value={{
        toDo,
        markDone,
        deleteTask,
        setUpdateData,
        changeTask,
        addTask,
        newTask,
        setNewTask,
        updateData,
        updateTask,
        cancelUpdate,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};