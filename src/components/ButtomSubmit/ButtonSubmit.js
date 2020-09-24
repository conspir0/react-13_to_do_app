import React from 'react';

const ButtonSubmit = ({ addTask, task }) => {
  return (
    <button
      className="button"
      onClick={(e) => addTask(e, task)}
    >
      Add
    </button>
  );
}

export default ButtonSubmit;