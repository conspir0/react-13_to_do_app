import React from 'react';
import TaskActive from '../TaskActive/TaskActive';

const ContainerListToDo = ({ tasks, doneTask, deleteTask }) => {
  const activeTasks = tasks.filter(task => task.active === true);
  const taskList = activeTasks.map(task => {
    return (
      <TaskActive
        key={task.id}
        id={task.id}
        title={task.title}
        text={task.text}
        date={task.date}
        important={task.important}
        doneTask={doneTask}
        deleteTask={deleteTask}
      />
    )
  })

  return (
    <div className="result-container">
      <h2 className="title-container">
        TO DO
      </h2>
      {taskList}
    </div>
  );
}

export default ContainerListToDo;