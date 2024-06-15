// TasksList.js

import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const TasksList = ({ tasks, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(null);
  const [editText, setEditText] = useState('');
  const [editDescription, setEditDescription] = useState('');

  const handleEditClick = (index, task) => {
    setIsEditing(index);
    setEditText(task.text);
    setEditDescription(task.description);
  };

  const handleSaveClick = (index) => {
    updateTask(index, editText, editDescription);
    setIsEditing(null);
  };

  return (
    <ul className="tasks-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="task-input"
              />
              <textarea
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
                className="task-description"
              />
              <button onClick={() => handleSaveClick(index)} className="save-button">Save</button>
              <button onClick={() => setIsEditing(null)} className="cancel-button">Cancel</button>
            </>
          ) : (
            <>
              <div className="task-details">
                <span className="task-text">{task.text}</span>
                <span className="task-description">{task.description}</span>
              </div>
              <button onClick={() => handleEditClick(index, task)} className="edit-button">Edit</button>
              <button onClick={() => deleteTask(index)} className="delete-button">Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
