import React from 'react';

const TaskItem = ({ task, onDelete, onToggleComplete, onEdit }) => {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      <span onClick={() => onToggleComplete(task.id)}>{task.name}</span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
