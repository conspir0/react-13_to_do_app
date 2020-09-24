import React, { Component } from 'react';
import ButtonSubmit from '../ButtomSubmit/ButtonSubmit';
import FormLabel from './../FormLabel/FormLabel'

class ContainerForm extends Component {
  state = {}

  render() {
    return (
      <div
        className="result-container result-container--form"
      >
        <form>
          <FormLabel
            type="text"
            className="input-text"
            title="Task to do"
          />
          <FormLabel
            type="date"
            className="input-text"
            title="Date"
          />
          <FormLabel
            type="checkbox"
            title_2="priorytet"
          />
          <ButtonSubmit />
        </form>
      </div>
    );
  }
}

export default ContainerForm;