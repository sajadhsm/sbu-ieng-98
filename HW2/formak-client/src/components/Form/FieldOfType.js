import React from 'react';

function FieldOfType({ field, value, handleChange }) {
  const { type, name } = field;

  if (type === "Text") {
    if (field.options?.length) {
      return <select
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required={field.required}>
        {field.options.map(option => (
          <option key={option.label} value={option.value}>{option.label}</option>
        ))}
      </select>
    } else {
      return <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required={field.required} />
    }

  } else if (type === "Date") {
    return <input
      type="date"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      required={field.required} />

  } else if (type === "Number") {
    return <input
      type="number"
      id={name}
      name={name}
      value={value}
      onChange={handleChange}
      required={field.required} />

  } else if (type === "Location") {
    return <p>Showing a map maybe?</p>
  }
  return null;
}

export default FieldOfType;