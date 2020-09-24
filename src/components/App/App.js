import React, { Component } from 'react';
import ContainerForm from '../ContainerForm/ContainerForm';
import ContainerListDone from '../ContainerListDone/ContainerListDone';
import ContainerListToDo from '../ContainerListToDo/ContainerListToDo';
import './App.css';

class App extends Component {
  state = {
    tasks: []
  }

  randomId = () => {
    return Math.random().toString(36).substr(2, 9);
  }

  handleAddTask = (task) => {
    const { title, text, date, important, active } = task,
      newTask = {
        id: this.randomId(),
        title,
        text,
        date,
        important,
        active,
      }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    return true;
  }

  handleDeleteTask = (id) => {
    const taskList = this.state.tasks;
    const tasks = taskList.filter(task => task.id !== id)

    this.setState({ tasks })
  }

  handleDoneTask = (id) => {
    const date = new Date(),
      taskList = this.state.tasks,
      tasks = taskList.map(task => {
        if (task.id === id) {
          task.active = false;
          task.finishDate = date.toISOString().substring(0, 10);
        }

        return task;
      });

    this.setState({ tasks })
  }

  render() {
    const { handleAddTask, handleDoneTask, handleDeleteTask } = this,
      { tasks } = this.state;

    return (
      <div className="container">
        <ContainerForm
          addTask={handleAddTask}
        />
        <ContainerListToDo
          tasks={tasks}
          doneTask={handleDoneTask}
          deleteTask={handleDeleteTask}
        />
        <ContainerListDone
          tasks={tasks}
          deleteTask={handleDeleteTask}
        />
      </div>
    );
  }
}

export default App;
