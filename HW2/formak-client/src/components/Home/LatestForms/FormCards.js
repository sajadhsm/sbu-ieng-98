import React from 'react';
import { Link } from 'react-router-dom';

function FormCards({ forms }) {
  return (
    <div className="form-cards">
      {forms.map(({ id, title }) => (
        <Link className="form-card" key={id} to={`form/${id}`}>
          <h3>{title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default FormCards;