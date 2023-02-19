import { useState, useEffect } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './containers/display';
import './App.css';
import axios from 'axios';
import { TodoContextProvider } from './context/todoContext';
import { ITask } from './types';

function App() {
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3001/api/get')
  //     .then((data) => {
  //       console.log(data);
  //       setToDo(data.data.tasks);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //       return e;
  //     });
  // }, []);

  // const addTaskToDb = () => {
  //   axios
  //     .post('http://localhost:3001/api/post', {
  //       name: newTask,
  //     })
  //     .then(() => {
  //       console.log('success');
  //     });
  // };

  return (
    <TodoContextProvider>
      <div className='container App'>
        <br></br>
        <h2>To Do List App</h2>
        <br></br>
        <Display />
      </div>
    </TodoContextProvider>
  );
}

export default App;
