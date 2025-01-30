import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSave }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (task) {
      setName(task.name);
      setDescription(task.description);
      setDueDate(task.dueDate); 
    } else {
      setName('');
      setDescription('');
      setDueDate('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      onSave({ ...task, name, description, dueDate });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">{task ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
