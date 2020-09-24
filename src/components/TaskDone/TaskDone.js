import React from 'react';

const TaskDone = ({ id, title, text, finishDate, important, deleteTask }) => {
  return (
    <div className={`task-container ${important && `important`}`}>
      <p>Done: {finishDate}</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="button-container">
        <button
          className="button"
          onClick={() => deleteTask(id)}
        >
          Delete
          </button>
      </div>
    </div>
  );
}

export default TaskDone;