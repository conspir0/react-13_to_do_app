import React from 'react';
import TaskDone from '../TaskDone/TaskDone';

const ContainerListDone = ({ tasks, deleteTask }) => {
  const doneTasks = tasks.filter(task => task.active !== true);
  const taskList = doneTasks.map(task => {
    return (
      <TaskDone
        key={task.id}
        id={task.id}
        title={task.title}
        text={task.text}
        finishDate={task.finishDate}
        important={task.important}
        deleteTask={deleteTask}
      />
    )
  })
  return (
    <div className="result-container">
      <h2 className="title-container">
        Done
      </h2>
      {taskList}
    </div>
  )
}

export default ContainerListDone;