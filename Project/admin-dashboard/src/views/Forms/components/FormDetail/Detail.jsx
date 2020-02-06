import React from 'react';

export default function Detail({ form }) {
  const { title, createdAt, fields } = form;
  return (
    <>
      <h2>Title: {title}</h2>
      <p>Create Date: {new Date(createdAt).toLocaleString()}</p>

      <h4>Fields:</h4>
      <ul>
        {fields.map(field => {
          return <li key={field.name}><b>{field.title}</b>  <small><i>{field.type}</i></small></li>
        })}
      </ul>
    </>
  );
}