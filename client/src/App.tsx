import { useState, useEffect } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './containers/display';
import './App.css';
import { TodoContextProvider } from './context/todoContext';
import { ITask } from './types';

function App() {
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
