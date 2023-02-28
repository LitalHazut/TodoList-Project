import { useState, useEffect } from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './containers/display';
import './App.css';
import { TodoContextProvider } from './context/todoContext';
import { ITask } from './types';
import { AppTitle } from './components/appTitle/appTitle';

function App() {
  return (
    <TodoContextProvider>
      <div className='container App'>
        <AppTitle />
        <Display />
      </div>
    </TodoContextProvider>
  );
}

export default App;
