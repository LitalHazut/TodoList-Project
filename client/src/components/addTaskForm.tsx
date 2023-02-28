import axios, { Axios } from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { ITask, TodoContextType } from '../types';

type Props = {
  addTask: (t: Omit<ITask, 'id'>) => void;
  newTask: string;
  setNewTask: (s: string) => void;
};

const AddTaskForm: React.FC<Props> = ({ addTask, newTask, setNewTask }) => {
  return (
    <>
      <div className='row'>
        <div className='col'>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className='form-control from-control-lg'
          />
        </div>
        <div className='col-auto'>
          <button
            onClick={(e) =>
              addTask({
                name: newTask,
                isCompleted: false,
              })
            }
            className='btn btn-lg btn-success'
          >
            Add Task
          </button>
        </div>
      </div>
      <br />
    </>
  );
};

export default AddTaskForm;
