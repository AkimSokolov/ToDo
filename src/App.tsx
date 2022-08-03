import React from 'react';
import { useSelector } from 'react-redux';
import { SortModeBar } from './components/SortModeBar/SortModeBar';
import { ToDoCreateForm } from './components/ToDoCreateForm/ToDoCreateForm';
import { ToDoHeader } from './components/ToDoHeader/ToDoHeader';
import { ToDoList } from './components/ToDoList/ToDoList';
import "./styles/App.css"

function App() {
  
  return (
    <div className="App">
      <SortModeBar />
      <ToDoHeader />
      <ToDoCreateForm />
      <ToDoList />
    </div>
  );
}

export default App;
