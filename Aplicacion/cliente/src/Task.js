import React from 'react';

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className="task">
      <span>{task.text}</span>
      <button onClick={onDelete}>Eliminar</button>
      <button onClick={onEdit}>Editar</button>
    </div>
  );
};

export default Task;
