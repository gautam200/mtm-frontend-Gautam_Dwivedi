// App.js

import React, { useState } from 'react';
import './App.css';
import TaskInput from './TaskInput';
import TasksList from './TasksList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ text, description }) => {
    const newTask = { text, description };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTask = (index, newText, newDescription) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].text = newText;
    updatedTasks[index].description = newDescription;
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1>Itinerary Planner</h1>
      <TaskInput addTask={addTask} />
      <TasksList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask} />
    </div>
  );
};

export default App;
