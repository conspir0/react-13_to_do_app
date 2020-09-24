import React, { Component } from 'react';
import ContainerForm from '../ContainerForm/ContainerForm';
import ContainerListDone from '../ContainerListDone/ContainerListDone';
import ContainerListToDo from '../ContainerListToDo/ContainerListToDo';
import './App.css';

class App extends Component {
  state = {
    tasks: [
      { id: 1, title: 'Title 1', text: 'lolo', date: '2018-01-10', finishDate: '', important: true, active: true },
      { id: 2, title: 'Title 2', text: 'lolo', date: '2019-02-11', finishDate: '', important: true, active: true },
      { id: 3, title: 'Title 3', text: 'lolo', date: '2020-03-12', finishDate: '', important: false, active: true }
    ]
  }

  handleAddTask = (e, task) => {
    e.preventDefault();

    const randomId = Math.random().toString(36).substr(2, 9);
    task.id = randomId;
    task.active = true;

    this.setState({
      tasks: [...this.state.tasks, task]
    })
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
