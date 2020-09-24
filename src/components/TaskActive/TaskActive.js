import React from 'react';

const TaskActive = ({ id, title, text, date, important, doneTask, deleteTask }) => {
  return (
    <div className={`task-container ${important && `important`}`}>
      <p>Estimation date: {date}</p>
      <h2>{title}</h2>
      <p>{text}</p>
      <div className="button-container">
        <button
          className="button"
          onClick={() => doneTask(id)}
        >
          Done
          </button>
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

export default TaskActive;