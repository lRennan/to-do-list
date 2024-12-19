import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() && !tasks.includes(task)) {
      setTasks([...tasks, { id: Date.now(), name: task }]); // Using unique id
      setTask('');
    }
  };

  const removeTask = (id) => {
    if (window.confirm('Are you sure you want to remove this task?')) { // Confirmation dialog
      setTasks(tasks.filter((task) => task.id !== id));
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id} className="task-item">
            <span>{t.name}</span>
            <button onClick={() => removeTask(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
