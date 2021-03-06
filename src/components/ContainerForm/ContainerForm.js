import React, { Component } from 'react';
import ButtonSubmit from '../ButtomSubmit/ButtonSubmit';
import FormLabel from './../FormLabel/FormLabel'

class ContainerForm extends Component {
  state = {
    title: '',
    text: '',
    date: '',
    important: false,
    active: true,
  }

  handleInput = (e) => {
    const { type, checked, name, value } = e.target;

    if (type === 'checkbox') {
      this.setState({
        important: checked
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    const { title, text, date } = this.state

    if (title && text && date) {
      const task = this.props.addTask(this.state);
      task && this.setState({ title: '', text: '', date: '', important: false })
    } else {
      alert('Wrong validation!')
    }
  }

  render() {
    const { handleInput, handleClick } = this;
    const { title, text, date, important } = this.state;

    return (
      <div
        className="result-container result-container--form"
      >
        <form>
          <FormLabel
            type="text"
            name="title"
            className="input-text"
            title="Task title"
            inputValue={title}
            inputEvent={handleInput}
          />
          <FormLabel
            type="text"
            name="text"
            className="input-text"
            title="Task to do"
            inputValue={text}
            inputEvent={handleInput}
          />
          <FormLabel
            type="date"
            name="date"
            className="input-text"
            title="Date"
            inputValue={date}
            inputEvent={handleInput}
          />
          <FormLabel
            type="checkbox"
            title_2="priorytet"
            important={important}
            inputEvent={handleInput}
          />
          <ButtonSubmit addTask={handleClick} task={this.state} />
        </form>
      </div>
    );
  }
}

export default ContainerForm;