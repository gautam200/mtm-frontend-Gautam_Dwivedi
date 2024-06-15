// TaskInput.js

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const TaskInput = ({ addTask }) => {
  const [taskText, setTaskText] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') return; // Simple validation

    addTask({ text: taskText, description: taskDescription });
    setTaskText('');
    setTaskDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="task-input"
      />
      <textarea
        placeholder="Enter task description..."
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="task-description"
      />
      <button type="submit" className="add-button">Add Task</button>
    </form>
  );
};

export default TaskInput;
