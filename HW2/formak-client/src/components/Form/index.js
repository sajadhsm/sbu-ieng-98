import React, { useState } from 'react';
import sampleFormData from '../../_dataSampleForm';
import FieldOfType from './FieldOfType'

function Form() {
  const { title, fields } = sampleFormData;
  const [state, setState] = useState(() => {
    return fields.reduce((acc, cur) => {
      acc[cur.name] = ""
      return acc
    }, {});
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>{title}</h1>
      {fields.map(field => (
        <div key={field.title}>
          {renderField(field, state[field.name], handleFieldChange)}
        </div>
      ))}

      <button type="submit">Submit</button>
    </form>
  )
}

function renderField(field, value, handleChange) {
  return (
    <>
      <label htmlFor={field.name}>{field.title}</label>
      <FieldOfType
        field={field}
        value={value}
        handleChange={handleChange} />
    </>
  );
}

export default Form;