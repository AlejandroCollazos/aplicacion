import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;
