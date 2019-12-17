import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import FieldOfType from './FieldOfType';

import './index.css';

function Form() {
  const { id } = useParams();
  const [form, setForm] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/forms/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm({
          ...data.form,
          controls: data.form.fields.reduce((acc, cur) => {
            acc[cur.name] = ""
            return acc
          }, {})
        });
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // TODO: Validation
    fetch(`http://localhost:3001/forms/${id}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.controls)
    })
      .then(res => res.json())
      .then(console.log)
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      controls: {
        ...form.controls,
        [name]: value
      }
    })
  }

  if (!form) {
    return <p>Loading form...!</p>
  }

  return (
    <div className="container">
      <form className="form form--small" onSubmit={handleFormSubmit}>
        <h1 className="form__title">{form.title}</h1>
        {form.fields.map(field => (
          <div className="form__field" key={field.title}>
            {renderField(field, form.controls[field.name], handleFieldChange)}
          </div>
        ))}

        <button type="submit" className="form__submit-btn">Submit</button>
      </form>
    </div>
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