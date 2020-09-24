import React from 'react';

const FormLabel = ({ type, name, className, title, title_2, important, inputValue, inputEvent }) => {
  return (
    <label>
      {title}
      <input
        type={type}
        name={name}
        checked={important}
        value={inputValue}
        className={className}
        onChange={(e) => inputEvent(e)}
      />
      {title_2}
    </label>
  );
}

export default FormLabel;