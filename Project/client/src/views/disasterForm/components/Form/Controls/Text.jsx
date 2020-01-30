import React from 'react';
import { TextField } from '@material-ui/core';

export default function TextFormControl(props) {
  const { name, title, required, form, setForm, isNumber } = props;

  const handleChange = (event) => {
    const newVal = event.target.value;
    setForm({
      ...form,
      [name]: newVal
    })
  }

  return (
    <TextField
      id={name}
      label={title}
      required={required}
      value={form[name]}
      onChange={handleChange}
      type={isNumber ? "number" : "text"} />
  );
}