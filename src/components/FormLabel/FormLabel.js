import React from 'react';

const FormLabel = ({ type, className, title, title_2 }) => {
  return (
    <label>
      {title}
      <input
        type={type}
        className={className}
      />
      {title_2}
    </label>
  );
}

export default FormLabel;