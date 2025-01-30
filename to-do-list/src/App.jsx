import React, { useState, useEffect } from 'react';
import TaskList from './Components/TaskList/TaskList';
import TaskForm from './Components/TaskForm/TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleSaveTask = (task) => {
    if (task.id) {
      setTasks(tasks.map(t => t.id === task.id ? task : t));
    } else {
      setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    }
    setEditingTask(null); 
  };

  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== taskId));
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskForm task={editingTask} onSave={handleSaveTask} />
      
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onToggleComplete={handleToggleComplete}
        onEdit={setEditingTask}
      />
    </div>
  );
};

export default App;
