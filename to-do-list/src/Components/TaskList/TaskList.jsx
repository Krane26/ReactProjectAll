import React from 'react';

const TaskList = ({ tasks, onDelete, onToggleComplete, onEdit }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          <span
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.name} - {task.description} - {task.dueDate}
          </span>
          <button onClick={() => onEdit(task)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
          <button onClick={() => onToggleComplete(task.id)}>
            {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
